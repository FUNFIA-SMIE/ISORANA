import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NouveauConsultationComponent } from './nouveau-consultation/nouveau-consultation.component';
import { ConsultationListComponent } from './consultation-list/consultation-list.component';
import { OrdonnanceComponent } from './ordonnance/ordonnance.component';
import { EtatStockComponent } from './etat-stock/etat-stock.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NouveauConsultationComponent,
    ConsultationListComponent,
    OrdonnanceComponent,
    EtatStockComponent
  ],
  imports: [HttpClientModule,FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
