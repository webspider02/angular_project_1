import { Injectable } from '@angular/core';
import { Patient } from './models';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private selectedPatient: Patient | null = null;

  setSelectedPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }

  getSelectedPatient(): Patient | null {
    return this.selectedPatient;
  }
}


