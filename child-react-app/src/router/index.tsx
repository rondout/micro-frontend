/*
 * @Author: shufei.han
 * @Date: 2024-09-02 14:44:41
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 15:51:05
 * @FilePath: \micro-frontend\child-react-app\src\router\index.tsx
 * @Description:
 */
import { createHashRouter } from "react-router-dom";
import MainLayout from "../views/MainLayout";
import Main from "../views/Main";
import BaseToChild from "../views/messages/BaseToChild";
import ChildToBase from "../views/messages/ChildToBase";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Main></Main>,
      },
      {
        path: "/base-to-child",
        element: <BaseToChild />
      },
      {
        path: "/child-to-base",
        element: <ChildToBase />
      }
    ],
  },
],
//  {basename:'/react/'}
);

export default router;
