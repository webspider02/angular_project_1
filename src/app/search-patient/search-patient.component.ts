import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { patientData } from '../data';
import { Patient } from '../models';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-search-patient',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatListModule],
  templateUrl: './search-patient.component.html',
  styleUrl: './search-patient.component.scss'
})
export class SearchPatientComponent {
  patientData: Patient[] = patientData;
  selectedName: string | null = null;
  selectedPatient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.selectedPatientName$.subscribe((name) => {
      this.selectedName = name;
      this.selectedPatient = this.patientData.find((p) => p.fullName === name) || null;
    });
  }
}
