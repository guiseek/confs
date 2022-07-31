import { of, Subject } from 'rxjs';

import { TicketService } from './ticket.service';
import { GithubUser } from '../../shared';
import { githubApi } from './__mocks__';

export class TicketMockService implements TicketService {
  private _githubUser = new Subject<GithubUser>();
  readonly githubUser$ = this._githubUser.asObservable();

  getGithubUser(username: string) {
    const githubUser = githubApi.find(
      (user) => user.login.toLowerCase() === username.toLowerCase()
    );

    if (!githubUser) {
      throw new Error(`User ${username} not found`);
    }

    return of(githubUser);
  }
}
