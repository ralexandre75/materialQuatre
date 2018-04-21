import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
		 MatCardModule,
		 MatStepperModule,
		 MatTabsModule,
		 MatExpansionModule,
		 MatButtonToggleModule } from '@angular/material';

const MATERIAL = [
	MatButtonModule,
	MatCardModule,
	MatStepperModule,
	MatTabsModule,
	MatExpansionModule,
	MatButtonToggleModule
]

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: MATERIAL,
  declarations: []
})
export class MaterialModule { }
