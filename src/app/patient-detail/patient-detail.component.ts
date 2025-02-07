import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { PatientService } from '../patient.service';
import { patientData } from '../data';
import { Patient } from '../models';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [
    // RouterLink,
    RouterModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  @Input() patient: Patient | undefined;
  @Output() closeModal = new EventEmitter<void>();

  constructor(private router: Router, private editService: EditService, private patientService: PatientService) {}

  fullName: string = '';
  amka: string = '';
  address: string = '';
  city: string = '';
  admissionDate: string = '';

  ngOnInit(): void {
    if (this.patient) {
      this.fullName = this.patient.fullName;
      this.amka = this.patient.amka;
      this.address = this.patient.address.street;
      this.city = this.patient.address.city;
      this.admissionDate = this.patient.admissionDate;
    }
  }

  save(): void {
    if (!this.patient) {
      console.error('No patient to update!');
      return;
    }
  
    const updatedPatient: Patient = {
      ...this.patient,
      fullName: this.fullName,
      amka: this.amka,
      address: {
        street: this.address,
        city: this.city,
      },
      admissionDate: this.admissionDate,
    };

    this.editService.updatePatient(updatedPatient); 
    this.patientService.setSelectedPatient(updatedPatient);
    this.closeModal.emit();
  }

  cancel(): void {
    this.closeModal.emit(); // Close modal without saving
  }
}
