import { Button } from './Button';
import { LinkTypes } from './Button.interfaces';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Buttons',
  component: Button,
};

export const ButtonComponent = () => <Button type={LinkTypes.BUTTON} href="/" />;

export const LinkComponent = () => <Button type={LinkTypes.LINK} href="#" />;

// /stories/pages/home.stories.jsx
// import Home from "../../pages/index";

// export default {
//   title: "Pages/Home",
//   component: Home,
// };

// export const HomePage = () => <Home />
