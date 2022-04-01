import { A11yText } from '../components/A11yText/A11yText';
import Layout from '../components/Layout';
import { Button } from '../components/Button/Button';

const alertText = "I'm a button";
const IndexPage = () => (
  <>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-3xl font-bold underline">Hello Next.js 👋</h1>
      {/* Button example */}
      <Button onClick={() => alert('hey!')} onKeyDown={() => alert('hey!')} className="bg-gray-300 p-4 border-black">
        <A11yText srText={alertText} visualText={alertText} />
      </Button>
    </Layout>
    <div id="modal-root"></div>
  </>
);

export default IndexPage;
