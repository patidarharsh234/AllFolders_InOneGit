import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { DataValidator } from '../utility/data-validator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {

  // Note->1. jab bhi kisi veiw pr hit karoge phle uske ts(controler pr aayega )use backend pr jayega jo agr data lana hoga to and then backend 
  //          se return TS pr aayega and html pr jayega.
  //       2. like project 0 me preloead ke liye phle ctl pr jata tha then veiw pr aata .
  //       3. Ts pr aayega ->ngonInit methode run karayega backend api hit and then return Ts and go html


  //EDIT->firt like pr click to phle user ke Ts ko hit karega Id ke sath->then Id get ->go backend->get data and come to the ->User Ts->and html 


  
  constructor(private httpservice: HttpServiceService, private router: Router) { }

  ngOnInit() {
    this.preload();
    this.search();
    this.isMastersel=false;
  }

 
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  deleteRecordList: any = [];
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
    searchParams: { },
    message: '',
    error: false
  }
  nextList = 0;

  preload() {

    var self = this;
    this.httpservice.get('http://localhost:8080/User/preload', function (res) {

      self.form.preload = res.result;
   
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
      if (res.result.message) {
        self.form.message = res.result.message;
        self.form.list=null;
        console.log("error or success message->", self.form.message);
      }


    })
  }

  deleteMany(){
    this.form.error = false;
    this.deleteRecordList.length=0;
   
    var isRecordSelected:boolean = false ;
   
      this.checkboxes.forEach((element) => {
        if (element.nativeElement.checked) {
          // console.log('record deleting ' + element.nativeElement.id)
          this.deleteRecordList.push(element.nativeElement.id);
          isRecordSelected = true ;
        }
      });     
    
      if(isRecordSelected){
        var self=this;
      this.httpservice.post('http://localhost:8080/User/deleteMany/'+this.deleteRecordList+'?pageNo='+this.form.pageNo, this.form.searchParams, function (res) {
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
