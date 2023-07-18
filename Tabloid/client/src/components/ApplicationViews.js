import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CategoryList from "./CategoryList"
import PostList from "./PostList";
import { TagList } from "./TagList";
import MyPostList from "./MyPostList";
import { TagAddForm } from "./TagAddForm";
import { PostDetails } from "./PostDetails";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          <Route
            index
            element={isLoggedIn ? <PostList /> : <Navigate to="/login" />}
          />
          <Route
            path="categories"
            element={isLoggedIn ? <CategoryList /> : <Navigate to="/login" />}
          />
          <Route
            path="tags"
            element={isLoggedIn ? <TagList /> : <Navigate to="/login" />}
          />
          <Route
            path="myPosts"
            element={isLoggedIn ? <MyPostList /> : <Navigate to="/login" />}
          />
          <Route
            path="tags/add"
            element={isLoggedIn ? <TagAddForm /> : <Navigate to="/login" />}
          />
          <Route
            path="index/:postId"
            element={isLoggedIn ? <PostDetails /> : <Navigate to="/login" />}
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
