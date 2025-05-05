import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



// html ->input tag me Name Atrribute ka use na kre tab bhi koi problem nahi aa ri. 
//HTML->eski inpute filed ki name atribute ka use ham ->esi ke Ts pr kr sakte he->Like next||previes me kon sa aara to ye name attribute se decide hoga.
  constructor(private router: Router, private http: HttpserviceService) { }

  ngOnInit(): void {
  }

  form = {
    error: false,
    loginId: '',
    password: '',
    message: '',

  };

  inputerror = {
    loginId:'',
    password:''
  };

  singnIn() {

    var self = this;

    this.http.post('http://localhost:8080/Auth/login', this.form, function (res) {
     

      // eske hone se first time validation message lata then->data fell kr ke bhejte to ->or ye point ka use krte he to->validation ki value hat jati he.
       self.inputerror = { loginId: '', password: '' };
       self.form.message = '';
      self.form.error = !res.success;//front End pr eska use ->like=> ! from.error/form.error

      if(res.result.message){
        self.form.message=res.result.message;
      }
      if( res.result.inputerror){

       self.inputerror.loginId= res.result.inputerror.loginId;
       self.inputerror.password=res.result.inputerror.password;
      }

      if(res.success){
     localStorage.setItem("fName",res.result.data.firstName);
     localStorage.setItem("role",res.result.data.roleName);

     self.router.navigateByUrl('/dashboard');
      }

    }


    )
  }
 signUp(){
  this.router.navigateByUrl('/signUp');
 }



}
