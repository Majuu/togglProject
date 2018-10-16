import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarStartComponent } from './navbar-start/navbar-start.component';
import { StartScreenComponent } from './start-screen/start-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarStartComponent,
    StartScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
