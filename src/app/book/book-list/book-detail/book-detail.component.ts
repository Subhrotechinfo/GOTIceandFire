import { Component, OnInit } from '@angular/core';
import { BookService } from '../../book.service';



@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  
  length:Response;
  authors:any;
  book:any  ={};

  constructor(private bookService : BookService) { }
  ngOnInit() {
      this.bookService.getBookById(1)
          .subscribe((response:Response) => {
            this.book = response;
              // console.log(this.book)
          });

  }

}


