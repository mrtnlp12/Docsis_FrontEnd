import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPacienteComponent } from './sistema/pages/actualizar-paciente/actualizar-paciente.component';
import { CrearCitaComponent } from './sistema/pages/crear-cita/crear-cita.component';
import { LoginComponent } from './sistema/pages/login/login.component';
import { NuevaCitaComponent } from './sistema/pages/nueva-cita/nueva-cita.component';
import { SignupComponent } from './sistema/pages/signup/signup.component';
import { VerCitasComponent } from './sistema/pages/ver-citas/ver-citas.component';
import { VerPacienteComponent } from './sistema/pages/ver-paciente/ver-paciente.component';
import { VerPacientesComponent } from './sistema/pages/ver-pacientes/ver-pacientes.component';

const routes: Routes = [
  { path: '', component: CrearCitaComponent },
  { path: 'ver-pacientes', component: VerPacientesComponent },
  { path: 'ver-paciente/:id', component: VerPacienteComponent },
  { path: 'actualizar-paciente/:id', component: ActualizarPacienteComponent },
  { path: 'ver-citas/:id', component: VerCitasComponent },
  { path: 'nueva-cita/:id', component: NuevaCitaComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
