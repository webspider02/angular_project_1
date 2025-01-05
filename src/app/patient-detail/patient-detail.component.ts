// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { ActivatedRoute, Router } from '@angular/router';
// import { RouterModule, RouterLink } from '@angular/router';
// import { patientData } from '../data';
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
//     MatButtonModule,
//   ],
//   templateUrl: './patient-detail.component.html',
//   styleUrls: ['./patient-detail.component.scss'],
// })
// export class PatientDetailComponent implements OnInit {
//   patientData = patientData;
//   fullName: string = '';
//   amka: string = '';
//   address: string = '';
//   city: string = '';
//   admissionDate: string = '';
//   patientId: number | null = null;

//   constructor(private route: ActivatedRoute, private router: Router) {}

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id')); // Get patient ID from the route
//     this.patientId = id;

//     const patient = this.patientData.find((p) => p.id === id);
//     if (patient) {
//       this.fullName = patient.fullName;
//       this.amka = patient.amka;
//       this.address = patient.address.street;
//       this.city = patient.address.city;
//       this.admissionDate = patient.admissionDate;
//     }
//   }

//   save(): void {
//     if (this.patientId === null) return;

//     const patientIndex = this.patientData.findIndex((p) => p.id === this.patientId);
//     if (patientIndex !== -1) {
//       this.patientData[patientIndex] = {
//         id: this.patientId,
//         fullName: this.fullName,
//         amka: this.amka,
//         address: {
//           street: this.address,
//           city: this.city,
//         },
//         admissionDate: this.admissionDate,
//       };
//       console.log('Patient details updated successfully!');
//       this.router.navigate(['/patients']);
//     }
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
