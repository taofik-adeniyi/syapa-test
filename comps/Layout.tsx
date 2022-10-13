import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutPropTypes {
  children: React.ReactNode;
  pageTitle: string | React.ReactNode;
}
const Layout = (props: LayoutPropTypes) => {
  const { children, pageTitle } = props;
  return (
    <div className="bg-white m-0 p-0 relative">
      <Sidebar />
      <Header pageName={pageTitle} />
      <div className="mt-24 md:mt-0 relative bg-white body-h w-full md:w-[85%] pb-2 flex flex-col md:flex-row ml-0 md:ml-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
