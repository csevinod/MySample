import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
//import { Network } from '@ionic-native/network';
//import {  NetworkOriginal } from '@ionic-native/network';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovieresultPage } from '../pages/movieresult/movieresult';
import { CategoriesPage } from '../pages/categories/categories';
import { MoviesProvider } from '../providers/movies/movies';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovieresultPage,
    CategoriesPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovieresultPage,
    CategoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //NetworkOriginal
   // Network,

   //  Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,

  ]
})
export class AppModule {}
