import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaFacturacionPage } from './consulta-facturacion';

@NgModule({
  declarations: [
    ConsultaFacturacionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaFacturacionPage),
  ],
})
export class ConsultaFacturacionPageModule {}
