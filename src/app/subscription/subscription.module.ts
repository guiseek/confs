import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubscriptionRouting } from './subscription-routing';
import { TicketComponent } from './components';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

@NgModule({
  declarations: [TicketComponent, SubscribeComponent],
  imports: [CommonModule, SubscriptionRouting],
})
export class SubscriptionModule {}
