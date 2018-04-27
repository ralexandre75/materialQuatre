import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DialogComponent } from './dialog/dialog.component';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [DialogComponent],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

