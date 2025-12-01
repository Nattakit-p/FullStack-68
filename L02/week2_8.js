const registrationDate = new Date('2077-08-15T10:30:00');

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'asia/bangkok'
};

const formattedDate =   
    registrationDate.toLocaleDateString('th-TH', options);

console.log(`วันที่สมัครสมาชิก: ${formattedDate}`);