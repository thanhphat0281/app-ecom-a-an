import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  public lenght: BehaviorSubject<number> = this.getData.cartLength
  cart:any;
  sttButton =false;
  
  menu = [
    {
      "name" : "Home",
      "router" : "home"
    },
    {
      "name" : "Shop",
      "router" : "shop"
    },
    {
      "name" : "Product",
      "router" : "product"
    },
    {
      "name" : "Cart",
      "router" : "cart"
    },
    {
      "name" : "Check Out",
      "router" : "checkout"
    },
  ]
  
  constructor( private getData: GetDataService) { }

  ngOnInit(): void {
    this.lenghtCart()
  }
  public async lenghtCart() {
    this.cart =  JSON.parse(await this.getData.getCart()).length ;
    console.log(this.cart)
  }
  public btnSearch() {
      this.sttButton = !this.sttButton
      this.getData.getStatusBtn(this.sttButton)
  }
  public createMessage() {
    this.getData.changeMessage(this.sttButton = !this.sttButton);
  }
}
