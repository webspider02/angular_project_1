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

  constructor(private patientService: PatientService ,private router: Router) {}

  ngOnInit(): void {
    this.selectedPatient = this.patientService.getSelectedPatient();
  }

  selectPatient(patient: Patient): void {
    this.patientService.setSelectedPatient(patient);
    this.router.navigate(['/details']);
    this.openModal();
  }

  openModal(): void {
    const modal = document.getElementById('edit-modal');
    if (modal) {
      modal.style.display = 'block';
    }
  }
}
