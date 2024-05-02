import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoryUseCaseService} from "../../application/category-use-case.service";
import {IDomainRequestCategory} from "../../domain/category.model";
import {finalize} from "rxjs";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  private _formBuilder = inject(FormBuilder);
  private _categoryUseCaseService = inject(CategoryUseCaseService);

  formCategory = this._formBuilder.nonNullable.group({
    name: ['', Validators.required],
    icon: ['', Validators.required],
  })

  listCategories: IDomainRequestCategory[] = [];
  showSpinner = true;

  ngOnInit(): void {
    this._loadCategories();
  }

  saveCategory() {
    if (this.formCategory.valid) {
      this._categoryUseCaseService.saveCategory(this.formCategory.getRawValue())
        .subscribe({
          next: () => {
            this._loadCategories();
          }
        });
    }
  }

  private _loadCategories(): void {
    this._categoryUseCaseService
      .getCategories()
      .pipe(finalize(() => (this.showSpinner = false)))
      .subscribe({
        next: (response) => {
          this.listCategories = response;
          console.log(this.listCategories);
        }
      });
  }
}
