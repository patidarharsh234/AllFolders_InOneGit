import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',

})
export class UserlistComponent implements OnInit {

  constructor(private httpservice: HttpserviceService, private router: Router) { }

  ngOnInit(): void {
    this.preload();
    this.search();
  }
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  deleteRecoredList: any = [];
  checkList = 0;
  isMastersel: boolean = false;


  //result.put(data,value)=>(Key-data,value-{firstName=harsh,lastName=patidar,loginId=harsh@gmail.com,password=Rays@123,dob=30/06/1995})
  //res.result.data.firstName / res.result.data.lastName / res.result.data.loginId....

  //addResult(key String,object value)-->{result.put(rolepreload,roleList)}_OR_result.put(userpreload,userList)_OR..
  //res.result.roleList  /res.result.userList ...
  public form = {
    list: [],
    preload: [],
    pageNo: 0,
    searchParams: { firstName: '', lastName: '', dob: '', roleId: 0 },
    message: '',
    error: false
  }
  nextList = 0;

  preload() {

    var self = this;
    this.httpservice.get('http://localhost:8080/User/preload', function (res) {

      self.preload = res.result;
    }
    );

  }

  search() {
    var self = this;
  
    this.httpservice.post('http://localhost:8080/User/search/'+self.form.pageNo,self.form.searchParams, function (res) {
      self.form.error = !res.success;

      if (res.success) {
        self.form.list = res.result.data;
        self.nextList = res.result.nextList;
      }
      if (self.form.message) {
        self.form.message = res.result.message;
      }


    })
  }

  deleteManey() {
    this.form.error = false;
    this.deleteRecoredList = 0;

    var isRecordSelected: boolean = false;
    this.checkboxes.forEach((element) => {
      if (element.nativeElement.checked) {
        this.deleteRecoredList.push(element.nativeElement.id);
        isRecordSelected = true;
      }
    }
    );

    var self = this;

    if (isRecordSelected) {
      this.httpservice.post('http://localhost:8080/User/deleteMany/'+this.deleteRecoredList+'?pageNo='+this.form.pageNo, this.form.searchParams, function (res) {
        self.form.error = !res.success;//list ke liye//view pr condition me add krna.

        if (res.success) {
          self.form.list = res.result.data;
        }
        if (res.result.message) {
          self.form.message = res.result.message;
        }

      }
      );
    } else {
      this.form.error = true;
      this.form.message = " selecte At least one Record";
    }


  }

  next() {
    this.form.pageNo++;
    this.search();
    this.isMastersel = false;
  }

  previous() {
    if (this.form.pageNo > 0) {
      this.isMastersel = false;
      this.form.pageNo--;
      this.search();

    }
  }

  //<a (click)="edit('/user/'+m.id)">edit</a>
  edit(page) {
    this.router.navigateByUrl(page);
  }

  add() {
    this.router.navigateByUrl('/user');
  }
  submit() {
    this.form.pageNo == 0;
    this.search();
  }


  checkUncheckAll(event) {
    const checked = event.target.checked;
    //singl checkboxes he ->forEach ki help se nikalte ja re and checked krte ja re
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = checked
    });
  }
  checklistUpdate() {

    this.isMastersel = false;
    this.checkList = 0;
    this.checkboxes.forEach((element) => {
      //ak bar click kiya checbox pr ye methode run-2nd time click kiya checbox pr vaps ye methode run hogi.
      if (element.nativeElement.checked == true) {
        this.checkList = this.checkList + 1;
      }
    });
    if (this.checkList == this.form.list.length) {
      this.isMastersel = true;

    }
  }

}
