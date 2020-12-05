
import { AccountBalance, LaptopChromebook, Event,CalendarToday} from "@material-ui/icons";

import Statistic from "./views/DA-CN/Statistic/Statistic";
import Game from "./views/DA-CN/Game/Game";
import EventManagement from "./views/DA-CN/EventManagement/EventManagement";
import Organization from "./views/DA-CN/Organization/Organization";
import LuckyDraw from "./views/DA-CN/Game/lucky-draw/LuckyDraw";
import LuckyWheel from "./views/DA-CN/Game/lucky-wheel/LuckyWheel";

var dashRoutes = [
  {
    path: "/event-management",
    name: "Quản lí sự kiện",
    icon: Event,
    component: EventManagement,
    
    layout: ""
  },
  {
    path: "/organization",
    name: "Quản lí tổ chức",
    icon: AccountBalance,
    component: Organization,
   
    layout: ""
  },
  {
    path: "/statistic",
    name: "Thống kê số liệu",
    icon: CalendarToday,
    component: Statistic,
    
    layout: ""
  },
  
  {
    collapse: true,
    name: "Trò chơi",
    icon: LaptopChromebook,
    views: [
      {
        path: "/intro",
        name: "Giới thiệu",
        component: Game,
        // layout: "/admin"
        layout: ""
      },
      {
        path: "/lucky-draw",
        name: "Lucky Draw",
        component: LuckyDraw,
        // layout: "/admin"
        layout: ""
      },
      {
        path: "/lucky-wheel",
        name: "Lucky Wheel",
        component: LuckyWheel,
        // layout: "/admin"
        layout: ""
      },
    ]
  } 
];
export default dashRoutes;
