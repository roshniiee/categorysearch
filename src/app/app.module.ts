import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowproductComponent,
    AddproductComponent,
    SearchproductComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClient,ProductserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
