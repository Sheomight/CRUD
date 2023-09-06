<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style>
.input {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    border-bottom: 2px solid rgb(0, 77, 200);
    color: rgb(255, 255, 255);
}

.input::placeholder {
    color: #c8c8c8;
}

.input:focus {
    outline: none;
    border-bottom: 5px solid rgb(0, 77, 200);

}
</style>
