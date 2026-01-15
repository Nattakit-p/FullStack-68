function yay0Rnay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() *1);

        val ? resolve("lucky!! 🤑") : reject("Nope 😂");
    });
}

async function msg() {
    try {
        const msg = await yay0Rnay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
    
}

msg();
msg();
msg();
msg();
msg();
msg();
msg();