import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';
import { Product } from 'src/app/shared/model/product';
import { GetDataService } from 'src/app/shared/service/get-data.service';



@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent implements OnInit {
  // listProduct!: Product[];
  listProduct:Product[] =[];
  @Input()
  set filterProduct(data: Product[]) {
    this.listProduct = data
    // console.log(this.listProduct)
  }
  constructor(
    private getDataService:GetDataService,
    private primengConfig: PrimeNGConfig
    ) 
    {}
  sortOptions!: SelectItem[] ;
  viewOptions!: SelectItem[];
  sortOrder!: number ;
  sortField!: string ;
  product!: any;
  viewChange=6

  ngOnInit(): void {
   
    this.sortOptions = [
      {label: 'high to low', value: '!price'},
      {label: 'low to high', value: 'price'},
    ];
    this.viewOptions = [
      {label:'6' , value:6},
      {label: '8', value:8}
    ]
    this.primengConfig.ripple = true;
  }
  public getProductById(id:any) {
    const me = this;
    me.getDataService.getSingleProduct(id).pipe().subscribe(pram =>{   
     this.product = pram as any
      // console.log(this.product)
    })
}
  public onSortChange(event: { value: any; }) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }
  public onViewChange(event: { value: any; }) {
    this.viewChange = event.value;
   console.log(this.viewChange)
  }
  public addToCart(selectProduct : any) {
    console.log(selectProduct)
    const allCart = {
      idProduct: selectProduct.id,
      name: selectProduct.title,
      price: selectProduct.price,
      image: selectProduct.image,
      quantity: 1
    }
    this.getDataService.addCart(allCart)
    alert('Đã thêm vào giỏ hàng')

  }

}
