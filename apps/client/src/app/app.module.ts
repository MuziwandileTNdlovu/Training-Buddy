import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FeatureModule as ClientShellFeatureModule } from '@training-buddy/client/shell/feature';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AgmCoreModule} from '@agm/core';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    ClientShellFeatureModule,
    AppRoutingModule,
    //imports for google maps geo-encoding:
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxYaJFWxO0y8YjqvG8OOGuwqvDPwDaSMY',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
