import { FieldsErrors } from "./src/domain/shared/validators/validator-fields-interface";

declare global {
    namespace jest {
        interface Matchers<R> {
            containsErrorMessages(expected: FieldsErrors): R;
        }
    }
}