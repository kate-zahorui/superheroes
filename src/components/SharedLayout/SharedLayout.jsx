import { Outlet } from "react-router-dom";
import { Header } from "../";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
