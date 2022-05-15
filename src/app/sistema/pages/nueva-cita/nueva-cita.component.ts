import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cita } from '../../interfaces/cita.interface';
import { Paciente } from '../../interfaces/paciente.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.component.html',
  styleUrls: ['./nueva-cita.component.css'],
})
export class NuevaCitaComponent implements OnInit {
  id: string;
  sintomas: { sintomas: string };
  nombreFull: string = '';

  constructor(
    private service: SistemaService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.sintomas = {
      sintomas: '',
    };

    this.obtenerPaciente();
  }
  ngOnInit(): void {}

  obtenerPaciente() {
    this.service.obtenerPaciente(this.id).subscribe((data: Paciente) => {
      this.nombreFull = data.nombre + ' ' + data.apellidos;
    });
  }

  agregarCita(form: HTMLFormElement) {
    this.service.agregarCita(this.id, this.sintomas).subscribe((data: Cita) => {
      form.reset();
      this.router.navigate(['/ver-citas', this.id]);
    });
  }
}
