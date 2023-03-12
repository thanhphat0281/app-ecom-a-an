import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/shared/service/get-data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-payment-success-page',
  templateUrl: './payment-success-page.component.html',
  styleUrls: ['./payment-success-page.component.scss']
})
export class PaymentSuccessPageComponent implements OnInit {
  data: any
  listCart: any;
  sumPrice=0;
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getTotalPrice();
    this.getDataService.currentData.subscribe(data=> this.data = data)
    console.log(this.data)
  }
  public getTotalPrice() {
    let cart = localStorage.getItem("Cart") as any;
    this.listCart = JSON.parse(cart)
    let total=0
    this.listCart.map((item:any) =>{
      total+= (item.quantity * item.price)
    })
    this.sumPrice =total
    // console.log(total)
    // console.log(this.sumPrice)
 
  }

}
