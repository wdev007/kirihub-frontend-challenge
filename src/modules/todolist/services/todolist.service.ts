import { ITodoItem } from "../types/todo.item.interface";
import { ITodoListService } from "../types/todolist.service.interface";
import api from "../../../shared/services/api.http";

const todoListService: ITodoListService = {
  findAll: async (userId: number) => {
    const response = await api.get(`/users/${userId}/todos`);

    return response.data;
  },

  create: async (todoItem: ITodoItem, userId: number) => {
    const response = await api.post(`/users/${userId}/todos`, todoItem);

    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/todos/${id}`);

    return response.data;
  },
};

export default todoListService;
