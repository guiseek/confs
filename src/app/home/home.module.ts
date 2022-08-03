import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { HeaderComponent, SubscribeComponent, TicketComponent } from './components';
import { HomeComponent } from './containers';
import { HomeRouting } from './home-routing';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, TicketComponent, SubscribeComponent],
  imports: [SharedModule, HomeRouting],
})
export class HomeModule {}
