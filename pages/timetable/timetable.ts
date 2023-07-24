import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DateTimeProvider } from '../../providers/date-time/date-time';
import { NavigationProvider } from '../../providers/navigation/navigation';

import { CalculatorPage } from '../../pages/calculator/calculator';
import { AssignmentsPage } from '../../pages/assignments/assignments';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';

@IonicPage()
@Component({
  selector: 'page-timetable',
  templateUrl: 'timetable.html',
})
export class TimetablePage {
  
  mySubjects: any[];
  totalsub: number;
  myClubs: any[];
  totalclub: number;

  week: any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  mon: any[];
  monnum: number = 0;
  tues: any[];
  tuesnum: number = 0;
  wed: any[];
  wednum: number = 0;
  thurs: any[];
  thursnum: number = 0;
  fri: any[];
  frinum: number = 0;
  sat: any[];
  satnum: number = 0;
  sun: any[];
  sunnum: number = 0;

  constructor(public navCtrl: NavController, public Time: DateTimeProvider, public storage: Storage, public alertCtrl: AlertController, public Noti: NavigationProvider) {
    storage.get('UserSubjects').then((val) => {this.mySubjects = val;});

    storage.get('TotalSubjects').then((val) => {
      if (val == undefined)
        this.totalsub = 0;
      else
        this.totalsub = val;
    });

    storage.get('UserClubs').then((val) => {this.myClubs = val;});
    
    storage.get('TotalClubs').then((val) => {
      if (val == undefined)
        this.totalclub = 0;
      else
        this.totalclub = val;
    });

    Time.checktime();
    this.markcurrentday(new Date().getDay());

    storage.get('Events').then((val) => {
      if (val == undefined){
        this.mon = [{i: 0, event: "Nothing"}];
        this.monnum =  0;
        this.tues = [{i: 0, event: "Nothing"}];
        this.tuesnum = 0;
        this.wed = [{i: 0, event: "Nothing"}];
        this.wednum = 0;
        this.thurs = [{i: 0, event: "Nothing"}];
        this.thursnum = 0;
        this.fri = [{i: 0, event: "Nothing"}];
        this.frinum = 0;
        this.sat = [{i: 0, event: "Nothing"}];
        this.satnum = 0;
        this.sun = [{i: 0, event: "Nothing"}];
        this.sunnum = 0;
      }
      else{
        this.mon = val[0].mon;
        this.monnum =  val[0].monnum;
        this.tues = val[0].tues;
        this.tuesnum = val[0].tuesnum;
        this.wed = val[0].wed;
        this.wednum = val[0].wednum;
        this.thurs = val[0].thurs;
        this.thursnum = val[0].thursnum;
        this.fri = val[0].fri;
        this.frinum = val[0].frinum;
        this.sat = val[0].sat;
        this.satnum = val[0].satnum;
        this.sun = val[0].sun;
        this.sunnum = val[0].sunnum;
      }
    });
  }

  activity: string;
  
