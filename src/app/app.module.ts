import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarStartComponent } from './auth/navbar-start/navbar-start.component';
import { StartScreenComponent } from './auth/start-screen/start-screen.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { LeftMenuComponent } from './src/left-menu/left-menu.component';
import { TimerComponent } from './src/main-app-router/timer/timer.component';
import { DashboardComponent } from './src/dashboard/dashboard.component';
import { LoggingStartComponent } from './auth/logging-start.component';
import { RunningAppComponent } from './src/running-app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ProjectListComponent} from './src/project-list/project-list.component';
import {ManualModeComponent} from './src/main-app-router/manual-mode/manual-mode.component';
import { MainAppRouterComponent } from './src/main-app-router/main-app-router.component';
import {ProjectListService} from './projectList.service';
import { HttpClientModule } from '@angular/common/http';
import {UserAuthService} from '../userAuth.service';
import {AuthGuard} from './guards/auth-guard';




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
    ProjectListComponent,
    ManualModeComponent,
    MainAppRouterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProjectListService, UserAuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
