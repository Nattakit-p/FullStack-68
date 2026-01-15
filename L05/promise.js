let myPromise = new Promise (function(myRsolve, myReject) {
    myRsolve();
    myReject();
});

myPromise.then(
    function(value) { /* code if success */},
    function(error) { /* code if some error*/}
);