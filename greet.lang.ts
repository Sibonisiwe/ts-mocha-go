import GreetIn from "./greetIn";
export {GreetInEnglish, GreetInZulu, GreetInXhosa}

 class GreetInXhosa implements GreetIn {
    greet (name: string) {
      return "Molo, " + name;
    }
  }

   class GreetInZulu implements GreetIn {
    greet (name: string) {
      return "Sawubona, " + name;
    }
  }

   class GreetInEnglish implements GreetIn {
    greet (name: string) {
      return "Hellow, " + name;
    }
  }