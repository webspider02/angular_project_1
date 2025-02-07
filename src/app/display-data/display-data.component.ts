import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { DetailsComponent } from '../details/details.component';
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
    // AddPatientComponent,
    // DetailsComponent
  ],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent {
  patientData: Patient[] = patientData;

  selectedPatient: Patient | null = null;

  @Input() searchTerm: string = '';
  // filteredPatients: Patient[] = [...this.patientData]; 

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) {
      this.filterPatients();  // Trigger filtering when the search term changes
    }
  }

  // Filter patients based on the search term
  filterPatients(): void {
    const searchTermLower = this.searchTerm.toLowerCase();

    // Filter patientData directly
    this.patientData = patientData.filter(patient => {
      return (
        patient.fullName.toLowerCase().includes(searchTermLower) ||
        patient.amka.toLowerCase().includes(searchTermLower) ||
        patient.address.street.toLowerCase().includes(searchTermLower) ||
        patient.address.city.toLowerCase().includes(searchTermLower)
      );
    });
  }

  currentPage: number = 1; 
  itemsPerPage: number = 5;

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['searchTerm']) {
  //     this.filterPatients();
  //   }
  // }

  // get paginatedPatients(): Patient[] {
  //   const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  //   return this.filteredPatients.slice(startIndex, startIndex + this.itemsPerPage);
  // }

  // filterPatients(): void {
  //   const lowercasedTerm = this.searchTerm.toLowerCase();
  //   this.filteredPatients = this.patientData.filter(patient => // filteredPatients
  //     patient.fullName.toLowerCase().includes(lowercasedTerm)
  //   );
  //   this.currentPage = 1;
  // }

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
    this.selectedPatient = null;
  }

  delete(patient: Patient): void {
    const index = this.patientData.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patientData.splice(index, 1);
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
  }

  // get totalPages(): number {
  //   return Math.ceil(this.filteredPatients.length / this.itemsPerPage);
  // }

  constructor(private patientService: PatientService) {}

  selectPatient(patient: Patient): void {
    this.patientService.setSelectedPatient(patient);
  }
}
