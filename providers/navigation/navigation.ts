import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { DateTimeProvider } from '../date-time/date-time';

@Injectable()
export class NavigationProvider {
  
  user: string;
  ShowBirth: boolean = false;
  card: string;
  Date: any = new Date().toDateString();
  numdue: number;
  myAssignments: any[];
  total: number;

  EventStatus: string;
  myEvents: Array<{event: string, done: any}>;

  constructor(public storage: Storage, public alertCtrl: AlertController, public Time: DateTimeProvider) {
    console.log('Hello NavigationProvider Provider');
    this.getinfo();
    this.Events("blank");
  }

  Events(array){
    let num, event, i;
    var display = new Date().getDay(); //not same as display in timetable
    if (array == "blank"){
      this.storage.get('Events').then((val) => {
        if (val == undefined){
          num = 0;
        }
        else{
          if (display == 0){ num = val[0].sunnum; event = val[0].sun;}
          if (display == 1){ num = val[0].monnum; event = val[0].mon;}
          if (display == 2){ num = val[0].tuesnum; event = val[0].tues;}
          if (display == 3){ num = val[0].wednum; event = val[0].wed;}
          if (display == 4){ num = val[0].thursnum; event = val[0].thurs;}
          if (display == 5){ num = val[0].frinum; event = val[0].fri;}
          if (display == 6){ num = val[0].satnum; event = val[0].sat;}
        
          this.EventStatus = num;
          this.storage.get('ToDo').then((completed) => {
            if (completed == undefined || completed[0] != display){
              completed = [display];
              for (i = 0; i < event.length; i++)
                completed.push(false);   
            }
            completed.splice(0,1);
            this.myEvents = [];
            for (i = 0; i < event.length; i++){
              this.myEvents.push({
                event: event[i],
                done: completed[i],
              });
            }
          });
        }
      });
    }
    else{
      if (display == 0) this.EventStatus = array[0].sunnum;
      if (display == 1) this.EventStatus = array[0].monnum;
      if (display == 2) this.EventStatus = array[0].tuesnum;
      if (display == 3) this.EventStatus = array[0].wednum;
      if (display == 4) this.EventStatus = array[0].thursnum;
      if (display == 5) this.EventStatus = array[0].frinum;
      if (display == 6) this.EventStatus = array[0].satnum;
    }
  }

  Holiday: any = false;
  getinfo(){
    var bmonth, bday;
    var cmonth, cday;
 
    this.storage.get('bday').then((val) => {
      if (val != undefined){
        bmonth = val.substring(5,7);
        bday = val.substring(8);
        cmonth = new Date().getMonth() + 1;
        cday = new Date().getDate();
        
        this.ShowBirth = false;
        if ((cmonth == bmonth) && (cday == bday)){
          this.ShowBirth = true;
        }
      }
      this.Time.checktime();
      this.card = this.Time.card;
      this.Date = new Date().toDateString();
      
      if (cmonth == 1 && cday == 1)
        this.Holiday = "Happy New Year ";
      if (cmonth == 12 && cday == 25)
        this.Holiday = "Merry Christmas ";
    });

    this.storage.get('FName').then((val) => {
      this.user = val;
    });

    this.storage.get('UserAssignments').then((val) => {
      if (val == undefined)
        this.myAssignments = [];
      else{
        this.myAssignments = val;
      }
    });

    this.storage.get('TotalAssignments').then((val) => {
      var text, counttmr;
      if (val == undefined)
        this.total = 0;
      else{
        this.total = val;
        for (let i = 0; i < this.total; i++)
          this.myAssignments[i].daysleft = this.countdays(this.myAssignments[i].due);   

        this.numdue = 0;
        for (let test = 0; test < 2; test++){
          counttmr = 0;
          
          if (test == 0) text = "today!";
          else text = "tomorrow!";
          for (let i = 0; i < this.total; i++){
            if (this.myAssignments[i].daysleft == test)
              counttmr++;
          }
          this.numdue += counttmr;
          if (counttmr == 0){
            this.myAssignments.push({
              id: 10,
              subject: 'Nothing',
              task: 'Horray! You have nothing to complete for ' + text,
              daysleft: test,
              due: 20000101,
              notice: 'blank',
              status: 'blank',
            });
         }
        }
        
        counttmr = 0;
        for (let i = 0; i < this.total; i++){
          if (this.myAssignments[i].daysleft <= 7 && this.myAssignments[i].daysleft > 1){
            counttmr++;
            this.numdue++;
          }
        }
        if (counttmr == 0){
          this.myAssignments.push({
            id: 10,
            subject: 'Nothing',
            task: 'Horray! You have nothing to complete for the rest of the week!',
            daysleft: 2,
            due: 20000101,
            notice: 'blank',
            status: 'blank',
          });
        }
      }
    });
  }

