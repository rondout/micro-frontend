<!--
 * @Author: shufei.han
 * @Date: 2024-08-02 10:21:24
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-02 10:39:38
 * @FilePath: \servers\README.md
 * @Description: 
-->
# 问题记录

### `pm2` 启动后日志查看中我们使用 `chalk` 输出的带颜色的日志无法正常显示

解决方案：使用 `--no-daemon` 选项启动 `pm2`。
```bash
pm2 start "pnpm dev" --no-daemon
```

### `connect-history-api-fallback`的使用地方

需要再配置 `static` 目录之前使用：
```ts
this.instance.use(logger('dev'))
this.instance.use(historyApiFallback());
this.instance.use(
    express.static(this.staticDir)
);
this.bootstrap();
```