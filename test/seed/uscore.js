export const Patient =
{
  "resourceType": "Patient",
  "id": "example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Patient Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a patient example for the *US Core Patient Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-patient"
    ]
  },
  "text": {
    "status": "generated",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Amy V. Baxter </b> female, DoB: 1987-02-20 ( Medical Record Number: 1032702 (USUAL))</p></div>"
  },
  "extension": [
    {
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2106-3",
            "display": "White"
          }
        },
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "1002-5",
            "display": "American Indian or Alaska Native"
          }
        },
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2028-9",
            "display": "Asian"
          }
        },
        {
          "url": "detailed",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "1586-7",
            "display": "Shoshone"
          }
        },
        {
          "url": "detailed",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2036-2",
            "display": "Filipino"
          }
        },
        {
          "url": "text",
          "valueString": "Mixed"
        }
      ],
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race"
    },
    {
      "extension": [
        {
          "url": "ombCategory",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2135-2",
            "display": "Hispanic or Latino"
          }
        },
        {
          "url": "detailed",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2184-0",
            "display": "Dominican"
          }
        },
        {
          "url": "detailed",
          "valueCoding": {
            "system": "urn:oid:2.16.840.1.113883.6.238",
            "code": "2148-5",
            "display": "Mexican"
          }
        },
        {
          "url": "text",
          "valueString": "Hispanic or Latino"
        }
      ],
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity"
    },
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
      "valueCode": "F"
    },
    {
      "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-genderIdentity",
      "valueCodeableConcept": {
        "coding": [
          {
            "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
            "code": "ASKU",
            "display": "asked but unknown"
          }
        ],
        "text": "asked but unknown"
      }
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
        ],
        "text": "Medical Record Number"
      },
      "system": "http://hospital.smarthealthit.org",
      "value": "1032702"
    }
  ],
  "active": true,
  "name": [
    {
      "use": "old",
      "family": "Shaw",
      "given": [
        "Amy",
        "V."
      ],
      "period": {
        "start": "2016-12-06",
        "end": "2020-07-22"
      }
    },
    {
      "family": "Baxter",
      "given": [
        "Amy",
        "V."
      ],
      "suffix": [
        "PharmD"
      ],
      "period": {
        "start": "2020-07-22"
      }
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "555-555-5555",
      "use": "home"
    },
    {
      "system": "email",
      "value": "amy.shaw@example.com"
    }
  ],
  "gender": "female",
  "birthDate": "1987-02-20",
  "address": [
    {
      "use": "old",
      "line": [
        "49 Meadow St"
      ],
      "city": "Mounds",
      "state": "OK",
      "postalCode": "74047",
      "country": "US",
      "period": {
        "start": "2016-12-06",
        "end": "2020-07-22"
      }
    },
    {
      "line": [
        "183 Mountain View St"
      ],
      "city": "Mounds",
      "state": "OK",
      "postalCode": "74048",
      "country": "US",
      "period": {
        "start": "2020-07-22"
      }
    }
  ]
};

export const AllergyIntolerance =
{
  "resourceType": "AllergyIntolerance",
  "id": "example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "AllergyIntolerance Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a allergyintolerance example for the *US Core AllergyIntolerance Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"
    ]
  },
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
        "code": "active"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
        "code": "confirmed"
      }
    ]
  },
  "category": [
    "medication"
  ],
  "criticality": "high",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "763875007",
        "display": "Product containing sulfonamide (product)"
      }
    ],
    "text": "sulfonamide antibacterial"
  },
  "patient": {
    "display": "Patient/example",
    "display": "Amy V. Shaw"
  },
  "reaction": [
    {
      "manifestation": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "271807003",
              "display": "skin rash"
            }
          ],
          "text": "skin rash"
        }
      ],
      "severity": "mild"
    }
  ]
};

