let main = params => {
    let inputParameters = params.input;
    // the real implementation to send a mail goes here
    let outputParameters = {
        'output-send-mail': {
            'ok': true,            
            'email': inputParameters.email,
            'subject': inputParameters.subject
        }
    }
    return outputParameters;
}


/* Input: Sample JSON and Schema

{
    "email": "abc@gmail.com",
    "subject": "Hello"
}

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    }
  },
  "title": "Schema Input of send-mail"
}

*/

/* Output: Sample JSON and Schema

{
    "ok": true,
    "email": "abc@gmail.com",
    "subject": "Hello"
}

{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "email": {
      "type": "string"
    },
    "subject": {
      "type": "string"
    }
  },
  "title": "Schema Output of send-mail"
}

*/