/*
 * @Author: shufei.han
 * @Date: 2024-08-28 11:42:43
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 11:47:56
 * @FilePath: \micro-frontend\child-react-app\src\views\messages\ChildToBase.tsx
 * @Description: 
 */
import { Button, Input } from "antd";
import { useState } from "react";
import { sendMessageToBase } from "../../hooks/useMicro";
import { MicroMessageType } from "../../models/base.model";

export default function ChildToBase() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSend = () => {
    sendMessageToBase({
      type: MicroMessageType.TEXT_MSG,
      value: {value},
    });
  };

  return (
    <div>
      <h1>Child to Base</h1>
      <div className="flex">
        <Input value={value} onChange={handleChange}></Input>
        <Button onClick={handleSend}>发送</Button>
      </div>
    </div>
  );
}
