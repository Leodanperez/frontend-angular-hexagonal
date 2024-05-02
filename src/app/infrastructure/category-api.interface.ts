import {Observable} from "rxjs";
import {IDomainRequestCategory, IDomainResponse, IDomainResponseCategory} from "../domain/category.model";

export interface ICategoryApiService {
  getCategories(): Observable<IDomainResponseCategory[]>;
  save(newCategory: IDomainRequestCategory): Observable<IDomainResponse>;
}
