let main = params => {
    try {
        let subject = params.subject;
        let id = params.id;        

        let outputParameters = {
            'input': {
                'id': id,
                'subject': subject
            },
            'input-application': {
                'id': id,
                'subject': subject
            }
        }
        return outputParameters;
    }
    catch (error) {
        return { // for testing purposes only
            'input': {
                'id': 'heidloff',
                'subject': 'Hi'
            },
            'input-application': {
                'id': id,
                'subject': subject
            }
        }
    }
}

exports.main = main;