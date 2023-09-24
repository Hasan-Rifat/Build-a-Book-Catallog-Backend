export type IFilters = {
  search?: string;
  books?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
};

export type IOptions = {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
};

export type BookSearchAbleFields = [
  'title',
  'author',
  'genre',
  'minPrice',
  'maxPrice',
  'category'
];

export const BookRelationalFields: string[] = ['categoryId'];
export const BookRelationalFieldsMapper: { [key: string]: string } = {
  categoryId: 'categories',
};
