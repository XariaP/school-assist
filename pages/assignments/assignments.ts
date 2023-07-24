import { Component } from '@angular/core';
import { IonicPage, NavController, ActionSheetController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DateTimeProvider } from '../../providers/date-time/date-time';

import { CalculatorPage } from '../../pages/calculator/calculator';
import { ProfilePage } from '../../pages/profile/profile';
import { HomePage } from '../../pages/home/home';
import { TimetablePage } from '../../pages/timetable/timetable';
import { NavigationProvider } from '../../providers/navigation/navigation';

@IonicPage()
@Component({
  selector: 'page-assignments',
  templateUrl: 'assignments.html',
})
export class AssignmentsPage {
  currentyear = new Date().getFullYear();

  myPoints:number;

  mySubjects:any[];
  myAssignments:any[];
  total:number;
  nosub: boolean;

  edit:boolean;
  show:boolean;
  text:string = "Add Assignment";
  
  showAssignment: string = 'all';
  
  constructor(public navCtrl: NavController, public Time: DateTimeProvider, public storage: Storage, public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController, public Noti: NavigationProvider) {    
    storage.get('myTags').then((val) => {
      // console.log("1st Retrieval" + val);
      if (val == undefined || val.length == 0){
        this.myTags = [
          {tag: "Test", color: "hotpink"}, {tag: "Exam", color: "danger"},
          {tag: "Assignment", color: "light"}, {tag: "Other", color: "royal"},
        ];    
      }
      else{
        this.myTags = val;
      }
    });

    storage.get('UserSubjects').then((UserSubjects) => {
      this.mySubjects = UserSubjects;
    });

    storage.get('TotalSubjects').then((val) => {
      if (val == undefined || val == 0)
        this.nosub = true;
      else
        this.nosub = false;
    });

    storage.get('UserAssignments').then((val) => {
      if (val == undefined)
        this.myAssignments = [];
      else{
        this.myAssignments = val;
        this.shownAssignments = val;
      }
    });

    storage.get('TotalAssignments').then((val) => {
      if (val == undefined)
        this.total = 0;
      else{
        this.total = val;
        this.updatedays();
      }
    });

    storage.get('Keys').then((val) => {
      if (val == undefined)
        this.myPoints = 0;
      else
        this.myPoints = val;
    });

    storage.get('StoreList').then((val) => {
      if (val != undefined)
        this.StoreItems = val;
      else
        this.setDefaultSets();
    //  this.sortItems();
    });

    storage.get('AvatarList').then((val) => {
      var item;
      if (val == undefined){
        this.images = ["Art\\A.png"];
        for (let i = 1; i <= 9; i++){
          item = "Art\\" + i + ".png";
          this.images.push(item);
        }
      }
      else{
        this.images = val;
      }
    });
    Time.checktime();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssignmentsPage');
  }

  shownAssignments: any;

  showAssign(label){
    this.showAssignment = label;
    label = label.toLowerCase();
    if (label == 'all'){
      this.shownAssignments = this.myAssignments;
    }
    else if (label == "!overdue"){
      this.shownAssignments = [];
      for (let task of this.myAssignments){
        if (task.daysleft >= 0)
          this.shownAssignments.push(task);
      }
    }
    else if (label == "overdue"){
      this.shownAssignments = [];
      for (let task of this.myAssignments){
        if (task.daysleft < 0)
          this.shownAssignments.push(task);
      }
    }
    else{
      this.shownAssignments = [];
      for (let task of this.myAssignments){
        if (task.type.toLowerCase() == label)
          this.shownAssignments.push(task);
      }
    }
  }

  toogleform(status){
    if(status == "edit")
      this.edit = true;
    else
      this.edit = false;

    if (this.show == true){
      this.text = "Add Assignment";
      this.show = false;
    }
    else{
      this.text = "Cancel";
      this.show = true;
    }
  }

