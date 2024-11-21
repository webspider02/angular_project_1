import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayDataComponent } from '../display-data/display-data.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';
import { patientData } from '../data';
import { Patient } from '../models';
import { SearchPatientComponent } from '../search-patient/search-patient.component';
import { AddPatientComponent } from "../add-patient/add-patient.component";

@Component({
  selector: 'app-patients-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SearchPatientComponent, DisplayDataComponent, CommonModule, MatCardModule, MatSidenavModule, MatSelectModule, MatFormField, MatInput, AddPatientComponent],
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
