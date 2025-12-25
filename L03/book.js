const book ={
    title: "1984",
    author: "George Orwell",
    isAvailble: true,

    checkOut: function() {
        this.isAvailble = false;
    },
    checkIn: function (){
        this.isAvailble = true;
    }
};

console.log(book.isAvailble);
book.checkOut();
console.log(book.isAvailble);
book.checkIn();
console.log(book.isAvailble)