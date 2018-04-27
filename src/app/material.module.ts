import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
		 MatCardModule,
		 MatStepperModule,
		 MatTabsModule,
		 MatExpansionModule,
		 MatButtonToggleModule,
		 MatChipsModule,
		 MatIconModule,
		 MatIconRegistry,
		 MatProgressSpinnerModule,
		 MatProgressBarModule } from '@angular/material';

const MATERIAL = [
	MatButtonModule,
	MatCardModule,
	MatStepperModule,
	MatTabsModule,
	MatExpansionModule,
	MatButtonToggleModule,
	MatChipsModule,
	MatIconModule,
	MatProgressSpinnerModule,
	MatProgressBarModule
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
