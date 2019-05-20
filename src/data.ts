export interface Post {
  id: string;
  publishedOn: string;
  title: string;
  content: string;
  userId: string;
}

export interface User {
  id: string;
  name: string;
  city?: string;
  about?: string;
}

export const posts: Post[] = [
  {
    id: "1",
    publishedOn: "3/5/2019",
    title: "Learn GraphQL today",
    content: "Lorem ipsum dolor amet 90's post typewriter vinyl organic vegan DIY fixie sway yolo VHS",
    userId: "1"
  },
  {
    id: "2",
    publishedOn: "9/19/2018",
    title: "Top 10 Java Libraries/Frameworks in 2019",
    content: "Spring, jOOQ, Flyway...",
    userId: "1"
  },
  {
    id: "3",
    publishedOn: "11/3/2018",
    title: "Soft skills you need",
    content: "Teamwork, Flexbibility, Communication...",
    userId: "2"
  }
];

export const follower: { [key: string]: string[] } = { "1": ["2", "3"], "3": ["1"] };

export const users: User[] = [
  { id: "1", name: "Mary", city: "Berlin", about: "Software Developer, loves sport ..." },
  { id: "2", name: "Alice", city: "New York", about: "Blogger. Nomade Life" },
  { id: "3", name: "John", city: "London", about: "❤❤❤ Algorithms ❤❤❤" },
  { id: "4", name: "Sarah", city: "Tübingen", about: "Nothing to see here" }
];
