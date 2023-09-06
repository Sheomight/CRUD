<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    width: 150px;
    height: 50px;
    background-color: rgb(0, 53, 139);
    border: 1px solid rgb(14, 95, 156);
    border-radius: 15px;
    color: white;
    cursor: pointer;
}

.btn:hover {
    background-color: rgb(0, 16, 139);
    border: 1px solid rgb(0, 49, 139);
}
</style>
