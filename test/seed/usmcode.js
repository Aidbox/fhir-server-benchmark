export const Patient =
{
    "resourceType": "Patient",
    "id": "cancer-patient-eve-anyperson",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
        ]
    },
    "extension": [
        {
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "1002-5",
                        "display": "American Indian or Alaska Native"
                    }
                },
                {
                    "url": "text",
                    "valueString": "Lakota and Crow"
                }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
        },
        {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
            "valueCode": "F"
        }
    ],
    "identifier": [
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR",
                        "display": "Medical Record Number"
                    }
                ]
            },
            "system": "http://hospital.example.org",
            "value": "m456"
        }
    ],
    "name": [
        {
            "family": "Anyperson",
            "given": [
                "Eve",
                "A."
            ]
        }
    ],
    "gender": "female",
    "birthDate": "1955-05-20",
    "address": [
        {
            "line": [
                "456 Smith Lane"
            ],
            "city": "Anytown",
            "state": "MA",
            "postalCode": "12345",
            "country": "US"
        }
    ],
    "contact": [
        {
            "telecom": [
                {
                    "system": "phone",
                    "value": "999-999-9999",
                    "use": "home"
                },
                {
                    "system": "email",
                    "value": "eve.anyperson@example.com"
                }
            ]
        }
    ],
    "communication": [
        {
            "language": {
                "coding": [
                    {
                        "system": "urn:ietf:bcp:47",
                        "code": "en-US",
                        "display": "English (Region=United States)"
                    }
                ],
                "text": "English"
            }
        }
    ]
};

export const Condition =
{
    "resourceType": "Condition",
    "id": "primary-cancer-condition-breast",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-histology-morphology-behavior",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "77284006",
                        "display": "Lobular carcinoma in situ (morphologic abnormality)"
                    }
                ]
            }
        }
    ],
    "clinicalStatus": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                "code": "active",
                "display": "Active"
            }
        ]
    },
    "verificationStatus": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                "code": "confirmed",
                "display": "Confirmed"
            }
        ]
    },
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                    "code": "problem-list-item"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "363346000",
                "display": "Malignant neoplastic disease (disorder)"
            }
        ]
    },
    "bodySite": [
        {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "80248007",
                    "display": "Left breast structure (body structure)"
                }
            ]
        }
    ],
    "subject": {
        "display": "Patient/cancer-patient-eve-anyperson"
    },
    "onsetDateTime": "2019-04-01",
    "asserter": {
        "display": "Practitioner/us-core-practitioner-kyle-anydoc"
    },
    "stage": [
        {
            "summary": {
                "coding": [
                    {
                        "system": "http://cancerstaging.org",
                        "code": "3C",
                        "display": "IIIC"
                    }
                ]
            },
            "assessment": [
                {
                    "display": "Observation/tnm-clinical-stage-group-3c"
                }
            ]
        }
    ]
};

export const Condition2 =
{
    "resourceType": "Condition",
    "id": "secondary-cancer-condition-brain-mets",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-secondary-cancer-condition"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/condition-related",
            "valueReference": {
                "display": "Condition/primary-cancer-condition-nsclc"
            }
        }
    ],
    "clinicalStatus": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
                "code": "active",
                "display": "Active"
            }
        ]
    },
    "verificationStatus": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
                "code": "confirmed",
                "display": "Confirmed"
            }
        ]
    },
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/condition-category",
                    "code": "problem-list-item"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "94225005",
                "display": "Secondary malignant neoplasm of brain"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-john-anyperson"
    },
    "onsetDateTime": "2019-05-01",
    "asserter": {
        "display": "Practitioner/us-core-practitioner-kyle-anydoc"
    }
};

export const Observation =
{
    "resourceType": "Observation",
    "id": "tnm-clinical-stage-group-3c",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-stage-group"
        ]
    },
    "status": "final",
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "21908-9",
                "display": "Stage group.clinical Cancer"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-john-anyperson"
    },
    "effectiveDateTime": "2019-04-01",
    "valueCodeableConcept": {
        "coding": [
            {
                "system": "http://cancerstaging.org",
                "code": "3C",
                "display": "IIIC"
            }
        ]
    },
    "method": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "897275008",
                "display": "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
            }
        ]
    },
    "hasMember": [
        {
            "display": "Observation/tnm-clinical-primary-tumor-category-cT3"
        },
        {
            "display": "Observation/tnm-clinical-regional-nodes-category-cN3"
        },
        {
            "display": "Observation/tnm-clinical-distant-metastases-category-cM0"
        }
    ]
};

