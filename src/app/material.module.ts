import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule,
		 MatCardModule } from '@angular/material';

const MATERIAL = [
	MatButtonModule,
	MatCardModule
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
