import { NgModule } from '@angular/core';
import { GpGoogleDiectionMapComponent } from './gp-google-diection-map.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [GpGoogleDiectionMapComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAyDWXjuSjetLlEapqXyOonEDPo4GCeMds',
      libraries: ['places']
    }),
  ],
  exports: [GpGoogleDiectionMapComponent]
})
export class GpGoogleDiectionMapModule { }
