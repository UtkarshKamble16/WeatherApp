import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData>{
      return this.http.get<WeatherData>('https://openweather43.p.rapidapi.com/weather',{
      headers: new HttpHeaders()
      .set('X-RapidAPI-Host','openweather43.p.rapidapi.com')
      .set('X-RapidAPI-Key','ceb0299a19mshc1ea2944ad27449p1932dejsnbf664a959ecb'),
      params: new HttpParams()
      .set('q',cityName)
      .set('units','standard')
      .set('mode','json')
    })
  }
}