export const CarePlan =
{
  "resourceType": "CarePlan",
  "id": "colonoscopy",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Colonoscopy Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a colonoscopy example for the *US Core CarePlan Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"
    ]
  },
  "text": {
    "status": "additional",
    "div": "<div xmlns=\"http://www.w3.org/1999/xhtml\">\n&#9;&#9;&#9;<strong>Assessment</strong>\n&#9;&#9;&#9;<ol>\n&#9;&#9;&#9;&#9;<li>Recurrent GI bleed of unknown etiology; hypotension perhaps secondary to this but as likely secondary to polypharmacy.</li>\n&#9;&#9;&#9;&#9;<li>Acute on chronic anemia secondary to #1.</li>\n&#9;&#9;&#9;&#9;<li>Azotemia, acute renal failure with volume loss secondary to #1.</li>\n&#9;&#9;&#9;&#9;<li>Hyperkalemia secondary to #3 and on ACE and K+ supplement.</li>\n&#9;&#9;&#9;&#9;<li>Other chronic diagnoses as noted above, currently stable.</li>\n&#9;&#9;&#9;</ol>\n&#9;&#9;&#9;<table>\n&#9;&#9;&#9;&#9;<thead>\n&#9;&#9;&#9;&#9;&#9;<tr>\n&#9;&#9;&#9;&#9;&#9;&#9;<th>Planned Activity</th>\n&#9;&#9;&#9;&#9;&#9;&#9;<th>Planned Date</th>\n&#9;&#9;&#9;&#9;&#9;</tr>\n&#9;&#9;&#9;&#9;</thead>\n&#9;&#9;&#9;&#9;<tbody>\n&#9;&#9;&#9;&#9;&#9;<tr>\n&#9;&#9;&#9;&#9;&#9;&#9;<td>Colonoscopy</td>\n&#9;&#9;&#9;&#9;&#9;&#9;<td>April 21, 2000</td>\n&#9;&#9;&#9;&#9;&#9;</tr>\n&#9;&#9;&#9;&#9;</tbody>\n&#9;&#9;&#9;</table>\n&#9;&#9;</div>"
  },
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/careplan-category",
          "code": "assess-plan"
        }
      ]
    }
  ],
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  }
};

export const CareTeam =
{
  "resourceType": "CareTeam",
  "id": "example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "CareTeam Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a careteam example for the *US Core CareTeam Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-careteam"
    ]
  },
  "status": "active",
  "name": "US-Core example CareTeam",
  "subject": {
    "display": "Patient/example",
    "display": "Amy V. Shaw"
  },
  "participant": [
    {
      "role": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "17561000",
              "display": "Cardiologist"
            }
          ]
        }
      ],
      "member": {
        "display": "Practitioner/practitioner-1",
        "display": "Ronald Bone, MD"
      }
    },
    {
      "role": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "453231000124104",
              "display": "Primary care provider"
            }
          ]
        }
      ],
      "member": {
        "display": "Practitioner/practitioner-2",
        "display": "Kathy Fielding, MD"
      }
    },
    {
      "role": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "116154003",
              "display": "Patient (person)"
            }
          ]
        }
      ],
      "member": {
        "display": "Patient/example",
        "display": "Amy V. Shaw"
      }
    },
    {
      "role": [
        {
          "coding": [
            {
              "system": "http://snomed.info/sct",
              "code": "133932002",
              "display": "Caregiver (person)"
            }
          ]
        }
      ],
      "member": {
        "display": "RelatedPerson/shaw-niece",
        "display": "Sarah van Putten"
      }
    }
  ]
};

export const Condition =
{
  "resourceType": "Condition",
  "id": "encounter-diagnosis-example1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Encounter Diagnosis Example 1"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This example of a US Core Condition Encounter Diagnosis Profile illustrates its use to capture information about a patient's encounter diagnosis."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/condition-assertedDate",
      "valueDateTime": "2015-10-31"
    }
  ],
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code": "resolved"
      }
    ]
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "confirmed"
      }
    ]
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/condition-category",
          "code": "encounter-diagnosis",
          "display": "Encounter Diagnosis"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "39065001",
        "display": "Burn of ear"
      }
    ],
    "text": "Burnt Ear"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "encounter": {
    "display": "Encounter/example-1"
  },
  "onsetDateTime": "2015-10-31",
  "abatementDateTime": "2015-12-01",
  "recordedDate": "2015-11-01"
};

