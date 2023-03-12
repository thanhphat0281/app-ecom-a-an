import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import cart from 'src/app/shared/mock/cart';
import products from 'src/app/shared/mock/products';
import { Cart } from 'src/app/shared/model/cart';
import { Product } from 'src/app/shared/model/product';
import { GetDataService } from 'src/app/shared/service/get-data.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  
  listCart: any;
  sumPrice:number = 0;
  fee =0;
  listProduct: Product[] = products;
  
 
  constructor(private route:Router, private builder: FormBuilder, private getData: GetDataService) { }
  ngOnInit(): void {
    this.getCart();
  }
  public getCart() {
    let cart = localStorage.getItem("Cart") as any;
    this.listCart = JSON.parse(cart);
    this.getTotalPrice()
    console.log(this.listCart)
  }
  public getTotalPrice() {
    let total=0
    this.listCart.map((item:any) =>{
      total+= (item.quantity * item.price)
    })
    
    this.sumPrice =total
    // console.log(total)
    // console.log(this.sumPrice)
 
  }

  public goToCheckOut() {
    
    this.route.navigate(['/checkout'])
  }
    public qtyMinus(id:any,value:any) {
      let qty = Number(value)
      if(Number(value) >1) {
        qty= qty-1
      for (let item in this.listCart) {
        console.log(value)
          if (this.listCart[item].idProduct === id) {
            this.listCart[item].quantity = qty;
          }
        }
        localStorage.setItem("Cart",JSON.stringify(this.listCart))
        this.getTotalPrice()
      }
      if(Number(value)===1) {
        this.getData.removeCartProduct(id)
        this.getCart()
        alert('Sản phẩm sẽ được xóa khỏi giỏ hàng của bạn')
        window.location.reload()
      }
      
    }

    public qtyPlus(id:any,value:any) {
      let qty = Number(value)
      console.log(qty)
      if(Number(value) ) {
        qty= qty+1
      }
      console.log(qty)
      for (let item in this.listCart) {
        console.log(value)
          if (this.listCart[item].idProduct === id) {
            this.listCart[item].quantity = qty;
          }
        }
        localStorage.setItem("Cart",JSON.stringify(this.listCart))
        this.getTotalPrice()
    }

    public delItem(id: any, value: any) {
      this.getData.removeCartProduct(id)
      this.getCart()
      alert('Sản phẩm sẽ được xóa khỏi giỏ hàng của bạn')
      window.location.reload()
    }
    
  
}
