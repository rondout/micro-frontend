/*
 * @Author: shufei.han
 * @Date: 2024-08-20 10:02:38
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-08-22 16:04:03
 * @FilePath: \qiankun\child-native-app\index.ts
 * @Description: 
 */
import { resolve } from 'path';
import express, { type Express } from "express";
import chalk from "chalk";

class NativeServer {
    public instance: Express;
    constructor(private port = 4004) {
        this.instance = express();
        this.bootstrap();
    }
    private bootstrap() {
        console.log(chalk.yellow("Native Server Factory Init"));
        this.init();
    }

    private init() {
        this.setCors();
        this.instance.use(express.static(resolve(__dirname, './public')))
        this.instance.listen(this.port, () => {
            console.log(chalk.hex("#3f51b5")("Native Server Started at http://localhost:" + this.port))
        })
    }

    private setCors() {
        this.instance.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }
}
new NativeServer();

