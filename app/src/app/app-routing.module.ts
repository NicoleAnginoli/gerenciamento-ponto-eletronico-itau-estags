import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableFuncComponent } from './table-func/table-func.component';
import { RegistroPontoComponent } from './registro-ponto/registro-ponto.component';
import { TablePontoComponent } from './table-ponto/table-ponto.component';
import { AddFuncComponent } from './add-func/add-func.component';
import { FiltroIdComponent } from './filtro-id/filtro-id.component';

const routes: Routes = [
  { path: 'funcionario', component: TableFuncComponent },
  { path: 'ponto', component: RegistroPontoComponent},
  { path: '', component: RegistroPontoComponent},
  { path: 'funcionario/adicionar', component: AddFuncComponent},
  { path: 'funcionario/info', component: FiltroIdComponent},
  { path: 'ponto/registros', component: TablePontoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }