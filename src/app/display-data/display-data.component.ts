import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
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
    AddPatientComponent
  ],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  patientData: Patient[] = patientData;

  constructor(private patientService: PatientService, private router: Router) {}

  selectPatient(patient: Patient): void {
    this.patientService.setSelectedPatient(patient);
    this.router.navigate(['/details']);
  }
}
