import { apiClient } from "$lib/config/apiClient";

export default class TodosAPI{
    static async getTodos(){
        try {
            const response = await apiClient.get("/todos");
            return response;
        } catch (error) {
            return error;
        }
    }
}