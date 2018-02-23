composer.try(
    composer.sequence(
        params => {
            params['input'] = {
                'input-param1': params['input-param1']
                // add more transformations here 
            }
            return params;
        },
        composer.task('composer-demo-nh/simple1', { merge: true }),
        params => {
            params['input'] = {                
                'input-param1': params['input-param1'],
                'some-more-input-for': 'simple2 function'
                // add more transformations here 
            }
            return params;
        },
        composer.task('composer-demo-nh/simple2', { merge: true })
        //, composer.task('composer-demo-nh/error', { merge: true })
    ),
    params => {
        return { 
            ok: false,
            'message': 'An error has occured in the app ABC',
            'error-from-function': params.error
         } 
    }
)