import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StartScreenComponent} from './auth/start-screen/start-screen.component';
import {SignUpComponent} from './auth/sign-up/sign-up.component';
import {LeftMenuComponent} from './src/left-menu/left-menu.component';
import {TimerComponent} from './src/timer/timer.component';
import {DashboardComponent} from './src/dashboard/dashboard.component';
import {LoggingStartComponent} from './auth/logging-start.component';
import {RunningAppComponent} from './src/running-app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {    path: '', redirectTo: '/login', pathMatch: 'full'},

  {    path: '', component: LoggingStartComponent, children: [
      {path: 'login', component: StartScreenComponent},
      {path: 'signup', component: SignUpComponent},
    ]
  },
  {
      path: 'home', component: RunningAppComponent, children: [
        {
          path: '', redirectTo: 'timer', pathMatch: 'full'
        },
      {
          path: 'timer', component: TimerComponent
      },
      {
          path: 'dashboard', component: DashboardComponent
      },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
