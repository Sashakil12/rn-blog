import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          ...action.payload
        }
      ];
    case "DELETE":
      return [...state.filter(b => b.id !== action.payload)];
    case "EDIT":
      console.log("payload", action.payload);
      return [
        ...state.map(b => (b.id === action.payload.id ? action.payload : b))
      ];
    default:
      return;
  }
};
const addBlogPost = dispatch => {
  return (id, title, content) =>
    dispatch({ type: "ADD", payload: { id, title, content } });
};

const deleteBlogPost = dispatch => {
  return id => dispatch({ type: "DELETE", payload: id });
};

const editBlogPost = dispatch => {
  return (post, callback) => {
    dispatch({ type: "EDIT", payload: { ...post } });
    if (callback) {
      callback();
    }
  };
};
export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);
