import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  // dataArray = ['Summer', 'Winter', 'Autumn','Rainy','Dry'].sort();

  books: any = [] ;
  length:Response;
  constructor(private bookService : BookService) { }

  ngOnInit() {
    this.bookService.getAllBooks()
        .subscribe((response) => {
            this.books = response;
            this.books = this.books.sort((a,b) => a.name.localeCompare(b.name));
        });
  }


}
