/*
 * @Author: shufei.han
 * @Date: 2024-09-02 15:05:14
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 15:30:25
 * @FilePath: \micro-frontend\child-react-app\src\views\MainLayout.tsx
 * @Description:
 */
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useState } from "react";
export default function MainLayout() {
  const navigate = useNavigate();
  const route = useLocation()


  enum Page {
    MainPage = "/",
    BaseToChild = "/base-to-child",
    ChildToBase = "/child-to-base",
  }

  const PageTitleMap = new Map([
    [Page.MainPage, "Main Page"],
    [Page.BaseToChild, "Base to Child"],
    [Page.ChildToBase, "Child to Base"],
  ]);

  const [currentPage, setCurrentPage] = useState(route.pathname);

  const handleChangeRoute = (page: Page) => {
    setCurrentPage(page);
    navigate(page);
  };

  return (
    <div>
      <h2>
        Welcome to React Child App
        <span
          style={{
            color: "var(--primary)",
            paddingLeft: 8,
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          with Keep-Alive
        </span>
      </h2>
      <ButtonGroup>
        {Object.values(Page).map((page) => (
          <Button
            key={page}
            onClick={() => handleChangeRoute(page)}
            type={currentPage === page ? "primary" : "default"}
          >
           {PageTitleMap.get(page)}
          </Button>
        ))}
      </ButtonGroup>
      <Outlet />
    </div>
  );
}
