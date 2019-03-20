import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoVueloPage } from './nuevo-vuelo';

@NgModule({
  declarations: [
    NuevoVueloPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoVueloPage),
  ],
})
export class NuevoVueloPageModule {}
