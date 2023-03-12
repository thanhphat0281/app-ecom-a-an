import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private api:string = environment.api + 'products';
  public cartLength = new BehaviorSubject<number>(0);
  currentCartLenght = this.cartLength.asObservable();

  messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();
  keyFilter: any
  private dataCheckOut = new BehaviorSubject<object>({})
  currentData = this.dataCheckOut.asObservable()
  constructor(private http:HttpClient) { }
  public getProduct(){
    const url = this.api
    return this.http.get(url)
  }
  public getSingleProduct(id:string){
    const url = `${this.api}/${id}`
    return this.http.get(url)
  }


  public createNewCart() {
    return localStorage.setItem("Cart", JSON.stringify([] as any));
  }
  public async getCart() {
    let cart = localStorage.getItem("Cart") as any;
    if (!cart) {
      return this.createNewCart();
    } else {
      this.cartLength.next(JSON.parse(cart).length)
      // console.log(this.cartLength.value)
      return cart
    }
  }

  public async addCart(value: any) {
    let cart = JSON.parse(await this.getCart());
    console.log(cart)
    for (let item in cart) {
      if (cart[item].idProduct === value.idProduct) {
        cart[item].quantity += value.quantity;
        return localStorage.setItem("Cart", JSON.stringify(cart));
      }
    }
    cart.push(value);
    this.cartLength.next(cart.length);
    console.log(this.cartLength)

    return localStorage.setItem("Cart", JSON.stringify(cart));
  }

  public async removeCartProduct(value: any){
    console.log(value)
    let cart = JSON.parse(await this.getCart());
    cart =  cart.filter((item:any) =>{
      return item.idProduct !== value;
    }) 
    this.cartLength.next(cart.length)
    return localStorage.setItem("Cart", JSON.stringify(cart));
  }
  
  public getStatusBtn(value:any) {
    return value
  }

  public changeMessage(message: boolean) {
    this.messageSource.next(message);
  }

  public getDataCheckOut(value:any ) {
    this.dataCheckOut.next(value)
  }

  public createKey() {
    return sessionStorage.setItem('Key',JSON.stringify([] as any))
  }
 

  public async getKey() {
    let key = sessionStorage.getItem('Key') as any
    if(!key) {
      return this.createKey()
    }
    else {
      return key
    }
  }
  // public async filterProduct(value:any) {
  //   let key = JSON.parse(await this.getKey());
    
  //   for(let item in key) {
  //     if(key[item].name === value.name)
  //     {
  //       key[item].stt = !key[item].stt;
  //       return sessionStorage.setItem('Key',JSON.stringify(key))
  //     }
  //   }
  //   key.push(value)
  //   console.log(key)
  //   return sessionStorage.setItem('Key',JSON.stringify(key))
  // }
  

  public filterProduct(event: any, nameBrand: any) {
      
  }
}
