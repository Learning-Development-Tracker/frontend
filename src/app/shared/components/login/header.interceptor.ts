import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwtToken = getJwtToken();
    const newrequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    })
    return next.handle(newrequest);
  }
}

function getJwtToken(): string | null {
  return localStorage.getItem('JWT_TOKEN');
}