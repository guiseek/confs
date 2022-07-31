import { RouterModule } from '@angular/router';

import { HomeComponent } from './containers';

export const HomeRouting = RouterModule.forChild([
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
]);
