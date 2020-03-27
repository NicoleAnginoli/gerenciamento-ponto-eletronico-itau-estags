import { Component, OnInit } from '@angular/core';
import { Batidaponto } from '../models/batidaponto';
import { BatidapontoService } from '../services/batidaponto.service';
import { NgForm } from '@angular/forms';
import { Funcionario } from '../models/funcionario';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-registro-ponto',
  templateUrl: './registro-ponto.component.html',
  styleUrls: ['./registro-ponto.component.css']
})
export class RegistroPontoComponent implements OnInit {

  ponto = {} as Batidaponto;
  pontos: Batidaponto[];
  showMessage: boolean;
  errorMessage: boolean;
  sameRegistry: boolean;
  existsFunc = {} as Funcionario;

  constructor(private funcionarioService: FuncionarioService, private batidaPontoService: BatidapontoService) { }

  ngOnInit() {
    this.showMessage = false;
    this.errorMessage = false;
    this.sameRegistry = false;
  }

  cleanForm(form: NgForm) {
    form.reset();
    this.ponto = {} as Batidaponto;
  }

  //Insere um novo registro de ponto
  insertRegistry(form: NgForm) {
    //Verifica se existe um funcionário com aquele ID
    this.funcionarioService.getFuncionarioById(this.ponto.idfunc).subscribe((funcionario: Funcionario) => {
      if (funcionario == null) {
        this.errorMessage = true;
        this.showMessage = false;
      }
      else {
        //Se o funcionario existir, insere a batida de ponto
        this.batidaPontoService.postRegistry(this.ponto).subscribe(() => {
          this.showMessage = true;
          this.errorMessage = false;
          this.sameRegistry = false;
          console.log("ok")
          
          var millisecondsToWait = 1000;
          setTimeout(function () {
            form.resetForm();
          }, millisecondsToWait);
        });
      }
    });
  }
}
