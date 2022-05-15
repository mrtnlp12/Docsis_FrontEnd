import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../interfaces/paciente.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css'],
})
export class ActualizarPacienteComponent implements OnInit {
  paciente: Paciente = {
    nombre: '',
    apellidos: '',
    edad: 0,
    correo: '',
    telefono: '',
  };
  id: string;

  constructor(
    private service: SistemaService,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    this.id = actRoute.snapshot.paramMap.get('id')!;

    this.obtenerPaciente();
  }

  ngOnInit(): void {}

  obtenerPaciente() {
    this.service.obtenerPaciente(this.id).subscribe((paciente: Paciente) => {
      this.paciente = paciente;
    });
  }

  actualizarPaciente() {
    this.service
      .actualizarPaciente(this.id, this.paciente)
      .subscribe((data: Paciente) => {
        this.router.navigate(['/ver-paciente', this.id]);
      });
  }
}
