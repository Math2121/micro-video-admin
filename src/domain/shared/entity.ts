import { ValueObject } from "./domain/value-objectts/value-objects";

export abstract class Entity {
    abstract get entity_id(): ValueObject
    abstract toJSON(): any

}