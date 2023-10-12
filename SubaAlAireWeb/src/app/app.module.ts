import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './default/header/header.component';
import { FooterComponent } from './default/footer/footer.component';
import { InicialComponent } from './pages/inicial/inicial.component';
import { PlanillaComponent } from './pages/planilla/planilla.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { MySComponent } from './pages/my-s/my-s.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicialComponent,
    PlanillaComponent,
    GaleriaComponent,
    MySComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
