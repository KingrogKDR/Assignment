export interface User {
  id: string;
  name: string;
  age: string;
}

export interface Users {
  users: {
    id: string;
    name: string;
    age: string;
  }[];
}
