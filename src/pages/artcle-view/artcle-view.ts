import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';

/**
 * Generated class for the ArtcleViewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-artcle-view',
  templateUrl: 'artcle-view.html'
})
export class ArtcleViewPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArtcleViewPage');
  }
  OpenFavs() {
    this.navCtrl.push(FavoritesPage);
  }
}
