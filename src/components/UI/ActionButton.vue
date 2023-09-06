<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'action-btn'
}
</script>

<style scoped>
.btn {
    width: 35px;
    height: 35px;
    color: #fff;
    cursor: pointer;
    border: 1px solid rgb(42, 42, 42);
    box-shadow: 2px 2px 2px rgb(60, 60, 60);
}

.btn:hover {
    box-shadow: inset 0px 0px 2px 1px rgb(60, 60, 60);
}
</style>
