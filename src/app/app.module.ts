import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GpGoogleDiectionMapModule} from 'projects/gp-google-diection-map/src/lib/gp-google-diection-map.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyDWXjuSjetLlEapqXyOonEDPo4GCeMds',
      libraries: ['places']
    }),
    AgmDirectionModule,
    GpGoogleDiectionMapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
