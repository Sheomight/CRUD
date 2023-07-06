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
    width: 40px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    margin-right: 10px;
    border: 1px solid gray;
    box-shadow: 2px 2px 2px darkgrey;
}

.btn:hover {
    box-shadow: inset 2px -2px 5px darkgrey;
}
</style>