  presentAlert(event){
    let alert = this.alertCtrl.create();
    if (event == "Birthday"){
      alert.setTitle('It\'s your birthday!');
      alert.setSubTitle('Happy birthday ' + this.user + '! I hope you have a fantastic one!');
      alert.addButton('Thank you!');
    }
    if (event == "Happy New Year "){
      alert.setTitle('Happy New Year!');
      alert.setSubTitle(this.user + ', it\'s already ' + new Date().getFullYear() + '! Can you believe it?');
      alert.addButton('Time flies!');
    }
    if (event == "Merry Christmas "){
      alert.setTitle('Merry Christmas!');
      alert.setSubTitle(this.user + ', I\'d like to wish you a merry Christmas!');
      alert.addButton('Thank you!');
    }
    alert.present();
  }
  
  DueAlert(assignment){
    var sub;
    if (assignment.subject == "Nothing")
      sub = assignment.task;
    else
      sub = assignment.task + ' (' + assignment.notice + ')';

    let alert = this.alertCtrl.create({
      title: assignment.subject,
      subTitle: sub,
      buttons: ['Dismiss'],
    });
    alert.present();
  }

  due:string;
  today:string;
  reminder:string;
  rstatus:string;
  
  countdays(date) {
    var days = 0;
    this.due = date.substring(0,4) + date.substring(5,7) + date.substring(8);
    var mzero, dzero;
    if (new Date().getDate() <= 9)
      dzero = "0";
    else
      dzero = "";

    if ((new Date().getMonth() + 1) <= 9)
      mzero = "0";
    else
      mzero = "";

    var day = new Date().getDate();
    var mon = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var end;
    if (mon == 9 || mon == 4 || mon == 6 || mon == 11){
      end = 30;
    }
    else if(mon == 2){
      end = 28;
      if ((year % 4) == 0){
        end++;
      }
    }
    else
      end = 31;
    
    this.today = year + '' + mzero + mon + '' + dzero + day;
    
    var stop = this.due;
    var start = this.today;
    
    if (this.today > this.due){
      start = this.due;
      stop = this.today;
      year = date.substring(0,4);
      mon = parseInt(date.substring(5,7));
      day = parseInt(date.substring(8));
    }
    
    while (start != stop){
      days++;
      if(day < end){ //Changed from day != end because day was 31 (oct) and end was 30 (nov) caused infinite loop problems
        day++;       // 2:13AM 2nd Nov, 2019      (App froze on 1st Nov, checked Midnight, worked fine the day before)
      }              // Possible cause is never had an overdue assignment on the 31st of month while current month is 30 max
      else{
        day = 1;
        if (mon != 12){
          mon++;
        }
        else{
          mon = 1;
          year++;
        }
        if (mon == 9 || mon == 4 || mon == 6 || mon == 11){
          end = 30;
        }
        else if(mon == 2){
          end = 28;
          if ((year % 4) == 0){
            end++;
          }
        }
        else
          end = 31;
      }

      if (mon <= 9)
        mzero = "0";
      else
        mzero = "";
      
      if (day <= 9)
        dzero = "0";
      else
        dzero = "";
      
      start = year + '' + mzero + mon + '' + dzero + day;
    }

    if (this.today > this.due){
      if (days == 1)
        this.reminder = days + " DAY OVERDUE!";
      else
        this.reminder = days + " DAYS OVERDUE!";
      this.rstatus = "danger";
      return -1 - days;
    }

    if (days == 0){
      this.reminder = "Due today!";
      this.rstatus = "primary";
    }
    else if (days == 1){
      this.reminder = days + " day left!";
      this.rstatus = "secondary";
    }
    else{
      this.reminder = days + " days left!";
      this.rstatus = "secondary";
    }
    
    return days;
  }
}