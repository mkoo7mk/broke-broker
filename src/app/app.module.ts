import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
<<<<<<< HEAD
=======
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 65860c6 (Navbar start)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    XyzComponent
=======
    XyzComponent,
    BoardComponent,
    SquareComponent,
    NavbarComponent
>>>>>>> 65860c6 (Navbar start)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
