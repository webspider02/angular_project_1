import { Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { SearchPatientComponent } from './search-patient/search-patient.component';

export const routes: Routes = [
    { 
        path: '', redirectTo: '/display-data', pathMatch: 'full' 
    },
    {
        path: 'display-data',
        component: DisplayDataComponent
    },
    {
        path: 'search-patient',
        component: SearchPatientComponent
    }
];
