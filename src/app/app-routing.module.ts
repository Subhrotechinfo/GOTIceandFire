import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book/book-list/book-detail/book-detail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    { path: 'book', component: BookComponent },
    { path: 'body-detail', component: BookDetailComponent }
];


@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}