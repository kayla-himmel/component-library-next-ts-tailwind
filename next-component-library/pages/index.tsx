import Link from 'next/link';
import { A11yText } from '../components/A11yText/A11yText';
import Layout from '../components/Layout';
import { LinkComponent } from '../components/Links/Link';
import { LinkTypes } from '../components/Links/Link.interfaces';

const alertText = "I'm a button";
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-3xl font-bold underline">Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      {/* Button example */}
      <LinkComponent
        href="/"
        type={LinkTypes.BUTTON}
        onClick={() => alert('hey!')}
        className="bg-gray-300 p-4 border-black"
      >
        <A11yText srText={alertText} visualText={alertText} />
      </LinkComponent>
    </p>
  </Layout>
);

export default IndexPage;
