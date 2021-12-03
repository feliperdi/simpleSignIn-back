import {v4} from 'uuid';


export default abstract class IdHandle {

    public static generate(): string {
        return v4();
    }
}