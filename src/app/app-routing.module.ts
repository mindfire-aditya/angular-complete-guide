import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'developerGuides', pathMatch: 'full' },
  {
    path: 'developerGuides',
    loadChildren: () =>
      import('./developerGuides/developer-guides.module').then(
        (m) => m.DeveloperGuidesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
