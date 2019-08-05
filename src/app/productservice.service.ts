import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from './Products';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
http:HttpClient;
fetch:boolean=false;
ProductArray:Products[]=[];


  constructor(http:HttpClient) {
    this.http=http;
   }
   fetchdata(){
     this.http.get('./assets/Products.json').subscribe(
       data=>{
 if(!this.fetch){
this.convert(data);
this.fetch=true;
}
       }
     )
   }
   convert(data:any){
     for( let pro of data["Products"]){
       let product=new Products(pro.id,pro.name,pro.price,pro.category);
       this.ProductArray.push(product);
     }
   }
   getdata():Products[]{
     return this.ProductArray;
   }
   deletedata(p:Products){
     let index=this.ProductArray.indexOf(p);
     this.ProductArray.splice(index,1);
   }
   addData(p:Products){
     this.ProductArray.push(p);
   }
   UpdateData(dat:Products){
    let pid=dat.id;
    for(let i=0;i<this.ProductArray.length;i++){
      if(pid==this.ProductArray[i].id)
      {
        this.ProductArray[i].id=dat.id;
        this.ProductArray[i].name=dat.name;
        this.ProductArray[i].price=dat.price;
        this.ProductArray[i].category=dat.category;
        
      }
      
    }

   }
   ProductArray1:Products[];
//  SearchData(p3):Products[]{
// this.ProductArray1=[];
// for(let po of this.ProductArray){
//   if(po.id==p3.id){
//     this.ProductArray1.push(po);
//   }
// }
// return this.ProductArray1;
//    }
SearchData(p3):Products[]{
  this.ProductArray1=[];
  for(let po of this.ProductArray){
    if(po.category==p3.category){
      this.ProductArray1.push(po);
    }
  }
  return this.ProductArray1;
     }

}
