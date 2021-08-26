import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

const routes: Routes = [
  { path: '', redirectTo: 'reactive-forms', pathMatch: 'full' },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DeveloperGuidesRoutingModule {}
