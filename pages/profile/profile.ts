import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DateTimeProvider } from '../../providers/date-time/date-time';

import { CalculatorPage } from '../../pages/calculator/calculator';
import { AssignmentsPage } from '../../pages/assignments/assignments';
import { HomePage } from '../../pages/home/home';
import { TimetablePage } from '../../pages/timetable/timetable';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  birthyear: any;
  currentyear: number;

  FirstName: string;
  LastName: string;
  Phrase: string;//
  Age: number;
  Level: string;
  Year: string;
  School: string;
  Class: string;
  
  birthdate: string;
  myGender: string;
  avatar: string = "Art/A.png";

  mySubjects:any[];
  subnum:number[];
  totalsub = 0;
  
  myExtras:any[];
  clubnum:number[];
  totalclub = 0;

  images:any[];
  SubjectIcon: string = "book";

  constructor(public navCtrl: NavController, public Time: DateTimeProvider, public storage: Storage, public alertCtrl: AlertController) {
    storage.get('AvatarList').then((val) => {
      var item;
      if (val == undefined){
        this.images = ["Art/A.png"];
        for (let i = 1; i <= 9; i++){
          item = "Art/" + i + ".png";
          this.images.push(item);
        }
      }
      else{
        this.images = val;
      }
    });

    storage.get('FName').then((val) => {
      if (val == undefined)
        this.presentAlert("Rewrite");
      else
        this.FirstName = val;
    });
    storage.get('LName').then((val) => {this.LastName = val;});
    storage.get('bday').then((val) => {
      this.birthdate = val;
      if (val != undefined){
        this.findAge(val);
      }
    });
    storage.get('Level').then((val) => {this.Level = val;});
    storage.get('Year').then((val) => {this.Year = val;});
    storage.get('School').then((val) => {this.School = val;});
    storage.get('Class').then((val) => {this.Class = val;});
    storage.get('Gender').then((val) => {this.myGender = val;});
    storage.get('Avatar').then((val) => {
      if (val == undefined)  
        this.avatar = "Art/A.png";
      else
        this.avatar = val;
    });
    
    storage.get('UserSubjects').then((val) => {
      if (val == undefined)
        this.mySubjects = [];
      else
        this.mySubjects = val;
    });
    storage.get('SubjectNum').then((val) => {
      if (val == undefined)
        this.subnum = [];
      else
        this.subnum = val;
    });
    storage.get('TotalSubjects').then((val) => {
      if (val == undefined)
        this.totalsub = 0;
      else
        this.totalsub = val;
    });
   
    storage.get('UserClubs').then((val) => {
      if (val == undefined)
        this.myExtras = [];
      else
        this.myExtras = val;
    });
    storage.get('ClubNum').then((val) => {
      if (val == undefined)
        this.clubnum = [];
      else
        this.clubnum = val;
    });
    storage.get('TotalClubs').then((val) => {
      if (val == undefined)
        this.totalclub = 0;
      else
        this.totalclub = val;
    });
    
    Time.checktime();
  }

  ShowBirth: boolean =  false;

  findAge(str){
    this.currentyear = new Date().getFullYear();
    this.birthyear = str.substring(0, 4);
    this.Age = this.currentyear - this.birthyear;

    var bmonth = parseInt(str.substring(5,7));
    var bday = parseInt(str.substring(8));
    var cmonth = new Date().getMonth() + 1;
    var cday = new Date().getDate();

    this.ShowBirth = false;
    if ((cmonth >= bmonth)){
      if ((cmonth == bmonth) && (cday == bday)){
        this.ShowBirth = true;
      }
      if ((cmonth == bmonth) && (cday < bday)){
        this.Age--;
      }
    }
    else{
      this.Age--;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  
  show: boolean;
  text: string = "Edit Profile Info";

  toogleform(){
    if (this.show == true){
      this.text = "Edit Profile Info";
      this.show = false;
    }
    else{
      this.text = "Cancel";
      this.show = true;
    }
  }

  AddSubject(newtotal){
    this.mySubjects.push("");
    this.subnum.push(newtotal);
    this.totalsub++;
  }
  RemoveSubject(){
    if (this.totalsub != 0){
      this.mySubjects.pop();
      this.subnum.pop();
      this.totalsub--;
    }
  }

  AddExtra(newtotal){
    this.myExtras.push("");
    this.clubnum.push(newtotal);
    this.totalclub++;
  }
  RemoveExtra(){
    if (this.totalclub != 0){
      this.myExtras.pop();
      this.clubnum.pop();
      this.totalclub--;
    }
  }

  open(page){
    if (page == "Calculator"){
      this.navCtrl.push(CalculatorPage);
    }
    if (page == "Home"){
      this.navCtrl.push(HomePage);
    }
    if (page == "Assignments"){
      this.navCtrl.push(AssignmentsPage);
    }
    if (page == "Timetable"){
      this.navCtrl.push(TimetablePage);
    }
  }

  presentAlert(event){
    let alert;
    if (event == "Update"){
      alert = this.alertCtrl.create({
        title: 'Profile Update',
        subTitle: 'Your changes have been saved',
        buttons: ['Dismiss'],
      });
    }
    if (event == "Birthday"){
      alert = this.alertCtrl.create({
        title: 'It\'s your birthday!',
        subTitle: 'Happy birthday ' + this.FirstName + '!',
        buttons: ['Thank you!'],
      });
    }
    if (event == "Rewrite"){
      alert = this.alertCtrl.create({
        title: 'Let\'s get started!',
        subTitle: 'Simply fill out the form and save once you\'re done',
        buttons: ['Okay!'],
      });
      this.toogleform();
    }
    if (event == "Delete"){
      alert = this.alertCtrl.create({
        title: 'Are you sure?',
        subTitle: 'All of your profile information and assignments will be lost.',
        buttons: [
          {text: 'No'},
          {
            text: 'Yes',
            handler: () => {
              this.DeleteInfo();
            }
          }
        ]
      });
    }
    alert.present();
  }

  SaveInfo(type){
    if (this.FirstName == "Lazy"){
      this.AutoFill();
    }

    this.text = "Edit Profile Info";
    this.show = false;

    this.storage.set('FName', this.FirstName);
    this.storage.set('LName', this.LastName);
    this.storage.set('bday', this.birthdate);
    this.storage.set('Phrase', this.Phrase);
    // this.storage.set('Age', this.Age);
    this.storage.set('Level', this.Level);
    this.storage.set('Year', this.Year);
    this.storage.set('School', this.School);
    this.storage.set('Class', this.Class);
    this.storage.set('Gender', this.myGender);
    this.storage.set('Avatar', this.avatar);
 
    this.storage.set('UserSubjects', this.mySubjects);
    this.storage.set('SubjectNum', this.subnum);
    this.storage.set('TotalSubjects', this.totalsub);
     
    this.storage.set('UserClubs', this.myExtras);
    this.storage.set('ClubNum', this.clubnum);
    this.storage.set('TotalClubs', this.totalclub);
    
    this.presentAlert(type);
  }

  DeleteInfo(){
    this.FirstName = undefined;
    this.LastName = "";
    this.Phrase = "";
    this.birthdate = "";
    this.Age = undefined;
    this.Level = "University";
    this.Year = "";
    this.School = "";
    this.Class = "";
    this.myGender = "";
    this.avatar = "Art/A.png";

    this.mySubjects = [];
    this.subnum = [];
    this.totalsub = 0;

    this.myExtras = [];
    this.clubnum = [];
    this.totalclub = 0;

    this.storage.set('UserAssignments', []);
    this.storage.set('TotalAssignments', 0);
    this.storage.set('Keys', 0);
    
    var item;
    this.images = ["Art/A.png"];
    for (let i = 1; i <= 9; i++){
      item = "Art/" + i + ".png";
      this.images.push(item);
    }
    this.storage.set('AvatarList', this.images);

    this.storage.set('StoreList', undefined);

    var events = [{
      mon: [{i: 0, event: "Nothing"}],
      monnum: 0,
      tues: [{i: 0, event: "Nothing"}],
      tuesnum: 0,
      wed: [{i: 0, event: "Nothing"}],
      wednum: 0,
      thurs: [{i: 0, event: "Nothing"}],
      thursnum: 0,
      fri: [{i: 0, event: "Nothing"}],
      frinum: 0,
      sat: [{i: 0, event: "Nothing"}],
      satnum: 0,
      sun: [{i: 0, event: "Nothing"}],
      sunnum: 0,
    }];
    this.storage.set('Events', events);

    this.SaveInfo("Rewrite");
  }

  AutoFill(){
    this.FirstName = "Xaria";
    this.LastName = "Prempeh";
    this.Age = 17;
    this.Level = "Secondary School";
    this.School = "Queen's College";
    this.Year = "Upper 6th Form";
    this.Class = "Upper 6 Science 2";
    this.birthdate = "2001-07-02";
    this.myGender = "Female";
    this.avatar = "Desserts/dessert-3.jpg";
    this.mySubjects = ["Physics", "Pure Mathematics", "Computer Science", "Caribbean Studies"];
    this.subnum = [1, 2, 3, 4];
    this.totalsub = 4;
    this.myExtras = ["Art Club", "Builders Club"];
    this.clubnum = [1, 2];
    this.totalclub = 2;
  }
}