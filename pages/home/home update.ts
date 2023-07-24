import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CalculatorPage } from '../../pages/calculator/calculator';
import { ProfilePage } from '../../pages/profile/profile';
import { AssignmentsPage } from '../../pages/assignments/assignments';
import { TimetablePage } from '../timetable/timetable';

import { NavigationProvider } from '../../providers/navigation/navigation';
//DateTimeProvider not imported here

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ShowDeadlines: boolean = false;
  ShowEvents: boolean = false;

  myDate: string;
  myTime: number;
  sky:any;
  skyicon: string;
  bgtheme: string = "photo"; //needs to be initialized to work
  fullhour: number;
  stime:number = 0;

  avatar: string = "Art/A.png";
  images: any[];
  constructor(public navCtrl: NavController, public storage: Storage, public alertCtrl: AlertController, public Noti: NavigationProvider) {
    storage.get('Avatar').then((val) => {
      if (val != undefined)  
        this.avatar = val;
    });
    storage.get('AvatarList').then((val) => {
      if (val != undefined){
        this.images = val;
      }
    });
    storage.get('FName').then((val) => {
      if (val == undefined)
        this.welcome();
    });
    Noti.getinfo();
    Noti.Events("blank");

    this.myDate = new Date().toString();
    this.fullhour = new Date().getHours();
    this.myTime = new Date().getHours();
    
    if (this.myTime >= 0 && this.myTime <= 11){
      this.SkyCheck("morning");
    }
    else{
      this.SkyCheck("night");
    }
    
    if (this.myTime == 0)
      this.myTime = 12;
   
    if (this.myTime > 12)
      this.myTime -= 12;
  }

  welcome(){
    let alert = this.alertCtrl.create({
      title: 'Welcome New User!',
      subTitle: 'Thank you for installing \"School Assist\"! Now all you need to do is fill out some information and you can get started.',
      buttons: [
        {
          text: 'Set up Profile',
          handler: () => {
            this.open("Profile");
          }
        }
      ]
    });
    alert.present();
  }

  changetime(time){
    if (time == 1) this.bgtheme = "dawn";
    if (time == 2) this.bgtheme = "midday";
    if (time == 3) this.bgtheme = "evening";
    if (time == 4) this.bgtheme = "night";
    this.changecard();
  }

  switchtime(){    
    if (this.fullhour != 23)
      this.fullhour++;
    else
      this.fullhour = 0;
  
    this.myTime = this.fullhour;

    if (this.myTime >= 0 && this.myTime <= 11){
      this.SkyCheck("morning");
    }
    else{
      this.SkyCheck("night");
    }

    if (this.fullhour == 0)
      this.myTime = 12;
    
    if (this.fullhour > 12)
      this.myTime -= 12;

    this.changecard();
  }

  open(page){
    if (page == "Calculator"){
      this.navCtrl.push(CalculatorPage);
    }
    if (page == "Profile"){
      this.navCtrl.push(ProfilePage);
    }
    if (page == "Assignments"){
      this.navCtrl.push(AssignmentsPage);
    }
    if (page == "Timetable"){
      this.navCtrl.push(TimetablePage);
    }
  }

  SkyCheck(time){
    if (time == "morning"){
      this.sky = "AM";
      if (this.myTime >= 5){
        this.skyicon = "sunny";
      }
      else{
        this.skyicon = "moon";
      }
      
      if (this.myTime > 7)
        this.bgtheme = "midday";
      else if (this.myTime >= 5)
        this.bgtheme = "dawn";
      else
        this.bgtheme = "night";
    }

    if (time == "night"){
      this.sky = "PM";
      if (this.myTime < 19){
        this.skyicon = "sunny";
      }
      else{
        this.skyicon = "moon";
      }

      if (this.myTime >= 19)
        this.bgtheme = "night";
      else if (this.myTime >= 17)
        this.bgtheme = "evening";
      else
        this.bgtheme = "midday";
    }
    
    if (this.bgtheme == "dawn")
      this.stime = 1;

    if (this.bgtheme == "midday")
      this.stime = 2;

    if (this.bgtheme == "evening")
      this.stime = 3;

    if (this.bgtheme == "night")
      this.stime = 4;
  }

  reset(){
    this.navCtrl.setRoot(HomePage);
  }

  changecard(){
    if (this.bgtheme == "dawn" || this.bgtheme == "midday")
    this.Noti.card = "clear";
  
    if (this.bgtheme == "night" || this.bgtheme == "evening")
    this.Noti.card = "opaque";
  }

  switch(){
    var pic;
    for (let i = 0; i < this.images.length; i++){
      if (this.avatar == this.images[i])
        pic = i;
    }

    if (pic < this.images.length - 1)
      pic++;
    else
      pic = 0;

    this.avatar = this.images[pic];
    this.storage.set('Avatar', this.avatar);
  }

  saveProgress(){
    var list = [];
    var Events = this.Noti.myEvents;
    list = [new Date().getDay()];
    for (let i = 0; i < Events.length; i++)
      list.push(Events[i].done);
    this.storage.set('ToDo', list);
  }

  credits(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Credits");
    alert.setSubTitle("School Assist Ver.1.0.5");
    alert.setMessage("<b>SISTECH</b>" +
    "<p> <b>Program Coded by:</b> Xaria Prempeh </p>" +
    "<p> <b>Art Illustrated by:</b> Richellia Stuart </p>" +
    "<p> <b>Project Began:</b> November 2018" +
    "<p> <b>Last Update:</b> August 2022");
    alert.present();
  }
}