export const ConditionProblems =
{
  "resourceType": "Condition",
  "id": "health-concern-example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Health Concern Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This example of a US Core Condition Problems and Health Concerns Profile illustrates its use to capture information about a patient's health concern."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-problems-health-concerns"
    ]
  },
  "extension": [
    {
      "url": "http://hl7.org/fhir/StructureDefinition/condition-assertedDate",
      "valueDateTime": "2007-12-14"
    }
  ],
  "clinicalStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-clinical",
        "code": "active",
        "display": "Active"
      }
    ],
    "text": "Active"
  },
  "verificationStatus": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/condition-ver-status",
        "code": "confirmed",
        "display": "Confirmed"
      }
    ],
    "text": "Confirmed"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/condition-category",
          "code": "health-concern",
          "display": "Health Concern"
        }
      ],
      "text": "Health Concern"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "247824007",
        "display": "Fear of becoming fat"
      }
    ],
    "text": "Fear of becoming fat"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "onsetDateTime": "2007-12-14",
  "recordedDate": "2007-12-14T07:15:07-08:00"
}

export const Device =
{
  "resourceType": "Device",
  "id": "udi-2",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Device Defib Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a Device defib example for the *US Core Implantable Device Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-implantable-device"
    ]
  },
  "udiCarrier": [
    {
      "deviceIdentifier": "99863313444316",
      "carrierHRF": "(01)99863313444316(17)220101(10)M320(21)AC221",
      "entryType": "rfid"
    }
  ],
  "status": "active",
  "manufacturer": "ACME Biomedical",
  "expirationDate": "2022-01-01",
  "lotNumber": "M320",
  "serialNumber": "AC221",
  "deviceName": [
    {
      "name": "ACME Defibrillator Analyzer, with Transcutaneous Pacemaker Input",
      "type": "udi-label-name"
    }
  ],
  "modelNumber": "1.0",
  "type": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "19257004",
        "display": "Defibrillator, device"
      }
    ],
    "text": "Implant"
  },
  "patient": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  }
};

export const DiagnosticReportLaboratory =
{
  "resourceType": "DiagnosticReport",
  "id": "metabolic-panel",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Metabolic Panel Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a metabolic panel example for the *US Core DiagnosticReport Lab Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-lab"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v2-0074",
          "code": "LAB",
          "display": "Laboratory"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "24323-8",
        "display": "Comprehensive metabolic 2000 panel - Serum or Plasma"
      }
    ]
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "effectiveDateTime": "2005-07-04",
  "issued": "2005-07-06T11:45:33+11:00",
  "performer": [
    {
      "display": "Organization/acme-lab",
      "display": "Acme Laboratory, Inc"
    }
  ],
  "result": [
    {
      "display": "Observation/serum-total-bilirubin",
      "display": "TOTAL BILIRUBIN"
    },
    {
      "display": "Observation/serum-sodium",
      "display": "SODIUM"
    },
    {
      "display": "Observation/serum-potassium",
      "display": "Potassium"
    },
    {
      "display": "Observation/serum-creatinine",
      "display": "CREATININE"
    },
    {
      "display": "Observation/serum-co2",
      "display": "TOTAL CO2"
    },
    {
      "display": "Observation/serum-chloride",
      "display": "CHLORIDE"
    },
    {
      "display": "Observation/serum-calcium",
      "display": "CALCIUM"
    },
    {
      "display": "Observation/bun",
      "display": "BUN"
    },
    {
      "display": "Observation/blood-glucose",
      "display": "GLUCOSE"
    }
  ]
};