  add(day){
    let alert = this.alertCtrl.create();
    alert.setTitle("What do you have planned?");
    alert.addInput({type: 'radio', label: 'Study', value: 'Study '});
    alert.addInput({type: 'radio', label: 'Lessons', value: 'Lessons for '});
    alert.addInput({type: 'radio', label: 'Extra Curricular Activity', value: 'Go to '});
    alert.addInput({type: 'radio', label: 'Custom', value: 'Custom'});
    alert.addButton({text: 'Cancel'});
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.activity = data;

        if (data == "Go to " && this.totalclub == 0){
          this.error("club activities");
        }
        else if (data != "Go to " && data != "Custom" && this.totalsub == 0){
          this.error("subjects");
        }
        else 
          this.nextinput(data, day);
      }
    });
    alert.present();
  }

  error(type){
    let alert = this.alertCtrl.create();
    alert.setTitle("No Options Available");
    alert.setSubTitle("It seems like you haven't added any " + type + " to choose from.");   
    alert.addButton({text: 'Cancel',});
    alert.present();
  }

  nextinput(action, day){
    var val;
    let alert = this.alertCtrl.create();
    if (action == "Study " || action == "Lessons for "){
      alert.setTitle("Select a subject");
      for (let i = 0; i < this.totalsub; i++){
        val = this.mySubjects[i];
        alert.addInput({type: 'radio', label: val, value: val});
      }
    }

    if (action == "Go to "){
      alert.setTitle("Select an activity");
      for (let i = 0; i < this.totalclub; i++){
        val = this.myClubs[i];
        alert.addInput({type: 'radio', label: val, value: val});
      }
    }

    if (action == "Custom"){
      alert.setTitle("Enter your activity");
      alert.setMessage("Examples: Take a break, do hobby")
      alert.addInput({label: 'title', placeholder: 'Custom Activity'});
    }

    alert.addButton({text: 'Cancel'});
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.saveday(action, day, data);
      }
    });
    alert.present();
  }

  display:number = new Date().getDay();

  changedisplay(num){
    if(this.display != num)
      this.display = num;
    this.markcurrentday(this.display);
  }

  remove(day, num){
    let alert = this.alertCtrl.create();
    alert.setTitle("Delete Activity");
    alert.setSubTitle("Are you sure?");
    alert.addButton({text: "No"});
    alert.addButton(
      {
        text: "Yes",
        handler: () => {
          this.removeActivity(day, num);
        }
      });
    alert.present();
  }

  removeActivity(day, num){
    
    if(day == "mon"){
      this.mon.splice(num, 1);
      if(this.monnum != 0)
        this.monnum--;
      if(this.monnum==0){
        this.mon = [];
        this.mon.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.monnum; index++)
          this.mon[index].i = index;
    }

    if(day == "tues"){
      this.tues.splice(num, 1);
      if(this.tuesnum != 0)
        this.tuesnum--;
      if(this.tuesnum==0){
        this.tues = [];
        this.tues.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.tuesnum; index++)
          this.tues[index].i = index;
    }

    if(day == "wed"){
      this.wed.splice(num, 1);
      if(this.wednum != 0)
        this.wednum--;
      if(this.wednum==0){
        this.wed = [];
        this.wed.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.wednum; index++)
          this.wed[index].i = index;
    }
    
    if(day == "thurs"){
      this.thurs.splice(num, 1);
      if(this.thursnum != 0)
        this.thursnum--;
      if(this.thursnum==0){
        this.thurs = [];
        this.thurs.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.thursnum; index++)
          this.thurs[index].i = index;
    }
    
    if(day == "fri"){
      this.fri.splice(num, 1);
      if(this.frinum != 0)
        this.frinum--;
      if(this.frinum==0){
        this.fri = [];
        this.fri.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.frinum; index++)
          this.fri[index].i = index;
    }

    if(day == "sat"){
      this.sat.splice(num, 1);
      if(this.satnum != 0)
        this.satnum--;
      if(this.satnum==0){
        this.sat = [];
        this.sat.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.satnum; index++)
          this.sat[index].i = index;
      }

    if(day == "sun"){
      this.sun.splice(num, 1);
      if(this.sunnum != 0)
        this.sunnum--;
      if(this.sunnum==0){
        this.sun = [];
        this.sun.push({i: 0, event: "Nothing"});
      }
      else
        for(let index = 0; index < this.sunnum; index++)
          this.sun[index].i = index;
    }
    this.saveInfo();
  }

  edit(day, num){
    var to_change
    if(day == "mon"){
      to_change = this.mon[num];
    }

    if(day == "tues"){
      to_change = this.tues[num];
    }

    if(day == "wed"){
      to_change = this.wed[num];
    }
    
    if(day == "thurs"){
      to_change = this.thurs[num];
    }
    
    if(day == "fri"){
      to_change = this.fri[num];
    }

    if(day == "sat"){
      to_change = this.sat[num];
      }

    if(day == "sun"){
      to_change = this.sun[num];
    }
    let alert = this.alertCtrl.create();
    alert.setTitle("Rename your activity");
    alert.setMessage("Examples: Take a break, do hobby")
    alert.addInput({label: 'title', placeholder: 'Custom Activity', value: to_change.event});
    alert.addButton({text: 'Cancel'});
    alert.addButton({
      text: 'OK',
      handler: data => {
        var edit = data[0];
        to_change.event = edit;
        this.saveInfo();
      }
    });
    alert.present();
  }

  m :string;
  t :string;
  w :string;
  th :string;
  f :string;
  s :string;
  su :string;
  currentday: string;

  markcurrentday(k){
    if (k == 0){ this.su = "primary"; this.currentday = "sun"; } else this.su = "";
    if (k == 1){ this.m = "primary"; this.currentday = "mon"; } else this.m = "";
    if (k == 2){ this.t = "primary"; this.currentday = "tues"; } else this.t = "";
    if (k == 3){ this.w = "primary"; this.currentday = "wed"; } else this.w = "";
    if (k == 4){ this.th = "primary"; this.currentday = "thurs"; } else this.th = "";
    if (k == 5){ this.f = "primary"; this.currentday = "fri"; } else this.f = "";
    if (k == 6){ this.s = "primary"; this.currentday = "sat"; } else this.s = "";
  }

  saveInfo(){
    var events = [{
      mon: this.mon,
      monnum: this.monnum,
      tues: this.tues,
      tuesnum: this.tuesnum,
      wed: this.wed,
      wednum: this.wednum,
      thurs: this.thurs,
      thursnum: this.thursnum,
      fri: this.fri,
      frinum: this.frinum,
      sat: this.sat,
      satnum: this.satnum,
      sun: this.sun,
      sunnum: this.sunnum,
    }];
    this.storage.set('Events', events);
    this.Noti.Events(events);
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
    if (page == "Profile"){
      this.navCtrl.push(ProfilePage);
    }
  }

  saveday(action, day, data){
    if (action == "Custom"){
      action = '';
      data = data[0];
    }

    if (day == "mon"){
      if (this.monnum == 0)
        this.mon[0].event = action + data;
      else
        this.mon.push({i: this.monnum, event: action + data});
      this.monnum++;
    }
    if (day == "tues"){
      if (this.tuesnum == 0)
        this.tues[0].event = action + data;
      else
        this.tues.push({i: this.tuesnum, event: action + data});
      this.tuesnum++;
    }
    if (day == "wed"){
      if (this.wednum == 0)
        this.wed[0].event = action + data;
      else
        this.wed.push({i: this.wednum, event: action + data});
      this.wednum++;
    }
    if (day == "thurs"){
      if (this.thursnum == 0)
        this.thurs[0].event = action + data;
      else
        this.thurs.push({i: this.thursnum, event: action + data});
      this.thursnum++;
    }
    if (day == "fri"){
      if (this.frinum == 0)
        this.fri[0].event = action + data;
      else
        this.fri.push({i: this.frinum, event: action + data});
      this.frinum++;
    }
    if (day == "sat"){
      if (this.satnum == 0)
        this.sat[0].event = action + data;
      else
        this.sat.push({i: this.satnum, event: action + data});
      this.satnum++;
    }
    if (day == "sun"){
      if (this.sunnum == 0)
        this.sun[0].event = action + data;
      else
        this.sun.push({i: this.sunnum, event: action + data});
      this.sunnum++;
    }
    this.saveInfo();
  }

  help(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Tips & Tricks");
    alert.setSubTitle("Activities");
    alert.setMessage("To edit an activity <b>press down</b> on it. <p> To delete an activity <b>tap</b> it once!");
    alert.present();
  }
}
