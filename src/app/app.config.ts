import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { LoginInterceptor } from './shared/components/login/login.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(), 
    { provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
    importProvidersFrom([BrowserAnimationsModule])
  ]
};
