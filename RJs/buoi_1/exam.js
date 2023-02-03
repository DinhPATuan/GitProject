class Book{
    constructor(bookCode,name,price,author){
        this.bookCode = bookCode;
        this.name = name;
        this.price = price;
        this.author = author;
    }
}

class ficBook extends Book{
    constructor(category){
        super(bookCode,name,price,author)
        this.category = category;
    }
}