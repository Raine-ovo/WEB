<template>
    <div class="container">
        <div class="form-box" ref="formBox">
            <!-- 注册 -->
            <div :class="{registerBox: registerBox, hidden: hiddenRegisterBox}">
                <h1>register</h1>
                <input v-model="register_username" type="text" placeholder="用户名" />
                <input v-model="register_email" type="email" placeholder="邮箱">
                <input v-model="register_password" type="password" placeholder="密码" />
                <input v-model="register_password_confirm" type="password" placeholder="确认密码">
                <button>注册</button>
            </div>
            <!-- 登录 -->
            <div :class="{loginBox: loginBox, hidden: hiddenLoginBox}">
                <h1>login</h1>
                <input v-model="login_username" type="text" placeholder="用户名">
                <input v-model="login_password" type="password" placeholder="密码">
                <button>登录</button>
            </div>
        </div>
        <!-- 登录界面 -->
        <div class="con-box left">
            <h2 class="title">欢迎来到<span>宠物之家</span></h2>
            <p>快来领取你的专属<span>宠物</span>吧</p>
            <img src="../assets/user/0.png" alt="" class="smaller" />
            <p>已有账号</p>
            <button @click="login">去登陆</button>
        </div>
        <!-- 注册界面 -->
        <div class="con-box right">
            <h2 class="title">欢迎来到<span>宠物之家</span></h2>
            <p>快来看看你的可爱<span>宠物</span>吧</p>
            <img src="../assets/user/1.png" alt="" class="smaller" />
            <p>没有账号?</p>
            <button @click="register">去注册</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "userComp",
    // data是一个函数，返回关于这个组件的初始信息
    data() {
        return {
            registerBox: true,
            loginBox: true,
            hiddenRegisterBox: true,
            hiddenLoginBox: false,

            // 信息
            register_username: "",
            register_email: "",
            register_password: "",
            register_password_confirm: "",
            login_username: "",
            login_password: "",
        }
    },
    methods: {
        empty() {
            this.register_username = "";
            this.register_email = "";
            this.register_password = "";
            this.register_password_confirm = "";
            this.login_username = "";
            this.login_password = "";
        },
        register() {
            this.hiddenRegisterBox = false;
            this.hiddenLoginBox = true;
            this.$refs.formBox.style.transform = "translateX(80%)";
            this.empty();
        },
        login() {
            this.hiddenLoginBox = false;
            this.hiddenRegisterBox = true;
            this.$refs.formBox.style.transform = "translateX(0%)";
            this.empty();
        }
    }
}
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}
.container{
    background-color: #fff;
    width: 650px;
    height: 415px;
    /* 相对定位 */
    position: relative;
    border-radius: 5px;
    /* 阴影 */
    box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
}

.form-box {
    position: absolute;
    top: -10%;
    left: 5%;
    background-color: #d3b7d8;
    width: 320px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease-in-out;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.registerBox, .loginBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.hidden {
    display: none;
    transition: 0.5s;
}

h1 {
    text-align: center;
    margin-bottom: 25px;
    /* 转大写 */
    text-transform: uppercase;
    color: #fff;
    /* 字间距 */
    letter-spacing: 5px;
}

input {
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    /* 下边框样式 */
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 0px;
    /* 定义文本在输入框的缩进 */
    text-indent: 10px;
    margin: 8px 0px;
    font-size: 14px;
    letter-spacing: 2px;
}

input::placeholder {
    color: #fff;
}

/* 聚焦此输入框时的样式 */
input:focus {
    color: #a262ad;
    outline: none;
    border-bottom: 1px solid #a262ad80;
    /* 变化时间 */
    transition: .5s;
}

input:focus::placeholder {
    opacity: 0;
}

.form-box button {
    width: 70%;
    margin-top: 35px;
    background-color: #f6f6f6;
    outline: none;
    border-radius: 8px;
    padding: 13px;
    color: #a262ad;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
}

.form-box button:hover {
    background-color: #a262ad;
    color: #f6f6f6;
    transition: background-color 0.5s ease;
}

.con-box {
    width: 50%;
    /* 弹性布局 垂直排列 居中 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.con-box.left {
    left: -2%;
}

.con-box.right {
    right: -2%;
}

.con-box h2 {
    color: #8e9aaf;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    margin-bottom: 4px;
}

.con-box p {
    font-size: 12px;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
}

.con-box span {
    color: #d3b7d8;
}

.con-box img {
    width: 150px;
    height: 150px;
    opacity: 0.9;
    margin: 40px 0;
}

.con-box button {
    margin-top: 3%;
    background-color: #fff;
    color: #a262ad;
    border: 1px solid #d3b7d8;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;
}

.con-box button:hover {
    background-color: #d3b7d8;
    color: #fff;
}
</style>