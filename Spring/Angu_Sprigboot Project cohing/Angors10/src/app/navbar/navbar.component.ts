import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public form = {
    data: { id: null, firstName:null, role:null }
  };

  isLogin() {
    let check = localStorage.getItem("fName");

    if (check != null) {
      this.form.data.firstName=localStorage.getItem("fName");
      this.form.data.role=localStorage.getItem("role");
      return true;
    }else{
      return false;
    }

  }
  islogout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
