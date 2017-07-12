import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KatigoriaViewPage } from './katigoria-view';

@NgModule({
  declarations: [
    KatigoriaViewPage,
  ],
  imports: [
    IonicPageModule.forChild(KatigoriaViewPage),
  ],
  exports: [
    KatigoriaViewPage
  ]
})
export class KatigoriaViewPageModule {}
