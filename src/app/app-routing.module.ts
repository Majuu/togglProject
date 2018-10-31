import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {StartScreenComponent} from './logging-start/start-screen/start-screen.component';
import {SignUpComponent} from './logging-start/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: StartScreenComponent},
 { path: 'signup', component: SignUpComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
