const fullName = "   Nattakit   Pumbang   ";


const cleanedName = fullName.trim();
console.log(`cleaned Name: '${cleanedName}'`);

const nameParts = cleanedName.split(' ');
console.log("name parts:", nameParts);

const finalparts = nameParts.filter(Boolean);
console.log("final parts:", finalparts);

const firstName = finalparts[0];
console.log(`firstName: '${finalparts}'`);


console.log(`สวัสดีครับ ผมชื่อ${firstName}!`);