import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {

  constructor(private http :HttpClient) { }

  get(city:string)
  {
    const url=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/
       ${city}?key=KPS9UTV6FX3SC6A8FAES3UGE5&unitGroup=metric`;
       return this.http.get(url);
  }

  get1(lat:any,lon:any)
  {
    const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc0e302589cbccec59a95eed7d75a97f`;
    return this.http.get(url1);
  }

  get2(url:string)
  {
    const url2=`http://openweathermap.org/img/wn/${url}.png`;
    return url2;
  }

  }
