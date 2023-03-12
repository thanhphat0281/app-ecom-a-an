import { Component, OnDestroy, OnInit } from '@angular/core';
import brands from 'src/app/shared/mock/brands';
import category from 'src/app/shared/mock/category';
import color from 'src/app/shared/mock/color';
import products from 'src/app/shared/mock/products';
import { Brands } from 'src/app/shared/model/brands';
import { Category } from 'src/app/shared/model/category';
import { Color } from 'src/app/shared/model/color';
import { Product } from 'src/app/shared/model/product';
import { GetDataService } from 'src/app/shared/service/get-data.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  rangeValues: number[] = [0,1000];
  listColor: Color[] = color;
  listProduct: Product[] = products;
  listCategory: Category[] = category;
  listBrand: Brands[] = brands;
  filterProduct :Product[]=[]
  constructor() { }
  
  ngOnInit(): void {
    this.getProductByCategory(name)
  }
  public getProductByCategory(nameCate:any):void {
    if(!nameCate) {
      const me = this;
      me.filterProduct = me.listProduct
    }
    else {
      const me = this;
      me.filterProduct = me.listProduct.filter((val:any)=> {
        if(val.category === nameCate) {
          return val
        }
      })
    }
  }
  public getProductByColor(nameColor: any):void {
    if(!nameColor) {
      const me = this;
      me.filterProduct =  me.listProduct
    }
    else {
      const me = this;
      me.filterProduct = me.listProduct.filter((val:any)=> {
        if(val.color === nameColor) {
          return val
        }
      })
      console.log(this.filterProduct)
    }
  }
 
  public getProductByBrand( nameBrand: any) {
    for(let item in this.listBrand) {
      if(this.listBrand[item].name === nameBrand){
        console.log(this.listBrand[item])
        this.listBrand[item].stt = !this.listBrand[item].stt
      }
    }
    for(let i in this.listBrand){
      if(this.listBrand[i].stt === true) {
        this.filterProduct = this.listProduct.filter((val:any)=> {
          if(val.brands === nameBrand) {
            return val
          }
        })
        console.log(this.filterProduct)
      }
    }
  }

  public rangePrice(event: any) {
    if(!event) {
      const me = this;
      me.filterProduct = me.listProduct
    }
    else {
      const me = this;
      me.filterProduct = me.listProduct.filter((val:any)=>{
        if((val.price <= event[1]) && (val.price >= event[0])) {
          return val
        }
      })
    }
  }
}