export const DiagnosticReportCardiology =
{
  "resourceType": "DiagnosticReport",
  "id": "cardiology-report",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "DiagnosticReport Cardiology Report Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a DiagnosticReport cardiology report example for the *US Core DiagnosticReport Note Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-diagnosticreport-note"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "LP29708-2",
          "display": "Cardiology"
        }
      ],
      "text": "Cardiology"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "45033-8",
        "display": "Cardiovascular physiologic and EKG assessment panel"
      }
    ],
    "text": "Cardiovascular physiologic and EKG assessment panel"
  },
  "subject": {
    "display": "Patient/example"
  },
  "effectiveDateTime": "2021-11-10T21:39:30.000Z",
  "result": [
    {
      "display": "Observation/qrs-dur-ekg-lead"
    },
    {
      "display": "Observation/pulse-intensity-palpation"
    },
    {
      "display": "Observation/p-r-interval-ekg-lead"
    },
    {
      "display": "Observation/q-t-interval-ekg-lead"
    },
    {
      "display": "Observation/jugular-vein-distension"
    },
    {
      "display": "Observation/heart-rate-rhythm"
    },
    {
      "display": "Observation/ekg-lead"
    },
    {
      "display": "Observation/ekg-impression"
    },
    {
      "display": "Observation/capillary-refill-time-nail-bed"
    }
  ],
  "media": [
    {
      "link": {
        "display": "Media/ekg-strip",
        "display": "EKG Strip"
      }
    }
  ],
  "presentedForm": [
    {
      "contentType": "application/pdf",
      "url": "http://example.org/pdfdownloads/cardiopanel-report-123.pdf",
      "hash": "RVFILy4uQWdNRQo="
    }
  ]
};

export const DocumentReference =
{
  "resourceType": "DocumentReference",
  "id": "episode-summary",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Episode Summary Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a episode summary example for the *US Core DocumentReference Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"
    ]
  },
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:oid:2.16.840.1.113883.19.5.99999.1"
    }
  ],
  "status": "current",
  "type": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "34133-9",
        "display": "Summary of episode note"
      }
    ],
    "text": "CCD Document"
  },
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-documentreference-category",
          "code": "clinical-note",
          "display": "Clinical Note"
        }
      ],
      "text": "Clinical Note"
    }
  ],
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "date": "2016-03-09T15:29:46Z",
  "author": [
    {
      "display": "Practitioner/practitioner-1",
      "display": "Ronald Bone, MD"
    }
  ],
  "description": "Pulmonology clinic acute visit",
  "content": [
    {
      "attachment": {
        "contentType": "text/plain",
        "url": "/Binary/1-note",
        "title": "Uri where the data can be found: [base]/Binary/1-note"
      },
      "format": {
        "system": "urn:oid:1.3.6.1.4.1.19376.1.2.3",
        "code": "urn:hl7-org:sdwg:ccda-structuredBody:2.1",
        "display": "Documents following C-CDA constraints using a structured body"
      }
    }
  ],
  "context": {
    "period": {
      "start": "2004-12-23T08:00:00+11:00",
      "end": "2004-12-23T08:01:00+11:00"
    }
  }
};

export const Encounter =
{
  "resourceType": "Encounter",
  "id": "1036",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Encounter 1036 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a encounter 1036 example for the *Encounter Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-encounter"
    ]
  },
  "status": "in-progress",
  "class": {
    "system": "http://terminology.hl7.org/CodeSystem/v3-ActCode",
    "code": "IMP",
    "display": "inpatient encounter"
  },
  "type": [
    {
      "coding": [
        {
          "system": "http://snomed.info/sct",
          "code": "261665006",
          "display": "Unknown (qualifier value)"
        }
      ],
      "text": "Unknown (qualifier value)"
    }
  ],
  "subject": {
    "display": "Patient/example"
  },
  "hospitalization": {
    "dischargeDisposition": {
      "coding": [
        {
          "system": "http://www.nubc.org/patient-discharge",
          "code": "01",
          "display": "Discharged to Home"
        }
      ]
    }
  },
  "location": [
    {
      "location": {
        "display": "Location/hospital",
        "display": "Holy Family Hospital"
      }
    }
  ]
};

export const Goal =
{
  "resourceType": "Goal",
  "id": "goal-1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Goal 1 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a goal 1 example for the *US Core Goal Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal"
    ]
  },
  "lifecycleStatus": "active",
  "description": {
    "text": "Patient is targeting a pulse oximetry of 92% and a weight of 195 lbs"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "target": [
    {
      "dueDate": "2016-04-05"
    }
  ]
};

