import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { PatientService } from '../patient.service';
import { MatButton } from '@angular/material/button';

import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatButton,
    RouterModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  selectedPatient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.selectedPatient = this.patientService.getSelectedPatient();
  }
}
