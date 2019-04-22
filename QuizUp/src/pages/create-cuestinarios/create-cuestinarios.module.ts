import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateCuestinariosPage } from './create-cuestinarios';

@NgModule({
  declarations: [
    CreateCuestinariosPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateCuestinariosPage),
  ],
})
export class CreateCuestinariosPageModule {}
