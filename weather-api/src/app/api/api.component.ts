import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';
import { WeatherapiService } from '../service/weatherapi.service';

@Component({
  selector: 'app-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './api.component.html',
  styleUrl: './api.component.css'
})
export class ApiComponent  {

  constructor( private data2:WeatherapiService){}
  cityname = "";


  city = "";
  temprature = "";
  humidity = "";
  icon:any="";
  notfound="";


   data:any = "";
  data1:any = "";
  icondata:any="";
 

  get(city:string)
  {
   
    let lat=0;
    let lon=0;
   
    this.data2.get(city).subscribe(response=>{
      this.notfound="";
      this.data=response;
      this.city=this.data.resolvedAddress;
      this.temprature=this.data.currentConditions.temp+" "+"°C";
      this.humidity=this.data.currentConditions.humidity+" "+"%rh";
      lat=this.data.latitude;
      lon=this.data.longitude; 
    

        this.data2.get1(lat,lon).subscribe(response=>{
          this.data1=response;
          this.icondata = this.data1['weather'][0].icon; 
          this.icon= this.data2.get2(this.icondata);
          console.log(this.icon);
          this.cityname = "";  
        }) 
      },
 error =>{
  this.notfound="City not found";
  this.cityname = "";
  this.city = "";
  this.temprature = "";
  this.humidity = "";
  this.icon="";
})  
}
}
