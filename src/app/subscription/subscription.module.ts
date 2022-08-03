import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubscriptionRouting } from './subscription-routing';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, SubscriptionRouting],
  exports: []
})
export class SubscriptionModule {}
