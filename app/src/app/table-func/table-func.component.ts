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

  ngOnInit() {
    this.getFuncionarios();
    // this.getFuncionarioById(1);
  }

  //Retorna uma lista com os funcionários cadastrados
  getFuncionarios() {
    this.funcionarioService.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
      console.log(funcionarios)
      this.funcionarios = funcionarios;
    });
  }

}