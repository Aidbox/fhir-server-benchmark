export const Organization =
{
    "resourceType": "Organization",
    "id": "ConnHIE",
    "meta": {
        "lastUpdated": "2020-07-07T13:26:22.0314215+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Organization"
        ]
    },
    "language": "en-US",
    "active": true,
    "type": [
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/OrgTypeCS",
                    "code": "atyprv",
                    "display": "Atypical Provider"
                }
            ]
        }
    ],
    "name": "Connecticut HIE",
    "telecom": [
        {
            "system": "phone",
            "value": "(111)-222-3333",
            "rank": 2
        },
        {
            "system": "url",
            "value": "https://www.connhie.com",
            "rank": 1
        }
    ],
    "address": [
        {
            "line": [
                "123 Main Street"
            ],
            "city": "Anytown",
            "state": "CT",
            "postalCode": "00014-1234"
        }
    ],
    "contact": [
        {
            "telecom": [
                {
                    "system": "phone",
                    "value": "(111)-222-3333",
                    "rank": 1
                }
            ]
        }
    ]
};

export const Location =
{
    "resourceType": "Location",
    "id": "HospLoc1",
    "meta": {
        "lastUpdated": "2020-07-07T13:26:22.0314215+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Location"
        ]
    },
    "language": "en-US",
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS",
                        "code": "adacomp"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/accessibility",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/AccessibilityCS",
                        "code": "pubtrans"
                    }
                ]
            }
        }
    ],
    "status": "active",
    "name": "Hartford Hospital Location 1",
    "type": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
                    "code": "HOSP"
                }
            ]
        }
    ],
    "telecom": [
        {
            "extension": [
                {
                    "extension": [
                        {
                            "url": "daysOfWeek",
                            "valueCode": "mon"
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "tue"
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "wed"
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "thu"
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "fri"
                        },
                        {
                            "url": "allDay",
                            "valueBoolean": true
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "sat"
                        },
                        {
                            "url": "daysOfWeek",
                            "valueCode": "sun"
                        }
                    ],
                    "url": "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/contactpoint-availabletime"
                }
            ],
            "system": "phone",
            "value": "(111)-222-3333",
            "rank": 2
        },
        {
            "system": "url",
            "value": "https://www.hgh.com",
            "rank": 1
        }
    ],
    "address": {
        "line": [
            "456 Main Street"
        ],
        "city": "Anytown",
        "state": "CT",
        "postalCode": "00014-1234"
    },
    "position": {
        "longitude": 3,
        "latitude": 15
    },
    "managingOrganization": {
        "display": "Organization/Hospital"
    },
    "hoursOfOperation": [
        {
            "daysOfWeek": [
                "mon",
                "tue",
                "wed",
                "thu",
                "fri",
                "sat",
                "sun"
            ],
            "allDay": true
        }
    ]
};

export const Endpoint =
{
    "resourceType": "Endpoint",
    "id": "AcmeOfCTPortalEndpoint",
    "meta": {
        "lastUpdated": "2020-07-07T13:26:22.0314215+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/plannet-Endpoint"
        ]
    },
    "language": "en-US",
    "text": {
        "status": "extensions",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en-US\" lang=\"en-US\"><p><b>Generated Narrative</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource \"AcmeOfCTPortalEndpoint\" Updated \"2020-07-07 01:26:22+0000\"  (Language \"en-US\") </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-plannet-Endpoint.html\">Plan-Net Endpoint</a></p></div><blockquote><p><b>Endpoint Usecase</b></p><p><b>value</b>: healthcare operations <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"http://terminology.hl7.org/3.1.0/CodeSystem-v3-ActReason.html\">ActReason</a>#HOPERAT)</span></p></blockquote><p><b>status</b>: active</p><p><b>connectionType</b>: REST (not FHIR) (Details: http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointConnectionTypeCS code rest-non-fhir = 'REST (not FHIR)', stated as 'null')</p><p><b>name</b>: Endpoint for Acme of CT Portal</p><p><b>payloadType</b>: Not Applicable <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-EndpointPayloadTypeCS.html\">Endpoint Payload Types</a>#NA)</span></p><p><b>address</b>: <a href=\"https://urlofportal.acmect.com\">https://urlofportal.acmect.com</a></p></div>"
    },
    "extension": [
        {
            "extension": [
                {
                    "url": "type",
                    "valueCodeableConcept": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/v3-ActReason",
                                "code": "HOPERAT"
                            }
                        ]
                    }
                }
            ],
            "url": "http://hl7.org/fhir/us/davinci-pdex-plan-net/StructureDefinition/endpoint-usecase"
        }
    ],
    "status": "active",
    "connectionType": {
        "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointConnectionTypeCS",
        "code": "rest-non-fhir"
    },
    "name": "Endpoint for Acme of CT Portal",
    "payloadType": [
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/EndpointPayloadTypeCS",
                    "code": "NA"
                }
            ]
        }
    ],
    "address": "https://urlofportal.acmect.com"
};