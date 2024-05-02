import {Inject, Injectable} from '@angular/core';
import {HTTP_CATEGORY_SERVICE} from "../infrastructure/providers/category-api.provider";
import {ICategoryApiService} from "../infrastructure/category-api.interface";
import {Observable} from "rxjs";
import {IDomainRequestCategory, IDomainResponse} from "../domain/category.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryUseCaseService {

  constructor(@Inject(HTTP_CATEGORY_SERVICE) private readonly _categoryApiService: ICategoryApiService) { }

  getCategories(): Observable<IDomainRequestCategory[]> {
    // TODO: add logic
    return this._categoryApiService.getCategories();
  }

  saveCategory(category: IDomainRequestCategory): Observable<IDomainResponse> {
    return this._categoryApiService.save(category);
  }
}
