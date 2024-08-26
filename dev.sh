###
 # @Author: shufei.han
 # @Date: 2024-08-22 15:51:01
 # @LastEditors: shufei.han
 # @LastEditTime: 2024-08-22 16:02:59
 # @FilePath: \qiankun\dev.sh
 # @Description: 
### 
#!/bin/bash

# 定义终端窗口标题
WINDOW_TITLE_A="Main App"
WINDOW_TITLE_B="Child Vue3 App"
WINDOW_TITLE_C="Child React App"
WINDOW_TITLE_D="Child Native App"

# 打开新的终端窗口并执行命令
gnome-terminal -t "$WINDOW_TITLE_A" -x bash -c "cd ./base-app/; pnpm dev; exec bash" &
gnome-terminal -t "$WINDOW_TITLE_B" -x bash -c "cd ./child-vue3-app/; pnpm dev; exec bash" &
gnome-terminal -t "$WINDOW_TITLE_C" -x bash -c "cd ./child-react-app/; pnpm dev; exec bash" &
gnome-terminal -t "$WINDOW_TITLE_D" -x bash -c "cd ./child-native-app/; pnpm dev; exec bash" &
#!/bin/bash
