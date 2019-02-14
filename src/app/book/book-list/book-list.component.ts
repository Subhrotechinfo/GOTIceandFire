import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  dataArray = ['Summer', 'Winter', 'Autumn','Rainy','Dry'].sort();


  
  constructor() { }

  ngOnInit() {
  }

}
