// eslint-disable-next-line prettier/prettier
import { AccountBalance, LaptopChromebook, Event,CalendarToday } from "@material-ui/icons";
import Post from "./views/KLTN/post-management/post";
import Log from "./views/KLTN/log/log";
import User from "./views/KLTN/user-management/user";
import Menber from "./views/KLTN/menber-management/menber";

var dashRoutes = [
  {
    path: "/post-management",
    name: "Quản lí bài viết",
    icon: Event,
    component: Post,
    layout: ""
  },
  {
    path: "/user-management",
    name: "Quản lí người dùng",
    icon: AccountBalance,
    component: User,
    layout: ""
  },
  {
    path: "/member-management",
    name: "Quản lí thành viên",
    icon: LaptopChromebook,
    component: Menber,
    layout: ""
  },
  {
    path: "/log",
    name: "Log",
    icon: CalendarToday,
    component: Log,
    layout: ""
  }
];
export default dashRoutes;
