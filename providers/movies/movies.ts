
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
//import { Firebase } from '@ionic-native/firebase';

@Injectable()
export class MoviesProvider {
  //hostUrl = "https://api.themoviedb.org/3/discover/movie?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
  
  statusText="API Error";
  postsURL;

constructor(private http: Http) {
  console.log('Hello ProductserviceProvider Provider');
}
getURL(host){
  this.postsURL=host;
}
getPosts(): Observable<any> {
       return this.http
           .get(this.postsURL)
           .map((response: Response) => {
               return response.json();
           })
           .catch(this.handleError);
   }

   private handleError(error: Response) {
       return Observable.throw(error.statusText);
    }


}
