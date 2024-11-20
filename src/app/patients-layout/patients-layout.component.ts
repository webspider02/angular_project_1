import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-patients-layout',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSidenavModule, MatSelectModule, MatFormField, MatInput],
  templateUrl: './patients-layout.component.html',
  styleUrl: './patients-layout.component.scss'
})
export class PatientsLayoutComponent {
  patientData: Patient[] = patientData;

  selectedPatient: Patient | null = null

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
  }
}
