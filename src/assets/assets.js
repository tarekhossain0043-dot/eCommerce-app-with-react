import {
  ChevronUp,
  CircleQuestionMark,
  DollarSign,
  Folder,
  House,
  List,
  MessageSquareText,
  Ribbon,
  Settings,
  ShoppingCart,
  SignalHigh,
  Star,
  Tag,
  User,
  Users,
} from "lucide-react";
import img_1 from "./features/image-1.png";
import img_2 from "./features/image-2.png";
import img_3 from "./features/image-3.png";
import img_4 from "./features/image-4.png";
import img_5 from "./features/image-5.png";
import img_6 from "./features/image-6.png";
import img_7 from "./features/image-7.png";
import img_8 from "./features/image-8.png";
import img_9 from "./features/image.png";

import { nanoid } from "nanoid";

export const sidebarData = [
  {
    id: 1,
    Icon: House,
    to: "/",
    label: "Dashboard",
  },
  {
    id: 2,
    Icon: List,
    to: "/orders",
    label: "Orders",
    orderNum: 0,
  },
  {
    id: 3,
    Icon: Tag,
    to: "/products",
    label: "Products",
  },
  {
    id: 4,
    Icon: Folder,
    to: "/categories",
    label: "Categories",
  },
  {
    id: 5,
    Icon: Users,
    to: "/customers",
    label: "Customers",
  },
  {
    id: 6,
    Icon: SignalHigh,
    to: "/reports",
    label: "Reports",
  },
  {
    id: 7,
    Icon: Star,
    to: "/coupons",
    label: "Coupons",
  },
  {
    id: 8,
    Icon: MessageSquareText,
    to: "/inbox",
    label: "Inbox",
  },
  {
    id: 9,
    label: "Other Information",
  },
  {
    id: 10,
    Icon: CircleQuestionMark,
    to: "/knowledgeBase",
    label: "Knowledge Base",
  },
  {
    id: 11,
    Icon: Ribbon,
    to: "productUpdates",
    label: "Product Updates",
  },
  {
    id: 12,
    to: "/setting",
    label: "Settings",
  },
  {
    id: 13,
    Icon: User,
    to: "personal-settings",
    label: "Personal Settings",
  },
  {
    id: 14,
    Icon: Settings,
    to: "/setting",
    label: "Global Settings",
  },
];

export const dashboardOverviewCart = [
  {
    id: 1,
    number: "$10.540",
    overview: "Total Revenue",
    overview_average: "22.45%",
    overviewStatus: ChevronUp,
    overviewIcon: DollarSign,
  },
  {
    id: 2,
    number: "1,056",
    overview: "Orders",
    overview_average: "15.34%",
    overviewStatus: ChevronUp,
    overviewIcon: ShoppingCart,
  },
  {
    id: 3,
    number: "$10.540",
    overview: "Total Revenue",
    overview_average: "22.45%",
    overviewStatus: ChevronUp,
    overviewIcon: DollarSign,
  },
  {
    id: 4,
    number: "$10.540",
    overview: "Total Revenue",
    overview_average: "22.45%",
    overviewStatus: ChevronUp,
    overviewIcon: DollarSign,
  },
  {
    id: 5,
    number: "$10.540",
    overview: "Total Revenue",
    overview_average: "22.45%",
    overviewStatus: ChevronUp,
    overviewIcon: DollarSign,
  },
  {
    id: 6,
    number: "$10.540",
    overview: "Total Revenue",
    overview_average: "22.45%",
    overviewStatus: ChevronUp,
    overviewIcon: DollarSign,
  },
];

export const product_Category = [
  {
    id: nanoid(),
    image: img_1,
    title: "Men Clothes",
    desc: "24 items",
  },
  {
    id: nanoid(),
    image: img_2,
    title: "Women Clothes",
    desc: "12 items",
  },
  {
    id: nanoid(),
    image: img_3,
    title: "Accessories",
    desc: "43 items",
  },
  {
    id: nanoid(),
    image: img_4,
    title: "Cotton Clothes",
    desc: "31 items",
  },
  {
    id: nanoid(),
    image: img_5,
    title: "Summer Clothes",
    desc: "26 items",
  },
  {
    id: nanoid(),
    image: img_6,
    title: "Wedding Clothes",
    desc: "52 items",
  },
  {
    id: nanoid(),
    image: img_7,
    title: "Wedding Clothes",
    desc: "52 items",
  },
  {
    id: nanoid(),
    image: img_8,
    title: "Wedding Clothes",
    desc: "52 items",
  },
  {
    id: nanoid(),
    image: img_9,
    title: "Wedding Clothes",
    desc: "52 items",
  },
];

export const orderProductData = [
  {
    id: nanoid(),
    date: new Date().toISOString(),
    customer: "Tom Anderson",
    payment_sts: "Paid",
    order_sts: "Ready",
    total: "$49.90",
  },
  {
    id: nanoid(),
    date: new Date().toISOString(),
    customer: "Tom Armstrong",
    payment_sts: "UnPaid",
    order_sts: "UnReady",
    total: "$99.90",
  },
  {
    id: nanoid(),
    date: new Date().toISOString(),
    customer: "Takasur Anderson",
    payment_sts: "Paid",
    order_sts: "Ready",
    total: "$89.90",
  },
];

export const settingMenuOrder = [
  {
    id: nanoid(3),
    to: "/setting",
    label: "profile",
  },
  {
    id: nanoid(3),
    to: "/notification",
    label: "Notifications",
  },
  {
    id: nanoid(3),
    to: "/accounts",
    label: "Accounts",
  },
  {
    id: nanoid(3),
    label: "Security",
    to: "/security",
  },
];
