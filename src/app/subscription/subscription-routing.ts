import { RouterModule } from '@angular/router';

import { TicketComponent } from './components';
import { TicketResolver } from './resolvers';

export const SubscriptionRouting = RouterModule.forChild([
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
]);
