<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
<div class="card">
    <div class="card-info">
        <div class="breadth">

        </div>
        <div class="avatar">

        </div>
        <div class="info">
            <h2>rain tail</h2>
        </div>
    </div>
    <div class="card-link">
        <a href="#"><i class="bi bi-github"></i></a>
        <a href="#"><i class="bi bi-envelope"></i></a>
        <a href="#"><i class="bi bi-card-list"></i></a>
    </div>
</div>
</template>

<script>
export default {
    name: "userCardComp",
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;    
}

.card {
    width: 190px;
    height: 250px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    overflow: hidden;
    transition: 0.75s;
}

.card-info {
    width: 100%;
    height: 70%;
    /* display: flex;
    justify-content: center; */
}

.card-info .breadth {
    width: 80%;
    background-color: #4bb8ff;
    border-radius: 0 0 30px 30px;
    height: 10px;
    /* margin 设置auto即可实现居中 */
    margin: 0 auto;
    transition: 0.75s;
}

.card-info .avatar {
    height: 70px;
    width: 70px;
    background-color: #4bb8ff;
    margin: 30px auto 10px auto;
    border-radius: 50%;
    transition: 0.75s;
}

.card:hover .breadth {
    height: 0px;
}

.card:hover {
    background-color: #4bb8ff;
}

.card:hover .avatar {
    height: 100%;
    width: 100%;
    border-radius: 0;
    margin: 0px auto;
    background-color: rgba(255, 255, 255, 1);
}

.card-info .info {
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
    font-size: 20px;
    letter-spacing: 1px;
    padding: 5px;
}

.card:hover .info {
    transform: translateX(100%);
}

.card .card-link {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.card i {
    opacity: 0;
    font-size: 20px;
    color: #fff;
}

.card:hover i {
    opacity: 1;
}
</style>