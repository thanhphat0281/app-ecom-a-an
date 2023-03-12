import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/model/product';
import { GetDataService } from 'src/app/shared/service/get-data.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})
export class ProductDetailPageComponent implements OnInit {
  quantityForm!: FormGroup;
  controlNames = { 
    quantity : "quantity",
  }
  product!:any;
  
 
  constructor(
    private getDataService: GetDataService, 
    private route:ActivatedRoute,
    private builder: FormBuilder,) { }
  
  ngOnInit(): void {
    const me = this;
    me.getProductById();
    me.quantityForm = me.builder.group({
      [me.controlNames.quantity]:[1],
  })
  }
  public getProductById() {
    const me = this;
    me.route.paramMap.pipe().subscribe(pram =>{   
      me.getDataService.getSingleProduct(String(pram.get('id'))).subscribe(_res=> {
          me.product = _res
          console.log(me.product)
      })
    })
  }
  public addToCart(product:any) {
    const qty = this.quantityForm.get(this.controlNames.quantity)?.value
    // console.log(qty)
    const allCart = {
      idProduct: product.id,
      name: product.title,
      price: product.price,
      image: product.image,
      quantity: qty
    }
    this.getDataService.addCart(allCart)
    alert('Đã thêm vào giỏ hàng')

    // console.log(allCart) 
  }

  public qtyMinus(){
    let qty = this.quantityForm.get(this.controlNames.quantity)?.value
    if(qty> 1) {
      qty= qty -1
    }
    this.quantityForm.patchValue({[this.controlNames.quantity]:qty})
  }
  public qtyPlus() {
    let qty = this.quantityForm.get(this.controlNames.quantity)?.value
    if(qty) {
       qty = qty+1
    }
    this.quantityForm.patchValue({[this.controlNames.quantity]:qty})
  }
}
