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
    console.log(this.funcionario);
    console.log(this.funcionarioToBeUpdated);
    form.resetForm();
    console.log(this.funcionario);
    console.log(this.funcionarioToBeUpdated);
    // funcionario = {} as Funcionario;
  }

  getFuncionarioById(id: number){
    this.funcionarioService.getFuncionarioById(id).subscribe((funcionario: Funcionario) => {
      this.funcionario = funcionario;
      this.funcionarioToBeUpdated = funcionario;
      this.editFunc = false;
      this.viewFunc = true;
      // console.log(funcionario)
      // let arr: Funcionario[];
      // arr[0] = funcionario;
      // console.log(typeof arr)
      // console.log(typeof this.funcionarios)
      // console.log(typeof this.funcionario)
      // console.log(this.selectedView)
    });
  }

  getRegistryById(id: number) {
    this.batidaPontoService.getResgistriesById(id).subscribe((pontos: Batidaponto[]) => {
      // console.log(pontos)
      this.pontos = pontos;
    });
  }

  edit(){
    // this.funcionario = this.funcionarios[0];
    // console.log(this.funcionario);
    this.editFunc=true;
    // this.funcionarioToBeUpdated = this.funcionario;
    // console.log(this.funcionarioToBeUpdated)
  } 

  updateFunc(form: NgForm){
    this.funcionarioService.putFuncionario(this.funcionarioToBeUpdated).subscribe(() => {
      // console.log(form)
      // this.cleanForm(form);
      this.showMessage=true;
    },
    error => console.log(error)
    );
  }

}
