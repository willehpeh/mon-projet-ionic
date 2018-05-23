import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { OptionsPage } from '../pages/options/options';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  tabsPage: any = TabsPage;
  optionsPage: any = OptionsPage;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {

      let config = {
        apiKey: "AIzaSyDsrbxff_8PbLD_YZC9HWNVGhWjIyWlZzc",
        authDomain: "openclassrooms-ionic-511d1.firebaseapp.com",
        databaseURL: "https://openclassrooms-ionic-511d1.firebaseio.com",
        projectId: "openclassrooms-ionic-511d1",
        storageBucket: "openclassrooms-ionic-511d1.appspot.com",
        messagingSenderId: "93117483494"
      };
      firebase.initializeApp(config);

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

