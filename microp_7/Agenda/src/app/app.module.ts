import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{LibretaContactosPage} from '../pages/libreta-contactos/libreta-contactos';
import{AcercaDePage} from '../pages/acerca-de/acerca-de';
import{NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ContactService} from '../providers/services/contact.service'
//import { Services } from '@angular/core/src/view';

import { FIREBASE_CONFIG } from '../app/firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { VerContactoPage } from '../pages/ver-contacto/ver-contacto';
import { PerfilAlumnoPage } from '../pages/perfil-alumno/perfil-alumno';
import { QuizStatsProvider } from '../providers/quiz-stats/quiz-stats';

@NgModule({
declarations: [
 MyApp,
 HomePage,
 ListPage,
 LibretaContactosPage,
 AcercaDePage,
 NuevoContactoPage,
 VerContactoPage,
 PerfilAlumnoPage,
 ],
imports: [
 BrowserModule,
 IonicModule.forRoot(MyApp),
 AngularFireModule.initializeApp(FIREBASE_CONFIG),
 AngularFireDatabaseModule,
 ],
bootstrap: [IonicApp],
entryComponents: [
 MyApp,
 HomePage,
 ListPage,
 LibretaContactosPage,
 AcercaDePage,
 NuevoContactoPage,
 VerContactoPage,
 PerfilAlumnoPage,
 ],
providers: [
 StatusBar,
 SplashScreen,
 {provide: ErrorHandler, useClass: IonicErrorHandler},
 ContactService,
    QuizStatsProvider
 ]
})
export class AppModule {}