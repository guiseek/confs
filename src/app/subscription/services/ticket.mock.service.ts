import { catchError, map, of, Subject } from 'rxjs';

import { TicketService } from './ticket.service';
import { GithubUser } from '../../shared';
import { githubApi } from './__mocks__';

export class TicketMockService implements TicketService {
  private _githubUser = new Subject<GithubUser>();
  readonly githubUser$ = this._githubUser.asObservable();

  getGithubUser(username: string) {
    const findUsers = (username: string) => (users: GithubUser[]) => {
      return users.find(
        (user) => user.login.toLowerCase() === username.toLowerCase()
      );
    };

    const catchUser = (user?: GithubUser) => {
      if (!user) {
        throw `${username} not found`;
      }
      return user;
    };

    return of(githubApi).pipe(
      map(findUsers(username)),
      map(catchUser),
      catchError((err) => {
        throw `User ${err.message}`;
      })
    );
  }
}
