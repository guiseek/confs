import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { TicketResolver } from './ticket.resolver';

describe('TicketResolver', () => {
  let resolver: TicketResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [...environment.providers]
    });
    resolver = TestBed.inject(TicketResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
