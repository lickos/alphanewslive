import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KatigoriaViewPage } from '../katigoria-view/katigoria-view';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  openCats() {
    this.navCtrl.push(KatigoriaViewPage);
  }
}
