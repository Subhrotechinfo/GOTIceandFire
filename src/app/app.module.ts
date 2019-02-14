import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';
import { BookService } from './book/book.service';
import { BookModel } from './book/book.model';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterDetailComponent } from './character/character-list/character-detail/character-detail.component';
import { HousesComponent } from './houses/houses.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseDetailComponent } from './houses/house-list/house-detail/house-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BookListComponent,
    BookDetailComponent,
    BookComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterDetailComponent,
    HousesComponent,
    HouseListComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
