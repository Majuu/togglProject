import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarStartComponent } from './auth/navbar-start/navbar-start.component';
import { StartScreenComponent } from './auth/start-screen/start-screen.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { LeftMenuComponent } from './src/left-menu/left-menu.component';
import { TimerComponent } from './src/timer/timer.component';
import { DashboardComponent } from './src/dashboard/dashboard.component';
import { LoggingStartComponent } from './auth/logging-start.component';
import { RunningAppComponent } from './src/running-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarStartComponent,
    StartScreenComponent,
    SignUpComponent,
    LeftMenuComponent,
    TimerComponent,
    DashboardComponent,
    LoggingStartComponent,
    RunningAppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
