import { Injectable } from '@angular/core';
import { Patient } from './models';
import { patientData } from './data';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  private patients: Patient[] = patientData;

  getPatientById(id: number): Patient | undefined {
    return this.patients.find((patient) => patient.id === id);
  }

  updatePatient(updatedPatient: Patient): void {
    const index = this.patients.findIndex((p) => p.id === updatedPatient.id);
    if (index !== -1) {
      this.patients[index] = updatedPatient;
      console.log('Patient details updated successfully!');
    } else {
      console.error('Patient not found!');
    }
  }

  getAllPatients(): Patient[] {
    return this.patients;
  }
}

