import Head from "next/head";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Erica Melo de Carvalho - Software Engineer</title>
        <meta name="description" content="Sofware Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        <main className="content">{children}</main>
        <footer className="footer">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Erica Melo de Carvalho
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
