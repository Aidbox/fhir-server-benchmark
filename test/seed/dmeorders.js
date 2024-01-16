export const Medication =
{
    "resourceType": "Medication",
    "id": "Insulin",
    "meta": {
        "versionId": "2",
        "lastUpdated": "2020-08-09T20:59:47.492+00:00",
        "source": "#GcsQmjM6mSkuNigA",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefintion/PAOX-Medication"
        ]
    },
    "code": {
        "coding": [
            {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "311036",
                "display": "Humulin R 100 UNT/ML Injectable Solution"
            }
        ],
        "text": "Human Insulin 100 Unt/ml"
    }
};

export const MedicationRequest =
{
    "resourceType": "MedicationRequest",
    "id": "Everolimus",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2020-08-09T21:54:42.920+00:00",
        "source": "#4mV4EXppBHotLAxd",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-medication-request"
        ]
    },
    "status": "active",
    "intent": "order",
    "medicationCodeableConcept": {
        "coding": [
            {
                "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
                "code": "977426",
                "display": "everolimus 0.25 MG"
            }
        ],
        "text": "everolimus 0.25 MG"
    },
    "subject": {
        "display": "Amy Shaw"
    },
    "authoredOn": "2020-08-05",
    "requester": {
        "display": "Ronald Bone, MD"
    },
    "dosageInstruction": [
        {
            "text": "0.75 bid",
            "timing": {
                "repeat": {
                    "boundsPeriod": {
                        "start": "2020-08-06"
                    }
                }
            }
        }
    ],
    "dispenseRequest": {
        "numberOfRepeatsAllowed": 1,
        "quantity": {
            "value": 50,
            "unit": "MG",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
        },
        "expectedSupplyDuration": {
            "value": 30,
            "unit": "days",
            "system": "http://unitsofmeasure.org",
            "code": "d"
        }
    }
};

export const DeviceRequest =
{
    "resourceType": "DeviceRequest",
    "id": "HomeO2",
    "meta": {
        "versionId": "3",
        "lastUpdated": "2020-08-10T02:58:37.162+00:00",
        "source": "#sfsM8Lq8cuRHM4E5",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-devicerequest"
        ]
    },
    "identifier": [
        {
            "value": "ip_request2"
        }
    ],
    "basedOn": [
        {
            "display": "Homecare - DM follow-up"
        }
    ],
    "priorRequest": [
        {
            "display": "CGM ambulatory"
        }
    ],
    "groupIdentifier": {
        "value": "ip_request1"
    },
    "status": "active",
    "intent": "order",
    "priority": "routine",
    "codeCodeableConcept": {
        "coding": [
            {
                "system": "http://www.ama-assn.org/go/cpt",
                "code": "E1392"
            }
        ],
        "text": "Portable Oxygen Concentrator, Rental"
    },
    "subject": {
        "display": "Patient/example1"
    },
    "encounter": {
        "display": "Ambulatory"
    },
    "occurrenceDateTime": "2020-08-05T09:33:27+07:00",
    "authoredOn": "2020-08-05T09:33:27+07:00",
    "requester": {
        "display": "Dr.Ronald Bone"
    },
    "reasonCode": [
        {
            "text": "COPD"
        }
    ],
    "reasonReference": [
        {
            "display": "COPD"
        }
    ],
    "supportingInfo": [
        {
            "display": "Previous results"
        }
    ],
    "note": [
        {
            "text": "patient is mobile -- needs portable O2 concentrator"
        }
    ],
    "relevantHistory": [
        {
            "display": "Request for specific device"
        }
    ]
};

export const DeviceDefinition =
{
    "resourceType": "DeviceDefinition",
    "id": "portableO2",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2020-08-09T22:57:45.943+00:00",
        "source": "#xzSh98W6iHgYw9sg",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-devicedefinition"
        ]
    },
    "note": [
        {
            "text": "It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)"
        }
    ]
};

