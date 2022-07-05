/*!

=========================================================
* Vision UI PRO Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-dashboard-pro-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Assets
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar10 from "assets/img/avatars/avatar10.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import avatar4 from "assets/img/avatars/avatar4.png";
import avatar5 from "assets/img/avatars/avatar5.png";
import avatar7 from "assets/img/avatars/avatar7.png";
import avatar8 from "assets/img/avatars/avatar8.png";
import avatar9 from "assets/img/avatars/avatar9.png";
// Custom icons
import {
  AdobexdLogo,
  AtlassianLogo,
  InvisionLogo,
  JiraLogo,
  SlackLogo,
  SpotifyLogo,
} from "components/Icons/Icons.js";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  FaArrowDown,
  FaArrowUp,
  FaBell,
  FaCreditCard,
  FaFilePdf,
  FaHtml5,
  FaShoppingCart,
} from "react-icons/fa";
import { SiDropbox } from "react-icons/si";

export const dashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "Vision UI Version",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    members: [avatar10, avatar4],
    budget: "Not set",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "Redesign New Online Shop",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const timelineData = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    date: "22 DEC 7:20 PM",
    color: "brand.200",
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "New order #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const timelineProjectsData1 = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    titleColor: "#fff",
    date: "22 DEC 7:20 PM",
    color: "brand.200",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "brand.200",
        titleTag: "DESIGN",
      },
    ],
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    titleColor: "#fff",
    date: "21 DEC 11:21 PM",
    color: "orange",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "red.500",
        titleTag: "ORDER",
      },
      {
        bgTag: "red.500",
        titleTag: "#1832412",
      },
    ],
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    titleColor: "#fff",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "blue.400",
        titleTag: "SERVER",
      },
      {
        bgTag: "blue.400",
        titleTag: "PAYMENTS",
      },
    ],
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    titleColor: "#fff",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "orange.300",
        titleTag: "CARD",
      },
      {
        bgTag: "orange.300",
        titleTag: "#1832412",
      },
      {
        bgTag: "orange.300",
        titleTag: "PRIORITY",
      },
    ],
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    titleColor: "#fff",
    date: "19 DEC 11:35 PM",
    color: "purple.400",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "purple.400",
        titleTag: "DEVELOPMENT",
      },
    ],
  },
  {
    logo: FaBell,
    title: "$2400, Design changes",
    titleColor: "#fff",
    date: "22 DEC 7:20 PM",
    color: "brand.200",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "brand.200",
        titleTag: "DESIGN",
      },
    ],
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    titleColor: "#fff",
    date: "21 DEC 11:21 PM",
    color: "orange",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "red.500",
        titleTag: "ORDER",
      },
      {
        bgTag: "red.500",
        titleTag: "#1832412",
      },
    ],
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    titleColor: "#fff",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "blue.400",
        titleTag: "SERVER",
      },
      {
        bgTag: "blue.400",
        titleTag: "PAYMENTS",
      },
    ],
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    titleColor: "#fff",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "orange.300",
        titleTag: "CARD",
      },
      {
        bgTag: "orange.300",
        titleTag: "#1832412",
      },
      {
        bgTag: "orange.300",
        titleTag: "PRIORITY",
      },
    ],
  },
];
export const timelineProjectsData2 = [
  {
    logo: FaBell,
    title: "$2400, Design changes",
    titleColor: "#fff",
    date: "22 DEC 7:20 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "#fff",
        titleTag: "DESIGN",
      },
    ],
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    titleColor: "#fff",
    date: "21 DEC 11:21 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "red.500",
        titleTag: "ORDER",
      },
      {
        bgTag: "red.500",
        titleTag: "#1832412",
      },
    ],
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    titleColor: "#fff",
    date: "21 DEC 9:28 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "blue.400",
        titleTag: "SERVER",
      },
      {
        bgTag: "blue.400",
        titleTag: "PAYMENTS",
      },
    ],
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    titleColor: "#fff",
    date: "20 DEC 3:52 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "orange.300",
        titleTag: "CARD",
      },
      {
        bgTag: "orange.300",
        titleTag: "#1832412",
      },
      {
        bgTag: "orange.300",
        titleTag: "PRIORITY",
      },
    ],
  },
  {
    logo: SiDropbox,
    title: "Unlock packages for Development",
    titleColor: "#fff",
    date: "19 DEC 11:35 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "purple.400",
        titleTag: "DEVELOPMENT",
      },
    ],
  },
  {
    logo: FaBell,
    title: "$2400, Design changes",
    titleColor: "#fff",
    date: "22 DEC 7:20 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "#fff",
        titleTag: "DESIGN",
      },
    ],
  },
  {
    logo: FaHtml5,
    title: "New order #4219423",
    titleColor: "#fff",
    date: "21 DEC 11:21 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "red.500",
        titleTag: "ORDER",
      },
      {
        bgTag: "red.500",
        titleTag: "#1832412",
      },
    ],
  },
  {
    logo: FaShoppingCart,
    title: "Server Payments for April",
    titleColor: "#fff",
    date: "21 DEC 9:28 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "blue.400",
        titleTag: "SERVER",
      },
      {
        bgTag: "blue.400",
        titleTag: "PAYMENTS",
      },
    ],
  },
  {
    logo: FaCreditCard,
    title: "New card added for order #3210145",
    titleColor: "#fff",
    date: "20 DEC 3:52 PM",
    color: "#fff",
    description:
      "People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of.",
    tags: [
      {
        bgTag: "orange.300",
        titleTag: "CARD",
      },
      {
        bgTag: "orange.300",
        titleTag: "#1832412",
      },
      {
        bgTag: "orange.300",
        titleTag: "PRIORITY",
      },
    ],
  },
];

export const rtlDashboardTableData = [
  {
    logo: AdobexdLogo,
    name: "نسخة Vision UI",
    members: [avatar1, avatar2, avatar3, avatar4, avatar5],
    budget: "$14,000",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "إضافة مسار التقدم",
    members: [avatar3, avatar2],
    budget: "$3,000",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "إصلاح أخطاء النظام الأساسي",
    members: [avatar10, avatar4],
    budget: "غير مضبوط",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "إطلاق تطبيق الهاتف المحمول الخاص بنا",
    members: [avatar2, avatar3, avatar7, avatar8],
    budget: "$32,000",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "أضف صفحة التسعير الجديدة",
    members: [avatar10, avatar3, avatar7, avatar2, avatar8],
    budget: "$400",
    progression: 25,
  },
  {
    logo: InvisionLogo,
    name: "إعادة تصميم متجر جديد على الإنترنت",
    members: [avatar9, avatar3, avatar2],
    budget: "$7,600",
    progression: 40,
  },
];

export const rtlTimelineData = [
  {
    logo: FaBell,
    title: "$2400, تغييرات في التصميم",
    date: "22 DEC 7:20 PM",
    color: "teal.300",
  },
  {
    logo: FaHtml5,
    title: "طلب جديد #4219423",
    date: "21 DEC 11:21 PM",
    color: "orange",
  },
  {
    logo: FaShoppingCart,
    title: "مدفوعات الخادم لشهر أبريل",
    date: "21 DEC 9:28 PM",
    color: "blue.400",
  },
  {
    logo: FaCreditCard,
    title: "تمت إضافة بطاقة جديدة للطلب #3210145",
    date: "20 DEC 3:52 PM",
    color: "orange.300",
  },
  {
    logo: SiDropbox,
    title: "فتح الحزم من أجل التنمية",
    date: "19 DEC 11:35 PM",
    color: "purple",
  },
  {
    logo: AdobexdLogo,
    title: "طلب جديد #9851258",
    date: "18 DEC 4:41 PM",
  },
];

export const tablesTableData = [
  {
    logo: avatar1,
    name: "Esthera Jackson",
    email: "alexa@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/06/21",
  },
  {
    logo: avatar2,
    name: "Alexa Liras",
    email: "laurent@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "12/05/21",
  },
  {
    logo: avatar3,
    name: "Laurent Michael",
    email: "laurent@simmmple.com",
    subdomain: "Executive",
    domain: "Projects",
    status: "Online",
    date: "07/06/21",
  },
  {
    logo: avatar4,
    name: "Freduardo Hill",
    email: "freduardo@simmmple.com",
    subdomain: "Manager",
    domain: "Organization",
    status: "Online",
    date: "14/11/21",
  },
  {
    logo: avatar5,
    name: "Daniel Thomas",
    email: "daniel@simmmple.com",
    subdomain: "Programmer",
    domain: "Developer",
    status: "Offline",
    date: "21/01/21",
  },
  {
    logo: avatar7,
    name: "Mark Wilson",
    email: "mark@simmmple.com",
    subdomain: "Designer",
    domain: "UI/UX Design",
    status: "Offline",
    date: "04/09/20",
  },
];

export const tablesProjectData = [
  {
    logo: AdobexdLogo,
    name: "Vision UI Version",
    budget: "$14,000",
    status: "Working",
    progression: 60,
  },
  {
    logo: AtlassianLogo,
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progression: 10,
  },
  {
    logo: SlackLogo,
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progression: 100,
  },
  {
    logo: SpotifyLogo,
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progression: 100,
  },
  {
    logo: JiraLogo,
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progression: 25,
  },
];

export const invoicesData = [
  {
    date: "March, 01, 2020",
    code: "#MS-415646",
    price: "$180",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "February, 10, 2020",
    code: "#RV-126749",
    price: "$250",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "April, 05, 2020",
    code: "#FB-212562",
    price: "$560",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "June, 25, 2019",
    code: "#QW-103578",
    price: "$120",
    logo: FaFilePdf,
    format: "PDF",
  },
  {
    date: "March, 01, 2019",
    code: "#AR-803481",
    price: "$300",
    logo: FaFilePdf,
    format: "PDF",
  },
];

export const billingData = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    number: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    number: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Notion",
    email: "ethan@fiber.com",
    number: "FRB1235476",
  },
];

export const newestTransactions = [
  {
    name: "Netflix",
    date: "27 March 2021, at 12:30 PM",
    price: "- $2,500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $2,500",
    logo: FaArrowUp,
  },
];

export const olderTransactions = [
  {
    name: "Stripe",
    date: "26 March 2021, at 13:45 PM",
    price: "+ $800",
    logo: FaArrowUp,
  },
  {
    name: "HubSpot",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $1,700",
    logo: FaArrowUp,
  },
  {
    name: "Webflow",
    date: "26 March 2021, at 05:00 PM",
    price: "Pending",
    logo: AiOutlineExclamation,
  },
  {
    name: "Microsoft",
    date: "25 March 2021, at 16:30 PM",
    price: "- $987",
    logo: FaArrowDown,
  },
];

export const transactionsCRM = [
  {
    name: "Netflix",
    date: "26 March 2021, at 13:45 PM",
    price: "- $2500",
    logo: FaArrowDown,
  },
  {
    name: "Apple",
    date: "26 March 2021, at 12:30 PM",
    price: "+ $2500",
    logo: FaArrowUp,
  },
  {
    name: "Stripe",
    date: "26 March 2021, at 05:00 PM",
    price: "+ $9900",
    logo: FaArrowUp,
  },
];

export const revenueCRM = [
  {
    name: "via Paypal",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $8700",
    logo: FaArrowUp,
  },
  {
    name: "Partner #01424",
    date: "27 March 2021, at 12:30 PM",
    price: "+ $12000",
    logo: FaArrowUp,
  },
  {
    name: "Services",
    date: "26 March 2021, at 10:10 PM",
    price: "- $1900",
    logo: FaArrowDown,
  },
];

export const tablesReportsData = [
  {
    image: avatar4,
    domain: "Manager",
    name: "Esthera Jackson",
    review: "Positive",
    email: "esthera@simmmple.com",
    employed: "14/06/21",
    id: 42312,
  },
  {
    image: avatar1,
    domain: "Programmer",
    name: "Alexa Liras",
    review: "Positive",
    email: "alexa@simmmple.com",
    employed: "14/06/21",
    id: 93201,
  },
  {
    image: avatar5,
    domain: "Executive",
    name: "Laurent Michael",
    review: "Neutral",
    email: "laurent@simmmple.com",
    employed: "14/06/21",
    id: 84120,
  },
  {
    image: avatar4,
    domain: "Manager",
    name: "Freduardo Hill",
    review: "Positive",
    email: "freduardo@simmmple.com",
    employed: "14/06/21",
    id: 42314,
  },
  {
    image: avatar7,
    domain: "Programmer",
    name: "Daniel Thomas",
    review: "Negative",
    email: "daniel@simmmple.com",
    employed: "14/06/21",
    id: 75642,
  },
  {
    image: avatar8,
    domain: "Designer",
    name: "Mark Wilson",
    review: "Positive",
    email: "mark@simmmple.com",
    employed: "14/06/21",
    id: 78583,
  },
];
