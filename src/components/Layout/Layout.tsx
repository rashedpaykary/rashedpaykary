import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};

function Layout({ children }: props) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
