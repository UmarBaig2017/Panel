export default function() {
  return [
    {
      title: "Dashboard",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Teachers",
      htmlBefore: '<i class="material-icons">school</i>',
      to: "/blog-posts",
    },
    {
      title: "Chats",
      htmlBefore: '<i class="material-icons">chat_bubble</i>',
      to: "/add-new-post",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/user-profile-lite",
    },
 
    {
      title: "Switch to Teachers Portal",
      htmlBefore: '<i class="material-icons">swap_horiz</i>',
      to: "/errors",
    }
  ];
}
