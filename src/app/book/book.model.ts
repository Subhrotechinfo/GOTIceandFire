export class BookModel {

     author: string;
     country: string; 
     isbn: string;
     mediaType: string;
     name: string;
     numberOfPages: number;
     publisher: string;
     released: Date;

     constructor(
            author: string,
            country: string, 
            isbn: string,
            mediaType: string,
            name: string,
            numberOfPages: number,
            publisher: string,
            released: Date) {
                 this.author=author;
                 this.country= country;
                 this.isbn = isbn;
                 this.mediaType = mediaType;
                 this.name = name;
                 this.numberOfPages = numberOfPages;
                 this.publisher = publisher;
                 this.released = released;
            }  

}

