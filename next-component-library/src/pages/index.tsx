import Link from 'next/link';
import { A11yText } from '../components/A11yText/A11yText';
import Layout from '../components/Layout';
import { Button } from '../components/Button/Button';
import { LinkTypes } from '../components/Button/Button.interfaces';

// const <Modal>
//       <div className="modal_content">
//         <h2>Click the button to agree</h2>
//       </div>
//       <div>
//         <Button type={LinkTypes.BUTTON} href="/" onClick={() => alert('I agree to this')}>
//           I agree
//         </Button>
//       </div>
//     </Modal>

const alertText = "I'm a button";
const IndexPage = () => (
  <>
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 className="text-3xl font-bold underline">Hello Next.js 👋</h1>
      {/* Button example */}
      <Button href="/" type={LinkTypes.BUTTON} onClick={() => alert('hey!')} className="bg-gray-300 p-4 border-black">
        <A11yText srText={alertText} visualText={alertText} />
      </Button>
    </Layout>
    <div id="modal-root"></div>
  </>
);

export default IndexPage;
