import { RouterModule } from '@angular/router';


import { TicketResolver } from './resolvers';

export const SubscriptionRouting = RouterModule.forChild([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'developerparana',
  },
]);
