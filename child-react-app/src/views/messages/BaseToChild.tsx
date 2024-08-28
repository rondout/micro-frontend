import { Button, Modal } from "antd";
import useMicro from "../../hooks/useMicro";
import { getToken } from "../../models/base.model";

/*
 * @Author: shufei.han
 * @Date: 2024-08-28 10:13:37
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 14:49:44
 * @FilePath: \micro-frontend\child-react-app\src\views\messages\BaseToChild.tsx
 * @Description:
 */
export default function BaseToChild() {
  const { messages } = useMicro();
  const [modal, contextHolder] = Modal.useModal();

  const viewToken = () => {
    const token = getToken();

    modal.info({
      title: "Token",
      content: (
        <div>
          <h3>{token}</h3>
        </div>
      ),
      centered: true,
    });
  };

  return (
    <div>
      {contextHolder}
      <Button onClick={viewToken}>View Token</Button>
      <h1>Base to Child</h1>
      {messages.map((item, index) => (
        <div key={index}>
          <span>Type: {item.type}</span>
          <span style={{ paddingLeft: 20 }}>Data: {item.value || "-"}</span>
        </div>
      ))}
    </div>
  );
}
