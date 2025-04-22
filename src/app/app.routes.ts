import { Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component'; // {path: 'details', component: DetailsComponent}
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
    },
    { path: 'patients', component: PatientsComponent },
    { path: 'patient-detail/:id', component: PatientDetailComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'add-patient', component: AddPatientComponent },
    { path: 'details', component: DetailsComponent },
];

