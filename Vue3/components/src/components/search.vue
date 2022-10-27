<template>
    <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
    <div class="shell">
        <input type="text" placeholder="Search" />
        <a href="#">
            <i class="fa fa-hand-o-right"></i>
            <i class="fa fa-search"></i>
        </a>
    </div>
</template>

<script>

export default {
    name: "searchComp",
}
</script>

<style scoped>
* {
    /* 边框 */
    outline: none;
    padding: 0;
    margin: 0;
    /* 文本修饰 */
    text-decoration: none;
}

.shell {
    position: relative;
    width: 1000px;
    padding: 33px;
    background-color: #ff7575;
    border-radius: 20px;
    box-shadow: 0 10px 50px #ff7575, 0 0 0 20px #fff;
}

.shell input {
    width: 80%;
    height: 100px;
    color: #fff;
    font: 300 80px '优设标题黑';
    border: 0;
    background-color: transparent;
}

.shell input::placeholder {
    color: #8f36367e;
}

.shell a {
    display: flex;
    font-size: 120px;
    /* 绝对定位 */
    position: absolute;
    right: 60px;
    top: 10px;
    color: #fff;
    width: 250px;
    height: 150px;
}

.shell a .fa {
    margin: 10px 28px;
    transition: .3s;
}

.shell a .fa-search {
    transform: translateX(-80px);
    opacity: 1;
}

.shell a .fa-hand-o-right {
    transform: translateX(-100px);
    opacity: 0;
}

/* 鼠标悬停 */
.shell a:hover .fa-search {
    transform: translateX(0px);
    opacity: 0;
}

.shell a:hover .fa-hand-o-right {
    transform: translateX(110px);
    opacity: 1;
}

/* 在前面创建一个伪元素 */
.shell a::before {
    content: "GO!";
    position: absolute;
    display: block;
    font-size: 50px;
    background-color: #ff7575;
    padding: 5px 30px;
    top: 50px;
    right: -25px;
    border-radius: 10px;
    transition: .3s;
    opacity: 0;
    animation: box 1s infinite ease;
}

.shell a:hover::before {
    top: -115px;
    opacity: 1;
}

@keyframes box {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(8deg);
    }
    66% {
        transform: rotate(-8deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>