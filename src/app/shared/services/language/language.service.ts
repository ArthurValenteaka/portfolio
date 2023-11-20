import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language!: 'pt-br' | 'en';

  constructor(
    public translateService: TranslateService,
    private location: Location
  ) {}

  initLanguage() {
    this.translateService.addLangs(['en', 'pt-br']);
    let language =
      navigator.language.toLowerCase() || (navigator as any).userLanguage;

    this.translateService.setDefaultLang(language);

    // Change the URL without navigate:
    this.location.go(language);

    this.language = language;
  }

  changeLanguage(language: any) {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
