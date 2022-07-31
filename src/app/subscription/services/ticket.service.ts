import { Observable } from 'rxjs';

import { GithubUser } from '../../shared';

export abstract class TicketService {
  abstract getGithubUser(username: string): Observable<GithubUser>;
}