  addwork(status){
    var countdown = this.Noti.countdays(this.Due);
    if (countdown == -1) countdown--;
    if (status == "new"){
      if (this.total != 0){
        this.myAssignments.push({
          id: this.total,
          subject: this.subject,
          task: this.LatestWork,
          due: this.Due,
          daysleft: countdown,
          notice: this.Noti.reminder,
          status: this.Noti.rstatus,

          type: "blank",
          typecolor: "blank",
        });
      }
      else{
        this.myAssignments = [{
          id: this.total,
          subject: this.subject,
          task: this.LatestWork,
          due: this.Due,
          daysleft: countdown,
          notice: this.Noti.reminder,
          status: this.Noti.rstatus,

          type: "blank",
          typecolor: "blank",
        }];
      }
      this.total++;
    }

    if (status == "edit"){
      var location = this.currentindex;
      let task = this.myAssignments[location];
      
      task = {
        id: task.id,
        subject: this.subject,
        task: this.LatestWork,
        due: this.Due,
        daysleft: countdown,
        notice: this.Noti.reminder,
        status: this.Noti.rstatus,

        type: task.type,
        typecolor: task.typecolor,
      };

      this.myAssignments.splice(location, 1, task);
    }
    
    this.sortbydate();

    this.savechanges();
    this.text = "Add Assignment";
    this.show = false;

    this.LatestWork = "";
  }

  sortbydate(){
    var task = this.myAssignments;
    var temp, min;

    for (let j = 0; j < this.total - 1; j++){
      min = j;
      for (let i = j + 1; i < this.total; i++){
        if (task[min].daysleft > task[i].daysleft){
          min = i;
        }
      }
      temp = task[j];
      task[j] = task[min];
      task[min] = temp;
    }

    for (let i = 0; i < this.total; i++){
      task[i].id = i;
      
      if (task[i].type == "blank"){
        task[i].type = "Assignment";
        task[i].typecolor = "light";
        for (let tag of this.myTags){
          if (task[i].task != undefined && (task[i].task.toLowerCase().includes(tag.tag.toLowerCase()) || task[i].subject.toLowerCase().includes(tag.tag.toLowerCase()))){
            task[i].type = tag.tag;
            task[i].typecolor = tag.color;
          }
        }
      }
      // if (task[i].task != undefined && task[i].task.includes('Test')){
      //   task[i].type = "Test";
      //   task[i].typecolor = "danger";
      // }
      // if (task[i].task != undefined && task[i].task.includes('Exam')){
      //   task[i].type = "Exam";
      //   task[i].typecolor = "danger";
      // }
    }
  }

  myTags:any;

  subject: string;
  LatestWork: string;
  Due: any;
  currentindex: number;