export const Immunization =
{
  "resourceType": "Immunization",
  "id": "imm-1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Imm 1 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a imm 1 example for the *US Core Immunization Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-immunization"
    ]
  },
  "status": "completed",
  "vaccineCode": {
    "coding": [
      {
        "system": "http://hl7.org/fhir/sid/cvx",
        "code": "197",
        "display": "influenza, high-dose, quadrivalent"
      },
      {
        "system": "http://hl7.org/fhir/sid/ndc",
        "code": "49281012165",
        "display": "FLUZONE High-Dose Quadrivalent Northern Hemisphere, 10 SYRINGE, GLASS in 1 PACKAGE (49281-121-65)  > .7 mL in 1 SYRINGE, GLASS (49281-121-88)  (package)"
      }
    ],
    "text": "influenza, high-dose, quadrivalent"
  },
  "patient": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "occurrenceDateTime": "2020-11-19T12:46:57-08:00",
  "primarySource": false
};

export const Location =
{
  "resourceType": "Location",
  "id": "hospital",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Hospital Location"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is an example hospital location for the *US Core Location Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-location"
    ]
  },
  "status": "active",
  "name": "Holy Family Hospital",
  "telecom": [
    {
      "system": "phone",
      "value": "9786870156"
    }
  ],
  "address": {
    "line": [
      "70 EAST STREET"
    ],
    "city": "METHUEN",
    "state": "MA",
    "postalCode": "01844",
    "country": "US"
  },
  "managingOrganization": {
    "reference": "http://example.org/fhir/Organization/holy-healthcare",
    "display": "Holy Healthcare"
  }
};

export const Medication =
{
  "resourceType": "Medication",
  "id": "uscore-med1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Uscore Med1 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a uscore med1 example for the *US Core Medication Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication"
    ]
  },
  "code": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "206765",
        "display": "Prinivil 10 MG Oral Tablet"
      }
    ],
    "text": "lisinopril oral 10 mg"
  }
};

export const MedicationRequest =
{
  "resourceType": "MedicationRequest",
  "id": "uscore-mo1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Uscore MO1 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a uscore mo1 example for the *US Core MedicationRequest Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"
    ]
  },
  "status": "active",
  "intent": "order",
  "medicationCodeableConcept": {
    "coding": [
      {
        "system": "http://www.nlm.nih.gov/research/umls/rxnorm",
        "code": "582620",
        "display": "Nizatidine 15 MG/ML Oral Solution [Axid]"
      }
    ],
    "text": "Nizatidine 15 MG/ML Oral Solution [Axid]"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "authoredOn": "2008-04-05",
  "requester": {
    "display": "Practitioner/practitioner-1",
    "display": "Ronald Bone, MD"
  },
  "dosageInstruction": [
    {
      "text": "10 mL bid",
      "timing": {
        "repeat": {
          "boundsPeriod": {
            "start": "2008-04-05"
          }
        }
      }
    }
  ],
  "dispenseRequest": {
    "numberOfRepeatsAllowed": 1,
    "quantity": {
      "value": 480,
      "unit": "mL",
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

export const ObservationClinicalTest =
{
  "resourceType": "Observation",
  "id": "dxa-hip-l-armass-bmd",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "DXA Hip-L ArMass BMD Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a DXA Hip-L ArMass BMD Example for the *Clinical Test Result Observation Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-clinical-test"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-observation-category",
          "code": "clinical-test",
          "display": "Clinical Test"
        }
      ],
      "text": "Clinical Test"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "46278-8",
        "display": "DXA Hip-L ArMass BMD"
      }
    ],
    "text": "DXA Hip-L ArMass BMD"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "encounter": {
    "display": "Bone Scan"
  },
  "effectiveDateTime": "2021-11-10T19:14:41.088720-08:00",
  "valueQuantity": {
    "value": 0.734,
    "unit": "g/cm2",
    "system": "http://unitsofmeasure.org",
    "code": "g/cm2"
  }
};

