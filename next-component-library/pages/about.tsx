import { Button } from '../components/Button/Button';
import { LinkTypes } from '../components/Button/Button.interfaces';
import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Button type={LinkTypes.LINK} href="/">
        <a>Go home</a>
      </Button>
    </p>
  </Layout>
);

export default AboutPage;
