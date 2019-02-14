import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
    constructor(private http: HttpClient){}
    getAllBooks() {
        return this.http.get('https://anapioficeandfire.com/api/books/');
                // .subscribe((response) => {
                //     // console.log(response);retunr 
                //     return response; 
                // });
    }
    getBookById(id:number) {
        return this.http.get(`https://anapioficeandfire.com/api/books/`+id);
    }

}



