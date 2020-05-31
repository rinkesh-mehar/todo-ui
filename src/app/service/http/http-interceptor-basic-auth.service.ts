import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor() {
  }

  /**
   * Identifies and handles a given HTTP request.
   * @param request The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userName = 'rinkesh';
    const password = '123';
    const basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);

    /**
     * setting the request for sending the request to the next handle
     * cloning it and overriding the specific property
     */
    request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      }
    );
    /**
     * handling the http request to the next interceptor that is backend
     */
    return next.handle(request);
  }
}
