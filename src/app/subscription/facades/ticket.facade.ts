import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { mapToTicketUser } from '../utilities';
import { TicketService } from '../services';
import { TicketUser } from '../../shared';

@Injectable({
  providedIn: 'root',
})
export class TicketFacade {
  private _githubUser = new BehaviorSubject<TicketUser | null>(null);
  readonly githubUser$ = this._githubUser.asObservable();

  constructor(private _service: TicketService) {}

  loadGithubUser(username: string): void {
    const user$ = this._service.getGithubUser(username);

    user$.pipe(map(mapToTicketUser)).subscribe((githubUser) => {
      this._githubUser.next(githubUser);
    });
  }
}
