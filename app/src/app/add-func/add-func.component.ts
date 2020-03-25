import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-add-func',
  templateUrl: './add-func.component.html',
  styleUrls: ['./add-func.component.css']
})
export class AddFuncComponent implements OnInit {

  funcionario = {} as Funcionario;
  funcionarios: Funcionario[];
  showMessage: boolean;

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.showMessage = false;
  }

  insertFuncionario(form: NgForm) {
    console.log(form)
    this.funcionarioService.postFuncionario(this.funcionario).subscribe(() => {
      console.log(this.showMessage)
      // this.cleanForm(form);
      this.showMessage=true;
    });
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    // funcionario = {} as Funcionario;
  }

  //função para aceitar apenas números, utilizada no campo cpf
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
