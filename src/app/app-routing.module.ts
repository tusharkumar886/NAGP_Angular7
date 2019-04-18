import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'studentList',
    component: StudentListComponent,
    canActivate: [AuthGuard]
  },
  {
        path: 'login',
        component: LoginComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
