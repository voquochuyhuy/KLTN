
import { AccountBalance, LaptopChromebook, Event,CalendarToday} from "@material-ui/icons";

import Statistic from "./views/DA-CN/Statistic/Statistic";
import Game from "./views/DA-CN/Game/Game";
import EventManagement from "./views/DA-CN/EventManagement/EventManagement";
import Organization from "./views/DA-CN/Organization/Organization";
import LuckyDraw from "./views/DA-CN/Game/lucky-draw/LuckyDraw";
import LuckyWheel from "./views/DA-CN/Game/lucky-wheel/LuckyWheel";
import Member from "./views/DA-CN/Member/Member";

var dashRoutes = [
  {
    path: "/post-management",
    name: "Quản lí bài viết",
    icon: Event,
    component: EventManagement,
    
    layout: ""
  },
  {
    path: "/user-management",
    name: "Quản lí người dùng",
    icon: AccountBalance,
    component: Organization,
   
    layout: ""
  },
  {
    path: "/member-management",
    name: "Quản lí thành viên",
    icon: AccountBalance,
    component: Member,
   
    layout: ""
  },
  {
    path: "/log",
    name: "Log",
    icon: CalendarToday,
    component: Statistic,
    
    layout: ""
  },
  
  // {
  //   collapse: true,
  //   name: "Trò chơi",
  //   icon: LaptopChromebook,
  //   views: [
  //     {
  //       path: "/intro",
  //       name: "Giới thiệu",
  //       component: Game,
  //       // layout: "/admin"
  //       layout: ""
  //     },
  //     {
  //       path: "/lucky-draw",
  //       name: "Lucky Draw",
  //       component: LuckyDraw,
  //       // layout: "/admin"
  //       layout: ""
  //     },
  //     {
  //       path: "/lucky-wheel",
  //       name: "Lucky Wheel",
  //       component: LuckyWheel,
  //       // layout: "/admin"
  //       layout: ""
  //     },
  //   ]
  // } 
];
export default dashRoutes;
