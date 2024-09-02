import { Button, Modal } from "antd";
import useMicro from "../../hooks/useMicro";
import { getToken } from "../../models/base.model";

/*
 * @Author: shufei.han
 * @Date: 2024-08-28 10:13:37
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 09:58:09
 * @FilePath: \micro-frontend\child-react-app\src\views\messages\BaseToChild.tsx
 * @Description:
 */
export default function BaseToChild() {
  const { messages, handleMessage } = useMicro();
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

  const getMsgManually = () => {
   const data = window.microApp.getData()
   handleMessage(data)
  };

  return (
    <div>
      {contextHolder}
      <div className="flex-start">
        <Button onClick={viewToken}>View Token</Button>
        <Button onClick={getMsgManually}>Get Messages Manually</Button>
      </div>
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
