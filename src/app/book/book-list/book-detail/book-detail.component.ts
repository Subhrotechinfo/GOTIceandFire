import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';
import { Subscription } from 'rxjs';
import { BookModel } from '../../book.model';
import { stringify } from '@angular/core/src/render3/util';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  
  length:Response;
  authors:any;
  books: any =[];
  constructor(private bookService : BookService) { }
  ngOnInit() {

    // console.log(
    //     this.bookService.getAllBooks()
    //         .subscribe((response) => {
    //           for(let i= 0; i<= response ;i++ ){
    //             this.books = new BookModel(
    //               response[0].authors,
    //               response[0].country,
    //               response[0].isbn,
    //               response[0].mediaType,
    //               response[0].name,10,
    //               response[0].publisher,
    //               response[0].released);
    //               console.log('====>',this.author = this.books);
    //           }
    //         // console.log(response);

            // this.author= response[0].authors;
            // console.log(response: Response);
          // }));
      this.books = this.bookService.getAllBooks()
          .subscribe((response:Response)=> {
            this.books = response;
            // console.log(this.books[1]);
            for(let i =0 ; i<this.books.length; i++) {
              // console.log(this.books[i].name);
              
            }
                
          });

  }

}


