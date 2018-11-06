import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StartScreenComponent} from './logging-start/start-screen/start-screen.component';
import {SignUpComponent} from './logging-start/sign-up/sign-up.component';
import {LeftMenuComponent} from './running-app/left-menu/left-menu.component';
import {TimerComponent} from './running-app/timer/timer.component';
import {DashboardComponent} from './running-app/dashboard/dashboard.component';
import {LoggingStartComponent} from './logging-start/logging-start.component';
import {RunningAppComponent} from './running-app/running-app.component';

const appRoutes: Routes = [
  {    path: '', redirectTo: '/login', pathMatch: 'full'},

  {    path: '', component: LoggingStartComponent, children: [
      {path: 'login', component: StartScreenComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  },

  {    path: 'home', redirectTo: '/home/timer', pathMatch: 'full'},

  {    path: 'home', component: RunningAppComponent, children: [
      {path: 'timer', component: TimerComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
