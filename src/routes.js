import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";
import AppLayout from "./layouts/AppLayout";


// Route Views
import Dashboard from "./views/DashboardStudent";
import DashboardTeachers from "./views/DashboardTeacher";
import StudentProfile from "./views/StudentProfile";
import TeacherProfile from "./views/TeacherProfile";
import ChatTeachers from "./views/ChatStudent";
import ChatsStudents from "./views/ChatTeacher";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import Teachers from "./views/Teachers";
import Students from "./views/Students";
import Signin from "./views/Signin";
import Signup from "./views/Signup"
// import BasicDetails from "./views/BasicDetails"

import BasicDetailsSTP from "./views/BasicDetailsSTP"
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
    component:BasicDetailsSTP
  }
];

export default [
//  Student Panel

  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/StudentPortal" />
  },
  {
    path: "/StudentPortal",
    layout: DefaultLayout,
    component: Dashboard
  },
  {
    path: "/TeachersPortal",
    layout: AppLayout,
    component: DashboardTeachers
  },
  {
    path: "/StudentProfile",
    layout: DefaultLayout,
    component: StudentProfile
  },
  {
    path: "/TeacherProfile",
    layout: AppLayout,
    component: TeacherProfile
  },
  {
    path: "/ChatsTeachers",
    layout: DefaultLayout,
    component: ChatTeachers
  },
  {
    path: "/ChatsStudents",
    layout: AppLayout,
    component: ChatsStudents
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
    component: Teachers
  },
  {
    path: "/Teachers",
    layout: DefaultLayout,
    component: Teachers
  },
  {
    path: "/Students",
    layout: AppLayout,
    component: Students
  },
  
];
