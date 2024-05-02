export interface IDomainRequestCategory {
  name: string;
  icon: string;
  slug?: string;
  createdAt?: Date
}

export interface IDomainResponseCategory extends IDomainRequestCategory {
  categoryId: number;
}

export interface IDomainResponse {
  message: string;
  code: number;
}
