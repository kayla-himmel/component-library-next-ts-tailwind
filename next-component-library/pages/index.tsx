import { A11yText } from '../components/A11yText/A11yText';
import Layout from '../components/Layout';
import { Button } from '../components/Button/Button';
import { LinkTypes } from '../components/Button/Button.interfaces';

const alertText = "I'm a button";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-3xl font-bold underline">Hello Next.js 👋</h1>
    <p>
      <Button type={LinkTypes.LINK} href="/about">
        <a>About</a>
      </Button>
      {/* Button example */}
      <Button href="/" type={LinkTypes.BUTTON} onClick={() => alert('hey!')} className="bg-gray-300 p-4 border-black">
        <A11yText srText={alertText} visualText={alertText} />
      </Button>
    </p>
  </Layout>
);

export default IndexPage;
