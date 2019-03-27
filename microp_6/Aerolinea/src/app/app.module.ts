import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ConsultaReservaPage} from '../pages/consulta-reserva/consulta-reserva';
import { ConsultaFacturacionPage} from '../pages/consulta-facturacion/consulta-facturacion';
import { NuevoVueloPage} from '../pages/nuevo-vuelo/nuevo-vuelo';
import { NuevoFacturacionPage } from '../pages/nuevo-facturacion/nuevo-facturacion';
import { InfoLegalPage } from '../pages/info-legal/info-legal';
import { TarjetaEmbarquePage } from '../pages/tarjeta-embarque/tarjeta-embarque';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlyServiceProvider } from '../providers/fly-service/fly-service';
import { CheckInServiceProvider } from '../providers/check-in-service/check-in-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultaReservaPage,
    ConsultaFacturacionPage,
    NuevoVueloPage,
    NuevoFacturacionPage,
    InfoLegalPage,
    TarjetaEmbarquePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ConsultaReservaPage,
    ConsultaFacturacionPage,
    NuevoVueloPage,
    NuevoFacturacionPage,
    InfoLegalPage,
    TarjetaEmbarquePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FlyServiceProvider,
    CheckInServiceProvider
  ]
})
export class AppModule {}
