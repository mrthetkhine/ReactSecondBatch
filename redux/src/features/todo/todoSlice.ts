import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {counterSlice, incrementAsync} from "../counter/counterSlice";
import {fetchCount} from "../counter/counterAPI";
import {fetchToDo} from "./todoAPI";

export interface ToDoItem {
    id:number;
    text:string;
}
export interface ToDoList {
    items: Array<ToDoItem>
}
const initialState:ToDoList = {
    items: [
        {
            id:1,
            text: "Task One",
        },
        {
            id:2,
            text: "Task Two"
        },
    ]
}
export const getToDoByAPI = createAsyncThunk(
    'todo/fetchTodo',
    async (id: number) => {
        const response = await fetchToDo(id);
        // The value we return becomes the `fulfilled` action payload
        return response.json();
    }
);
export const todoSlice = createSlice({
    name :"todo",
    initialState,
    reducers:{
        addTodo:(state, action: PayloadAction<ToDoItem>) =>{
            console.log("Payload ",action);
            state.items.push(action.payload);
        },
        removeTodo:(state, action: PayloadAction<ToDoItem>) =>{
            console.log("Payload ",action);
            state.items = state.items.filter(item=>item.id != action.payload.id);
        },
        updateTodo:(state, action: PayloadAction<ToDoItem>) =>{
            console.log("Payload ",action);
            state.items = state.items.map(item=>item.id == action.payload.id? action.payload: item);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getToDoByAPI.fulfilled, (state, action) => {
               console.log("API call done Payload ",action.payload);
               let item = {
                   id: action.payload.id,
                   text: action.payload.title,
               }
               state.items.push(item);
            });
    },
});
export const { addTodo,removeTodo,updateTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.items;

export default todoSlice.reducer;