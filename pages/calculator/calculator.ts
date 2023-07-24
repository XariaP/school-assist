import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DateTimeProvider } from '../../providers/date-time/date-time';

import { ProfilePage } from '../../pages/profile/profile';
import { AssignmentsPage } from '../../pages/assignments/assignments';
import { HomePage } from '../../pages/home/home';
import { TimetablePage } from '../../pages/timetable/timetable';
import { NavigationProvider } from '../../providers/navigation/navigation';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {
  yrRange:number;       // Range to add to current year
  
  constructor(public navCtrl: NavController, public Time: DateTimeProvider, public Noti: NavigationProvider) {
    Time.checktime();
    this.yrRange = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  setRange(add){
    if (this.yrRange == 0 && add < 0) return;
    this.yrRange = this.yrRange + add;
  }

  stack:any = [];
  opcount:number = 1;
  numcontents = 0;

  num:number = 0;		        // Stores the actual number used in the calculation
  text:string;
  equation:string;		      // Stores entire equation
  firsthalf:string;	      	// Backs up first half of equation (e.g 7 + )
  op1:number;			          // First number
  process:string = "NIL"; 	// The operation selected
  op2:number;		           	// Second number
  ans:number = 0;		        // Stores Answer
  keepans:number = 0;       // 0 = Don't save answer & 1 = save previous answer
  opclicked:string;
  
  select(location)		// Resets all button to the 'unpressed' state and marks the last button pressed
  {
    for (let i = 0; i < 17; i++)
      document.getElementById("case").getElementsByTagName("button")[i].className = "b";
    document.getElementById("case").getElementsByTagName("button")[location].className = "pressed";
  }

  press(val)				// When a number is pressed
  {
    if (this.opclicked == "yes")
      this.firsthalf = this.equation;	// Backs up current equation
    this.text = document.getElementById("case").getElementsByTagName("button")[val].innerHTML;	//Gets number on the button
    this.num = (this.num * 10) + parseInt(this.text);		// Moves other digits up by one place value
      
    this.keepans = 0;							// Clears answer from previous equation
    
    if (this.opcount == 1)
      this.equation = '' + this.num;						// Starts a new equation
    else
      this.equation = this.firsthalf + this.num;			// Uses back up equation and adds updated number
    
    this.stack[this.numcontents] = this.num;
    this.select(val);							// Changes appearance of selected button
    document.getElementById("display").innerHTML = this.equation;	// Prints current equation to the screen
    this.opclicked = "no";
  }
  
  operation(val)			// When an operation is selected
  {
    this.select(val);
    if (this.keepans == 1)		// If previous answer is to be used as the first number of the new equation
    {
      this.stack[0] = this.ans;
      this.equation = '' + this.ans;		// Starts new equation
      this.firsthalf = this.equation;	// Backs up current equation
    }

    if (this.process != "NIL")  //Stores previous operation after two operands were entered
    {
      if (this.opclicked == "no")
        this.numcontents++;
      this.stack[this.numcontents] = this.process;
    }
    
    if (this.opclicked == "yes"){
      this.numcontents--;
      this.equation = this.firsthalf;
    }
    else{
      if (this.opclicked == "no")
        this.firsthalf = this.equation;	// Backs up current equation
    }

    this.opcount++;
    this.numcontents++;
    this.num = 0;				// Clears the number value
    this.process = document.getElementById("case").getElementsByTagName("button")[val].innerHTML;	// Reads operation symbol on the button selected
    
    this.equation += this.process;	// Adds the operation symbol to the equation    
    
    document.getElementById("display").innerHTML = this.equation;
    this.opclicked = "yes";
  }

  reset()				// Resets calculator and saves previous answer
  {
    this.stack = [];
    this.num = 0;
    this.numcontents = 0;
    this.opcount = 1;
    this.process = "NIL";
    this.keepans = 1;
    this.equation = "\0";
    this.firsthalf = "\0";
  }

  clear(){
    this.reset();
    this.ans = 0;
    document.getElementById("display").innerHTML = "0";
    this.select(0);
  }

  delete(){
    if (isNaN(parseInt(this.stack[this.numcontents]))){ //BOTH NUMBERS IN, REMOVE SECOND NUM and op from stack
      this.stack.splice(this.numcontents, 1);
      this.numcontents--;
    }
    this.num = ((this.num / 10) - (this.num % 10 /10))/10;
    this.press(14);
    this.select(1);
  }

  calc(val)				// Calculates answer
  {
    this.select(val);
    
    if (this.process != "NIL")	// If no operation was selected automatically set answer as the number entered???
    {
      this.numcontents++;
      this.stack[this.numcontents] = this.process;
    }
    
    this.numcontents++;
    var highpriority = "/0";
    var temp;
    var loc1, loc2;
    var i;
    for (i = 0; i < this.numcontents; i++){
      if (isNaN(parseInt(this.stack[i]))){
        if ((this.stack[i] == " / " || this.stack[i] == " x ") && (highpriority == " - " || highpriority == " + "))
        {
          temp = highpriority;
          loc1 = loc2;
          highpriority = this.stack[i];
          loc2 = i;
          status = "swap";
          
          this.stack.splice(loc1, 1);
          this.stack.splice(loc2, 0, temp);
          highpriority = "/0";
          loc1 = 0;
          loc2 = 0;
        }
        if ((this.stack[i] == " - " || this.stack[i] == " + ") && (highpriority != " / " && highpriority != " x "))
        {
            highpriority = this.stack[i];
            loc2 = i;
            status = "none";
        }
      }
    }
    while (this.numcontents != 1)
    {
      for (i = 2; i < this.numcontents; i++){
          if (isNaN(parseInt(this.stack[i]))){
              this.op1 = this.stack[i-2];
              this.op2 = this.stack[i-1];
              this.process = this.stack[i];
              break;
          }
      }
      this.numcontents++;
      if (this.process == " + ")
      {
        this.ans = this.op1 + this.op2;
      }
      if (this.process == " - ")
      {
        this.ans = this.op1 - this.op2;
      }
      if (this.process == " / ")
      {
        this.ans = this.op1 / this.op2;
      }
      if (this.process == " x ")
      {
        this.ans = this.op1 * this.op2;
      }

      this.stack.splice(i-2, 1, this.ans);
      this.stack.splice(i-1, 2);
      
      this.numcontents -= 2;
    }

    document.getElementById("display").innerHTML = '' + this.ans;		// Displays final answer to the screen
    this.reset();
  }

  
  show: boolean = false;
  bgtext: string = "Change Background";
  theme: any[] = ["dawn", "midday", "evening", "night"];
  
  changebg(pic){
    this.Time.bgtheme = pic;
    this.show = false;
    this.bgtext = "Change Background";
   }

  showlist(){
    if (this.show == false){
      this.show = true;
      this.bgtext = "Cancel";
    }
    else{
      this.show = false;
      this.bgtext = "Change Background";
    }
  }

  open(page){
    if (page == "Home"){
      this.navCtrl.setRoot(HomePage);
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

  currentyear: any = new Date().getFullYear();
  From: any = "??";
  To: any = "??";
  days: any = "??";
  datecount(){
    if (this.To == "??" || this.From == "??")
      return 0;
    this.days = 0;
    var date1 = this.From;
    var date2 = this.To;
    
    var mzero, dzero, end, year, mon, day;
    var start, stop;
    if (date1 > date2){
      year = date2.substring(0,4);
      mon = parseInt(date2.substring(5,7));
      day = parseInt(date2.substring(8));
    }
    else{
      year = date1.substring(0,4);
      mon = parseInt(date1.substring(5,7));
      day = parseInt(date1.substring(8));
    }
    date1 = this.From.substring(0,4) + this.From.substring(5,7) + this.From.substring(8);
    date2 = this.To.substring(0,4) + this.To.substring(5,7) + this.To.substring(8);
    
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
    
    if (date1 > date2){
      start = date2;
      stop = date1;
    }
    else{
      start = date1;
      stop = date2;
    }

    while (start != stop){
      this.days++;
      if(day != end){
        day++;
      }
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

    if (date1 > date2){
      this.days = 0 - this.days;
    }
  }
}