import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import { APP_INITIALIZER } from '@angular/core';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireModule} from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';
import {AuthService} from 'src/app/services/auth.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SharedModule],
  providers: [{
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
    },
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: AuthService) => () => ds.initalizeService(),
      deps: [AuthService],
      multi: true

    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
