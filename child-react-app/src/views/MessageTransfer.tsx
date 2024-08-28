/*
 * @Author: shufei.han
 * @Date: 2024-08-28 09:49:08
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 11:46:45
 * @FilePath: \micro-frontend\child-react-app\src\views\MessageTransfer.tsx
 * @Description: 
 */
import { Button } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import BaseToChild from "./messages/BaseToChild";
import { useState } from "react";
import ChildToBase from "./messages/ChildToBase";

export default function MessageTransfer() {
  enum Page {
    BaseToChild = 1,
    ChildToBase = 2,
  }

  const [currentPage, setCurrentPage] = useState(Page.BaseToChild);

  return (
    <div>
      <ButtonGroup>
        <Button onClick={() => setCurrentPage(Page.BaseToChild)} type="primary">Base to Child</Button>
        <Button onClick={() => setCurrentPage(Page.ChildToBase)}>Child to Base</Button>
      </ButtonGroup>
      <div>
        {currentPage === Page.BaseToChild && <BaseToChild></BaseToChild>}
        {currentPage === Page.ChildToBase && <ChildToBase></ChildToBase>}
      </div>
    </div>
  );
}
