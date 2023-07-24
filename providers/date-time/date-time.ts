import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeProvider {

  constructor() {
    console.log('Hello DateTimeProvider Provider');
  }

  myTime:number;
  sky:any;
  skyicon:string;
  bgtheme:string;
  card:string;
  Date: any =  new Date().toDateString();
  
  checktime(){
    this.myTime = new Date().getHours();
    
    if (this.myTime >= 0 && this.myTime <= 11){
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
    else{
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
  
    if (this.myTime == 0)
      this.myTime = 12;
    
    if (this.myTime > 12)
      this.myTime -= 12;

    if (this.bgtheme == "dawn" || this.bgtheme == "midday")
      this.card = "clear";
    
      if (this.bgtheme == "night" || this.bgtheme == "evening")
      this.card = "opaque";
  }

  num:number;
  custombg(){
    var stuff = ["dawn", "midday", "evening", "night"];
    var style = ["clear", "clear", "opaque", "opaque"];
    
    for (let i = 0; i < 4; i++){
      if (this.bgtheme == stuff[i])
        this.num = i;
    }

    if (this.num != 3)
      this.num++;
    else
      this.num = 0;
    
    this.bgtheme = stuff[this.num];
    this.card = style[this.num];
  }
}