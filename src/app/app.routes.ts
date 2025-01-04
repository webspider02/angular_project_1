import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: '', component: PatientsComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'patient-detail/:id', component: PatientDetailComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'add-patient', component: AddPatientComponent }
];

