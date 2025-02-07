import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { PatientsComponent } from '../patients/patients.component';
import { SettingsComponent } from '../settings/settings.component';

import { patientData } from '../data'
import { Patient } from '../models';
import { Router } from 'express';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterLink,
    SettingsComponent,
    NgOptimizedImage,
    MatListModule,
    RouterOutlet,
    PatientsComponent,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule, 
    MatToolbarModule,
    RouterModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  patients:  Patient[]= patientData;
}
