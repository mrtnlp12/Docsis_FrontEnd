import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cita } from '../../interfaces/cita.interface';
import { Paciente } from '../../interfaces/paciente.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css'],
})
export class VerCitasComponent implements OnInit {
  id: string;
  citas: Cita[] = [];
  nombreFull: string = '';

  constructor(
    private service: SistemaService,
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id')!;

    this.obtenerPaciente();
    this.verCitas();
  }

  ngOnInit(): void {}

  verCitas() {
    this.service.verCitas(this.id).subscribe((data: Cita[]) => {
      this.citas = data;
    });
  }

  obtenerPaciente() {
    this.service.obtenerPaciente(this.id).subscribe((data: Paciente) => {
      this.nombreFull = data.nombre + ' ' + data.apellidos;
    });
  }
}
