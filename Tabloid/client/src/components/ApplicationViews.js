import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import CategoryList from "./CategoryList"
import PostList from "./PostList";

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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};
