import { GetStaticProps } from 'next';

import { Component } from '../../../interfaces';
import { sampleComponentData } from '../../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Component[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Component Library List | Next.js + TypeScript Example">
    <h1 className="text-3xl font-bold underline">Component Library List</h1>
    {/* Our actual list of components */}
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Component[] = sampleComponentData;
  return { props: { items } };
};

export default WithStaticProps;
