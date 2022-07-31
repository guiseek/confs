import { TicketMockService, TicketService } from '../services';
import { TicketFacade } from './ticket.facade';

describe('TicketFacade', () => {
  let service: TicketService;

  beforeAll(() => {
    service = new TicketMockService();
  });

  it('should create an instance', () => {
    expect(new TicketFacade(service)).toBeTruthy();
  });
});
