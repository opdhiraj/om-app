import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: string;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