export const Observation2 =
{
    "resourceType": "Observation",
    "id": "tnm-clinical-distant-metastases-category-jenny-m",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tnm-distant-metastases-category"
        ]
    },
    "status": "final",
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "21907-1",
                "display": "Distant metastases.clinical [Class] Cancer"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-jenny-m"
    },
    "effectiveDateTime": "2018-03-16",
    "valueCodeableConcept": {
        "coding": [
            {
                "system": "http://cancerstaging.org",
                "code": "cM0"
            }
        ]
    },
    "method": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "897275008",
                "display": "American Joint Commission on Cancer, Cancer Staging Manual, 8th edition neoplasm staging system (tumor staging)"
            }
        ]
    }
};

export const Procedure =
{
    "resourceType": "Procedure",
    "id": "cancer-related-surgical-procedure-lobectomy",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "373808002",
                        "display": "Curative - procedure intent"
                    }
                ]
            }
        }
    ],
    "status": "completed",
    "category": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "387713003"
            }
        ]
    },
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "359615001",
                "display": "Partial lobectomy of lung (procedure)"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-john-anyperson"
    },
    "performedDateTime": "2019-03-01",
    "asserter": {
        "display": "Practitioner/us-core-practitioner-kyle-anydoc"
    },
    "reasonReference": [
        {
            "display": "Condition/primary-cancer-condition-nsclc"
        }
    ],
    "bodySite": [
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-laterality-qualifier",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "7771000",
                                "display": "Left (qualifier value)"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-body-location-qualifier",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "261122009",
                                "display": "Lower (qualifier value)"
                            }
                        ]
                    }
                }
            ],
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "31094006",
                    "display": "Structure of lobe of lung (body structure)"
                }
            ]
        }
    ]
};

export const Procedure2 =
{
    "resourceType": "Procedure",
    "id": "cancer-related-surgical-procedure-lobectomy",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-surgical-procedure"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "373808002",
                        "display": "Curative - procedure intent"
                    }
                ]
            }
        }
    ],
    "status": "completed",
    "category": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "387713003"
            }
        ]
    },
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "359615001",
                "display": "Partial lobectomy of lung (procedure)"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-john-anyperson"
    },
    "performedDateTime": "2019-03-01",
    "asserter": {
        "display": "Practitioner/us-core-practitioner-kyle-anydoc"
    },
    "reasonReference": [
        {
            "display": "Condition/primary-cancer-condition-nsclc"
        }
    ],
    "bodySite": [
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-laterality-qualifier",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "7771000",
                                "display": "Left (qualifier value)"
                            }
                        ]
                    }
                },
                {
                    "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-body-location-qualifier",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://snomed.info/sct",
                                "code": "261122009",
                                "display": "Lower (qualifier value)"
                            }
                        ]
                    }
                }
            ],
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "31094006",
                    "display": "Structure of lobe of lung (body structure)"
                }
            ]
        }
    ]
};

export const Patient2 =
{
    "resourceType": "Patient",
    "id": "cancer-patient-eve-anyperson",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"
        ]
    },
    "extension": [
        {
            "extension": [
                {
                    "url": "ombCategory",
                    "valueCoding": {
                        "system": "urn:oid:2.16.840.1.113883.6.238",
                        "code": "1002-5",
                        "display": "American Indian or Alaska Native"
                    }
                },
                {
                    "url": "text",
                    "valueString": "Lakota and Crow"
                }
            ],
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
        },
        {
            "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
            "valueCode": "F"
        }
    ],
    "identifier": [
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v2-0203",
                        "code": "MR",
                        "display": "Medical Record Number"
                    }
                ]
            },
            "system": "http://hospital.example.org",
            "value": "m456"
        }
    ],
    "name": [
        {
            "family": "Anyperson",
            "given": [
                "Eve",
                "A."
            ]
        }
    ],
    "gender": "female",
    "birthDate": "1955-05-20",
    "address": [
        {
            "line": [
                "456 Smith Lane"
            ],
            "city": "Anytown",
            "state": "MA",
            "postalCode": "12345",
            "country": "US"
        }
    ],
    "contact": [
        {
            "telecom": [
                {
                    "system": "phone",
                    "value": "999-999-9999",
                    "use": "home"
                },
                {
                    "system": "email",
                    "value": "eve.anyperson@example.com"
                }
            ]
        }
    ],
    "communication": [
        {
            "language": {
                "coding": [
                    {
                        "system": "urn:ietf:bcp:47",
                        "code": "en-US",
                        "display": "English (Region=United States)"
                    }
                ],
                "text": "English"
            }
        }
    ]
};

export const DiagnosticReport =
{
    "resourceType": "DiagnosticReport",
    "id": "genomics-report-jenny-m",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomics-report"
        ]
    },
    "status": "final",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                    "code": "LAB"
                }
            ]
        },
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
                    "code": "GE"
                }
            ]
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://loinc.org",
                "code": "81247-9"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-jenny-m"
    },
    "effectiveDateTime": "2018-03-15",
    "issued": "2020-03-15T00:00:01+00:00",
    "specimen": [
        {
            "display": "Specimen/genomic-specimen-left-breast-jenny-m"
        }
    ],
    "result": [
        {
            "display": "Observation/genomic-variant-jenny-m"
        },
        {
            "display": "Observation/genomic-region-studied-jenny-m"
        }
    ]
};

