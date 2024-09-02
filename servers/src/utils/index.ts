/*
 * @Author: shufei.han
 * @Date: 2024-08-02 09:41:50
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-02 11:29:51
 * @FilePath: \micro-frontend\servers\src\utils\index.ts
 * @Description: 
 */
import express, { type Express } from "express";
import { resolve } from "path";
import fsp from "fs/promises";
import logger from "morgan";
import historyApiFallback from "connect-history-api-fallback";
import chalk from "chalk";

export enum ServerEnum {
    MAIN_APP,
    VUE_APP,
    REACT_APP,
    NATIVE_APP,
}

export const microServerChildMap = new Map<ServerEnum, { dir: string; port: number; name: string }>([
    [ServerEnum.MAIN_APP, { dir: "main-app", name: "Main App", port: 3001 }],
    [ServerEnum.VUE_APP, { dir: "vue-app", name: "Vue App", port: 3002 }],
    [ServerEnum.REACT_APP, { dir: "react-app", name: "React App", port: 3003 }],
    [ServerEnum.NATIVE_APP, { dir: "native-app", name: "Native App", port: 3004 }],
]);

export class MicroServer {
    public instance: Express;
    private staticDir: string;
    constructor(private app: ServerEnum) {
        this.instance = express();
        this.staticDir = resolve(__dirname, `../../static/${microServerChildMap.get(app)?.dir}/dist`)
        this.log(chalk.yellow("MicroServer Factory Init"));
        this.init();
    }

    private log(msg:string) {
        console.log(chalk.cyan.bold("Micro " + microServerChildMap.get(this.app)?.name) + ": " + msg);
    }

    private async init() {
        await this.createStaticDirs();
        this.instance.use(logger('dev'))
        this.setCors();
        this.instance.use(historyApiFallback());
        this.instance.use(
            express.static(this.staticDir)
        );
        this.bootstrap();
    }

    private bootstrap() {
        this.instance.listen(microServerChildMap.get(this.app)?.port, () => {
            this.log(chalk.green("MicroServer is running at ") + chalk.bold.underline("http://192.168.56.1:" + microServerChildMap.get(this.app)?.port));
        });
    }

    private setCors() {
        this.instance.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    private async createStaticDirs() {
        try {
            await fsp.access(
                this.staticDir
            );
            this.log(chalk.yellow("MicroServer createStaticDirs ") + this.staticDir + " " + chalk.blue("EXISTED"));
        } catch (error) {
            // 如果该目录不存在，则创建该目录
            await fsp.mkdir(this.staticDir, { recursive: true });
            this.log(chalk.yellow("MicroServer createStaticDirs ") + this.staticDir + " " + chalk.green("SUCCEED"));

        }
    }
}
