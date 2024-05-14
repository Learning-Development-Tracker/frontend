import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

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
  let tokens: any = localStorage.getItem('JWT_TOKEN');
  if(!tokens) return null;
  const token = JSON.parse(tokens);
  return token;
}