export const ObservationSexualOrientation =
{
  "resourceType": "Observation",
  "id": "sexual-orientation-example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Sexual Orientation Observation Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is an sexual orientation example for the *US Core Observation Sexual Orientation Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-observation-sexual-orientation"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "social-history",
          "display": "Social History"
        }
      ]
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "76690-7",
        "display": "Sexual orientation"
      }
    ],
    "text": "Sexual orientation"
  },
  "subject": {
    "display": "Patient/example"
  },
  "effectiveDateTime": "2021-11-11",
  "valueCodeableConcept": {
    "coding": [
      {
        "system": "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
        "code": "ASKU",
        "display": "asked but unknown"
      }
    ],
    "text": "asked but unknown"
  }
};

export const ObservationBMI =
{
  "resourceType": "Observation",
  "id": "bmi",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "BMI Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a BMI example for the *Vitalsigns Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-bmi"
    ]
  },
  "status": "final",
  "category": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/observation-category",
          "code": "vital-signs",
          "display": "Vital Signs"
        }
      ],
      "text": "Vital Signs"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://loinc.org",
        "code": "39156-5",
        "display": "Body mass index (BMI) [Ratio]"
      }
    ],
    "text": "BMI"
  },
  "subject": {
    "display": "Patient/example",
    "display": "Amy Shaw"
  },
  "encounter": {
    "display": "GP Visit"
  },
  "effectiveDateTime": "1999-07-02",
  "valueQuantity": {
    "value": 16.2,
    "unit": "kg/m2",
    "system": "http://unitsofmeasure.org",
    "code": "kg/m2"
  }
};

export const Organization =
{
  "resourceType": "Organization",
  "id": "acme-lab",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Acme Lab Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a acme lab example for the *US Core Organization Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"
    ]
  },
  "identifier": [
    {
      "system": "http://hl7.org/fhir/sid/us-npi",
      "value": "1144221847"
    },
    {
      "system": "urn:oid:2.16.840.1.113883.4.7",
      "value": "12D4567890"
    }
  ],
  "active": true,
  "type": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/organization-type",
          "code": "prov",
          "display": "Healthcare Provider"
        }
      ]
    }
  ],
  "name": "Acme Labs",
  "telecom": [
    {
      "system": "phone",
      "value": "(+1) 734-677-7777"
    },
    {
      "system": "email",
      "value": "hq@acme.org"
    }
  ],
  "address": [
    {
      "line": [
        "3300 Washtenaw Avenue, Suite 227"
      ],
      "city": "Amherst",
      "state": "MA",
      "postalCode": "01002",
      "country": "USA"
    }
  ]
};

export const Practitioner =
{
  "resourceType": "Practitioner",
  "id": "practitioner-1",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Practitioner 1 Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a practitioner 1 example for the *US Core Practitioner Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"
    ]
  },
  "identifier": [
    {
      "system": "http://hl7.org/fhir/sid/us-npi",
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
};

export const Procedure =
{
  "resourceType": "Procedure",
  "id": "defib-implant",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Procedure R4 Defib Implant Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a Procedure R4 defib implant example for the *US Core Procedure Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-procedure"
    ]
  },
  "identifier": [
    {
      "system": "urn:ietf:rfc:3986",
      "value": "urn:uuid:b2a737f2-2fdb-49c1-b097-dac173d07aff"
    }
  ],
  "status": "completed",
  "code": {
    "coding": [
      {
        "system": "http://www.ama-assn.org/go/cpt",
        "code": "33249"
      }
    ],
    "text": "Insertion or replacement of permanent implantable defibrillator system with transvenous lead(s), single or dual chamber"
  },
  "subject": {
    "display": "Patient/example"
  },
  "performedPeriod": {
    "start": "2019-03-26T12:55:26-07:00",
    "end": "2019-03-26T13:25:26-07:00"
  },
  "performer": [
    {
      "actor": {
        "display": "Practitioner/practitioner-1"
      }
    }
  ],
  "focalDevice": [
    {
      "manipulated": {
        "display": "Device/udi-2"
      }
    }
  ]
};

