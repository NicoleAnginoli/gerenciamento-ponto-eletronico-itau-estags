import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from '../models/funcionario';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-table-func',
  templateUrl: './table-func.component.html',
  styleUrls: ['./table-func.component.css']
})
export class TableFuncComponent implements OnInit {
  
  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) {}
  
  id = 1;

  ngOnInit() {
    this.getFuncionarios();
    // this.getFuncionarioById(this.id);
  }

  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
      console.log(funcionarios)
      this.funcionarios = funcionarios;
    });
  }

  insertFuncionario(form: NgForm) {
    console.log(form)
    this.funcionarioService.postFuncionario(this.funcionario).subscribe(() => {
        this.cleanForm(form);
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    // funcionario = {} as Funcionario;
  }

  //como mostrar esse objeto na tabela
  getFuncionarioById(id: number){
    this.funcionarioService.getFuncionarioById(id).subscribe((funcionario: Funcionario) => {
      console.log(funcionario)
      this.funcionario = funcionario;
    });
  }


}