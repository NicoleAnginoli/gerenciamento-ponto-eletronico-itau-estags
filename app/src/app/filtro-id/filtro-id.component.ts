import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { FuncionarioService } from '../services/funcionario.service';
import { NgForm } from '@angular/forms';
import { TableFuncComponent } from '../table-func/table-func.component';
import { Batidaponto } from '../models/batidaponto';
import { BatidapontoService } from '../services/batidaponto.service';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

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
  hours: number = 0;
  horasTrabalhadas: String;
  today: Date = new Date();
  
  constructor(private funcionarioService: FuncionarioService, private batidaPontoService: BatidapontoService) { }

  ngOnInit() {
    this.editFunc = false;
    this.showMessage = false;
    this.viewFunc = false;
  }


  cleanForm(form: NgForm) {
    form.resetForm();
  }

  getFuncionarioById(id: number) {
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
      this.workedHours(this.pontos);
    });
  }

  edit() {
    this.editFunc = true;
  }

  updateFunc(form: NgForm) {
    this.funcionarioService.putFuncionario(this.funcionarioToBeUpdated).subscribe(() => {
      this.showMessage = true;
    },
      error => console.log(error)
    );
  }

  workedHours(batidas: Batidaponto[]) {
    this.hours = 0;
    let today = new Date().getDate();

    let todayRegistries = new Array<Batidaponto>();
    for (let i = 0; i < batidas.length; i++) {
      if (new Date(batidas[i].datahora).getDate() == today) {
        todayRegistries.push(batidas[i]);
      }
    }
    console.log(todayRegistries)

    let i = 0;
    while (i < todayRegistries.length) {
      let saida: Date;
      let entrada: Date;
      let tipobatida = todayRegistries[i].tipobatida;

      if (tipobatida == "entrada") {
        entrada = new Date(todayRegistries[i].datahora);
        i++;
        while (i < todayRegistries.length) {
          tipobatida = todayRegistries[i].tipobatida;

          if (tipobatida == "saída") {
            saida = new Date(todayRegistries[i].datahora);
            break;
          }
          i++;
        }
      }

      if (entrada && saida) {
        this.hours += this.calculateDiff(entrada, saida);

      }
      if(entrada && !saida){
        let now = new Date();
        this.hours += this.calculateDiff(entrada, now);
      }

      i++;

    }
    console.log(this.formatTime(this.hours))
    this.horasTrabalhadas = this.formatTime(this.hours);
  }

  calculateDiff(entrada: Date, saida: Date): number{
    let diff: number = saida.getTime() - entrada.getTime();
  
    return diff;
  }

  formatTime(ms: number): String {
    var seconds: number = ms / 1000;
    var minutes: number = Math.floor(seconds / 60);
    seconds = seconds%60;
    var hours: number = Math.floor(minutes / 60);
    minutes = minutes%60;
    return this.formatSeconds(seconds, minutes, hours);
  }

  formatSeconds(s: number, m: number, h: number): String {
    let seconds: String = s.toFixed();
    let minutes: String = m.toString();
    let hours: String = h.toString();
    if (s<10){
      seconds = '0'+s;
    }
    if (m<10){
      minutes = '0'+m;
    }
    if (h<10){
      hours = '0'+h;
    }
    return hours + ':' + minutes + ':' + seconds;
  }


}
