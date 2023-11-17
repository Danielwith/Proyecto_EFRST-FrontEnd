import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompatibilityComponent } from './compatibility.component';

const routes: Routes = [
  {
    path: '',
    component: CompatibilityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompatibilityRoutingModule {}
