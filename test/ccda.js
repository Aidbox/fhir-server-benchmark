import http from "k6/http";
import { normalize, auth, boxUrl, make_id } from './utils.js';
import { check } from 'k6';
import { SharedArray } from 'k6/data';

const duration = '5m';

const scenarios = normalize({
    converting: {
        executor: 'constant-vus',
        vus: 100,
        duration: duration
    },
    validating: {
        executor: 'constant-vus',
        vus: 100,
        duration:  duration,
        dependsOn: 'converting'
    },
    persisting: {
        executor: 'constant-vus',
        vus: 100,
        duration: duration,
        dependsOn: 'validating'
    }
});

export const options = {
    scenarios: scenarios,
    thresholds: {'http_req_duration': ['p(99)<10000']}
};

const ccda = new SharedArray('ccda', function () {
    return [
        open('./seed/CCDA/Discharge Summary-rebeccaangles.xml'),
        open('./seed/CCDA/uscdiv1_Alice_Newman.xml'),
        open('./seed/CCDA/uscdiv1_CCD_HL7_41696662ENKI_240206302.xml')
    ];
});


const params = Object.assign({}, auth, {headers: Object.assign({"Content-Type": "application/cda+xml" },
                                                               auth.headers)});

function ccda_to_fhir (ccda_document) {
    const resp = http.post(`${boxUrl}/ccda/to-fhir`,
                           ccda_document,
                           params)
    check(resp, {'Convert Status 200': ({status}) => status === 200});
};

export function converting () {
    ccda_to_fhir(ccda[0]);
    ccda_to_fhir(ccda[1]);
    ccda_to_fhir(ccda[2]);
};

function ccda_validating (ccda_document) {
    const resp = http.post(`${boxUrl}/ccda/validate?method=schematron`,
                           ccda_document,
                           params)
    check(resp, {'Status 200': ({status}) => status === 200});
    //
    // if (resp.status != 200) {
    //     console.log(resp.body);
    // } else {
    //     console.log(resp.status);
    // }
    //check(resp.json('result'), {'Result:': (result) => result === 'true'});
};

export function validating () {
    ccda_validating(ccda[0]);
    ccda_validating(ccda[1]);
    ccda_validating(ccda[2]);
};

function ccda_persisting (ccda_document) {
    const resp = http.post(`${boxUrl}/ccda/persist`,
                           (ccda_document + `<!-- ${make_id(20)} --> `),
                           params);
    check(resp, {'Persist Status 200': ({status}) => status === 200});
};

export function persisting () {
    ccda_persisting(ccda[0]);
    ccda_persisting(ccda[1]);
    ccda_persisting(ccda[2]);
};
