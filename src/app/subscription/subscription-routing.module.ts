import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TicketComponent } from './components';
import { TicketResolver } from './resolvers';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':username',
        component: TicketComponent,
        // resolve: {
        //   githubUser: TicketResolver,
        // },
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'developerparana',
      },
    ]),
  ],
  exports: [RouterModule],
})
export class SubscriptionRoutingModule {}
