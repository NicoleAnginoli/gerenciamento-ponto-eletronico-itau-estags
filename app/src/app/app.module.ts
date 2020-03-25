import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableFuncComponent } from './table-func/table-func.component';
import { TablePontoComponent } from './table-ponto/table-ponto.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { AddFuncComponent } from './add-func/add-func.component';
import { FiltroIdComponent } from './filtro-id/filtro-id.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFuncComponent,
    TablePontoComponent,
    RegistroPontoComponent,
    AddFuncComponent,
    FiltroIdComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
