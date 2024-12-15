import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    DisplayDataComponent,
    AddPatientComponent,
    CommonModule,
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss'
})
export class PatientsComponent {
  patientData: Patient[] = patientData;

  delete(patient: Patient): void {
    const index = this.patientData.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patientData.splice(index, 1);
    }
  }
  
}
