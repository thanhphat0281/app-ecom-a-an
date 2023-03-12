import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetDataService } from 'src/app/shared/service/get-data.service';
@Component({
  selector: 'app-check-out-page',
  templateUrl: './check-out-page.component.html',
  styleUrls: ['./check-out-page.component.scss'],
  providers:[]
})
export class CheckOutPageComponent implements OnInit {

  checkOutForm!: FormGroup;
  listCart!:any;
  sumPrice = 0;
  fee =0;
  submitted = false;

  controlNames = {
    firstName : "firstName",
    lastName : "lastName",
    companyName :"companyName",
    email: "email",
    country: "country",
    address: "address",
    town: "town",
    zipcode: "zipcode",
    phoneNo: "phoneNo",
    comment:"comment"
  }
  controlValue = {
    firstName : "",
    lastName : "",
    companyName :"",
    email: "",
    country: "",
    address: "",
    town: "",
    zipcode: "",
    phoneNo: "",
    comment:""
  }
  cities = [
    {name: 'United State', code: 'NY'},
      {name: 'United Kingdom', code: 'RM'},
      {name: 'Germany', code: 'LDN'},
      {name: 'France', code: 'IST'},
      {name: 'India', code: 'PRS'},
      {name: 'Australia', code: 'PRS'},
      {name: 'Brazil', code: 'PRS'},
      {name: 'Canada', code: 'PRS'},
      {name: 'VietNam', code: "VN"}
  ];

 
  msgForm = {
    required: 'Please input value',
    email:'Please email value',
    pattern:'Please enter a valid phone number'
  };
  // msgEmail = {
  //   email: 'Please input value',
  
  // };
 
 
  constructor( 
    private builder: FormBuilder,
    private getDataService: GetDataService,
    private router: Router
    ) {
  
   }

  ngOnInit(): void {
    const me = this;
     me.initForm();
     me.getTotalPrice();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.checkOutForm.controls;
  }
  private initForm():void {
    const me = this;
    me.checkOutForm = me.builder.group({
      firstName:['',[Validators.required]],
      [me.controlNames.lastName]:['',[Validators.required]],
      [me.controlNames.companyName]:['',[Validators.required]],
      [me.controlNames.email]:['',[Validators.email,Validators.required]],
      [me.controlNames.country]:['',[Validators.required]],
      [me.controlNames.address]:['',[Validators.required]],
      [me.controlNames.town]:['',[Validators.required]],
      [me.controlNames.zipcode]:['',[Validators.required]],
      [me.controlNames.phoneNo]:['',[Validators.required,Validators.pattern("[0-9]{9}$")]],
      [me.controlNames.comment]:['',[Validators.required]],
    })
  }
  public validateZipcode() {
    const me = this;
    const ipCountry = me.checkOutForm.get(this.controlNames.country)?.value
    
    if(ipCountry ==='VietNam') {
      console.log('aaa')
      this.checkOutForm.get(this.controlNames.zipcode)?.clearValidators();
      this.checkOutForm.get(this.controlNames.zipcode)?.updateValueAndValidity()
    }
    else {
      this.checkOutForm.get(this.controlNames.zipcode)?.setValidators([Validators.required]);
      this.checkOutForm.get(this.controlNames.zipcode)?.updateValueAndValidity()

    }
  }

  public onSubmit() {
    const me = this;
    me.checkOutForm.markAllAsTouched();
    me.checkOutForm.markAsDirty();
    me.checkOutForm.updateValueAndValidity();
    Object.keys(me.checkOutForm.controls).map(
      controlName => {
        const control = me.checkOutForm.get(controlName)
        control?.markAsDirty();
        control?.markAllAsTouched();
        control?.updateValueAndValidity();
      }
    );
    if(me.checkOutForm.valid) {
      me.getDataService.getDataCheckOut(me.checkOutForm.value)
      this.router.navigate(['/success'])
    }
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
