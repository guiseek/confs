import { TicketProdService, TicketService } from '../app/subscription/services';
import { HttpClient } from '@angular/common/http';

export const environment = {
  production: true,
  providers: [
    {
      provide: TicketService,
      // useFactory: () => {
      //   return new TicketMockService();
      // },
      useFactory: (http: HttpClient) => {
        return new TicketProdService(http);
      },
      deps: [HttpClient],
    },
  ],
};
