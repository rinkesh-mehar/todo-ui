import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {LoaderService} from './loader.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private router: Router, private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ok: string;
    this.loaderService.isLoading.next(true);

    return next.handle(request)
      .pipe(
        tap(
          event => ok = event instanceof HttpResponse ? `${this.loaderService.isLoading.next(false)}` : '',
          // Operation failed; error is an HttpErrorResponse
          error => {
            this.loaderService.isLoading.next(false)
          }
        )
      );
  }
}
