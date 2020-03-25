import { Component, OnInit } from '@angular/core';
import { Batidaponto } from '../models/batidaponto';
import { BatidapontoService } from '../services/batidaponto.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-ponto',
  templateUrl: './registro-ponto.component.html',
  styleUrls: ['./registro-ponto.component.css']
})
export class RegistroPontoComponent implements OnInit {

  ponto = {} as Batidaponto;
  pontos: Batidaponto[];

  constructor(private batidaPontoService: BatidapontoService) { }

  ngOnInit() {
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.ponto = {} as Batidaponto;
  }

  insertRegistry(form: NgForm) {
    console.log(form)
    this.batidaPontoService.postRegistry(this.ponto).subscribe(() => {
      this.cleanForm(form);
    });
  }
}