  options(location){
    let task = this.myAssignments[location];
    this.currentindex = location;
    let actionSheet = this.actionSheetCtrl.create({
      title: task.subject + ' Assignment: ' + task.task,
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Completed',
          icon: 'checkmark',
          handler: () => {
            this.removework(location, "complete");
            //message: keep up the good work! You earned points!
          }
        },
        {
          text: 'Edit Details',
          icon: 'create',
          handler: () => {
            this.subject = task.subject;
            this.LatestWork = task.task;
            this.Due = task.due;
            this.toogleform("edit");
            this.edit = true;
          }
        },
        {
          text: 'Set Tag',
          icon: 'filing',
          handler: () => {
            this.setTag(task);
          }
        },
        {
          text: 'Postpone Due Date',
          icon: 'calendar',
          handler: () => {
            this.pickDate("year");
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.warning("one");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  removework(location, status){
    var earned = this.myAssignments[location].daysleft + 1;
    if (status == "complete"){
      this.myPoints += (earned);
      this.storage.set('Keys', this.myPoints);
      this.reward(earned);
    }
    this.myAssignments.splice(location, 1);
    this.total--;
    for (let i = 0; i < this.total; i++){
      this.myAssignments[i].id = i;
    }

    this.savechanges();
  }

  clearwork(){
    this.total = 0;
    this.myAssignments = [];
    this.savechanges();
  }

  savechanges(){
    this.storage.set('UserAssignments', this.myAssignments);
    this.storage.set('TotalAssignments', this.total);
    this.storage.set('myTags', this.myTags);
  }

  open(page){
    if (page == "Calculator"){
      this.navCtrl.push(CalculatorPage);
    }
    if (page == "Profile"){
      this.navCtrl.push(ProfilePage);
    }
    if (page == "Home"){
      this.navCtrl.push(HomePage);
    }
    if (page == "Timetable"){
      this.navCtrl.push(TimetablePage);
    }
  }

  updatedays(){
    for (let i = 0; i < this.total; i++){
      this.myAssignments[i].daysleft = this.Noti.countdays(this.myAssignments[i].due);
      this.myAssignments[i].notice = this.Noti.reminder;
      this.myAssignments[i].status = this.Noti.rstatus;
    }

    this.savechanges();
  }
//5:48 CUSTOM TYPE TAGS
  dueyear: string = "0000";
  duemonth: string = "00";
  dueday: string = "00";
  
  pickDate(section) {
    var val;
    var prev;

    let alert = this.alertCtrl.create();
   
    if (section == "day"){
      alert.setTitle('Day');
      for (let i = 1; i <= 31; i++){
        if (this.myAssignments[this.currentindex].due.substring(8) == i)
          prev = true;
        else
          prev = false;
        if (i < 10)
          val = "0" + i;
        else
          val = i;
        alert.addInput({type: 'radio', label: val, value: val, checked: prev,});
      }

      alert.addButton({
        text: 'OK',
        handler: data => {
          this.dueday = data;
          let newdue = this.dueyear + '-' + this.duemonth + '-' + this.dueday;
          let task = this.myAssignments[this.currentindex];
          this.postponeAll(task.due, newdue, task);
          task.due = newdue;
          this.updatedays();
          this.sortbydate();
        }
      });
    }
    if (section == "month"){
      alert.setTitle('Month');
      var original = this.myAssignments[this.currentindex].due.substring(5,7);
      if (original == "01"){var jan = true;}
      if (original == "02"){var feb = true;}
      if (original == "03"){var mar = true;}
      if (original == "04"){var apr = true;}
      if (original == "05"){var may = true;}
      if (original == "06"){var jun = true;}
      if (original == "07"){var jul = true;}
      if (original == "08"){var aug = true;}
      if (original == "09"){var sep = true;}
      if (original == "10"){var oct = true;}
      if (original == "11"){var nov = true;}
      if (original == "12"){var dec = true;}
      
      alert.addInput({type: 'radio', label: 'January', value: '01', checked: jan,});
      alert.addInput({type: 'radio', label: 'February', value: '02', checked: feb,});
      alert.addInput({type: 'radio', label: 'March', value: '03', checked: mar,});
      alert.addInput({type: 'radio', label: 'April', value: '04', checked: apr,});
      alert.addInput({type: 'radio', label: 'May', value: '05', checked: may,});
      alert.addInput({type: 'radio', label: 'June', value: '06', checked: jun,});
      alert.addInput({type: 'radio', label: 'July', value: '07', checked: jul,});
      alert.addInput({type: 'radio', label: 'August', value: '08', checked: aug,});
      alert.addInput({type: 'radio', label: 'September', value: '09', checked: sep,});
      alert.addInput({type: 'radio', label: 'October', value: '10', checked: oct,});
      alert.addInput({type: 'radio', label: 'November', value: '11', checked: nov,});
      alert.addInput({type: 'radio', label: 'December', value: '12', checked: dec,});

      alert.addButton({
        text: 'OK',
        handler: data => {
          this.duemonth = data;
          this.pickDate("day");
        }
      });
    }
    if (section == "year"){
      alert.setTitle('Year');
      for (let i = this.currentyear + 1; i >= this.currentyear; i--){
        if (this.myAssignments[this.currentindex].due.substring(0,4) == i)
          prev = true;
        else
          prev = false;
        val = i;
        alert.addInput({type: 'radio', label: val, value: val, checked: prev,});
      }
      alert.addButton({
        text: 'OK',
        handler: data => {
          this.dueyear = data;
          this.pickDate("month");
        }
      });
    }
    alert.present();
  }

  warning(amt){
    let alert = this.alertCtrl.create({
      title: 'Are you sure?',
      subTitle: 'You won\'t be able to get back your assignments once you delete them.',
      buttons: [
        {text: 'Cancel'},
        {
          text: 'Delete',
          handler: () => {
            if (amt == "all")
              this.clearwork();
            if (amt == "one")
              this.removework(this.currentindex, "delete");
          }
        }
      ]
    });
    alert.present();
  }

  postponeAll(date, newdue, changed) {
    let alert = this.alertCtrl.create();
    let empty = true;
    for (let task of this.myAssignments){
      if (task.due == date && task != changed){
        alert.addInput({type: 'checkbox', label: task.subject + " - " + task.task, value: task, checked: true});
        empty = false;
      }
    }
    if (empty)
      return; // End function early
    
    alert.setTitle('Postpone Others?');
    alert.setSubTitle("Should any other assignment due " + date + " also be postponed to " + newdue + "?");
    alert.setMessage("Deselect the ones you wish to remain unchanged.");
    alert.addButton({
      text: 'Postpone These Too',
      handler: data => {
        console.log(data);
        for (let task of data){
            task.due = newdue;
        }
        this.updatedays();
        this.sortbydate();
      }
    });
    
    alert.addButton({
      text: 'No',
      handler: data => {
      }
    });
    
    alert.present();
  }

  reward(amt){
    let alert;
    var text;
    if (amt == 1)
      text = " key";
    else
      text = " keys";
    if (amt >= 0){
      alert = this.alertCtrl.create({
        title: 'You just earned ' + amt + text,
        subTitle: 'Nice! You completed it right on time!',
        buttons: [{text: 'Great!'},]
      });
    }
    else{
      alert = this.alertCtrl.create({
        title: 'You just lost ' + (0-amt) + text + "...",
        subTitle: 'You didn\'t complete the assignment on time.',
        buttons: [{text: 'Dismiss'},]
      });
    }
    alert.present();
  }

  showStore: boolean = false;

  StoreItems:any[] = [];

  defaultItems: any = [
    {title: "Art", price: 2, key: "A", content: "default", items: 4, ext: ".png"},
    {title: "Art", price: 4, key: "B", content: "default", items: 4, ext: ".png"},
    {title: "Art", price: 8, key: "C", content: "default", items: 4, ext: ".png"},
  ]

  setDefaultSets(){
    // For every default set create the number of items in that set
    this.StoreItems = [];
    for (let set of this.defaultItems){
      for (let i = 1; i <= set.items; i++)
        this.StoreItems.push({id: this.StoreItems.length, folder: set.title, path: set.key + "-" + i + set.ext, status: "Not Owned", price: set.price});
    }
  }

  sets: any[] = [
    {title: "Hearts", price: 4, key: "Y_Heart", content: "different coloured hearts I stole from an utaite video!", items: 5, ext: ".png"},
    {title: "People", price: 6, key: "Z_School", content: "different coloured images I also got from an utaite video!", items: 7, ext: ".png"},
    {title: "Utaites", price: 8, key: "utaite", content: "cute utaite related characters images!", items: 7, ext: ".png"},
    {title: "Mafumafu", price: 10, key: "mafu", content: "cute images of the utaite Mafumafu's character!", items: 7, ext: ".jpg"},
    {title: "Anime", price: 12, key: "anime", content: "cute anime pics! Featuring Mikaze Ai and Horimiya!", items: 7, ext: ".jpg"},
    // {title: "Nature", price: 12, key: "nature", content: "images of beautiful scenery!", items: 2, ext: ".png"},
    {title: "Nature", price: 12, key: "nature", content: "images of beautiful scenery!", items: 7, ext: ".jpg"},
    {title: "Desserts", price: 14, key: "dessert", content: "delicious desserts!", items: 11, ext: ".jpg"}
  ];

  restock(){
    // Removes sets already unlocked
    // for (let i = 12; i < this.StoreItems.length; i++)
    //   for (let s = 0; s < this.sets.length; s++)
    //     if (this.sets[s].search == this.StoreItems[i].link)
    //       this.sets.splice(s, 1);

    let menu = this.alertCtrl.create();
    menu.setTitle("The following image packs are available:");
    menu.setSubTitle("Opening a pack is free, but images must be purchased individually!")
    for (let i = 0; i < this.sets.length; i++){
      menu.addInput({type: 'radio', label: this.sets[i].title + " (" + this.sets[i].price + " keys)", value: ''+i});
    }
    if (this.sets.length == 0){
      menu.setSubTitle("Nothing new here...");
      menu.addButton({
        text: "reset",
        handler: () => {
          this.removesets();
        }
      });
      menu.addButton({text: 'Aw man...'});
    }
    else{
      menu.addButton({text: "Cancel"});
      menu.addButton({
        text: "Open Pack",
        handler: data => {
          var last  = this.StoreItems.length;
          var pack = this.sets[data];
          for (let o = 1; o <= pack.items; o++){
            this.StoreItems.push({
              id: last++,
              folder: pack.title,
              path: pack.key + "-" + o + pack.ext,
              status: "Not Owned",
              price: pack.price,
            });
          }
          this.sets.splice(data, 1);
          
          let alert = this.alertCtrl.create();
          alert.setTitle(pack.items + " new items have been added!");
          alert.setSubTitle("Enjoy these " + pack.content);
          alert.addButton({text: 'Yay!'});
          this.storage.set('StoreList', this.StoreItems);
          alert.present();
        }
      });
    }
    menu.present();    
  }

  images:any[] = []
  buy(item){
    let alert = this.alertCtrl.create();
    if(this.myPoints >= item.price){
      alert.setTitle("Are you sure you want to purchase this for " + item.price + " keys?");
      alert.addButton({text: 'Cancel'});
      alert.addButton({
        text: 'Purchase',
        handler: () => {
          this.images.splice(0, 0, item.folder + "/" + item.path);
          this.StoreItems[item.id].status = "Purchased";
          this.myPoints -= item.price;
          this.savepurchase();
        }
     });
    }
    else{
      alert.setTitle("You don't have enough keys to spend.");
      alert.addButton({text: 'Cancel'});
    }
    alert.present();
  }

  savepurchase(){
    this.storage.set('AvatarList', this.images);
    this.storage.set('StoreList', this.StoreItems);
    this.storage.set('Keys', this.myPoints);
  }

  setTag(task){
    this.editTag(task, "set tag");
  }

  removesets(){
    let warning = this.alertCtrl.create();
    warning.setTitle("Are you sure?");
    warning.setSubTitle("All packs you opened will be removed and anything you purchased will be lost. Don't worry, your keys will be returned.");
    warning.addButton({text: "No"});
    warning.addButton({
      text: "Yes",
      handler: () => {
        // var bin;
        // var last = this.StoreItems.length - 1;
        // for (let t = last; t > 11; t--){ //Goes through each item in store except default items
        //   bin = this.StoreItems.pop();
        for (let p = 10; p < this.images.length; p++){ //Checks owned images except default ones to remove extra items
          for (let set of this.sets){
            if (this.images[p].includes(set.title)){
              this.myPoints += set.price;
            }
          }
        }
        // this.images.splice(10, this.images.length-9);
        this.setDefaultSets(); //Loses purchased items... no keys back

        // this.StoreItems = undefined;
        this.images = undefined; // To reset images
        this.storage.set('StoreList', this.StoreItems);
        this.storage.set('AvatarList', this.images);
        this.storage.set('Keys', this.myPoints);
      }
    });
    warning.present();
  }

  
  editTag(tag, attr){
    let alert = this.alertCtrl.create();
    if (attr == "name" || attr == "both"){
      alert.setTitle('Label Name');
      alert.addInput({type: 'text', label: "Name", value: tag.tag});
      alert.addButton({
        text: 'OK',
        handler: data => {
          tag.tag = data[0];      
          if (attr == "both")
            this.editTag(tag, "color");
          else
            this.savechanges();
        }
      });
    }
    if (attr == "color"){
      var themes =  ["primary", "secondary", "danger", "light", "dark", "fog", "royal", "sky", "gold", "pink", "hotpink", "orange", "clear", "opaque"];
      alert.setTitle('Label Colour');
      for (let color of themes){
        alert.addInput({type: 'radio', label: color, value: color, checked: tag.color == color});
      }
      alert.addButton({
        text: 'OK',
        handler: data => {
          tag.color = data;
          this.savechanges();
        }
      });
    }
    if (attr == "set tag"){
      alert.setTitle('Change Tag');
      for (let tag2 of this.myTags){
        alert.addInput({type: 'radio', label: tag2.tag, value: tag2, checked: tag2.tag == tag.type});
      }
      alert.addButton({
        text: 'OK',
        handler: data => {
          tag.type = data.tag;
          tag.typecolor = data.color;
          this.savechanges();
        }
      });
    }
    alert.present();
  }

  tagOpts(tag){
    let actionSheet = this.actionSheetCtrl.create({
      title: tag.tag + ' Label',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Edit Label Name',
          icon: 'create',
          handler: () => {
            this.editTag(tag, "name");
          }
        },
        {
          text: 'Edit Label Colour',
          icon: 'color-palette',
          handler: () => {
            this.editTag(tag, "color");
          }
        },
        {
          text: 'View Assignments',
          icon: 'eye',
          handler: () => {
            this.showAssign(tag.tag);
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.myTags.splice(this.myTags.indexOf(tag), 1);
            this.savechanges();
          }
        }
      ]
    });
    actionSheet.present();
  }

  addTag(){
    var newTag = {tag: "New", color: "primary"};
    this.myTags.push(newTag);
    this.editTag(newTag, "both");
    this.savechanges();
  }

  help(){
    let alert = this.alertCtrl.create();
    alert.setTitle("Tips & Tricks");
    alert.setSubTitle("Labels");
    alert.setMessage("Creating labels called <b>'all', 'overdue', and '!overdue'</b> work as shortcuts for filtering your assignments!" +
    "<p>If you have a label matching a keyword in your assignment task or subject, your assignment automatically receives that tag.");
    // alert.
    alert.present();
  }
}