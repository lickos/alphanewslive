import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArtcleViewPage } from './artcle-view';

@NgModule({
  declarations: [
    ArtcleViewPage,
  ],
  imports: [
    IonicPageModule.forChild(ArtcleViewPage),
  ],
  exports: [
    ArtcleViewPage
  ]
})
export class ArtcleViewPageModule {}
