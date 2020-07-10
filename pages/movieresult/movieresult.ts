import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-movieresult',
  templateUrl: 'movieresult.html',
})
export class MovieresultPage {

movieResult=[];
data;
dataResult;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.movieResult=this.navParams.get("slideData");
this.data=this.navParams.get("value");
this.dataResult=this.movieResult[this.data];
//console.log(this.movieResult[0].backdrop_path);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieresultPage');
  }

}
