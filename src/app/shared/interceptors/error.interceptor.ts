import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  JsonpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ErrorInterceptor
  extends JsonpInterceptor
  implements HttpInterceptor
{
  // constructor() {}

  override intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<HttpErrorResponse>> {
    const clone = request.clone();
    return next.handle(clone);
  }
}
