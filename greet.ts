
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
//   }

  import Person from './person';

export default function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName} we will be in touch at: ${person.email}`;
}



 