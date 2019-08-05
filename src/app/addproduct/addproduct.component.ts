import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Products } from '../Products';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  category:String[]=["mobile","laptop"];
prodserv:ProductserviceService;
  constructor(prodserv:ProductserviceService) {
    this.prodserv=prodserv;
   }

  ngOnInit() {
  }
  add(pr:Products){
    let pobj=new Products(pr.id,pr.name,pr.price,pr.category);
    this.prodserv.addData(pobj);
  }

}
