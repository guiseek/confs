import { catchError } from 'rxjs';

import { TicketMockService, TicketService } from '../services';
import { TicketFacade } from './ticket.facade';

describe('TicketFacade', () => {
  let service: TicketService;
  let facade: TicketFacade;

  beforeAll(() => {
    service = new TicketMockService();
    facade = new TicketFacade(service);
  });

  it('should create an instance', () => {
    expect(facade).toBeTruthy();
  });

  it('should return correct mock user', () => {
    jest.spyOn(facade, 'loadGithubUser');

    facade.loadGithubUser('developerparana');
    const $githubUser = facade.githubUser$.subscribe((githubUser) => {
      $githubUser.unsubscribe();

      expect(githubUser?.id).toEqual(15199454);
    });
  });

  it('should return null user', () => {
    jest.spyOn(facade.githubUser$, 'subscribe');

    const $githubUser = facade.githubUser$
      .pipe(
        catchError((err, caught) => {
          expect(err).toThrow('User wrong-user not found');
          return caught;
        })
      )
      .subscribe(() => {
        $githubUser.unsubscribe();
      });
  });
});
