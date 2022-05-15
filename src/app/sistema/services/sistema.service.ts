import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cita } from '../interfaces/cita.interface';
import { Paciente } from '../interfaces/paciente.interface';

@Injectable({
  providedIn: 'root',
})
export class SistemaService {
  url: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  crearCita(cita: Cita): Observable<Cita> {
    let endpoint = `${this.url}/citas`;
    return this.http.post<Cita>(endpoint, cita, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  obtenerPacientes(): Observable<Paciente[]> {
    let endpoint = `${this.url}/pacientes`;
    return this.http.get<Paciente[]>(endpoint, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  obtenerPaciente(id: string): Observable<Paciente> {
    let endpoint = `${this.url}/pacientes/${id}`;
    return this.http.get<Paciente>(endpoint, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  agregarCita(id: string, sintomas: { sintomas: string }): Observable<Cita> {
    let endpoint = `${this.url}/citas/nueva/${id}`;
    return this.http.post<Cita>(endpoint, sintomas, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  actualizarPaciente(id: string, data: Paciente): Observable<Paciente> {
    let endpoint = `${this.url}/pacientes/${id}`;
    return this.http.put<Paciente>(endpoint, data, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  verCitas(id: string): Observable<Cita[]> {
    let endpoint = `${this.url}/citas/${id}`;
    return this.http.get<Cita[]>(endpoint, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  eliminarPaciente(id: string): Observable<Paciente> {
    let endpoint = `${this.url}/pacientes/${id}`;
    return this.http.delete<Paciente>(endpoint, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }

  searchPaciente(termino: string): Observable<Paciente[]> {
    let endpoint = `${this.url}/search/${termino}`;
    return this.http.get<Paciente[]>(endpoint, {
      headers: {
        'x-token': localStorage.getItem('token')!,
      },
    });
  }
}
