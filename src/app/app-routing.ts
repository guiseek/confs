import { RouterModule } from '@angular/router';

export const AppRouting = RouterModule.forRoot(
  [
    {
      path: '',
      loadChildren: () =>
        import('./home/home.module').then((m) => m.HomeModule),
    },
    {
      path: '',
      loadChildren: () =>
        import('./subscription/subscription.module').then(
          (m) => m.SubscriptionModule
        ),
    },
  ],
  {
    initialNavigation: 'enabledBlocking',
  }
);
