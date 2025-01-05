import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { patientData } from '../data';
import { Patient } from '../models';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [
    RouterLink,
    // Angular modules
    RouterModule,
    CommonModule,
    FormsModule,
    // Material modules
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  patient: Patient | undefined;
  fullName: string = '';
  amka: string = '';
  address: string = '';
  city: string = '';
  admissionDate: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: EditService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get patient ID from the route
    this.patient = this.patientService.getPatientById(id);

    if (this.patient) {
      this.fullName = this.patient.fullName;
      this.amka = this.patient.amka;
      this.address = this.patient.address.street;
      this.city = this.patient.address.city;
      this.admissionDate = this.patient.admissionDate;
    } else {
      console.error('Patient not found!');
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

    this.patientService.updatePatient(updatedPatient);
    this.router.navigate(['/patients']);
  }
}
