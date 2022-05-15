import { Component, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {
  cita = {
    nombre: '',
    apellidos: '',
    edad: 0,
    correo: '',
    telefono: '',
    sintomas: '',
  };
  success: boolean = false;

  constructor(private service: SistemaService) {}

  ngOnInit(): void {}

  crearCita(form: HTMLFormElement) {
    this.success = false;
    this.service.crearCita(this.cita).subscribe((data: Cita) => {
      this.success = true;
      setTimeout(() => {
        this.success = false;
      }, 1500);
      form.reset();
    });
  }
}
