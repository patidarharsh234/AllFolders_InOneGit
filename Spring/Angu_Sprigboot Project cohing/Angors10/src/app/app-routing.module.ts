import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './login/signup.component';
import { FooterComponent } from './footer/footer.component';


const routes: Routes = [
  {
path:'',
redirectTo:'dashboard',
pathMatch:'full'
  },

  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'userList',
    component: UserlistComponent
  },
  {
    path: 'dashboard',
    component: DasboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path:'signUp',
    component:SignupComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
