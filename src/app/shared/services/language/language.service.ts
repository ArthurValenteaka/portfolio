import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  language!: 'pt-br' | 'en' | string;
  languageList = ['pt-br', 'en'];

  constructor(
    public translateService: TranslateService,
    private location: Location
  ) {}

  initLanguage() {
    this.translateService.addLangs(['en', 'pt-br']);
    let language = navigator.language.toLowerCase() || navigator.language;
    if (this.languageList.includes(language)) {
      this.translateService.setDefaultLang(language);

      // Change the URL without navigate:
      this.location.go(language);
      this.language = language;
    } else {
      this.language = 'en';
    }
  }

  changeLanguage(language: any) {
    this.translateService.setDefaultLang(language);
    this.location.go(language);
    this.language = language;
  }
}
