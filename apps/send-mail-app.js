composer.try(
    composer.sequence(
        composer.task('composer-demo-nh/transform-read-person-profile', { merge: true }),
        composer.task('composer-demo-nh/read-person-profile', { merge: true }),
        composer.task('composer-demo-nh/transform-send-mail', { merge: true }),
        composer.task('composer-demo-nh/send-mail', { merge: true })
    ),
    params => {
        return { 
            ok: false,
            'message': 'An error has occured in the app send-mail-app',
            'error-from-function': params.error
         } 
    }
)