import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import  { patientData }  from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    MatTableModule,
    MatListModule,
    CommonModule,
    MatDividerModule,
    PatientDetailComponent,
    AddPatientComponent
  ],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  patientData: Patient[] = patientData;

  selectedPatient: Patient | null = null;

  openModal(patient: Patient): void {
    this.selectedPatient = patient;
    const modal = document.getElementById('edit-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal(): void {
    const modal = document.getElementById('edit-modal');
    if (modal) {
      modal.style.display = 'none';
    }
    this.selectedPatient = null;
  }

  delete(patient: Patient): void {
    const index = this.patientData.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patientData.splice(index, 1);
    }
  }
}
