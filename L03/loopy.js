const names = ['Justin','Sarah','Chistopher'];

for (let i = 0; i < names.length; i++){

}

names.forEach(name => {
    console.log(name);
});

names.forEach(myfunction);

function myfunction(name) {
    console.log(name);
}

for (let name of names) {
    console.log(name);
}