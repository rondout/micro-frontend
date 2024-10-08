/*
 * @Author: shufei.han
 * @Date: 2024-09-06 17:11:56
 * @LastEditors: shufei.han
 * @LastEditTime: 2024-09-06 18:38:11
 * @FilePath: \micro-frontend\child-native-app\client\index.ts
 * @Description:
 */
export var MicroMessageType;
(function (MicroMessageType) {
    MicroMessageType["CHANGE_THEME"] = "change_theme";
    MicroMessageType["SET_COUNT"] = "set_count";
    MicroMessageType["TEXT_MSG"] = "text_msg";
    MicroMessageType["GLOBAL_MSG"] = "global_msg";
})(MicroMessageType || (MicroMessageType = {}));
const ROOT_ID = "native-app";
const INFO_CONTAINER = 'info-container';
const INFO_CONTENT = 'info-content';
const MESSAGE_COUNT = 'msg-count';
const TO_BASE_CONTAINER = 'to-base-container';
const SEND_TO_BASE_BTN = 'send-to-base-btn';
export function genUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
export const getRoot = () => document.getElementById(ROOT_ID);
const getMessageCountEl = () => document.querySelector("." + MESSAGE_COUNT);
const getInfoContainer = () => document.querySelector("." + INFO_CONTAINER);
const getToBaseContainer = () => document.querySelector("." + TO_BASE_CONTAINER);
const getFromBaseEl = () => document.getElementById(MsgTabs.FROM_BASE);
const getToBaseEl = () => document.getElementById(MsgTabs.TO_BASE);
const getSendToBaseBtn = () => document.getElementById(SEND_TO_BASE_BTN);
const allMessages = [];
export var MsgTabs;
(function (MsgTabs) {
    MsgTabs["FROM_BASE"] = "from-base";
    MsgTabs["TO_BASE"] = "to-base";
})(MsgTabs || (MsgTabs = {}));
let currentSelectedTab = MsgTabs.FROM_BASE;
function setTitle() {
    const titleEl = document.querySelector("title");
    titleEl.innerText = "Native App";
}
function initRadioButtonEvent() {
    const fromBaseEl = getFromBaseEl();
    const toBaseEl = getToBaseEl();
    fromBaseEl.onclick = () => {
        currentSelectedTab = MsgTabs.FROM_BASE;
        setTabClassName();
    };
    toBaseEl.onclick = () => {
        currentSelectedTab = MsgTabs.TO_BASE;
        setTabClassName();
    };
    setTabClassName();
}
function initSendToBaseBtnEvent() {
    const toBaseEl = getToBaseContainer();
    const inputEl = toBaseEl.querySelector('input');
    getSendToBaseBtn().onclick = () => {
        const value = inputEl.value;
        window.microApp.setGlobalData({ type: MicroMessageType.GLOBAL_MSG, value: { from: 'Child Native App', content: value } });
    };
}
function setTabClassName() {
    const fromBaseEl = getFromBaseEl();
    const toBaseEl = getToBaseEl();
    const toBaseContainerEl = getToBaseContainer();
    const infoContainerEl = getInfoContainer();
    if (currentSelectedTab === MsgTabs.FROM_BASE) {
        fromBaseEl.classList.add("item-selected");
        toBaseEl.classList.remove("item-selected");
        infoContainerEl.style.display = "block";
        toBaseContainerEl.style.display = "none";
    }
    else {
        fromBaseEl.classList.remove("item-selected");
        toBaseEl.classList.add("item-selected");
        infoContainerEl.style.display = "none";
        toBaseContainerEl.style.display = "block";
    }
}
function registerMicroMessageEvent() {
    window.microApp.addDataListener((data) => {
        const message = { id: genUUID(), data };
        allMessages.push(message);
        setMessageCount();
        renderToInfo(message);
    });
}
function registerGlobalMicroMessageEvent() {
    window.microApp.addGlobalDataListener((data) => {
        const message = { id: genUUID(), data, isGlobal: true };
        allMessages.push(message);
        setMessageCount();
        renderToInfo(message);
    });
}
function setMessageCount() {
    getMessageCountEl().innerText = `${allMessages.length.toString()}条消息`;
}
function renderToInfo(msg) {
    const infoContainer = getInfoContainer();
    const infoEl = document.createElement("div");
    infoEl.className = INFO_CONTENT;
    infoEl.innerHTML = `
        <div class="flex-start">
            ${msg.isGlobal ? "<div class=\"is-global-msg\">全局消息</div>" : ""}
            <div style="width: 200px">Type: ${msg.data.type}</div>
            <div>Data: ${JSON.stringify(msg.data.value)}</div>
        </div>
        <button>remove</button>
    `;
    infoContainer.appendChild(infoEl);
    infoEl.querySelector("button").onclick = () => {
        infoEl.remove();
        allMessages.splice(allMessages.indexOf(msg), 1);
        setMessageCount();
    };
}
function init() {
    setTitle();
    registerMicroMessageEvent();
    registerGlobalMicroMessageEvent();
    setMessageCount();
    initRadioButtonEvent();
    initSendToBaseBtnEvent();
}
init();
export default { name: "native app" };
