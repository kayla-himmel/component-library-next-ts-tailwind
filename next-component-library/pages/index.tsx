import Link from 'next/link';
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
      <LinkComponent
        href="/"
        type={LinkTypes.BUTTON}
        onClick={() => alert('hey!')}
        children={alertText}
        className="bg-gray-300 p-4 border-black"
      />
    </p>
  </Layout>
);

export default IndexPage;
