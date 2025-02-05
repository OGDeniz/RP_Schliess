import "@/styles/global.module.css";
import "styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;