import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import ElementPlusIcons from "./components/element-icon";
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(ElementPlusIcons);
app.use(router)
app.mount('#app')
