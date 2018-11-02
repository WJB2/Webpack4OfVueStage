import Vue from 'vue';//在import Vue的过程中，Vue主要是在原型上完成方法的挂载，并且初始化了全局的API。
import App from './app.vue';//引入主VUE页面
import "./utils/Rem";//引入将根页面的fontsize修改后 直接就可以在项目中使用rem实现自适应

new Vue({
    el:"#root",//将渲染结果挂在这id为root的html上
    render:h=>h(App),//render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来
});