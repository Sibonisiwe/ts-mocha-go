import assert from 'assert';
import greet from '../greet';
import{GreetInEnglish, GreetInXhosa, GreetInZulu} from '../greet.lang'

describe('The greet function', function() {
//     it('should be able to greet a person and return name and surname', function() {
       
//         assert.equal("Hello, Bob Crow", greet("Bob", "Crow"));
// });

it('should be able to greet a person and return name and surname as an object', function() {
       
    assert.deepEqual("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({firstName:"Bob",  lastName:"Crow", email: "bob@crow.com"}));
});
});
describe('The greetIn fufunction', function(){
    it('should be able to greet in Xhosa', function(){
        let greetInXhosa = new GreetInXhosa()
        assert.equal('Molo, Sibo', greetInXhosa.greet('Sibo'))
    })

    it('should be able to greet in English', function(){
        let greetInEnglish = new GreetInEnglish()
        assert.equal('Hellow, Sibo', greetInEnglish.greet('Sibo'))
})

it('should be able to greet in Zulu', function(){
    let greetInZulu = new GreetInZulu()
    assert.equal('Sawubona, Sibo', greetInZulu.greet('Sibo'))
})
})

