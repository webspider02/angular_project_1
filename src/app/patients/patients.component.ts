import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DisplayDataComponent } from '../display-data/display-data.component';

import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    MatButtonModule,
    MatListModule,
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

  openModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }
  
}
