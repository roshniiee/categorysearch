import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Products } from '../Products';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
  updateboo:boolean=true;
  id;
  name;
  price;
  category;
  column:string;
  order:boolean=true;
productservice:ProductserviceService;
proarr:Products[]=[];
categoryy:string[]=["mobile","laptop"];
  constructor(productservice:ProductserviceService) {
    this.productservice=productservice;
   }

  ngOnInit() {
    this.productservice.fetchdata();
    this.proarr=this.productservice.getdata();
  }
delete(p:Products){
  this.productservice.deletedata(p);
}
Updatedata(dat:Products){
  this.productservice.UpdateData(dat);

}
update(p1:Products){
  this.updateboo=!this.updateboo;
  this.id=p1.id;
  this.name=p1.name;
  this.price=p1.price;
  this.category=p1.category;


}
sort(column:string){
  
  if(this.column==column)
  {
    this.order=!this.order;
  }else{
    this.order=true;
    this.column=column;
  }
}
}
