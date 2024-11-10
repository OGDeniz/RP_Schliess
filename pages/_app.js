import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "@/komponenten/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom.scss';

 function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App; 

