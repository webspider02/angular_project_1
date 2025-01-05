import { Injectable } from '@angular/core';
import { Patient } from './models';
import { patientData } from './data';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  private patientList: Patient[] = patientData;

  getPatients(): Patient[] {
    return this.patientList;
  }

  addPatient(newPatient: Patient): void {
    this.patientList.push(newPatient);
  }

  removePatient(patientToRemove: Patient): boolean {
    const index = this.patientList.findIndex(patient =>
      patient.fullName === patientToRemove.fullName &&
      patient.amka === patientToRemove.amka &&
      patient.address.street === patientToRemove.address.street &&
      patient.address.city === patientToRemove.address.city &&
      patient.admissionDate === patientToRemove.admissionDate
    );

    if (index !== -1) {
      this.patientList.splice(index, 1);
      return true;
    }
    return false;
  }
}

