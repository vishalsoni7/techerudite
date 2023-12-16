import { ReactComponent as CardImg1 } from "./savgfiles/e-commerce-web-dev.svg";
import { ReactComponent as CardImg2 } from "./savgfiles/ui:ux.svg";
import { ReactComponent as CardImg3 } from "./savgfiles/site-maintain.svg";
import { ReactComponent as CardImg4 } from "./savgfiles/digital-marketing.svg";
import { ReactComponent as CardImg5 } from "./savgfiles/app-dev.svg";
import { ReactComponent as CardImg6 } from "./savgfiles/web-dev.svg";

import { ReactComponent as Img1 } from "./savgfiles/client.svg";
import { ReactComponent as Img2 } from "./savgfiles/coffee.svg";
import { ReactComponent as Img3 } from "./savgfiles/project.svg";
import { ReactComponent as Img4 } from "./savgfiles/rate.svg";

import { ReactComponent as C1 } from "./savgfiles/size-media.svg";
import { ReactComponent as C2 } from "./savgfiles/onympus.svg";
import { ReactComponent as C3 } from "./savgfiles/oh-travis.svg";
import { ReactComponent as C4 } from "./savgfiles/kanvas.svg";

export const whatWeDoData = [
  { name: "Projects", Img: <Img3 />, quantity: "90+" },
  { name: "Client", Img: <Img1 />, quantity: "85+" },
  { name: "Coffee", Img: <Img2 />, quantity: "300+" },
  { name: "Retention Rate", Img: <Img4 />, quantity: "93%" },
];

export const expertiesData = [
  { name: "Ecommerce Web Development", CardImg: <CardImg1 /> },
  { name: "UI-UX Design", CardImg: <CardImg2 /> },
  { name: "Web/App Maintenance", CardImg: <CardImg3 /> },
  { name: "Digital marketing", CardImg: <CardImg4 /> },
  { name: "Mobile Application Development", CardImg: <CardImg5 /> },
  { name: "Web development", CardImg: <CardImg6 /> },
];

export const companyData = [
  { id: "c1", Company: <C1 /> },
  { id: "c2", Company: <C2 /> },
  { id: "c3", Company: <C3 /> },
  { id: "c4", Company: <C4 /> },
];
