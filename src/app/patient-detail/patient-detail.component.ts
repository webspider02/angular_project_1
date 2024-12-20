// import { Component, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { ActivatedRoute } from '@angular/router';
// import { RouterModule, RouterLink } from '@angular/router';
// import {  patientData } from '../data';
// import { Patient } from '../models';
// @Component({
//   selector: 'app-patient-detail',
//   standalone: true,
//   imports: [
//     RouterModule,
//     RouterLink,
//     CommonModule,
//     FormsModule,
//     MatInputModule,
//     MatButtonModule
//   ],
//   templateUrl: './patient-detail.component.html',
//   styleUrl: './patient-detail.component.scss'
// })
// export class PatientDetailComponent {
//   patientData: Patient[] = patientData;

//   fullName: string = '';
//   amka: string = '';
//   address: string = '';
//   city: string = '';
//   admissionDate: string = '';

 

//   patient: Patient | undefined;

//   constructor(private route: ActivatedRoute) {}

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id')); // Get patient id from route
//     this.patient = patientData.find(p => p.id === id); // Fetch the patient by ID
//   }

// }

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule, RouterLink } from '@angular/router';
import { patientData } from '../data';
import { Patient } from '../models';

@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
})
export class PatientDetailComponent implements OnInit {
  patientData = patientData;
  fullName: string = '';
  amka: string = '';
  address: string = '';
  city: string = '';
  admissionDate: string = '';
  patientId: number | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Get patient ID from the route
    this.patientId = id;

    const patient = this.patientData.find((p) => p.id === id);
    if (patient) {
      this.fullName = patient.fullName;
      this.amka = patient.amka;
      this.address = patient.address.street;
      this.city = patient.address.city;
      this.admissionDate = patient.admissionDate;
    }
  }

  save(): void {
    if (this.patientId === null) return;

    const patientIndex = this.patientData.findIndex((p) => p.id === this.patientId);
    if (patientIndex !== -1) {
      this.patientData[patientIndex] = {
        id: this.patientId,
        fullName: this.fullName,
        amka: this.amka,
        address: {
          street: this.address,
          city: this.city,
        },
        admissionDate: this.admissionDate,
      };
      console.log('Patient details updated successfully!');
      this.router.navigate(['/patients']);
    }
  }
}
