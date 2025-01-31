import { ValueObject } from "../value-objectts/value-objects";

class StringObjctValue extends ValueObject {
    constructor(private value: string) {
        super();
    }
}

class ComplexObjectValue extends ValueObject {
    constructor(readonly prop1: string, readonly prop2: string) {
        super();
    }
}
describe("Value Object Unit test", () => {
    test("Should have object value equals", () => {
        const obj1 = new StringObjctValue("teste");
        const obj2 = new StringObjctValue("teste");
        expect(obj1.equals(obj2)).toBe(true);

        const obj3 = new ComplexObjectValue("prop1", "prop2");
        const obj4 = new ComplexObjectValue("prop1", "prop2");
        expect(obj3.equals(obj4)).toBe(true);
    })

    test("Should have object value not equals", () => {
        const obj1 = new StringObjctValue("teste");
        const obj2 = new StringObjctValue("teste2");
        expect(obj1.equals(obj2)).toBe(false);

        const obj3 = new ComplexObjectValue("prop1", "prop2");
        const obj4 = new ComplexObjectValue("prop1", "prop3");
        expect(obj3.equals(obj4)).toBe(false);

    })

})