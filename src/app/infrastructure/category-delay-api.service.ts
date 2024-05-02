import {inject, Injectable} from '@angular/core';
import {ICategoryApiService} from "./category-api.interface";
import {delay, map, Observable} from "rxjs";
import {IDomainRequestCategory, IDomainResponse, IDomainResponseCategory} from "../domain/category.model";
import {HttpClient} from "@angular/common/http";
import {IApiResponse, IApiResponseCategory} from "./models/category-api.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryDelayApiService implements ICategoryApiService {

  private _httpClient = inject(HttpClient);
  private readonly URL_CATEGORY = '';

  getCategories(): Observable<IDomainResponseCategory[]> {
    return this._httpClient.get<IApiResponseCategory[]>(this.URL_CATEGORY).pipe(
      delay(2000),
      map((response) =>
        response.map((categoryApi) => ({
          categoryId: categoryApi.categoryId,
          name: categoryApi.name,
          icon: categoryApi.icon,
          slug: categoryApi.slug,
        })),
      )
    );
  }

  save(newCategory: IDomainRequestCategory): Observable<IDomainResponse> {
    return this._httpClient
      .post<IApiResponse>(this.URL_CATEGORY, newCategory)
      .pipe(map((response) => ({
        message: response.message,
        code: response.code
      })));
  }
}
