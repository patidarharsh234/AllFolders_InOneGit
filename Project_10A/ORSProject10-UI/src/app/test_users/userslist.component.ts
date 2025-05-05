import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.Users  ,locator,route);
   }


}
