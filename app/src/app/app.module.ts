import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableFuncComponent } from './table-func/table-func.component';
import { TablePontoComponent } from './table-ponto/table-ponto.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFuncComponent,
    TablePontoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