export const Specimen =
{
    "resourceType": "Specimen",
    "id": "genomic-specimen-left-breast-jenny-m",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen"
        ]
    },
    "status": "available",
    "type": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v2-0487",
                "code": "TISS"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-jenny-m"
    },
    "collection": {
        "collector": {
            "display": "Practitioner/us-core-practitioner-owen-oncologist"
        },
        "bodySite": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "80248007",
                    "display": "Left breast structure (body structure)"
                }
            ]
        }
    },
    "processing": [
        {
            "timeDateTime": "2018-03-06"
        }
    ]
};

export const MedicationRequest =
{
    "resourceType": "MedicationRequest",
    "id": "cancer-related-medication-request-cyclophosphamide-jenny-m",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-request"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "373808002",
                        "display": "Curative - procedure intent (qualifier value)"
                    }
                ]
            }
        }
    ],
    "status": "active",
    "intent": "order",
    "category": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                    "code": "outpatient"
                }
            ]
        }
    ],
    "medicationCodeableConcept": {
        "coding": [
            {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "3002",
                "display": "cyclophosphamide"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-jenny-m"
    },
    "authoredOn": "2018-04-12",
    "requester": {
        "display": "Practitioner/us-core-practitioner-owen-oncologist"
    },
    "reasonReference": [
        {
            "display": "Condition/primary-cancer-condition-jenny-m"
        }
    ],
    "dosageInstruction": [
        {
            "text": "cyclophosphamide (600 mg/m² IV), 932.59mg",
            "timing": {
                "repeat": {
                    "boundsPeriod": {
                        "start": "2018-04-01"
                    }
                }
            },
            "route": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "47625008",
                        "display": "Intravenous route (qualifier value)"
                    }
                ]
            },
            "doseAndRate": [
                {
                    "doseQuantity": {
                        "value": 932.59,
                        "unit": "mg",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg"
                    }
                }
            ],
            "maxDosePerPeriod": {
                "numerator": {
                    "value": 1
                },
                "denominator": {
                    "value": 3,
                    "unit": "week",
                    "system": "http://unitsofmeasure.org",
                    "code": "wk"
                }
            }
        }
    ]
};

export const MedicationAdministration =
{
    "resourceType": "MedicationAdministration",
    "id": "cancer-related-medication-admin-cyclophosphamide-jenny-m",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-administration"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-procedure-intent",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://snomed.info/sct",
                        "code": "373808002",
                        "display": "Curative - procedure intent (qualifier value)"
                    }
                ]
            }
        }
    ],
    "status": "completed",
    "category": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/medicationrequest-category",
                "code": "outpatient"
            }
        ]
    },
    "medicationCodeableConcept": {
        "coding": [
            {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "3002",
                "display": "cyclophosphamide"
            }
        ]
    },
    "subject": {
        "display": "Patient/cancer-patient-jenny-m"
    },
    "effectiveDateTime": "2018-04-22",
    "performer": [
        {
            "actor": {
                "display": "Practitioner/us-core-practitioner-nancy-oncology-nurse"
            }
        }
    ],
    "reasonReference": [
        {
            "display": "Condition/primary-cancer-condition-jenny-m"
        }
    ],
    "note": [
        {
            "authorReference": {
                "display": "Practitioner/us-core-practitioner-nancy-oncology-nurse"
            },
            "time": "2018-04-22",
            "text": "cyclophosphamide (60 mg/m² IV), 932.59 mg in 50 ml 0.9% normal saline administered by continuous infusion. Patient tolerated infusion without side effects."
        }
    ],
    "dosage": {
        "route": {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "47625008",
                    "display": "Intravenous route (qualifier value)"
                }
            ]
        },
        "dose": {
            "value": 932.59,
            "unit": "mg",
            "system": "http://unitsofmeasure.org",
            "code": "mg"
        }
    }
};

export const BodyStructure =
{
    "resourceType": "BodyStructure",
    "id": "tumor-lobular-carcinoma-left-breast",
    "meta": {
        "profile": [
            "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-related-condition",
            "valueReference": {
                "display": "Condition/primary-cancer-condition-breast"
            }
        }
    ],
    "identifier": [
        {
            "use": "usual",
            "type": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/resource-types",
                        "code": "BodyStructure"
                    }
                ]
            },
            "system": "http://radiology.hospital.example.org",
            "value": "Tumor 1234"
        }
    ],
    "location": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "80248007",
                "display": "Left breast structure (body structure)"
            }
        ]
    },
    "patient": {
        "display": "Patient/cancer-patient-eve-anyperson"
    }
};