export const Device =
{
    "resourceType" : "Device",
    "id" : "543210",
    "meta" : {
        "profile" : [
            "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-device"
        ]
    },
    "udiCarrier" : [{"deviceIdentifier" : "23366006"}],
    "status" : "active",
    "manufacturer" : "Motorized Wheelchair Company, Inc.",
    "deviceName" : [
        {
            "name" : "MotorChairPro",
            "type" : "user-friendly-name"
        }
    ],
    "type" : {
        "coding" : [
            {
                "system" : "http://snomed.info/sct",
                "version" : "http://snomed.info/sct/731000124108",
                "code" : "23366006"
            }
        ]
    },
    "patient" : {"display" : "Patient/1"}
};

export const MedicationDispense =
{
  "resourceType" : "MedicationDispense",
  "id" : "1000001",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2020-07-09T15:26:23.217+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-medicationdispense"
    ]
  },
  "extension" : [
    {
      "url" : "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/DispenseRefill",
      "valueQuantity" : {
        "value" : 1
      }
    }
  ],
  "status" : "completed",
  "medicationCodeableConcept" : {
    "coding" : [
      {
        "system" : "http://hl7.org/fhir/sid/ndc",
        "code" : "54458-872-10"
      }
    ]
  },
  "subject" : {
    "reference" : "Patient/1"
  },
  "performer" : [
    {
      "actor" : {
        "reference" : "Practitioner/4"
      }
    }
  ],
  "location" : {
    "reference" : "Location/5"
  },
  "type" : {
    "coding" : [
      {
        "system" : "http://terminology.hl7.org/CodeSystem/v3-ActCode",
        "code" : "RF"
      }
    ]
  },
  "quantity" : {
    "value" : 60
  },
  "daysSupply" : {
    "value" : 30
  }
};

export const Coverage =
{
  "resourceType" : "Coverage",
  "id" : "883210",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2020-10-28T09:26:23.217+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/hrex-coverage"
    ]
  },
  "identifier" : [
    {
      "system" : "http://example.org/someOrg/identifiers/whatever",
      "value" : "1039399818"
    },
    {
      "system" : "http://example.org/new-payer/identifiers/coverage",
      "value" : "234567"
    }
  ],
  "status" : "active",
  "subscriberId" : "97531",
  "beneficiary" : {
    "display" : "Patient/1"
  },
  "payor" : [
    {
      "display" : "Organization/2"
    }
  ]
};

export const Provenance =
{
  "resourceType" : "Provenance",
  "id" : "1000003",
  "meta" : {
    "versionId" : "1",
    "lastUpdated" : "2020-07-11T17:26:23.217+00:00",
    "profile" : [
      "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/pdex-provenance"
    ]
  },
  "target" : [{"display" : "Encounter/7"}
  ],
  "recorded" : "2020-07-11T17:26:23.217+00:00",
  "agent" : [
    {
      "type" : {
        "coding" : [
          {
            "system" : "http://terminology.hl7.org/CodeSystem/provenance-participant-type",
            "code" : "author",
            "display" : "Author"
          }
        ]
      },
      "who" : {
        "display" : "Practitioner/4"
      }
    }
  ],
  "entity" : [
    {
      "extension" : [
        {
          "url" : "http://hl7.org/fhir/us/davinci-pdex/StructureDefinition/ProvenanceSourceFrom",
          "valueCodeableConcept" : {
            "coding" : [
              {
                "system" : "http://hl7.org/fhir/us/davinci-pdex/CodeSystem/ProvenancePayerDataSource",
                "code" : "x12837",
                "display" : "837 claim"
              }
            ]
          }
        }
      ],
      "role" : "source",
      "what" : {
        "display" : "No reference available"
      }
    }
  ]
}
