import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


import{ MovieresultPage } from '../movieresult/movieresult';

import { MoviesProvider } from '../../providers/movies/movies';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
movieDetails=[];
searchQuery: string = '';
items;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public movieProvider:MoviesProvider, public loadingCtrl: LoadingController) {
    this.movieDetails=this.navParams.get("details");

        this.items=this.movieDetails;
  //this.intializeItems();
  }
  intializeItems(): void {

   this.movieDetails=[...this.items];
  }

          getItems(ev: any) {

          this.intializeItems();
          const val= ev.target.value;
          if(val&&val.trim()!=''){
            this.movieDetails = this.movieDetails.filter((item)=>{
              return(item.original_title.toLowerCase().indexOf(val.toLowerCase())>-1);
            })
          }
          }
          onCancel(evt){
              this.movieDetails;
          }
//going to series detail page
      next(index){

        this.navCtrl.push(MovieresultPage,{
          slideData:this.movieDetails,
          value:index
          });
        }
}
