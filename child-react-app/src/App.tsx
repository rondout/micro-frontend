/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:29:40
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-28 14:49:14
 * @FilePath: \micro-frontend\child-react-app\src\App.tsx
 * @Description:
 */
import { createContext, useEffect } from "react";
import "./App.css";
import MessageTransfer from "./views/MessageTransfer";
import Main from "./views/Main";
import { Button, ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/main";

function App() {
  const theme = useSelector(selectTheme);
  const ReachableContext = createContext<string | null>(null);
  const UnreachableContext = createContext<string | null>(null);

  useEffect(() => {
    console.log("useEffect");
    if (window.__MICRO_APP_ENVIRONMENT__) {
      console.log("我（React App）在微前端环境中", window);
    } else {
      console.log("child-react-app mounted");
    }
  }, []);

  return (
    <ConfigProvider
      theme={{ token: { colorPrimary: theme } }}
    >
      <ReachableContext.Provider value="Light">
        <UnreachableContext.Provider value="Bamboo" />
        <Main></Main>
        <MessageTransfer></MessageTransfer>
      </ReachableContext.Provider>
    </ConfigProvider>
  );
}

export default App;
