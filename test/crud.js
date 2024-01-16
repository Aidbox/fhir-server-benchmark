import { check } from "k6";
import { openKv } from "k6/x/kv";
import exec from 'k6/execution';
import ptResource from './seed/patient.js';
import { auth, base_url, normalize, make_id, take_id, get, post, put, del} from './utils.js';

const kv = openKv();

const stages = [{ duration: '30s', target: 300 },
                { duration: '1m', target: 300 },
                { duration: '30s', target: 500 },
                { duration: '30s', target: 300 },
                { duration: '1m', target: 300 },
                { duration: '30s', target: 0 },
                { duration: '30s', target: 0 }
               ];


const scenarios =  normalize({
    create: {
        stages: stages,
    },
    read: {
        stages: stages,
        dependsOn: "create"
    },
    update: {
        stages: stages,
        dependsOn: "read"
    },
    del_: {
        stages: stages,
        dependsOn: "update"
    },
    full: {
        stages: stages,
        dependsOn: "del_"
    },
});

export const options = {
    scenarios: scenarios,
    thresholds: {'http_req_duration': ['p(99)<10000']}
};


export function setup() {
    return {
        id_prefix: make_id(10),
        resource:  ptResource
    };
}


export function create({resource, id_prefix}) {
    const iteration = exec.scenario.iterationInInstance;
    const body = Object.assign({}, resource, { id: `${id_prefix[0]}-${iteration}` });
    const resp = post(`${base_url}/Patient`, JSON.stringify(body), auth);
    check(resp, { 'Created status': ({ status }) => status == 201 });
    kv.set('create-iteration', iteration);
};

export function read({resource, id_prefix}) {
    const id = take_id(id_prefix, kv);
    const params = Object.assign({}, auth, { tags: { name: `${base_url}/Patient/?`,
                                                     pathname: '/Patient/?'}});
    const resp = get(`${base_url}/Patient/${id}`, params);
    check(resp, { 'Read status': ({ status }) => status == 200 });
};

export function update({resource, id_prefix}) {
    const id = take_id(id_prefix, kv);
    const body = Object.assign({}, resource, {name: [{use: "official", text: make_id(10)}]});
    const resp = put(`${base_url}/Patient/${id}`,
                     JSON.stringify(body),
                     Object.assign({}, auth, { tags: { name: `${base_url}/Patient/?`,
                                                       pathname: '/Patient/?'} }));
    check(resp, { 'Update status': ({ status }) => status == 200 || status == 201});
};

export function del_({resource, id_prefix}) {
    const id = take_id(id_prefix, kv);
    const resp = del(`${base_url}/Patient/${id}`,
                     null,
                     Object.assign({}, auth, { tags: { name: `${base_url}/Patient/?`,
                                                       pathname: '/Patient/?'} }));
    check(resp, { 'Delete status': ({ status }) => status == 200 || status == 204 || status == 410 });
};

export function full({resource}) {
    const id = make_id(10);
    const body = Object.assign({}, resource, {id: id});

    const createdPatient = put(`${base_url}/Patient`, JSON.stringify(body), auth);
    check(createdPatient, { 'Created status': ({ status }) => status == 201 });

    const params = Object.assign({}, auth, { tags: { name: `${base_url}/Patient/?`,
                                                     pathname: '/Patient/?'} });

    const readPatient = get(`${base_url}/Patient/${id}`, params);
    check(readPatient, { 'Get status': ({ status }) => status == 200 });

    const updated = Object.assign({}, body, { gender: 'female' });
    const updatedPatient = put(`${base_url}/Patient/${id}`, JSON.stringify(updated), params);
    check(updatedPatient, { 'Update status': ({ status }) => status == 200 });

    const deletedPatient = del(`${base_url}/Patient/${id}`, null, params);
    check(deletedPatient, { 'Delete status': ({ status }) => status == 200 });
};
