export interface Book {
  id: number;
  title: string;
  authorId: number;
}

export interface Author {
  name: string;
  id: number;
}

export const books: Book[] = [
  { id: 1, title: "Harry Potter and the Chamber of Secrets", authorId: 1 },
  { id: 2, title: "Harry Potter and the Prisoner of Azkaban", authorId: 1 },
  { id: 3, title: "Jurassic Park", authorId: 2 }
];

export const authors: Author[] = [{ id: 1, name: "J.K. Rowling" }, { id: 2, name: "Michael Crichton" }];
