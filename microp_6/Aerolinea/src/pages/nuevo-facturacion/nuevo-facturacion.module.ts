import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoFacturacionPage } from './nuevo-facturacion';

@NgModule({
  declarations: [
    NuevoFacturacionPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoFacturacionPage),
  ],
})
export class NuevoFacturacionPageModule {}
