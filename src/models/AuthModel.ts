import { z } from 'zod';
import { userRegisterSchema } from "@utils/schemas/UserSchemas";

function registerUser(formData: z.infer<typeof userRegisterSchema>) {

    try {
        const result = userRegisterSchema.parse(formData);
        return result;
    } catch (error) {
        throw error;
    }

}


export default {
    registerUser
}