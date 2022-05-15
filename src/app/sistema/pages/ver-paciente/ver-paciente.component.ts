import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../interfaces/paciente.interface';
import { SistemaService } from '../../services/sistema.service';

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.component.html',
  styleUrls: ['./ver-paciente.component.css'],
})
export class VerPacienteComponent implements OnInit {
  paciente: Paciente;
  id: string;

  constructor(
    private service: SistemaService,
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.paciente = {
      nombre: '',
      apellidos: '',
      edad: 0,
      correo: '',
      telefono: '',
    };
  }

  ngOnInit(): void {
    this.obtenerPaciente();
  }

  obtenerPaciente() {
    this.service.obtenerPaciente(this.id).subscribe((data: Paciente) => {
      this.paciente = data;
    });
  }
}
