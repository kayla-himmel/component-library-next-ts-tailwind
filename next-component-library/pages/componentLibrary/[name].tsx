import { GetStaticProps, GetStaticPaths } from 'next';

import { Component } from '../../interfaces';
import { sampleComponentData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import { instanceOfErrorResponse } from '../../utils/helper';

type Props = {
  item?: Component;
  errors?: string;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout title={`${item ? item.name : 'Component Detail'} | Next.js + TypeScript Example`}>
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on componentLibrary
  const paths = sampleComponentData.map((component) => ({
    params: { name: component.name.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const name = params?.name;
    const item = sampleComponentData.find((data) => data.name === String(name));
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err: unknown) {
    if (instanceOfErrorResponse(err)) {
      return { props: { errors: err.message } };
    } else {
      return { props: { errors: err } };
    }
  }
};
