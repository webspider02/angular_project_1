import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),  
    provideRouter(routes),
    provideAnimations()
  ],
})
  .catch((err) => console.error(err));

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http'; //  Provide HTTP Client
// import { TradesComponent } from './app/trades/trades.component';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, {
//   providers: [provideHttpClient()], //  Ensure HttpClient is provided globally
// });

// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideHttpClient } from '@angular/common/http';
// import { AppComponent } from './app/app.component';
// import { TradesComponent } from './app/trades/trades.component';
// import { provideAnimations } from '@angular/platform-browser/animations';

// bootstrapApplication(TradesComponent, {
//   providers: [provideHttpClient(), provideAnimations()], //  Required for Material animations
// });
