import TodosAPI from "$lib/api/TodosAPI";
import { writable } from "svelte/store";

export const todos = writable([]);

export async function GetToDos(){
    const response = await TodosAPI.getTodos();
    // console.log(response.data);
    todos.set(response.data);
}