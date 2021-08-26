import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DeveloperGuidesRoutingModule } from './developer-guides-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormsComponent],
  imports: [CommonModule, DeveloperGuidesRoutingModule, ReactiveFormsModule],
})
export class DeveloperGuidesModule {}
