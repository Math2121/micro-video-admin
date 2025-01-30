import { Uuid } from "../../shared/domain/value-objectts/uuid.vo"
import { Category } from "../category.entity"

describe("Category Unit Tests", () => { 

    test("constructor", () => { 
        const category = new Category({
            name: "teste"
        })

        expect(category.category_id).toBeInstanceOf(Uuid)
        expect(category.name).toBe("teste")
        expect(category.description).toBeNull()
        expect(category.is_active).toBe(true)
        expect(category.created_at).toBeInstanceOf(Date)

        const category_two = new Category({
            name: 'teste',
            is_active: false,
            description: "teste teste"


        })
        expect(category_two.name).toBe('teste')
        expect(category_two.is_active).toBeFalsy()
        expect(category_two.description).toBe("teste teste")
    })
})
describe('category_id field', () => {
    const arrange = [
        { category_id: null },
        { category_id: new Uuid() },
        { category_id: undefined}
    ]

    test.each(arrange)('id=%j', ({ category_id }) => {
        const category = new Category({
            name: 'teste',
            category_id: category_id as any,
        })
        expect(category.category_id).toBeInstanceOf(Uuid)
    })
})
describe("create command", () => {
    test("should create a category ", () => {
        const category = Category.create({
            name: 'teste',
            is_active: false
        })

        expect(category.category_id).toBeInstanceOf(Uuid)
        expect(category.name).toBe("teste")
        expect(category.description).toBeNull()
        expect(category.is_active).toBe(false)
        expect(category.created_at).toBeInstanceOf(Date)

    })
    
})