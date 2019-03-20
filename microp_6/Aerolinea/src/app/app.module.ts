import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConsultaReservaPage} from '../pages/consulta-reserva/consulta-reserva'
import { ConsultaFacturacionPage} from '../pages/consulta-facturacion/consulta-facturacion'
import { NuevoVueloPage} from '../pages/nuevo-vuelo/nuevo-vuelo'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlyServiceProvider } from '../providers/fly-service/fly-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConsultaReservaPage,
    ConsultaFacturacionPage,
    NuevoVueloPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConsultaReservaPage,
    ConsultaFacturacionPage,
    NuevoVueloPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlyServiceProvider
  ]
})
export class AppModule {}
