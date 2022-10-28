<template>
    <div class="card">
        <span style="--i: 0"></span>
        <span style="--i: 1"></span>
        <span style="--i: 2"></span>
        <span style="--i: 3"></span>
        <div class="glass">
            <h2>
                Frosted glass
                <i>+91 987 654 3210</i>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "frostedGlassComp",
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.card span {
    position: absolute;
    top: 0;
    width: 250px;
    height: 250px;
    background-color: #000;
    border-radius: 50%;
    transform-origin: 125px 0;
    transform: rotate(calc(90deg * var(--i)));
    filter: blur(80px);
    opacity: 0.75;
}

.card span:nth-child(1) {
    background-color: #01b2fe;
}

.card span:nth-child(2) {
    background-color: #ff008c;
}

.card span:nth-child(3) {
    background-color: #ffcd00;
}

.card span:nth-child(4) {
    background-color: #00c456;
}

.card .glass {
    position: absolute;
    width: 450px;
    height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 20px;
    border: 1px solid #fff;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}

.card .glass::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    pointer-events: none;
    transform: skewX(345deg)
}

.card h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 20px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    color: #333;
    text-align: end;
}

.card .glass h2 i {
    font-weight: 300;
    font-size: 0.75em;
    font-style: normal;
}
</style>