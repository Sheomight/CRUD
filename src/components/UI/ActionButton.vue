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
    border: 1px solid gray;
    box-shadow: 2px 2px 2px darkgrey;
}

.btn:hover {
    box-shadow: inset 2px -2px 5px darkgrey;
}
</style>
