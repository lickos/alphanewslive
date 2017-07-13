import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { KatigoriaViewPage } from '../pages/katigoria-view/katigoria-view';
import { ArtcleViewPage } from '../pages/artcle-view/artcle-view';
import { Splash } from '../pages/splash/splash';

import { StatusBar } from '@ionic-native/status-bar';

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, KatigoriaViewPage, ArtcleViewPage, Splash],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, AboutPage, ContactPage, HomePage, TabsPage, KatigoriaViewPage, ArtcleViewPage, Splash],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
