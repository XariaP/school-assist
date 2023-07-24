import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalculatorPage } from '../pages/calculator/calculator';
import { ProfilePage } from '../pages/profile/profile';
import { AssignmentsPage } from '../pages/assignments/assignments';
import { IonicStorageModule } from '@ionic/storage';
import { DateTimeProvider } from '../providers/date-time/date-time';
import { NavigationProvider } from '../providers/navigation/navigation';
import { TimetablePage } from '../pages/timetable/timetable';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CalculatorPage,
    ProfilePage,
    AssignmentsPage,
    TimetablePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CalculatorPage,
    ProfilePage,
    AssignmentsPage,
    TimetablePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DateTimeProvider,
    NavigationProvider
  ]
})
export class AppModule {}
