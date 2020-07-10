import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MoviesProvider } from '../../providers/movies/movies';
//import {  Network } from '@ionic-native/network';

import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

movieDetails=[];
newArray=[];
//isNetworkAvailable;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public movieProvider:MoviesProvider) {


   }
ngOnInit(): void {
  // if(this.network.type == 'none')
  // {
  //     this.isNetworkAvailable=true;
  // }else{
  //   this.isNetworkAvailable=false;}
  this.movieProvider.getURL("https://api.themoviedb.org/3/discover/movie?api_key=60ff436f2769f4f8ddf76ac0cc28a39d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1");
  this.movieProvider.getPosts()
              .subscribe(

                      //resolve
                      resultArray =>{
                        this.movieDetails = resultArray["results"];
                        for(let i=0;i<this.movieDetails.length;i++){
                          var date1:any=new Date();
                         var date2:any=new Date( this.movieDetails[i].release_date);
                         var def= date1-date2;
                         var res= Math.floor(def/(1000*86400));
                      
                       if(res<40){
                         this.newArray.push(this.movieDetails[i]);
                        // console.log(this.newArray);
                       }
                      // console.log(this.newArray);
                      }

                    },

                      //reject
                      error =>
                      console.log("Error :: " + error)
                      )



}

  movieList(value){
    // if(this.network.type == 'none')
    // {
    //     this.showPrompt();
    // }
    // else{}
    if(value=='Most Recent'){
    
    this.navCtrl.push(HomePage,{
      details:this.newArray
    });
  }  else if(value=='Popular'){
      this.movieDetails.sort((n1,n2)=>{
        if(n1.popularity<n2.popularity){
          return 1;
        }
        if(n1.popularity>n2.popularity){
          return -1;
        }
        return 0;
    });
    this.navCtrl.push(HomePage,{
      details:this.movieDetails
    });
    }else if(value=='Top-Rated'){
      this.movieDetails.sort((n1,n2)=>{
        if(n1.vote_average<n2.vote_average){
          return 1;
        }
        if(n1.vote_average>n2.vote_average){
          return -1;
        }
        return 0;
    });
    this.navCtrl.push(HomePage,{
      details:this.movieDetails
    });
    }

  }

  // showPrompt() {
  //
  //   const promptAlert = this.alertCtrl.create({
  //     title: 'You are not connected to the Internet',
  //     message: "Please check your Settings and try again.",
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Retry',
  //         handler: data => {
  //           this.movieList;
  //           console.log('Retry clicked');
  //         }
  //       }
  //     ]
  //   });
  //   promptAlert.present();
  //  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');

   // console.log(this.movieDetails[0].popularity);
  }

}
