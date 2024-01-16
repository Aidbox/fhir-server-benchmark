export const Basic =
{
    "resourceType": "Basic",
    "id": "FormularyItem-D1002-1000091",
    "meta": {
        "lastUpdated": "2021-08-22T18:36:03.000+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyItem"
        ]
    },
    "text": {
        "status": "extensions",
        "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative: Basic</b></p><div style=\"display: inline-block; background-color: #d9e0e7; padding: 6px; margin: 4px; border: 1px solid #8da1b4; border-radius: 5px; line-height: 60%\"><p style=\"margin-bottom: 0px\">Resource Basic \"FormularyItem-D1002-1000091\" Updated \"2021-08-22 06:36:03+0000\" </p><p style=\"margin-bottom: 0px\">Profile: <a href=\"StructureDefinition-usdf-FormularyItem.html\">Formulary Item</a></p></div><p><b>Formulary Reference</b>: <a href=\"InsurancePlan-FormularyD1002.html\">InsurancePlan/FormularyD1002</a> \"Sample Medicare Advantage Part D Formulary D1002\"</p><p><b>Availability Status</b>: active</p><p><b>Pharmacy Benefit Type</b>: 1 month in network retail <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE.html\">Codes for pharmacy benefit types</a>#1-month-in-retail)</span></p><p><b>Drug Tier ID</b>: Generic <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-DrugTierCS-TEMPORARY-TRIAL-USE.html\">Codes for medication drug tiers in health plans</a>#generic)</span></p><p><b>Availability Period</b>: 2021-01-01 --&gt; 2021-12-31</p><p><b>Pharmacy Benefit Type</b>: 1 month in network mail order <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE.html\">Codes for pharmacy benefit types</a>#1-month-in-mail)</span></p><p><b>Pharmacy Benefit Type</b>: 3 month in network retail <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE.html\">Codes for pharmacy benefit types</a>#3-month-in-retail)</span></p><p><b>Pharmacy Benefit Type</b>: 3 month in network mail order <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE.html\">Codes for pharmacy benefit types</a>#3-month-in-mail)</span></p><p><b>Prior Authorization</b>: false</p><p><b>Step Therapy Limit</b>: true</p><p><b>Step Therapy Limit New Starts Only</b>: true</p><p><b>Quantity Limit</b>: true</p><p><b>code</b>: Formulary Item <span style=\"background: LightGoldenRodYellow; margin: 4px; border: 1px solid khaki\"> (<a href=\"CodeSystem-usdf-InsuranceItemTypeCS.html\">Codes for insurance item type</a>#formulary-item)</span></p><p><b>subject</b>: <a href=\"MedicationKnowledge-FormularyDrug-1000091.html\">MedicationKnowledge/FormularyDrug-1000091</a></p></div>"
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension",
            "valueReference": {
                "reference": "InsurancePlan/FormularyD1002"
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-AvailabilityStatus-extension",
            "valueCode": "active"
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PharmacyBenefitType-extension",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "1-month-in-retail",
                        "display": "1 month in network retail"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-DrugTierID-extension",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE",
                        "code": "generic",
                        "display": "Generic"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-AvailabilityPeriod-extension",
            "valuePeriod": {
                "start": "2021-01-01",
                "end": "2021-12-31"
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PharmacyBenefitType-extension",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "1-month-in-mail",
                        "display": "1 month in network mail order"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PharmacyBenefitType-extension",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "3-month-in-retail",
                        "display": "3 month in network retail"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PharmacyBenefitType-extension",
            "valueCodeableConcept": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "3-month-in-mail",
                        "display": "3 month in network mail order"
                    }
                ]
            }
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PriorAuthorization-extension",
            "valueBoolean": false
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-StepTherapyLimit-extension",
            "valueBoolean": true
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-StepTherapyLimitNewStartsOnly-extension",
            "valueBoolean": true
        },
        {
            "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-QuantityLimit-extension",
            "valueBoolean": true
        }
    ],
    "code": {
        "coding": [
            {
                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-InsuranceItemTypeCS",
                "code": "formulary-item",
                "display": "Formulary Item"
            }
        ]
    },
    "subject": {
        "display": "MedicationKnowledge/FormularyDrug-1000091"
    }
};

export const InsurancePlan =
{
    "resourceType": "InsurancePlan",
    "id": "FormularyD3002",
    "meta": {
        "lastUpdated": "2021-05-22T18:36:03.000+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-Formulary"
        ]
    },
    "identifier": [
        {
            "value": "D3002"
        }
    ],
    "status": "active",
    "type": [
        {
            "coding": [
                {
                    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                    "code": "DRUGPOL"
                }
            ]
        }
    ],
    "name": "Sample Medicare Advantage Part D Formulary D3002",
    "period": {
        "start": "2021-01-01",
        "end": "2021-12-31"
    }
};

