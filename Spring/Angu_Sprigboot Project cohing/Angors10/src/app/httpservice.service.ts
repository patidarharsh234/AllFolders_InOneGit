import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http: HttpClient) { }


  get(endpoint, callback) {
    return this.http.get(endpoint).subscribe((data) => { callback(data) });
  }

 post(endpoint,bean,callback){

  return this.http.post(endpoint,bean).subscribe((data)=>{callback(data)});
 }

 getPathVariabel(route:ActivatedRoute,callback){
  route.params.subscribe(params=>{callback(params)});
 }


}
