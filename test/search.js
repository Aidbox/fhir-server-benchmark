import http from "k6/http";
import { check } from 'k6';
import { auth, base_url, is_200, normalize } from './utils.js';

const duration = '3m';

const scenarios = normalize({
    text: {
        executor: 'constant-vus',
        vus: 10,
        duration: duration
    },
    date: {
        executor: 'constant-vus',
        vus: 10,
        duration: duration,
        dependsOn: "text"
    },
    token: {
        executor: 'constant-vus',
        vus: 10,
        duration: duration,
        dependsOn: "date"
    },
    reference: {
        executor: 'constant-vus',
        vus: 10,
        duration: duration,
        dependsOn: "token"
    },
    parameters: {
        executor: 'constant-vus',
        vus: 10,
        duration: duration,
        dependsOn: "reference"
    }
});

export const options = {
    scenarios: scenarios,
    thresholds: {'http_req_duration': ['p(99)<10000']}
};

export function setup() {
    return {};
}

export function text ({}) {
    is_200(`${base_url}/Patient?name=John`, auth);
    is_200(`${base_url}/Patient?name=Undefined`, auth);
    is_200(`${base_url}/Patient?name=Some_long_unexisting_string`, auth);
    is_200(`${base_url}/Patient?name:contains=ohn`, auth);
    is_200(`${base_url}/Patient?given:exact=Cathie710`, auth);
};

export function date ({}) {
    // TODO: rand dates ??
    is_200(`${base_url}/Patient?birthdate=2007-03-07`, auth);
    is_200(`${base_url}/Patient?birthdate=eq2007-03-07`, auth);
    is_200(`${base_url}/Patient?birthdate=ne2007-03-07`, auth);
    is_200(`${base_url}/Patient?birthdate=lt2007-03-07`, auth);
    is_200(`${base_url}/Patient?birthdate=gt2007-03-07`, auth);

    // [parameter]=sa2013-03-14
    // [parameter]=eb2013-03-14
    // [parameter]=ap2013-03-14
};

export function token ({}) {
    // TODO: rand codes ??
    is_200(`${base_url}/Observation?code=29463-7`, auth)
    is_200(`${base_url}/Observation?code=http://loinc.org|29463-7`, auth)
    is_200(`${base_url}/Observation?code=|29463-7`, auth)
    is_200(`${base_url}/Observation?code=http://loinc.org|`, auth)
    is_200(`${base_url}/Observation?code:text=Potassium`, auth)

    // :in - The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is in the specified value set. The reference may be literal (to an address where the value set can be found) or logical (a reference to ValueSet.url). If the server can treat the reference as a literal URL, it does, else it tries to match known logical ValueSet.url values.
    // :not - Reverse the code matching described in the paragraph above: return all resources that do not have a matching item. Note that this includes resources that have no value for the parameter - e.g. ?gender:not=male includes all patients that do not have gender = male, including patients that do not have a gender at all
    // :of-type - The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present
    // :above - The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code. For example, the search concept has an is-a relationship with the coding in the resource, and this includes the coding itself.
    // :below - The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code. For example, the coding in the resource has an is-a relationship with the search concept, and this includes the coding itself.
    // :not-in - The search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the coding is not in the specified value set.
};

export function reference ({}) {
    // TODO: rand patients ??
    is_200(`${base_url}/Observation?patient=184cf049-bb4e-91c1-0a44-41c9512eee0c`, auth);

    // [parameter]=[url] where the [url] is an absolute URL - a reference to a resource by its absolute location, or by it's canonical URL
};


export function parameters ({}) {
    // + _include
    is_200(`${base_url}/Observation?_include=patient`, auth);
    // + _revinclude
    // + _id
    is_200(`${base_url}/Patient?_id=184cf049-bb4e-91c1-0a44-41c9512eee0c&_revinclude=Observation:patient`, auth);

    // + _lastUpdated
    // ? _tag
    // + _profile
    // ? _security
    // ? _source
    // + _text
    // + _content
    // + _list
    // + _has
    // ? _type
    // + _sort
    // +_count
    // ? _summary
    // ? _total
    // ? _elements
    // + _contained
    // ? _containedType
};

// Response from customers -----------------------------
//We use compartments for easier AccessControl

// /Patient/<id>/ServiceRequest
// /Patient/<id>/ServiceRequest?status=<status>&category=<category>
// /Patient/<id>/MedicationRequest?status=<status>
// /Patient/<id>/MedicationRequest?_revinclude=ServiceRequest:based-on&_revinclude=MedicationDispense:prescription
// /Patient/<id>/ServiceRequest?_revinclude=Task:focus&_revinclude=ChargeItem:<custom_extension>&_revinclude=ServiceRequest:based-on:ServiceRequest&

// /Organization/<id>/Task
// /Task?restriction-period=le<date>&status=<status>
// /Task?_revinclude=Task:depends-on:Task&_include:iterate=Task:depends-on:Task&_include=focus:<rt>

// This one is a common and complex query that brings all the data we need to build an invoice/receipt

// /Invoice?_id=<id>&_include=charge-item:ChargeItem&_include=subject:Organization&_include=subject:Patient&_include=issuer:Organization&_include:iterate=ChargeItem:part-of:ChargeItem&_include:iterate=ChargeItem:charge-item-definition:ChargeItemDefinition&_include:iterate=ChargeItem:service // <- extension
// &_revinclude=PaymentReconciliation:reques:Invoice // <- extension
// &_revinclude=Task:focus:Invoice&_revinclude:iterate=Account:patient:Patient
// -----------------------------------------------------



// Do we need it?  --------------------------
// number    - Search parameter SHALL be a number (a whole number, or a decimal).
    // not supported [parameter]=100   Values that equal 100, to 3 significant figures precision, so this is actually searching for values in the range [99.5 ... 100.5)
    // not supported [parameter]=100.00  Values that equal 100, to 5 significant figures precision, so this is actually searching for values in the range [99.995 ... 100.005)
    // not supported [parameter]=1e2  Values that equal 100, to 1 significant figures precision, so this is actually searching for values in the range [95 ... 105)
    // [parameter]=lt100    Values that are less than exactly 100
    // [parameter]=le100    Values that are less or equal to exactly 100
    // [parameter]=gt100    Values that are greater than exactly 100
    // [parameter]=ge100    Values that are greater or equal to exactly 100
    // [parameter]=ne100    Values that are not equal to 100 (actually, in the range 99.5 to 100.5)
// uri       - A search parameter that searches on a URI (RFC 3986).
    // GET [base]/ValueSet?url=http://acme.org/fhir/ValueSet/123
    // GET [base]/ValueSet?url=urn:oid:1.2.3.4.5
    // GET [base]/ValueSet?url:below=http://acme.org/fhir/
    // not supported - GET [base]/ValueSet?url:above=http://acme.org/fhir/ValueSet/123/_history/5


// NOT SUPPORTED   --------------------------
// composite - A composite search parameter that combines a search on two values together.
// special   - Special logic applies to this parameter per the description of the search parameter.
// quantity  - A search parameter that searches on a quantity.
  // [parameter]=[prefix][number]|[system]|[code]
