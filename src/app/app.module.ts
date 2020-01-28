import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDataService } from './services/api-data.service';
import { MarkerModalComponent } from './shared/modal/marker-modal/marker-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerModalComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrKGC02IHtFdDQqeoKHHp3DIJ2png81Ao'
    }),
    AgmJsMarkerClustererModule,
  ],
  providers: [
    ApiDataService
  ],
  entryComponents: [
    MarkerModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
