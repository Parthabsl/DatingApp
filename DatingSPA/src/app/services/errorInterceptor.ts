import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class errorInterceptor implements HttpInterceptor {
  intercept(
    req: import('@angular/common/http').HttpRequest<any>,
    next: import('@angular/common/http').HttpHandler
  ): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401) {
          return throwError(error.statusText);
        }

        const serverErrors = error.error;
        let errormessage = '';
        if (serverErrors.errors && typeof serverErrors.errors === 'object') {
          for (const key in serverErrors.errors) {
            if (serverErrors.errors[key]) {
              errormessage += serverErrors.errors[key] + '\n';
            }
          }
        }

        return throwError(errormessage || serverErrors || 'unknown errors');
      })
    );
  }
}

export const ErrorConstantProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: errorInterceptor,
    multi: true
}
