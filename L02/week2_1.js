const error_status = 400;

if (error_status === 200) {
    //ok!
}
else if (error_status === 400) {
    //error!
}
else{
    //Unknown status
}



switch (error_status) {
    case 200:
    break;
    case 400:
        //Error!
    break;
    default:
    //Unknown status
}


const message =
    (error_status === 200) ? "ok!" : "error!";
console.log(message);