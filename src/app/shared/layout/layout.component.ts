import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import products from '../mock/products';
import { Product } from '../model/product';
import { GetDataService } from '../service/get-data.service';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  message!: boolean;
  cartLenght: any;
  sttSearch =false;
  searchText:any;

  private search$ = new BehaviorSubject<string>('');
  public searchInfo = {
    input: ''
  };
  listProduct: Product[] = products;
  



  constructor(
    private getData: GetDataService
    ) { }
  
  ngOnInit() {
    const me = this;
    me.sttButton();
    me.getCartLenght();
    
   
  }
  public sttButton() {
    this.getData.currentMessage.subscribe(message => this.message = message);
  }

  public getCartLenght() {
    this.getData.currentCartLenght.subscribe(length => this.cartLenght = length)
  }
  public close() {
    if(this.message === true)
    this.message = !this.message
  }

  public onChangeSearchInput(): void {
    const me = this;
    if(me.searchText.length>=1) {
      me.sttSearch = true
    }
    if (me.searchText.length === 0) {
      me.sttSearch = false
    }
  }

}
