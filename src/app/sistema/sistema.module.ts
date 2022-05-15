import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearCitaComponent } from './pages/crear-cita/crear-cita.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { VerPacientesComponent } from './pages/ver-pacientes/ver-pacientes.component';
import { VerPacienteComponent } from './pages/ver-paciente/ver-paciente.component';
import { ActualizarPacienteComponent } from './pages/actualizar-paciente/actualizar-paciente.component';
import { VerCitasComponent } from './pages/ver-citas/ver-citas.component';
import { NuevaCitaComponent } from './pages/nueva-cita/nueva-cita.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    CrearCitaComponent,
    SidebarComponent,
    VerPacientesComponent,
    VerPacienteComponent,
    ActualizarPacienteComponent,
    VerCitasComponent,
    NuevaCitaComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  exports: [SidebarComponent],
})
export class SistemaModule {}
