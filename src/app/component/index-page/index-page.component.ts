import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';
import { GetDataService } from 'src/app/shared/service/get-data.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  listProduct!: Product[];
  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getProducts()
  }
  public getProducts() {
    const me = this;
    me.getDataService.getProduct().pipe().subscribe((res)=> {
      me.listProduct = [...(res as any)]
      // console.log(this.listProduct)
    })
}
}
