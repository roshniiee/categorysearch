import { Component, OnInit } from '@angular/core';
import { Products } from '../Products';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-searchproduct',
  templateUrl: './searchproduct.component.html',
  styleUrls: ['./searchproduct.component.css']
})
export class SearchproductComponent implements OnInit {
Producttt:Products[]=[];
ca:string[]=["mobile","laptop"];
pser:ProductserviceService;
  constructor(pser:ProductserviceService) {
    this.pser=pser;
   }
   search(p){
    this.Producttt=this.pser.SearchData(p);
  
    }
  ngOnInit() {
  }
 

}
