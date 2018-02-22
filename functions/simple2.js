let main = params => {
    let inputParameters = params.input;
    let outputParameters = {
        'output-simple2': {
            'some-parameter': 'value of some-parameter in simple2',
            'echo-input-parameters': inputParameters
        }
    }
    return outputParameters;
}