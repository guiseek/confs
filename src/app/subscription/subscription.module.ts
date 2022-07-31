import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { TicketComponent } from './components';

@NgModule({
  declarations: [TicketComponent],
  imports: [CommonModule, SubscriptionRoutingModule],
})
export class SubscriptionModule {}
