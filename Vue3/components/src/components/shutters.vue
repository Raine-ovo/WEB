<template>
    <div class="a">
        <div class="b"><img src="../assets/shutters/1.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/2.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/3.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/4.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/5.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/6.gif" alt=""></div>
        <div class="b"><img src="../assets/shutters/7.gif" alt=""></div>
    </div>
</template>

<script>
export default {
    name: "shuttersComp",
}
</script>

<style scoped>
* {
    padding: 0px;
    margin: 0px;
}

.a {
    width: 900px;
    height: 300px;
    position: relative;
    top: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 15px #000;
}

.b {
    transition: .7s;
    overflow: hidden;
}

.b:hover {
    flex-shrink: 0; /* 不接受缩小适应 */
    flex-grow: 0; /* 根据剩余空间放大 为0则表示不会放大 */
}

img {
    width: 400px;
}
</style>