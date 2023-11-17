import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompatibilityRoutingModule } from './compatibility-routing.module';
import { CompatibilityComponent } from './compatibility.component';
import { ContentCompatibilityComponent } from './content-compatibility/content-compatibility.component';
import { SharedModule } from '../shared/shared.module';
import { ResultCompatibilityComponent } from './result-compatibility/result-compatibility.component';

@NgModule({
  declarations: [CompatibilityComponent, ContentCompatibilityComponent, ResultCompatibilityComponent],
  imports: [CommonModule, CompatibilityRoutingModule, SharedModule],
})
export class CompatibilityModule {}
