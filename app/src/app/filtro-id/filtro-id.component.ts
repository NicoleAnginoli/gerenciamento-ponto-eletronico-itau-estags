import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { FuncionarioService } from '../services/funcionario.service';
import { NgForm } from '@angular/forms';
import { TableFuncComponent } from '../table-func/table-func.component';
import { Batidaponto } from '../models/batidaponto';
import { BatidapontoService } from '../services/batidaponto.service';

@Component({
  selector: 'app-filtro-id',
  templateUrl: './filtro-id.component.html',
  styleUrls: ['./filtro-id.component.css']
})
export class FiltroIdComponent implements OnInit {

  selectedId: number;
  selectedView: number;
  funcionario = {} as Funcionario;
  funcionarioToBeUpdated = {} as Funcionario;
  editFunc: boolean;
  showMessage: boolean;
  funcionarios: Funcionario[];
  pontos: Batidaponto[];
  viewFunc: boolean;

  constructor(private funcionarioService: FuncionarioService, private batidaPontoService: BatidapontoService) {}

  ngOnInit() {
    this.editFunc = false;
    this.showMessage = false;
    this.viewFunc = false;
  }

  
  cleanForm(form: NgForm) {
    form.resetForm();
  }

  getFuncionarioById(id: number){
    this.funcionarioService.getFuncionarioById(id).subscribe((funcionario: Funcionario) => {
      this.funcionario = funcionario;
      this.funcionarioToBeUpdated = funcionario;
      
      this.editFunc = false;
      this.viewFunc = true;
    });
  }

  getRegistryById(id: number) {
    this.batidaPontoService.getResgistriesById(id).subscribe((pontos: Batidaponto[]) => {
      this.pontos = pontos;
    });
  }

  edit(){
    this.editFunc=true;
  } 

  updateFunc(form: NgForm){
    this.funcionarioService.putFuncionario(this.funcionarioToBeUpdated).subscribe(() => {
      this.showMessage=true;
    },
    error => console.log(error)
    );
  }

}
