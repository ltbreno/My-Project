import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppRoutingModule } from './app.routes';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';

NgModule({
  declarations: [AppComponent,
  BodyComponent],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
