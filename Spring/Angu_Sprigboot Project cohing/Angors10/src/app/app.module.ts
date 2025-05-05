import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './user/userlist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './login/signup.component'
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{HttpserviceService} from './httpservice.service';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserlistComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
  export class AppModule { }
