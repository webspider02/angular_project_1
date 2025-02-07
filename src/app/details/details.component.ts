import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { PatientService } from '../patient.service';
import { MatButton } from '@angular/material/button';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';
import { TradesComponent } from '../trades/trades.component';
import { ActivatedRoute } from '@angular/router';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    MatButton,
    RouterModule,
    RouterLink,
    CommonModule,
    PatientDetailComponent,
    // TradesComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  selectedPatient: Patient | null = null;
  // @Output() openModal = new EventEmitter<Patient>();

  patientData: Patient[] = patientData;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.selectedPatient = this.patientService.getSelectedPatient();
  }

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

    this.selectedPatient = this.patientService.getSelectedPatient();
  }

  selectPatient(patient: Patient): void {
    this.patientService.setSelectedPatient(patient);
  }
  // editPatient(): void {
  //   if (this.selectedPatient) {
  //     console.log('Emitting event for:', this.selectedPatient);
  //     this.openModal.emit(this.selectedPatient);
  //   }
  // }

  
}

