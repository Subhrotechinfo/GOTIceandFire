export class BookModel {
     constructor(
            private author: string,
            private country: string, 
            private isbn: string,
            private mediaType: string,
            private name: string,
            private numberOfPages: number,
            private publisher: string,
            private released: Date) {}  
             
}