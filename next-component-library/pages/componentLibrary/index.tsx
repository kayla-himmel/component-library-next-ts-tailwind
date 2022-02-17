import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Component } from '../../interfaces'
import { sampleComponentData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'

type Props = {
  items: Component[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="componentLibrary List | Next.js + TypeScript Example">
    <h1>componentLibrary List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /componentLibrary</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Component[] = sampleComponentData
  return { props: { items } }
}

export default WithStaticProps
