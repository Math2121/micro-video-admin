import { ValueObject } from "../value-objects";
import {v4 as uuidv4, validate as validateUuid} from 'uuid'
export class Uuid extends ValueObject {
    readonly id: string;
    constructor(id?: string) { 
        super();
        this.id = id || uuidv4();
        this.validate();

    }
    private validate() {
        const isIdValid = validateUuid(this.id)
        if (!isIdValid) {
            throw new InvalidUuidError();
        }

    }
}

export class InvalidUuidError extends Error {
    constructor(message?: string) {
        super(message || 'Invalid Uuid');
        this.name = 'InvalidUuidError';
    }
}