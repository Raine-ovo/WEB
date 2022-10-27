<template>
    <div class="shell">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <a href="#" class="box"><i class="bi bi-card-list"></i><span>list</span></a>
        <a href="#" class="box"><i class="bi bi-shop"></i><span>store</span></a>
        <a href="#" class="box"><i class="bi bi-palette"></i><span>theme</span></a>
        <a href="#" class="box"><i class="bi bi-wallet"></i><span>wallet</span></a>
        <a href="#" class="box"><i class="bi bi-image"></i><span>pictures</span></a>
        <a href="#" class="box"><i class="bi bi-qr-code"></i><span>QR-code</span></a>
        <a href="#" class="box"><i class="bi bi-person-check"></i><span>authentication</span></a>
        <a href="#" class="box"><i class="bi bi-box-arrow-right"></i><span>exit</span></a>
    </div>
</template>

<script>
export default {
    name: "sideBarComp",
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    justify-content: space-evenly;
    align-items: center;
}

.shell {
    width: 100px;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* 竖直排列 */
    flex-direction: column;
    background-color:rgb(243, 244, 246);
    border-radius: 10px;
    transition: .3s;
    overflow: hidden;
}

.box {
    display: block;
    height: 15%;
    width: 85%;
    margin: 9px;
    border-radius: 5px;
    position: relative;
    transition: .3s;
    color: #000;
}

.box i {
    font-size: 60px;
    position: absolute;
    margin: -6px 0 0 13px;
}

.box:nth-child(2)::before,
.box:nth-child(5)::before {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(55, 65, 81);
    position: absolute;
    bottom: -10px;
}

.box span {
    position: relative;
    top: 22px;
    left: 80px;
    font: 500 20px '';
    opacity: 0;
    transition: .1s;
}

.shell:hover {
    width: 270px;
}

.box:hover {
    background-color: rgb(201, 213, 219);
    color: rgb(241, 159, 159);
}

.shell:hover span {
    opacity: 1;
}

</style>