import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient} from "@angular/common/http";
import {CATEGORY_API_PROVIDER} from "./infrastructure/providers/category-api.provider";

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideHttpClient(), CATEGORY_API_PROVIDER, provideRouter(routes)]
};
