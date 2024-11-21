import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-search-patient',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule],
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.scss'
})
export class SearchPatientComponent {
  patientData: Patient[] = patientData
  selectedPatient: Patient | null = null

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }

}
