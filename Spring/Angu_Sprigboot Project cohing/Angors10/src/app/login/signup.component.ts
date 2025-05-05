import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',

})
export class SignupComponent implements OnInit {

  constructor(private httpservice: HttpserviceService, private route: Router) { }

  ngOnInit(): void {
  }

  //form->response class me Backend pr 
  // isSuccess(boolen success) 
  //result.put(inputerror,object value)->inputerror{login:is req,password:is req,...}
  //result.put(message,object value)
  //result.put(data,object value)
  //result.put(String key,object value)
  public form = {
    data: { id: null, firstName: '', lastName: '', loginId: '', password: '', dob: '' },
    error: false,
    message: ''
  };

  inputerror = { firstName: '', lastName: '', loginId: '', password: '', dob: '' };

//html->name attribute ho na ho use koi faark nhi pad ra ->yha property ka use krte le jane ke liye.  

  signUp() {

    var self = this;

    this.httpservice.post('http://localhost:8080/Auth/signUp', this.form.data, function (res) {
      self.form.error = !res.success;
      self.form.message = '';
    //first time value le kr aaya to secound time jab veiw se data return  le kr jaye to value blank karne ke liye
    self.inputerror = { firstName: '', lastName: '', loginId: '', password: '', dob: '' };


      if (self.form.error && res.result.inputerror) {
        self.inputerror.firstName = res.result.inputerror.firstName;
        self.inputerror.lastName = res.result.inputerror.lastName;
        self.inputerror.loginId = res.result.inputerror.loginId;
        self.inputerror.password = res.result.inputerror.password;
        self.inputerror.dob = res.result.inputerror.dob;
      }

      if (res.result.message) {
        self.form.message = res.result.message;
      }


    }

    )


  }

}
