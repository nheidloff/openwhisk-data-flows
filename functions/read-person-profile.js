let main = params => {
    let inputParameters = params.input;
    let userId = inputParameters.id;
    // the real implementation goes here, e.g. a REST API invocation
    let outputParameters = {
        'output-read-person-profile': {
            "firstName": "Niklas",
            "lastName": "Heidloff",
            "id": userId,
            "Email": [
                {
                    "type": "office",
                    "address": [
                        "abc@gmail.com",
                        "asasfddafdfafabc@gmail.com"
                    ]
                },
                {
                    "type": "home",
                    "address": [
                        "wryiuwradsfabc@gmail.com",
                        "hwqrafdasfjabc@gmail.com"
                    ]
                }
            ]
        }
    }
    return outputParameters;
}


/* Input: Sample JSON and Schema

{
    "id": "nheidloff",
    "subject": "hello"
}

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    }
  },
  "title": "Schema Input of read-person-profile"
}

*/


/* Output: Sample JSON and Schema

{
    "firstName": "Niklas",
    "lastName": "Heidloff",
    "id": "28",
    "Email": [
        {
            "type": "office",
            "address": [
                "abc@gmail.com",
                "asasfddafdfafabc@gmail.com"
            ]
        },
        {
            "type": "home",
            "address": [
                "wryiuwradsfabc@gmail.com",
                "hwqrafdasfjabc@gmail.com"
            ]
        }
    ]
}

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "Email": {
      "type": "array",
      "items": {
        "properties": {
          "type": {
            "type": "string"
          },
          "address": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "type": "object"
      }
    }
  },
  "title": "Schema Output of read-person-profile"
}

*/