import { ValueObject } from "../shared/domain/value-objectts/value-objects";
import { Uuid } from "../shared/domain/value-objectts/uuid.vo";
import { Entity } from "../shared/entity";
import { EntityValidationError } from "../shared/validators/validation.error";
import { CategoryValidatorFactory } from "./category.validator";

export type CategoryProps = {
    category_id?: Uuid,
    name: string,
    description?: string | null,
    is_active?: boolean,
    created_at?: Date,
}
export type CategoryCreateCommand = {
    name: string,
    description?: string | null
    is_active?: boolean

}
export class Category extends Entity {


    category_id: Uuid;
    name: string;
    description: string | null;
    is_active: boolean
    created_at: Date;

    constructor(props: CategoryProps) {
        super()
        this.category_id = props.category_id ?? new Uuid();
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }
    get entity_id(): ValueObject {
        return this.category_id
    }
    // factory method
    static create(props: CategoryCreateCommand): Category {
        const category = new Category(props);
        Category.validate(category);
        return category;
    }

    changeName(name: string): void {
        this.name = name;
        Category.validate(this);
    }
    changeDescription(description: string | null): void {
        this.description = description;
        Category.validate(this);
    }
    activate(): void {
        this.is_active = true;
        Category.validate(this);
    }

    deactivate(): void {
        this.is_active = false;
        Category.validate(this);
    }
    static validate(entity: Category) {
        const validator = CategoryValidatorFactory.create();
        const isValid = validator.validate(entity);
        return isValid

    }

    toJSON() {
        return {
            category_id: this.category_id.id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at.toISOString(),
        }
    }



}