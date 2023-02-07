import Layout from "@/components/business/Layout/Layout";
import { Fragment } from "react";
import "@/styles/globals.scss";


export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