export const InsurancePlan2 =
{
    "resourceType": "InsurancePlan",
    "id": "PayerInsurancePlanA3002",
    "meta": {
        "lastUpdated": "2021-05-22T18:36:03.000+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-PayerInsurancePlan"
        ]
    },
    "identifier": [
        {
            "value": "A3002"
        }
    ],
    "status": "active",
    "type": [
        {
            "coding": [
                {
                    "system": "http://hl7.org/fhir/us/davinci-pdex-plan-net/CodeSystem/InsuranceProductTypeCS",
                    "code": "mediadv"
                }
            ]
        }
    ],
    "name": "Sample Medicare Advantage Plan A3002",
    "period": {
        "start": "2021-01-01",
        "end": "2021-12-31"
    },
    "coverageArea": [
        {
            "display": "Location/UnitedStatesLocation"
        }
    ],
    "contact": [
        {
            "purpose": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/contactentity-type",
                        "code": "PATINF"
                    }
                ]
            },
            "telecom": [
                {
                    "system": "phone",
                    "value": "+1 (888) 555-3002"
                }
            ]
        },
        {
            "purpose": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PlanContactTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "MARKETING"
                    }
                ]
            },
            "name": {
                "text": "Sample Medicare Advantage Plan Marketing Website"
            },
            "telecom": [
                {
                    "system": "url",
                    "value": "http://url/to/health/plan/information"
                }
            ]
        },
        {
            "purpose": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PlanContactTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "SUMMARY"
                    }
                ]
            },
            "name": {
                "text": "Sample Medicare Advantage Drug Plan Benefit Website"
            },
            "telecom": [
                {
                    "system": "url",
                    "value": "http://url/to/health/plan/information"
                }
            ]
        },
        {
            "purpose": {
                "coding": [
                    {
                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PlanContactTypeCS-TEMPORARY-TRIAL-USE",
                        "code": "FORMULARY"
                    }
                ]
            },
            "name": {
                "text": "Sample Medicare Advantage Drug Plan Formulary Website"
            },
            "telecom": [
                {
                    "system": "url",
                    "value": "http://url/to/health/plan/information"
                }
            ]
        }
    ],
    "coverage": [
        {
            "extension": [
                {
                    "url": "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-FormularyReference-extension",
                    "valueReference": {
                        "reference": "InsurancePlan/FormularyD3002"
                    }
                }
            ],
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
                        "code": "DRUGPOL"
                    }
                ]
            },
            "benefit": [
                {
                    "type": {
                        "coding": [
                            {
                                "system": "http://terminology.hl7.org/CodeSystem/insurance-plan-type",
                                "code": "Drug",
                                "display": "Drug"
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "plan": [
        {
            "type": {
                "coding": [
                    {
                        "system": "http://terminology.hl7.org/CodeSystem/insurance-plan-type",
                        "code": "Drug",
                        "display": "Drug"
                    }
                ]
            },
            "specificCost": [
                {
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                                "code": "1-month-in-retail",
                                "display": "1 month in network retail"
                            }
                        ]
                    },
                    "benefit": [
                        {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE",
                                        "code": "generic",
                                        "display": "Generic"
                                    }
                                ]
                            },
                            "cost": [
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "copay",
                                                "display": "Copay"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "before-deductible",
                                                    "display": "Before Deductible"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 10,
                                        "unit": "$",
                                        "system": "urn:iso:std:iso:4217",
                                        "code": "USD"
                                    }
                                },
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "coinsurance",
                                                "display": "Coinsurance"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "after-deductible",
                                                    "display": "After Deductible"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 1,
                                        "system": "http://unitsofmeasure.org",
                                        "code": "%"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                                "code": "1-month-out-retail",
                                "display": "1 month out of network retail"
                            }
                        ]
                    },
                    "benefit": [
                        {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE",
                                        "code": "generic",
                                        "display": "Generic"
                                    }
                                ]
                            },
                            "cost": [
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "copay",
                                                "display": "Copay"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "no-charge",
                                                    "display": "No Charge"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "unit": "$",
                                        "system": "urn:iso:std:iso:4217",
                                        "code": "USD"
                                    }
                                },
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "coinsurance",
                                                "display": "Coinsurance"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "after-deductible",
                                                    "display": "After Deductible"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "system": "http://unitsofmeasure.org",
                                        "code": "%"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                                "code": "3-month-in-retail",
                                "display": "3 month in network retail"
                            }
                        ]
                    },
                    "benefit": [
                        {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE",
                                        "code": "generic",
                                        "display": "Generic"
                                    }
                                ]
                            },
                            "cost": [
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "copay",
                                                "display": "Copay"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "no-charge",
                                                    "display": "No Charge"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "unit": "$",
                                        "system": "urn:iso:std:iso:4217",
                                        "code": "USD"
                                    }
                                },
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "coinsurance",
                                                "display": "Coinsurance"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "after-deductible",
                                                    "display": "After Deductible"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "system": "http://unitsofmeasure.org",
                                        "code": "%"
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    "category": {
                        "coding": [
                            {
                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-PharmacyBenefitTypeCS-TEMPORARY-TRIAL-USE",
                                "code": "3-month-out-retail",
                                "display": "3 month out of network retail"
                            }
                        ]
                    },
                    "benefit": [
                        {
                            "type": {
                                "coding": [
                                    {
                                        "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-DrugTierCS-TEMPORARY-TRIAL-USE",
                                        "code": "generic",
                                        "display": "Generic"
                                    }
                                ]
                            },
                            "cost": [
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "copay",
                                                "display": "Copay"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "no-charge",
                                                    "display": "No Charge"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "unit": "$",
                                        "system": "urn:iso:std:iso:4217",
                                        "code": "USD"
                                    }
                                },
                                {
                                    "type": {
                                        "coding": [
                                            {
                                                "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-BenefitCostTypeCS-TEMPORARY-TRIAL-USE",
                                                "code": "coinsurance",
                                                "display": "Coinsurance"
                                            }
                                        ]
                                    },
                                    "qualifiers": [
                                        {
                                            "coding": [
                                                {
                                                    "system": "http://hl7.org/fhir/us/davinci-drug-formulary/CodeSystem/usdf-CostShareOptionCS-TEMPORARY-TRIAL-USE",
                                                    "code": "after-deductible",
                                                    "display": "After Deductible"
                                                }
                                            ]
                                        }
                                    ],
                                    "value": {
                                        "value": 0,
                                        "system": "http://unitsofmeasure.org",
                                        "code": "%"
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

export const Location =
{
    "resourceType": "Location",
    "id": "StateOfCTLocation",
    "meta": {
        "lastUpdated": "2021-08-22T18:36:03.000+00:00",
        "profile": [
            "http://hl7.org/fhir/us/davinci-drug-formulary/StructureDefinition/usdf-InsurancePlanLocation"
        ]
    },
    "extension": [
        {
            "url": "http://hl7.org/fhir/StructureDefinition/location-boundary-geojson",
            "valueAttachment": {
                "contentType": "application/json",
                "data": "eyAidHlwZSI6ICJGZWF0dXJlIiwgInByb3BlcnRpZXMiOiB7ICJHRU9fSUQiOiAiMDQwMDAwMFVTMDkiLCAiU1RBVEUiOiAiMDkiLCAiTkFNRSI6ICJDb25uZWN0aWN1dCIsICJMU0FEIjogIiIsICJDRU5TVVNBUkVBIjogNDg0Mi4zNTUwMDAgfSwgImdlb21ldHJ5IjogeyAidHlwZSI6ICJNdWx0aVBvbHlnb24iLCAiY29vcmRpbmF0ZXMiOiBbIFsgWyBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdLCBbIC03MS44NjgyMzUsIDQxLjMzMDk0MSBdLCBbIC03MS44ODYzMDIsIDQxLjMzNjQxMCBdLCBbIC03MS45MTY3MTAsIDQxLjMzMjIxNyBdLCBbIC03MS45MjIwOTIsIDQxLjMzNDUxOCBdLCBbIC03MS45MjMyODIsIDQxLjMzNTExMyBdLCBbIC03MS45MzYyODQsIDQxLjMzNzk1OSBdLCBbIC03MS45NDU2NTIsIDQxLjMzNzc5OSBdLCBbIC03MS45NTY3NDcsIDQxLjMyOTg3MSBdLCBbIC03MS45NzA5NTUsIDQxLjMyNDUyNiBdLCBbIC03MS45Nzk0NDcsIDQxLjMyOTk4NyBdLCBbIC03MS45ODIxOTQsIDQxLjMyOTg2MSBdLCBbIC03MS45ODgxNTMsIDQxLjMyMDU3NyBdLCBbIC03Mi4wMDAyOTMsIDQxLjMxOTIzMiBdLCBbIC03Mi4wMDUxNDMsIDQxLjMwNjY4NyBdLCBbIC03Mi4wMTA4MzgsIDQxLjMwNzAzMyBdLCBbIC03Mi4wMjE4OTgsIDQxLjMxNjgzOCBdLCBbIC03Mi4wODQ0ODcsIDQxLjMxOTYzNCBdLCBbIC03Mi4wOTQ0NDMsIDQxLjMxNDE2NCBdLCBbIC03Mi4wOTk4MjAsIDQxLjMwNjk5OCBdLCBbIC03Mi4xMTE4MjAsIDQxLjI5OTA5OCBdLCBbIC03Mi4xMzQyMjEsIDQxLjI5OTM5OCBdLCBbIC03Mi4xNjE1ODAsIDQxLjMxMDI2MiBdLCBbIC03Mi4xNzM5MjIsIDQxLjMxNzU5NyBdLCBbIC03Mi4xNzc2MjIsIDQxLjMyMjQ5NyBdLCBbIC03Mi4xODQxMjIsIDQxLjMyMzk5NyBdLCBbIC03Mi4xOTEwMjIsIDQxLjMyMzE5NyBdLCBbIC03Mi4yMDE0MjIsIDQxLjMxNTY5NyBdLCBbIC03Mi4yMDMwMjIsIDQxLjMxMzE5NyBdLCBbIC03Mi4yMDQwMjIsIDQxLjI5OTA5NyBdLCBbIC03Mi4yMDE0MDAsIDQxLjI4ODQ3MCBdLCBbIC03Mi4yMDUxMDksIDQxLjI4NTE4NyBdLCBbIC03Mi4yMDk5OTIsIDQxLjI4NjA2NSBdLCBbIC03Mi4yMTI5MjQsIDQxLjI5MTM2NSBdLCBbIC03Mi4yMjUyNzYsIDQxLjI5OTA0NyBdLCBbIC03Mi4yMzU1MzEsIDQxLjMwMDQxMyBdLCBbIC03Mi4yNDgxNjEsIDQxLjI5OTQ4OCBdLCBbIC03Mi4yNTE4OTUsIDQxLjI5ODYyMCBdLCBbIC03Mi4yNTA1MTUsIDQxLjI5NDM4NiBdLCBbIC03Mi4yNTEzMjMsIDQxLjI4OTk5NyBdLCBbIC03Mi4yNjE0ODcsIDQxLjI4MjkyNiBdLCBbIC03Mi4zMTc3NjAsIDQxLjI3Nzc4MiBdLCBbIC03Mi4zMjc1OTUsIDQxLjI3ODQ2MCBdLCBbIC03Mi4zMzM4OTQsIDQxLjI4MjkxNiBdLCBbIC03Mi4zNDg2NDMsIDQxLjI3NzQ0NiBdLCBbIC03Mi4zNDgwNjgsIDQxLjI2OTY5OCBdLCBbIC03Mi4zODY2MjksIDQxLjI2MTc5OCBdLCBbIC03Mi4zOTg2ODgsIDQxLjI3ODE3MiBdLCBbIC03Mi40MDU5MzAsIDQxLjI3ODM5OCBdLCBbIC03Mi40NTE5MjUsIDQxLjI3ODg4NSBdLCBbIC03Mi40NzI1MzksIDQxLjI3MDEwMyBdLCBbIC03Mi40ODU2OTMsIDQxLjI3MDg4MSBdLCBbIC03Mi40OTk1MzQsIDQxLjI2NTg2NiBdLCBbIC03Mi41MDY2MzQsIDQxLjI2MDA5OSBdLCBbIC03Mi41MTg2NjAsIDQxLjI2MTI1MyBdLCBbIC03Mi41MjEzMTIsIDQxLjI2NTYwMCBdLCBbIC03Mi41Mjk0MTYsIDQxLjI2NDQyMSBdLCBbIC03Mi41MzMyNDcsIDQxLjI2MjY5MCBdLCBbIC03Mi41MzY3NDYsIDQxLjI1NjIwNyBdLCBbIC03Mi41NDcyMzUsIDQxLjI1MDQ5OSBdLCBbIC03Mi41NzExMzYsIDQxLjI2ODA5OCBdLCBbIC03Mi41ODMzMzYsIDQxLjI3MTY5OCBdLCBbIC03Mi41OTgwMzYsIDQxLjI2ODY5OCBdLCBbIC03Mi42MTcyMzcsIDQxLjI3MTk5OCBdLCBbIC03Mi42NDE1MzgsIDQxLjI2Njk5OCBdLCBbIC03Mi42NTM4MzgsIDQxLjI2NTg5NyBdLCBbIC03Mi42NjI4MzgsIDQxLjI2OTE5NyBdLCBbIC03Mi42NzIzMzksIDQxLjI2Njk5NyBdLCBbIC03Mi42ODQ5MzksIDQxLjI1NzU5NyBdLCBbIC03Mi42ODU1MzksIDQxLjI1MTI5NyBdLCBbIC03Mi42OTA0MzksIDQxLjI0NjY5NyBdLCBbIC03Mi42OTQ3NDQsIDQxLjI0NDk3MCBdLCBbIC03Mi43MTA1OTUsIDQxLjI0NDQ4MCBdLCBbIC03Mi43MTM2NzQsIDQxLjI0OTAwNyBdLCBbIC03Mi43MTEyMDgsIDQxLjI1MTAxOCBdLCBbIC03Mi43MTI0NjAsIDQxLjI1NDE2NyBdLCBbIC03Mi43MjI0MzksIDQxLjI1OTEzOCBdLCBbIC03Mi43MzI4MTMsIDQxLjI1NDcyNyBdLCBbIC03Mi43NTQ0NDQsIDQxLjI2NjkxMyBdLCBbIC03Mi43NTc0NzcsIDQxLjI2NjkxMyBdLCBbIC03Mi43ODYxNDIsIDQxLjI2NDc5NiBdLCBbIC03Mi44MTg3MzcsIDQxLjI1MjI0NCBdLCBbIC03Mi44MTkzNzIsIDQxLjI1NDA2MSBdLCBbIC03Mi44MjY4ODMsIDQxLjI1Njc1NSBdLCBbIC03Mi44NDc3NjcsIDQxLjI1NjY5MCBdLCBbIC03Mi44NTAyMTAsIDQxLjI1NTU0NCBdLCBbIC03Mi44NTQwNTUsIDQxLjI0Nzc0MCBdLCBbIC03Mi44NjEzNDQsIDQxLjI0NTI5NyBdLCBbIC03Mi44ODE0NDUsIDQxLjI0MjU5NyBdLCBbIC03Mi44OTU0NDUsIDQxLjI0MzY5NyBdLCBbIC03Mi45MDQzNDUsIDQxLjI0NzI5NyBdLCBbIC03Mi45MDUyNDUsIDQxLjI0ODI5NyBdLCBbIC03Mi45MDMwNDUsIDQxLjI1Mjc5NyBdLCBbIC03Mi44OTQ3NDUsIDQxLjI1NjE5NyBdLCBbIC03Mi44OTM4NDUsIDQxLjI1OTg5NyBdLCBbIC03Mi45MDgyMDAsIDQxLjI4MjkzMiBdLCBbIC03Mi45MTY4MjcsIDQxLjI4MjAzMyBdLCBbIC03Mi45MjAwNjIsIDQxLjI4MDA1NiBdLCBbIC03Mi45MjA4NDYsIDQxLjI2ODg5NyBdLCBbIC03Mi45MzU2NDYsIDQxLjI1ODQ5NyBdLCBbIC03Mi45NjIwNDcsIDQxLjI1MTU5NyBdLCBbIC03Mi45ODYyNDcsIDQxLjIzMzQ5NyBdLCBbIC03Mi45OTc5NDgsIDQxLjIyMjY5NyBdLCBbIC03My4wMDc1NDgsIDQxLjIxMDE5NyBdLCBbIC03My4wMTQ5NDgsIDQxLjIwNDI5NyBdLCBbIC03My4wMjAxNDksIDQxLjIwNDA5NyBdLCBbIC03My4wMjA0NDksIDQxLjIwNjM5NyBdLCBbIC03My4wMjI1NDksIDQxLjIwNzE5NyBdLCBbIC03My4wNTA2NTAsIDQxLjIxMDE5NyBdLCBbIC03My4wNTkzNTAsIDQxLjIwNjY5NyBdLCBbIC03My4wNzk0NTAsIDQxLjE5NDAxNSBdLCBbIC03My4xMDU0OTMsIDQxLjE3MjE5NCBdLCBbIC03My4xMDc5ODcsIDQxLjE2ODczOCBdLCBbIC03My4xMTAzNTIsIDQxLjE1OTY5NyBdLCBbIC03My4xMDk5NTIsIDQxLjE1Njk5NyBdLCBbIC03My4xMDgzNTIsIDQxLjE1MzcxOCBdLCBbIC03My4xMTEwNTIsIDQxLjE1MDc5NyBdLCBbIC03My4xMzAyNTMsIDQxLjE0Njc5NyBdLCBbIC03My4xNzAwNzQsIDQxLjE2MDUzMiBdLCBbIC03My4xNzA3MDEsIDQxLjE2NDk0NSBdLCBbIC03My4xNzc3NzQsIDQxLjE2NjY5NyBdLCBbIC03My4yMDI2NTYsIDQxLjE1ODA5NiBdLCBbIC03My4yMjgyOTUsIDQxLjE0MjYwMiBdLCBbIC03My4yMzUwNTgsIDQxLjE0Mzk5NiBdLCBbIC03My4yNDc5NTgsIDQxLjEyNjM5NiBdLCBbIC03My4yNjIzNTgsIDQxLjExNzQ5NiBdLCBbIC03My4yODY3NTksIDQxLjEyNzg5NiBdLCBbIC03My4yOTYzNTksIDQxLjEyNTY5NiBdLCBbIC03My4zMTE4NjAsIDQxLjExNjI5NiBdLCBbIC03My4zMzA2NjAsIDQxLjEwOTk5NiBdLCBbIC03My4zNzIyOTYsIDQxLjEwNDAyMCBdLCBbIC03My4zOTIxNjIsIDQxLjA4NzY5NiBdLCBbIC03My40MDAxNTQsIDQxLjA4NjI5OSBdLCBbIC03My40MTM2NzAsIDQxLjA3MzI1OCBdLCBbIC03My40MzUwNjMsIDQxLjA1NjY5NiBdLCBbIC03My40NTAzNjQsIDQxLjA1NzA5NiBdLCBbIC03My40NjgyMzksIDQxLjA1MTM0NyBdLCBbIC03My40NzczNjQsIDQxLjAzNTk5NyBdLCBbIC03My40OTMzMjcsIDQxLjA0ODE3MyBdLCBbIC03My41MTY5MDMsIDQxLjAzODczOCBdLCBbIC03My41MTY3NjYsIDQxLjAyOTQ5NyBdLCBbIC03My41MjI2NjYsIDQxLjAxOTI5NyBdLCBbIC03My41Mjg4NjYsIDQxLjAxNjM5NyBdLCBbIC03My41MzExNjksIDQxLjAyMTkxOSBdLCBbIC03My41MzAxODksIDQxLjAyODc3NiBdLCBbIC03My41MzI3ODYsIDQxLjAzMTY3MCBdLCBbIC03My41MzUzMzgsIDQxLjAzMTkyMCBdLCBbIC03My41NTE0OTQsIDQxLjAyNDMzNiBdLCBbIC03My41NjE5NjgsIDQxLjAxNjc5NyBdLCBbIC03My41Njc2NjgsIDQxLjAxMDg5NyBdLCBbIC03My41NzAwNjgsIDQxLjAwMTU5NyBdLCBbIC03My41ODM5NjgsIDQxLjAwMDg5NyBdLCBbIC03My41ODQ5ODgsIDQxLjAxMDUzNyBdLCBbIC03My41OTU2OTksIDQxLjAxNTk5NSBdLCBbIC03My42MDM5NTIsIDQxLjAxNTA1NCBdLCBbIC03My42NDM0NzgsIDQxLjAwMjE3MSBdLCBbIC03My42NTExNzUsIDQwLjk5NTIyOSBdLCBbIC03My42NTczMzYsIDQwLjk4NTE3MSBdLCBbIC03My42NTk2NzEsIDQwLjk4NzkwOSBdLCBbIC03My42NTg3NzIsIDQwLjk5MzQ5NyBdLCBbIC03My42NTkzNzIsIDQwLjk5OTQ5NyBdLCBbIC03My42NTU1NzEsIDQxLjAwNzY5NyBdLCBbIC03My42NTQ2NzEsIDQxLjAxMTY5NyBdLCBbIC03My42NTUzNzEsIDQxLjAxMjc5NyBdLCBbIC03My42NjI2NzIsIDQxLjAyMDQ5NyBdLCBbIC03My42NzA0NzIsIDQxLjAzMDA5NyBdLCBbIC03My42Nzk5NzMsIDQxLjA0MTc5NyBdLCBbIC03My42ODcxNzMsIDQxLjA1MDY5NyBdLCBbIC03My42OTQyNzMsIDQxLjA1OTI5NiBdLCBbIC03My43MTY4NzUsIDQxLjA4NzU5NiBdLCBbIC03My43MjI1NzUsIDQxLjA5MzU5NiBdLCBbIC03My43Mjc3NzUsIDQxLjEwMDY5NiBdLCBbIC03My42Mzk2NzIsIDQxLjE0MTQ5NSBdLCBbIC03My42MzIxNTMsIDQxLjE0NDkyMSBdLCBbIC03My41NjQ5NDEsIDQxLjE3NTE3MCBdLCBbIC03My41MTQ2MTcsIDQxLjE5ODQzNCBdLCBbIC03My41MDk0ODcsIDQxLjIwMDgxNCBdLCBbIC03My40ODI3MDksIDQxLjIxMjc2MCBdLCBbIC03My41MTgzODQsIDQxLjI1NjcxOSBdLCBbIC03My41NTA5NjEsIDQxLjI5NTQyMiBdLCBbIC03My41NDg5MjksIDQxLjMwNzU5OCBdLCBbIC03My41NDk1NzQsIDQxLjMxNTkzMSBdLCBbIC03My41NDg5NzMsIDQxLjMyNjI5NyBdLCBbIC03My41NDQ3MjgsIDQxLjM2NjM3NSBdLCBbIC03My41NDM0MjUsIDQxLjM3NjYyMiBdLCBbIC03My41NDExNjksIDQxLjQwNTk5NCBdLCBbIC03My41Mzc2NzMsIDQxLjQzMzkwNSBdLCBbIC03My41Mzc0NjksIDQxLjQzNTg5MCBdLCBbIC03My41MzY5NjksIDQxLjQ0MTA5NCBdLCBbIC03My41MzYwNjcsIDQxLjQ1MTMzMSBdLCBbIC03My41MzU5ODYsIDQxLjQ1MzA2MCBdLCBbIC03My41MzU4ODUsIDQxLjQ1NTIzNiBdLCBbIC03My41MzU4NTcsIDQxLjQ1NTcwOSBdLCBbIC03My41MzU3NjksIDQxLjQ1NzE1OSBdLCBbIC03My41MzQzNjksIDQxLjQ3NTg5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjM5NCBdLCBbIC03My41MzQyNjksIDQxLjQ3NjkxMSBdLCBbIC03My41MzQxNTAsIDQxLjQ3ODA2MCBdLCBbIC03My41MzQwNTUsIDQxLjQ3ODk2OCBdLCBbIC03My41MzM5NjksIDQxLjQ3OTY5MyBdLCBbIC03My41MzAwNjcsIDQxLjUyNzE5NCBdLCBbIC03My41MjEwNDEsIDQxLjYxOTc3MyBdLCBbIC03My41MjAwMTcsIDQxLjY0MTE5NyBdLCBbIC03My41MTY3ODUsIDQxLjY4NzU4MSBdLCBbIC03My41MTE5MjEsIDQxLjc0MDk0MSBdLCBbIC03My41MTA5NjEsIDQxLjc1ODc0OSBdLCBbIC03My41MDUwMDgsIDQxLjgyMzc3MyBdLCBbIC03My41MDQ5NDQsIDQxLjgyNDI4NSBdLCBbIC03My41MDE5ODQsIDQxLjg1ODcxNyBdLCBbIC03My40OTgzMDQsIDQxLjg5MjUwOCBdLCBbIC03My40OTY1MjcsIDQxLjkyMjM4MCBdLCBbIC03My40OTI5NzUsIDQxLjk1ODUyNCBdLCBbIC03My40ODk2MTUsIDQyLjAwMDA5MiBdLCBbIC03My40ODczMTQsIDQyLjA0OTYzOCBdLCBbIC03My40MzI4MTIsIDQyLjA1MDU4NyBdLCBbIC03My4yOTQ0MjAsIDQyLjA0Njk4NCBdLCBbIC03My4yOTMwOTcsIDQyLjA0Njk0MCBdLCBbIC03My4yMzEwNTYsIDQyLjA0NDk0NSBdLCBbIC03My4yMjk3OTgsIDQyLjA0NDg3NyBdLCBbIC03My4wNTMyNTQsIDQyLjAzOTg2MSBdLCBbIC03Mi45OTk1NDksIDQyLjAzODY1MyBdLCBbIC03Mi44NjM3MzMsIDQyLjAzNzcxMCBdLCBbIC03Mi44NjM2MTksIDQyLjAzNzcwOSBdLCBbIC03Mi44NDcxNDIsIDQyLjAzNjg5NCBdLCBbIC03Mi44MTM1NDEsIDQyLjAzNjQ5NCBdLCBbIC03Mi44MTY3NDEsIDQxLjk5NzU5NSBdLCBbIC03Mi43NjY3MzksIDQyLjAwMjk5NSBdLCBbIC03Mi43NjYxMzksIDQyLjAwNzY5NSBdLCBbIC03Mi43NjMyNjUsIDQyLjAwOTc0MiBdLCBbIC03Mi43NjMyMzgsIDQyLjAxMjc5NSBdLCBbIC03Mi43NjEyMzgsIDQyLjAxNDU5NSBdLCBbIC03Mi43NTk3MzgsIDQyLjAxNjk5NSBdLCBbIC03Mi43NjEzNTQsIDQyLjAxODE4MyBdLCBbIC03Mi43NjIzMTAsIDQyLjAxOTc3NSBdLCBbIC03Mi43NjIxNTEsIDQyLjAyMTUyNyBdLCBbIC03Mi43NjA1NTgsIDQyLjAyMTg0NiBdLCBbIC03Mi43NTgxNTEsIDQyLjAyMDg2NSBdLCBbIC03Mi43NTc0NjcsIDQyLjAyMDk0NyBdLCBbIC03Mi43NTQwMzgsIDQyLjAyNTM5NSBdLCBbIC03Mi43NTE3MzgsIDQyLjAzMDE5NSBdLCBbIC03Mi43NTM1MzgsIDQyLjAzMjA5NSBdLCBbIC03Mi43NTc1MzgsIDQyLjAzMzI5NSBdLCBbIC03Mi43NTU4MzgsIDQyLjAzNjE5NSBdLCBbIC03Mi42OTU5MjcsIDQyLjAzNjc4OCBdLCBbIC03Mi42NDMxMzQsIDQyLjAzMjM5NSBdLCBbIC03Mi42MDc5MzMsIDQyLjAzMDc5NSBdLCBbIC03Mi42MDY5MzMsIDQyLjAyNDk5NSBdLCBbIC03Mi41OTAyMzMsIDQyLjAyNDY5NSBdLCBbIC03Mi41ODIzMzIsIDQyLjAyNDY5NSBdLCBbIC03Mi41NzMyMzEsIDQyLjAzMDE0MSBdLCBbIC03Mi41MjgxMzEsIDQyLjAzNDI5NSBdLCBbIC03Mi40NTY2ODAsIDQyLjAzMzk5OSBdLCBbIC03Mi4zMTcxNDgsIDQyLjAzMTkwNyBdLCBbIC03Mi4yNDk1MjMsIDQyLjAzMTYyNiBdLCBbIC03Mi4xMzU2ODcsIDQyLjAzMDI0NSBdLCBbIC03Mi4wNjM0OTYsIDQyLjAyNzM0NyBdLCBbIC03MS45ODczMjYsIDQyLjAyNjg4MCBdLCBbIC03MS44OTA3ODAsIDQyLjAyNDM2OCBdLCBbIC03MS44MDA2NTAsIDQyLjAyMzU2OSBdLCBbIC03MS43OTkyNDIsIDQyLjAwODA2NSBdLCBbIC03MS43OTc5MjIsIDQxLjkzNTM5NSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MTEwMSBdLCBbIC03MS43OTQxNjEsIDQxLjg0MDE0MSBdLCBbIC03MS43OTI3ODYsIDQxLjgwODY3MCBdLCBbIC03MS43OTI3NjcsIDQxLjgwNzAwMSBdLCBbIC03MS43OTEwNjIsIDQxLjc3MDI3MyBdLCBbIC03MS43ODk2NzgsIDQxLjcyNDczNCBdLCBbIC03MS43ODY5OTQsIDQxLjY1NTk5MiBdLCBbIC03MS43ODkzNTYsIDQxLjU5NjkxMCBdLCBbIC03MS43OTc2ODMsIDQxLjQxNjcwOSBdLCBbIC03MS44MTgzOTAsIDQxLjQxOTU5OSBdLCBbIC03MS44Mzk2NDksIDQxLjQxMjExOSBdLCBbIC03MS44NDI1NjMsIDQxLjQwOTg1NSBdLCBbIC03MS44NDM0NzIsIDQxLjQwNTgzMCBdLCBbIC03MS44NDIxMzEsIDQxLjM5NTM1OSBdLCBbIC03MS44MzM0NDMsIDQxLjM4NDUyNCBdLCBbIC03MS44MzE2MTMsIDQxLjM3MDg5OSBdLCBbIC03MS44Mzc3MzgsIDQxLjM2MzUyOSBdLCBbIC03MS44MzU5NTEsIDQxLjM1MzkzNSBdLCBbIC03MS44Mjk1OTUsIDQxLjM0NDU0NCBdLCBbIC03MS44MzkwMTMsIDQxLjMzNDA0MiBdLCBbIC03MS44NjA1MTMsIDQxLjMyMDI0OCBdLCBbIC03MS44NTk1NzAsIDQxLjMyMjM5OSBdIF0gXSwgWyBbIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0sIFsgLTczLjQwMzYxMCwgNDEuMDYyNjg3IF0sIFsgLTczLjM2Nzg1OSwgNDEuMDg4MTIwIF0sIFsgLTczLjM1MjA1MSwgNDEuMDg4MTIwIF0sIFsgLTczLjM4NTczNSwgNDEuMDU5MjUwIF0sIFsgLTczLjQyMjE2NSwgNDEuMDQ3NTYyIF0gXSBdIF0gfSB9",
                "title": "GeoJSON Outline of the State of Connecticut"
            }
        }
    ],
    "name": "State of CT Area",
    "address": {
        "state": "CT",
        "country": "US"
    }
};