import Login from "../views/Pages/LoginPage";

var routes = [
    {  
      path: "/login",
      name: "Login Page",
      mini: "l",
      component: Login,
      layout: "/auth" 
    }   
]
export default routes;