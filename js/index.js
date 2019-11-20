fetch('http://localhost:3000/people/')
    then(function (response) {
        console.log('response from fetching people', response);
    })
    .catch(function (error) {
        console.error('error from fetching people', error);
    });