export const QuestionnaireResponse =
{
  "resourceType": "QuestionnaireResponse",
  "id": "hunger-vital-sign-example",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Hunger Vital Sign [HVS] Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "'An example of an SDC QuestionnaireResponse that represents questions and selected answers from the Hunger Vital Sign Example questionnaire represented in LOINC (code 88122-7). The example is generated using the LHC-Forms SDC Questionnaire App.'"
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-questionnaireresponse"
    ],
    "tag": [
      {
        "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-tags",
        "code": "sdoh"
      }
    ]
  },
  "questionnaire": "http://hl7.org/fhir/us/sdoh-clinicalcare/Questionnaire/SDOHCC-QuestionnaireHungerVitalSign",
  "_questionnaire": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/us/core/StructureDefinition/us-core-extension-questionnaire-uri",
        "valueUri": "https://example.org/forms/hsv"
      }
    ]
  },
  "status": "completed",
  "subject": {
    "display": "Patient/example",
    "display": "Amy V. Shaw"
  },
  "authored": "2020-09-10T21:56:54.671Z",
  "author": {
    "display": "Practitioner/practitioner-1",
    "display": "Ronald Bone"
  },
  "item": [
    {
      "linkId": "/88122-7",
      "text": "(I/We) worried whether (my/our) food would run out before (I/we) got money to buy more.",
      "answer": [
        {
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "LA28397-0",
            "display": "Often true"
          }
        }
      ]
    },
    {
      "linkId": "/88123-5",
      "text": "The food that (I/we) bought just didn't last, and (I/we) didn't have money to get more.",
      "answer": [
        {
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "LA28397-0",
            "display": "Often true"
          }
        }
      ]
    },
    {
      "linkId": "/88124-3",
      "text": "Food insecurity risk",
      "answer": [
        {
          "valueCoding": {
            "system": "http://loinc.org",
            "code": "LA19952-3",
            "display": "At risk"
          }
        }
      ]
    }
  ]
};

export const RelatedPerson =
{
  "resourceType": "RelatedPerson",
  "id": "shaw-niece",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "Patient Niece Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a patient niece example for the *US Core RelatedPerson Profile Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-relatedperson"
    ]
  },
  "active": true,
  "patient": {
    "display": "Patient/example",
    "display": "Amy V. Shaw"
  },
  "relationship": [
    {
      "coding": [
        {
          "system": "http://terminology.hl7.org/CodeSystem/v3-RoleCode",
          "code": "NIECE",
          "display": "niece"
        }
      ]
    }
  ],
  "name": [
    {
      "use": "official",
      "family": "van Putten",
      "given": [
        "Sarah"
      ]
    }
  ],
  "telecom": [
    {
      "system": "phone",
      "value": "555-555-5555",
      "use": "home"
    },
    {
      "system": "email",
      "value": "sarah.vanputten@example.com",
      "use": "home"
    }
  ],
  "birthDate": "1996-01-28",
  "address": [
    {
      "use": "home",
      "line": [
        "80A Village Street"
      ],
      "city": "New Holland",
      "state": "PA",
      "postalCode": "17557"
    }
  ]
};

export const ServiceRequest =
{
  "resourceType": "ServiceRequest",
  "id": "foodpantry-referral",
  "meta": {
    "extension": [
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-name",
        "valueString": "ServiceRequest Example"
      },
      {
        "url": "http://hl7.org/fhir/StructureDefinition/instance-description",
        "valueMarkdown": "This is a service request example for the *US Core ServiceRequest Profile Profile*."
      }
    ],
    "profile": [
      "http://hl7.org/fhir/us/core/StructureDefinition/us-core-servicerequest"
    ]
  },
  "status": "active",
  "intent": "order",
  "category": [
    {
      "coding": [
        {
          "system": "http://hl7.org/fhir/us/core/CodeSystem/us-core-tags",
          "code": "sdoh",
          "display": "SDOH"
        }
      ],
      "text": "Social Determinants Of Health"
    }
  ],
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "467771000124109",
        "display": "Assistance with application for food pantry program"
      }
    ]
  },
  "subject": {
    "display": "Patient/example"
  },
  "occurrenceDateTime": "2021-11-20",
  "authoredOn": "2021-11-12T10:59:38-08:00",
  "requester": {
    "display": "Practitioner/practitioner-1"
  }
};