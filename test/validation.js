import { is_valid, normalize } from './utils.js';

import * as s_davinci        from './seed/davinci.js';
import * as s_uscore         from './seed/uscore.js';
import * as s_plannet        from './seed/plannet.js';
import * as s_dmeorders      from './seed/dmeorders.js';
import * as s_usdavincidrug  from './seed/usdavincidrug.js';
import * as s_usmcode        from './seed/usmcode.js';

const stages = [{ duration: '30s', target: 300 },
                { duration: '1m', target: 300 },
                { duration: '30s', target: 500 },
                { duration: '30s', target: 300 },
                { duration: '1m', target: 300 },
                { duration: '30s', target: 0 },
                { duration: '30s', target: 0 }, // pause
               ];


const scenarios = normalize({
    warm: {
        executor: 'constant-arrival-rate',
        rate: 1,
        timeUnit: '10s',
        duration: '1m',
        preAllocatedVUs: 1
    },
    davinci: {
        stages:  stages,
        dependsOn: 'warm'
    },
    uscore: {
        stages:  stages,
        dependsOn: 'davinci'
    },
    plannet: {
        stages:  stages,
        dependsOn: 'uscore'
    },
    dmeorders: {
        stages:  stages,
        dependsOn: 'plannet'
    },
    usdavincidrug: {
        stages:  stages,
        dependsOn: 'dmeorders'
    },
    usmcode: {
        stages:  stages,
        dependsOn: 'usdavincidrug'
    },
});

export const options = {
    scenarios: scenarios,
    thresholds: {'http_req_duration': ['p(99)<10000']}
};

export function setup() {
    return {};
}

export function warm ({}) {
    is_valid(s_davinci.Device);
    is_valid(s_uscore.Patient);
    is_valid(s_plannet.Organization);
    is_valid(s_dmeorders.Medication);
    is_valid(s_usdavincidrug.Basic);
};

export function davinci ({}) {
    is_valid(s_davinci.Coverage);
    is_valid(s_davinci.Device);
    // TODO: fix from Validation team ftr
    //is_valid(s_davinci.MedicationDispense);
    is_valid(s_davinci.Provenance);
};

export function uscore ({}) {
    is_valid(s_uscore.Patient);
    is_valid(s_uscore.AllergyIntolerance);
    is_valid(s_uscore.CarePlan);
    is_valid(s_uscore.CareTeam);
    is_valid(s_uscore.Condition);
    is_valid(s_uscore.ConditionProblems);
    is_valid(s_uscore.Device);
    is_valid(s_uscore.DiagnosticReportLaboratory);
    is_valid(s_uscore.DiagnosticReportCardiology);
    is_valid(s_uscore.DocumentReference);
    is_valid(s_uscore.Encounter);
    is_valid(s_uscore.Goal);
    is_valid(s_uscore.Immunization);
    is_valid(s_uscore.Location);
    is_valid(s_uscore.Medication);
    is_valid(s_uscore.MedicationRequest);
    is_valid(s_uscore.ObservationClinicalTest);
    is_valid(s_uscore.ObservationSexualOrientation);
    is_valid(s_uscore.ObservationBMI);
    is_valid(s_uscore.Organization);
    is_valid(s_uscore.Practitioner);
    is_valid(s_uscore.Procedure);
    is_valid(s_uscore.QuestionnaireResponse);
    is_valid(s_uscore.RelatedPerson);
    is_valid(s_uscore.ServiceRequest);
};

export function plannet ({}) {
    is_valid(s_plannet.Organization);
    is_valid(s_plannet.Location);
    is_valid(s_plannet.Endpoint);
};

export function dmeorders ({}) {
    is_valid(s_dmeorders.Medication);
    is_valid(s_dmeorders.MedicationRequest);
    is_valid(s_dmeorders.DeviceRequest);
    is_valid(s_dmeorders.DeviceDefinition);
    is_valid(s_dmeorders.ServiceRequest);
    is_valid(s_dmeorders.Coverage);
    is_valid(s_dmeorders.Provenance);
    //-- Invalid test - missing profile
    // is_valid(dmeorders.CodeSystem);
    // is_valid(dmeorders.Practitioner);
    is_valid(s_dmeorders.Task);
};

export function usdavincidrug ({}) {
    is_valid(s_usdavincidrug.Basic);
    is_valid(s_usdavincidrug.InsurancePlan);
    is_valid(s_usdavincidrug.InsurancePlan2);
    // TODO:  whait fix
    // is_valid(usdavincidrug.Location);
};

export function usmcode ({}) {
    is_valid(s_usmcode.Patient);
    // TODO: INVALID whait fix 
    // is_valid(usmcode.Condition);
    is_valid(s_usmcode.Condition2);
    is_valid(s_usmcode.Observation);
    is_valid(s_usmcode.Observation2);
    is_valid(s_usmcode.Procedure);
    is_valid(s_usmcode.Procedure2);
    is_valid(s_usmcode.Patient2);
    is_valid(s_usmcode.DiagnosticReport);
    is_valid(s_usmcode.Specimen);
    is_valid(s_usmcode.MedicationRequest);
    is_valid(s_usmcode.MedicationAdministration);
    is_valid(s_usmcode.BodyStructure);
};
