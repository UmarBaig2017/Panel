export default function() {
  return [
    {
      title: "Dashboard",
      to: "/StudentPortal",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Teachers",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/Teachers",
    },
    {
      title: "Chats",
      htmlBefore: '<i class="material-icons">chat_bubble</i>',
      to: "/ChatsTeachers",
    },
    {
      title: "Student Profile",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/StudentProfile",
    },
 
    {
      title: "Switch to Teachers Portal",
      htmlBefore: '<i class="material-icons">swap_horiz</i>',
      to: "/TeachersPortal",
    }
  ];
}
