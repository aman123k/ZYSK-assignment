// Images
import image1 from "../Image/image1.png";
import image2 from "../Image/image2.png";
import image3 from "../Image/image3.png";
import person1 from "../Image/person1.png";
import person2 from "../Image/person2.png";
import person3 from "../Image/person3.png";

// Icons
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";
import { RiWechat2Line } from "react-icons/ri";
import { BsChatHeart } from "react-icons/bs";
import { MdKeyboardCommandKey } from "react-icons/md";
import { LuRotateCcwSquare } from "react-icons/lu";

// Brand name Images
import boltshift from "../Image/boltshift.svg";
import lightbox from "../Image/lightbox.svg";
import featherdev from "../Image/featherdev.svg";
import spherule from "../Image/spherule.svg";
import globalbank from "../Image/globalbank.svg";
import nietzsche from "../Image/nietzsche.svg";

export const blogData = [
  {
    id: 0,
    image: image1,
    position: "Design",
    title: "UX review presentations",
    des: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    person: person1,
    name: "Olivia Rhye",
    date: "20 Jan 2024",
  },
  {
    id: 1,
    image: image2,
    position: "Product",
    title: "Migrating to Linear 101",
    des: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    person: person2,
    name: "Phoenix Baker",
    date: "19 Jan 2024",
  },
  {
    id: 2,
    image: image3,
    position: "Software Engineering",
    title: "Building your API stack",
    des: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    person: person3,
    name: "Lana Steiner",
    date: "18 Jan 2024",
  },
];

export const faqs = [
  {
    id: 0,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 1,
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 5,
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export const features = [
  {
    icon: <IoChatbubblesOutline />,
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <MdOutlineElectricBolt />,
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <LuRotateCcwSquare />,
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: <RiWechat2Line />,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: <MdKeyboardCommandKey />,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: <BsChatHeart />,
    title: "Our people make the difference",
    description:
      "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
];

export const brandImages = [
  boltshift,
  lightbox,
  featherdev,
  spherule,
  globalbank,
  nietzsche,
];
