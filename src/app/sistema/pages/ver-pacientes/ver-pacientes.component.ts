import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../interfaces/paciente.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css'],
})
export class VerPacientesComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private service: SistemaService, private router: Router) {
    this.obtenerPacientes();
  }
  ngOnInit(): void {}

  obtenerPacientes() {
    this.service.obtenerPacientes().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }
  eliminarPaciente(id: string) {
    this.service.eliminarPaciente(id).subscribe((data: Paciente) => {
      this.pacientes = this.pacientes.filter(
        (paciente) => paciente.idPaciente?.toString() !== id
      );
    });
  }

  searchPacientes(input: HTMLInputElement) {
    let termino = input.value.trim();

    if (termino.length === 0) {
      termino = 'all';
    }

    this.service.searchPaciente(termino).subscribe((data: Paciente[]) => {
      this.pacientes = data;
      input.value = '';
    });
  }
}