export const ServiceRequest =
{
    "resourceType": "ServiceRequest",
    "id": "HomeHealth",
    "meta": {
        "versionId": "2",
        "lastUpdated": "2020-08-09T18:54:52.762+00:00",
        "source": "#sD6N012O4CFWcg2d",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-servicerequest"
        ]
    },
    "identifier": [
        {
            "value": "56ae5855-9f20-41e4-a59d-000e36d9d85a"
        }
    ],
    "status": "active",
    "intent": "order",
    "priority": "routine",
    "code": {
        "coding": [
            {
                "system": "http://snomed.info/sct",
                "code": "417153003",
                "display": "Referral for home nurse visit"
            }
        ]
    },
    "orderDetail": [
        {
            "coding": [
                {
                    "system": "http://snomed.info/sct",
                    "code": "416790000",
                    "display": "Referral for home physical therapy"
                },
                {
                    "system": "http://www.ama-assn.org/go/cpt",
                    "code": "97039",
                    "display": "Physical therapy treatment"
                },
                {
                    "system": "http://www.ama-assn.org/go/cpt",
                    "code": "92507",
                    "display": "Speech/hearing therapy"
                }
            ]
        }
    ],
    "subject": {
        "display": "Amy Shaw"
    },
    "encounter": {
        "display": "Encounter/Inpatient"
    },
    "occurrenceDateTime": "2020-05-08T09:33:27+07:00",
    "authoredOn": "2020-04-05",
    "requester": {
        "display": "Ronald Bone, MD"
    },
    "note": [
        {
            "text": "It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)"
        }
    ],
    "patientInstruction": "Test patient instruction"
};

export const Coverage =
{
    "resourceType": "Coverage",
    "id": "example",
    "meta": {
        "versionId": "8",
        "lastUpdated": "2020-08-09T23:27:39.427+00:00",
        "source": "#QPwVk0hKzW9hvHtn",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-coverage"
        ]
    },
    "identifier": [
        {
            "system": "http://benefitsinc.com/certificate",
            "value": "12345"
        }
    ],
    "status": "active",
    "type": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                "code": "EHCPOL",
                "display": "extended healthcare"
            }
        ]
    },
    "subscriber": {
        "display": "Patient/example1"
    },
    "beneficiary": {
        "display": "Patient/example1"
    },
    "dependent": "0",
    "relationship": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/subscriber-relationship",
                "code": "self"
            }
        ]
    },
    "period": {
        "start": "2011-05-23",
        "end": "2012-05-23"
    },
    "payor": [
        {
            "display": "Organization/Inpatient"
        }
    ],
    "class": [
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "group"
                    }
                ]
            },
            "value": "CB135",
            "name": "Corporate Baker's Inc. Local #35"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "subgroup"
                    }
                ]
            },
            "value": "123",
            "name": "Trainee Part-time Benefits"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "plan"
                    }
                ]
            },
            "value": "B37FC",
            "name": "Full Coverage: Medical, Dental, Pharmacy, Vision, EHC"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "subplan"
                    }
                ]
            },
            "value": "P7",
            "name": "Includes afterlife benefits"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "class"
                    }
                ]
            },
            "value": "SILVER",
            "name": "Silver: Family Plan spouse only"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "subclass"
                    }
                ]
            },
            "value": "Tier2",
            "name": "Low deductable, max $20 copay"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "sequence"
                    }
                ]
            },
            "value": "9"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "rxid"
                    }
                ]
            },
            "value": "MDF12345"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "rxbin"
                    }
                ]
            },
            "value": "987654"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "rxgroup"
                    }
                ]
            },
            "value": "M35PT"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "rxpcn"
                    }
                ]
            },
            "value": "234516"
        },
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/coverage-class",
                        "code": "sequence"
                    }
                ]
            },
            "value": "9"
        }
    ]
};

export const Provenance =
{
    "resourceType": "Provenance",
    "id": "Everolimus-Order",
    "meta": {
        "versionId": "1",
        "lastUpdated": "2020-08-09T22:02:17.773+00:00",
        "source": "#uEixCxt1QuB1Ubqw",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-provenance"
        ]
    },
    "target": [
        {
            "display": "MedicationRequest/Everolimus"
        }
    ],
    "recorded": "2015-08-27T08:39:24+10:00",
    "reason": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                    "code": "TREAT",
                    "display": "treatment"
                }
            ]
        }
    ],
    "activity": {
        "coding": [
            {
                "system": "http://terminology.hl7.org/CodeSystem/v3-DocumentCompletion",
                "code": "AU",
                "display": "authenticated"
            }
        ]
    },
    "agent": [
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/contractsignertypecodes",
                        "code": "VERF"
                    }
                ]
            },
            "who": {
                "identifier": {
                    "system": "urn:ietf:rfc:3986",
                    "value": "mailto://hhd@ssa.gov"
                }
            }
        }
    ],
    "signature": [
        {
            "type": [
                {
                    "system": "urn:iso-astm:E1762-95:2013",
                    "code": "1.2.840.10065.1.12.1.5",
                    "display": "Verification Signature"
                }
            ],
            "when": "2020-08-04T08:39:24+10:00",
            "who": {
                "display": "Practitioner/practitioner-1"
            },
            "targetFormat": "application/fhir+xml",
            "sigFormat": "application/signature+xml",
            "data": "Li4u"
        }
    ]
};

