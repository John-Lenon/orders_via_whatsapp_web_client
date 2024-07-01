import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DatetimeInputComponent } from './components/datetime-input/datetime-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { TableComponent } from './components/table/table.component'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { SelectListInputComponent } from './components/select-list-input/select-list-input.component';
import { MultiSelectListInputComponent } from './components/multi-select-list-input/multi-select-list-input.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats, MatNativeDateModule, NativeDateAdapter } from '@angular/material/core';

import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { MaskToDataInput } from './directives/mask-to-data-input';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { TimeInputComponent } from './components/time-input/time-input.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  declarations: [
    // Component Directives
    TextInputComponent,
    DatetimeInputComponent,
    ModalComponent,
    ButtonComponent,
    MessageModalComponent,
    TableComponent,
    NumberInputComponent,
    SelectListInputComponent,
    MultiSelectListInputComponent,

    // Attribute Directives
    MaskToDataInput,
     TimeInputComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatDialogModule,
    MatIconModule,
    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatSlideToggleModule,

    MatToolbarModule, 
    MatSidenavModule, 
    MatListModule, 
    MatCardModule, 
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,

    NgxMaskDirective,
    NgxMaskPipe
  ], 
  exports: [
    ModalComponent, 
    ButtonComponent,
    MessageModalComponent,
    TableComponent,
    TextInputComponent,
    NumberInputComponent,
    SelectListInputComponent,
    MultiSelectListInputComponent,
    DatetimeInputComponent,
    TimeInputComponent,

    MatPaginatorModule, 
    MatTableModule, 
    MatSortModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }, 
    provideNgxMask(),
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] }
  ]
})
export class SharedModule { }

