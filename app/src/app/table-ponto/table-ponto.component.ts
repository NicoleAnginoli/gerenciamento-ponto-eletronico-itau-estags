import { Component, OnInit } from '@angular/core';
import { Batidaponto } from '../models/batidaponto';
import { BatidapontoService } from '../services/batidaponto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-table-ponto',
  templateUrl: './table-ponto.component.html',
  styleUrls: ['./table-ponto.component.css']
})
export class TablePontoComponent implements OnInit {

 ponto = {} as Batidaponto;
 pontos: Batidaponto[];

 constructor(private batidaPontoService: BatidapontoService) {}

 ngOnInit() {
   this.getRegistries();
 }

 getRegistries() {
  this.batidaPontoService.getAllRegistries().subscribe((pontos: Batidaponto[]) => {
    this.pontos = pontos;
  });
}

cleanForm(form: NgForm) {
  form.resetForm();
  // funcionario = {} as Funcionario;
}

}
