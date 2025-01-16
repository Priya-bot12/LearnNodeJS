import { add as sum, subtract} from './moduleSecond.mjs';

//even if i write anything else at the place of greet it will import the greet because it is default export
import greett from './moduleSecond.mjs';

console.log(sum(5,2));
console.log(subtract(5,2));

greett();

//there is something error check later