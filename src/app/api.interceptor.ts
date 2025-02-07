import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private apiKey = 'a50abc20'; // Your API key
  private baseUrl = 'https://my.api.mockaroo.com';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Append API key if request is directed to Mockaroo
    if (req.url.startsWith(this.baseUrl)) {
      const modifiedReq = req.clone({
        url: `${req.url}?key=${this.apiKey}`,
      });
      return next.handle(modifiedReq);
    }
    return next.handle(req);
  }
}
