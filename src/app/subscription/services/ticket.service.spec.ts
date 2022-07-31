import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [...environment.providers],
    });
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct mock user', () => {
    jest.spyOn(service, 'getGithubUser');

    const githubUser$ = service.getGithubUser('developerparana');
    const $githubUser = githubUser$.subscribe((githubUser) => {
      $githubUser.unsubscribe();

      expect(githubUser.id).toEqual(15199454);
    });
  });
});
