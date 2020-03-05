import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 45),
          title: `new blog post ${state.length}`
        }
      ];
    case "DELETE":
      return [...state.filter(b => b.id !== action.payload)];
    case "EDIT":
      return [
        ...state.filter(b =>
          b.title === action.payload.title ? action.payload : b
        )
      ];
    default:
      return;
  }
};
const addBlogPost = dispatch => {
  return () => dispatch({ type: "ADD" });
};

const deleteBlogPost = dispatch => {
  return id => dispatch({ type: "DELETE", payload: id });
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost },
  []
);
