import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";
import AppLayout from "./layouts/AppLayout";


// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/ChatStudent";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Signin from "./views/Signin";
import Signup from "./views/Signup"

import BasicDetails from "./views/BasicDetails"
export const notAuthenticatedRoutes = [
  { 
    exact: true,
    path: "/",
    component: Signin
  },
  {
    path: "/Signup",
    component: Signup
  },
  {
    path: "/Details",
    component:""
  }
];


export default [
 

  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: AppLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
