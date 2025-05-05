import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.css']
})
export class CustomerslistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.customers  ,locator,route);
   }

}
