function generateTempId(){
    const randomPart = Math.random().toString(36).substring(2, 8);
    return randomPart.toUpperCase();
}

const orderId = generateTempId();
console.log(`ID ออร์เดอร์ชั่วคราว: ${orderId}`);