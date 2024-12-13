import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PatientsComponent } from './patients/patients.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'patients', component: PatientsComponent },
];

