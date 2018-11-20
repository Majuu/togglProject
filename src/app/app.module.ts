import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarStartComponent } from './logging-start/navbar-start/navbar-start.component';
import { StartScreenComponent } from './logging-start/start-screen/start-screen.component';
import { SignUpComponent } from './logging-start/sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { LeftMenuComponent } from './running-app/left-menu/left-menu.component';
import { TimerComponent } from './running-app/timer/timer.component';
import { DashboardComponent } from './running-app/dashboard/dashboard.component';
import { LoggingStartComponent } from './logging-start/logging-start.component';
import { RunningAppComponent } from './running-app/running-app.component';
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
