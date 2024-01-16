import encoding from 'k6/encoding';
import http from "k6/http";
import { randomIntBetween, randomString } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js';
import { check } from 'k6';

export const base_url = __ENV.BASE_URL;
const auth_user = __ENV.AUTH_USER;
const auth_password = __ENV.AUTH_PASSWORD;
const encodedCredentials = encoding.b64encode(`${auth_user}:${auth_password}`);
export const auth = { headers: {"Accept-Encoding": "gzip",
                               "Conten-Type": "application/json",
                               "Authorization": `Basic ${encodedCredentials}`}};

function time_to_second (t) {
    let matcher = new RegExp(`[A-Za-z]`);
    let indicate = matcher.exec(t);
    let m = 1;
    switch (indicate[0]) {
        case 'h': m = 3600; break;
        case 'm': m = 60; break;
    }
    return parseInt(t) * m;
}

function stageTime (stages) {
    return stages.reduce((acc, stage) => {
        return acc + time_to_second(stage.duration);
    }, 0)
};


export function normalize (scenarios, [dependsOn, parent = {}] = [], acc = {}) {
    Object.entries(scenarios).map(([key, scenario]) => {
        if (scenario.dependsOn == dependsOn) {
            let parentTime = '';
            if ('duration' in parent) {
                parentTime = time_to_second(parent.duration)
            } else {
                parentTime = stageTime(parent.stages || []);
            }
            const startTime = parentTime + parseInt(parent.startTime || 0) + "s";
            Object.assign(scenario, {startTime: startTime,
                                     exec: key,
                                     executor: (scenario.executor || 'ramping-vus')})
            let result = Object.assign({}, scenario)
            delete result.dependsOn;
            Object.assign(acc, {[key]: result})
            normalize(scenarios, [key, scenario], acc)
        }
    });
    return acc ;
};

function url_2_tags(url, params) {
    const {pathname, search} = new URL(url);
    let tags = Object.assign({},
                             {pathname: pathname,
                              search: search.substring(1)},
                             params.tags );
    return Object.assign({}, params, {tags: tags});
};

export function get (url, params) {
    return http.get(url, url_2_tags(url, params));
}

export function post (url, body, params) {
    return http.post(url, body, url_2_tags(url, params));
}

export function put (url, body, params) {
    return http.put(url, body, url_2_tags(url, params));
}

export function del (url, body, params) {
    return http.del(url, body, url_2_tags(url, params));
}

export function is_200 (url, params) {
    const res = get(url, params);
    check(res, {'Status 200': ({status}) => status === 200});
}

export function is_valid (resource) {
    const res = post(`${base_url}/${resource.resourceType}/$validate`
                     , JSON.stringify(resource)
                     , auth);
    let cond = `${resource.meta.profile[0]} ${resource.resourceType}`;
    check(res.json('id'), {[cond]: (id) => id === 'allok'});
}

export function make_id  (length) {
    return randomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
}

export function take_id([prefix], kv_state, key) {
    const suffix = randomIntBetween(1, kv_state.get(key || "create-iteration"));
    return `${prefix}-${suffix}`;
}
