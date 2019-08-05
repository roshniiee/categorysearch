import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';


const routes: Routes = [
  {
    path:'app-showproduct',
    component:ShowproductComponent
  },
  {
    path:'app-addproduct',
    component:AddproductComponent
  },
  {
    path:'app-searchproduct',
    component:SearchproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
