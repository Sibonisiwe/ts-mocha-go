
import UserGreetCounter from "./user_greet.counter";
//export{userCounter}

class userCounter implements UserGreetCounter {
    private enteredNames = new Map<string, number>()
    countGreet(firstName: string): void {

    }

    greetCounter!: number
    userGreetCount(firstName: string): number {

        //if the name is not in the map add it 
        //and if it is there increment the counter
        if (this.enteredNames.has(firstName)) {
            let names = this.enteredNames.has(firstName)
            if(names){
                names++
                this.enteredNames.set(firstName, names)

            }


        }
        else {
            this.enteredNames.set(firstName, 1)
        }

    }


    //greetCounter: number = 0;


}

console.log(new userCounter().greetCounter);
