import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  CircleMinus,
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
import img_index_1 from "../assets/inbox/Avatar-1.png";
import img_index_2 from "../assets/inbox/Avatar-2.png";
import img_index_3 from "../assets/inbox/Avatar-3.png";
import img_index_4 from "../assets/inbox/Avatar-4.png";
import img_index_5 from "../assets/inbox/Avatar-5.png";
import img_index_6 from "../assets/inbox/Avatar.png";
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
    to: "/pricing",
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

export const pricingTable = [
  {
    id: nanoid(3),
    price_m: "$12",
    price_y: "$100",
    category: "Basic Plan",
    categoryDesc: "Start your business ",
    listCategory: [
      {
        id: 1,
        Icon: CheckCircle,
        label: "Free Domain",
      },
      {
        id: 2,
        Icon: CheckCircle,
        label: "Google Ads Credit",
      },
      {
        id: 3,
        Icon: CheckCircle,
        label: "Up to 5 Users",
      },
      {
        id: 4,
        Icon: CheckCircle,
        label: "Free SSL Security",
      },
      {
        id: 5,
        Icon: CheckCircle,
        label: "Up to 100 Products",
      },
      {
        id: 6,
        Icon2: CircleMinus,
        label: "Unlimited Storage",
      },
      {
        id: 7,
        Icon2: CircleMinus,
        label: "Chat Inbox",
      },
      {
        id: 8,
        Icon2: CircleMinus,
        label: "No Transaction Fee",
      },
    ],
  },
  {
    id: nanoid(3),
    price_m: "$20",
    price_y: "$150",
    recomended: "Recommended",
    category: "Professional",
    categoryDesc: "Start your business ",
    listCategory: [
      {
        id: 1,
        Icon: CheckCircle,
        label: "Free Domain",
      },
      {
        id: 2,
        Icon: CheckCircle,
        label: "Google Ads Credit",
      },
      {
        id: 3,
        Icon: CheckCircle,
        label: "Up to 5 Users",
      },
      {
        id: 4,
        Icon: CheckCircle,
        label: "Free SSL Security",
      },
      {
        id: 5,
        Icon: CheckCircle,
        label: "Up to 100 Products",
      },
      {
        id: 6,
        Icon2: CircleMinus,
        label: "Unlimited Storage",
      },
      {
        id: 7,
        Icon2: CircleMinus,
        label: "Chat Inbox",
      },
      {
        id: 8,
        Icon2: CircleMinus,
        label: "No Transaction Fee",
      },
    ],
  },
  {
    id: nanoid(3),
    price_m: "$45",
    price_y: "$450",
    category: "Business",
    categoryDesc: "Start your business ",
    listCategory: [
      {
        id: 1,
        Icon: CheckCircle,
        label: "Free Domain",
      },
      {
        id: 2,
        Icon: CheckCircle,
        label: "Google Ads Credit",
      },
      {
        id: 3,
        Icon: CheckCircle,
        label: "Up to 5 Users",
      },
      {
        id: 4,
        Icon: CheckCircle,
        label: "Free SSL Security",
      },
      {
        id: 5,
        Icon: CheckCircle,
        label: "Up to 100 Products",
      },
      {
        id: 6,
        Icon2: CircleMinus,
        label: "Unlimited Storage",
      },
      {
        id: 7,
        Icon2: CircleMinus,
        label: "Chat Inbox",
      },
      {
        id: 8,
        Icon2: CircleMinus,
        label: "No Transaction Fee",
      },
    ],
  },
];

export const faqCollapse = [
  {
    id: nanoid(3),
    label: "Is there any discount for yearly subscription?",
    Icon: ChevronDown,
    desc: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing information.",
  },
  {
    id: nanoid(3),
    label: "Is there any discount for yearly subscription-2?",
    Icon: ChevronDown,
    desc: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing information.",
  },
  {
    id: nanoid(3),
    label: "Is there any discount for yearly subscription-3?",
    Icon: ChevronDown,
    desc: "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription go to your profile page and click on billing information.",
  },
];
const now = new Date();

export const formattedTime = now.toLocaleTimeString("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});
export const commentsData = [
  {
    id: nanoid(),
    img: img_index_1,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_2,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_3,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_4,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_5,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
  {
    id: nanoid(),
    img: img_index_6,
    title: "Tom Anderson",
    desc: "Hello, I’m interested in this item...",
    comment: "08",
    time: formattedTime,
  },
];
