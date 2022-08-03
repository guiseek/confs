import { BehaviorSubject } from 'rxjs';

export class ErrorFacade {
  private _error: Error | null = null;
  get error(): Error | null {
    return this._error;
  }

  private _message = new BehaviorSubject<string | null>(null);
  readonly message$ = this._message.asObservable();

  http(error: Error): void {
    this._error = error;
    this._message.next(error.message);
  }
}
