import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { taskFace } from "../models";

export const ApiSlice = createApi({
 reducerPath:"api",
 baseQuery:fetchBaseQuery({baseUrl:"http://localhost:9000"}),
 tagTypes:["TASK"],
 endpoints:(builder)=>({
  getTasks:builder.query<taskFace[],void>({
   query:()=> "/tasks",
   providesTags:["TASK"]
  }),
  getTask:builder.query<string,void>({
   query:(taskId)=> `/tasks/${taskId}`
  }),
  addTask:builder.mutation<taskFace,void>({
   query:(cuurentTask)=>({
    url:"/tasks",
    method:"POST",
    body:cuurentTask
   }),
   invalidatesTags:["TASK"]
  }),
  deleteTask:builder.mutation<string,void>({
   query:(taskId)=>({
    url:`/tasks/${taskId}`,
    method:"DELETE"
   }),
   invalidatesTags:["TASK"]
  })
 })
})

export const {useGetTasksQuery,useAddTaskMutation,useDeleteTaskMutation} = ApiSlice;