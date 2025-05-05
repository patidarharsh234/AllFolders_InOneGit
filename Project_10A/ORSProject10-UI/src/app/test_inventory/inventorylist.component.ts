import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  
  selector: 'app-inventorylist',
  templateUrl: './inventorylist.component.html',
  styleUrls: ['./inventorylist.component.css']
})
export class InventorylistComponent extends BaseListCtl {

  constructor(public locator:ServiceLocatorService,public route:ActivatedRoute) {
    super(locator.endpoints.Inventory  ,locator,route);
   }





   

}