export const CodeSystem =
{
    "resourceType": "CodeSystem",
    "id": "PAOX-Message-Event",
    "meta": {
        "versionId": "3",
        "lastUpdated": "2020-07-29T02:36:28.894+00:00",
        "source": "#y7xwTB402GOU24M3"
    },
    "url": "http://hl7.org/fhir/us/dme-orders/CodeSystem/PAOX-Message-Event",
    "version": "0.2.2",
    "name": "PAOxMessageEvent",
    "title": "PAO Message Event Code System",
    "status": "draft",
    "date": "2022-05-23T14:13:52+00:00",
    "publisher": "HL7",
    "contact": [
        {
            "name": "HL7 International - Orders and Observations",
            "telecom": [
                {
                    "system": "url",
                    "value": "http://www.hl7.org/Special/committees/orders"
                }
            ]
        }
    ],
    "description": "Tbis code system is for the message event ",
    "jurisdiction": [
        {
            "coding": [
                {
                    "system": "urn:iso:std:iso:3166",
                    "code": "US"
                }
            ]
        }
    ],
    "content": "complete",
    "concept": [
        {
            "code": "InitialOrder",
            "display": "Initial Order",
            "definition": "Initial Order for Post-Acute services"
        },
        {
            "code": "OrderUpdate",
            "display": "Order Update",
            "definition": "urn:iso:std:iso:3166"
        },
        {
            "code": "OrderCancel",
            "display": "Order Cancel",
            "definition": "Cancel an order (may be declined if done)"
        },
        {
            "code": "OrderStatus",
            "display": "Order Status",
            "definition": "Order Status"
        }
    ]
};

export const Practitioner =
{
    "resourceType": "Practitioner",
    "id": "practitioner-1",
    "meta": {
        "versionId": "16",
        "lastUpdated": "2020-12-18T21:15:54.331+00:00",
        "source": "#MTH5QKf2nitQp5Dz"
    },
    "identifier": [
        {
            "system": "http://hl7.org.fhir/sid/us-npi",
            "value": "9941339108"
        },
        {
            "system": "http://www.acme.org/practitioners",
            "value": "25456"
        }
    ],
    "name": [
        {
            "family": "Bone",
            "given": [
                "Ronald"
            ],
            "prefix": [
                "Dr"
            ]
        }
    ],
    "address": [
        {
            "use": "home",
            "line": [
                "1003 Healthcare Drive"
            ],
            "city": "Amherst",
            "state": "MA",
            "postalCode": "01002"
        }
    ]
}

export const Task =
{
    "resourceType": "Task",
    "id": "Home-Health",
    "meta": {
        "versionId": "2",
        "lastUpdated": "2020-08-09T21:26:46.556+00:00",
        "source": "#a7VrNgseTKudChpI",
        "profile": [
            "http://hl7.org/fhir/us/dme-orders/StructureDefinition/PAOX-task"
        ]
    },
    "identifier": [
        {
            "value": "56ae5855-9f20-41e4-a59d-000e36d9d85a"
        }
    ],
    "basedOn": [
        {
            "display": "ServiceRequest/HomeHealth"
        }
    ],
    "status": "requested",
    "intent": "order",
    "code": {
        "coding": [
            {
                "system": "http://hl7.org/fhir/CodeSystem/task-code",
                "code": "fulfill"
            }
        ]
    },
    "description": "Proivde Home Health Services",
    "focus": {
        "display": "ServiceRequest/HomeHealth"
    },
    "for": {
        "display": "Patient/example1"
    },
    "authoredOn": "2020-07-30T20:07:15-06:00",
    "requester": {
        "display": "Organization/Inpatient"
    }
};
