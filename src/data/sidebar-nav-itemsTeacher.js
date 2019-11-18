export default function() {
    return [
      {
        title: "Posts",
        to: "/TeachersPortal",
        htmlBefore: '<i class="material-icons">mode_comment</i>',
        htmlAfter: ""
      },
   
      {
        title: "Chats",
        htmlBefore: '<i class="material-icons">chat</i>',
        to: "/ChatsStudents",
      },
      {
        title: "Teacher Profile",
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: "/TeacherProfile",
      },
      // {
      //   title: "Tables",
      //   htmlBefore: '<i class="material-icons">table_chart</i>',
      //   to: "/tables",
      // },
      // {
      //   title: "User Profile",
      //   htmlBefore: '<i class="material-icons">person</i>',
      //   to: "/user-profile-lite",
      // },
      {
        title: "Switch to Student Portal",
        htmlBefore: '<i class="material-icons">swap_horiz</i>',
        to: "/StudentPortal",
      }
    ];
  }
  