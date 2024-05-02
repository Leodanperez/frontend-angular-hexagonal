export interface IApiRequestCategory {
  readonly name: string;
  readonly icon: string;
  readonly slug?: string;
  readonly createdAt?: Date
}

export interface IApiResponseCategory extends IApiRequestCategory {
  readonly categoryId: number;
}

export interface IApiResponse {
  readonly message: string;
  readonly code: number;
}
