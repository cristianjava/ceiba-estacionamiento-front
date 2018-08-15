import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { SalidaComponent } from './salida/salida.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    IngresoComponent,
    SalidaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
