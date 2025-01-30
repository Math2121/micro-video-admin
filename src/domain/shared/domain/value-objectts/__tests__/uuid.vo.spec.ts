import { InvalidUuidError, Uuid } from "../uuid.vo"

describe("Uuid Unit Tests", () => {
    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')
    test("should throw an error when is invalid", () => {
        expect(() => {
            new Uuid('kdfkdkfdkdf')
        }).toThrow(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalled()
    })
    test("should create a valid uuid", () => {
        const uuid = new Uuid()
        expect(uuid.id).toBeTruthy()
        expect(validateSpy).toHaveBeenCalled()
    })
    test("should create a valid uuid with given id", () => {
        const uuid = new Uuid('32c9dddd-e0f7-4309-8a11-4ef0e4694ded')
        expect(uuid.id).toBe('32c9dddd-e0f7-4309-8a11-4ef0e4694ded')
        expect(validateSpy).toHaveBeenCalled()
    })

})