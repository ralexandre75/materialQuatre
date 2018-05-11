import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,
		 MatButtonModule,
		 MatCardModule,
		 MatStepperModule,
		 MatTabsModule,
		 MatExpansionModule,
		 MatButtonToggleModule,
		 MatChipsModule,
		 MatIconModule,
		 MatIconRegistry,
		 MatProgressSpinnerModule,
		 MatProgressBarModule,
		 MatDialogModule,
		 MatTooltipModule,
		 MatSnackBarModule,
		 MatTableModule,
		 MatPaginatorModule,
		 MatSortModule
		  } from '@angular/material';

const MATERIAL = [
	MatFormFieldModule,
	MatButtonModule,
	MatCardModule,
	MatStepperModule,
	MatTabsModule,
	MatExpansionModule,
	MatButtonToggleModule,
	MatChipsModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule,
	MatDialogModule,
	MatTooltipModule,
	MatSnackBarModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: MATERIAL,
  providers: [MatIconRegistry],
  declarations: []
})
export class MaterialModule { }
