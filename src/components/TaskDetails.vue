<template>
    <div class="task">
        <h3>{{ props.task.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(task.id)">delete</i>
            <i 
            class="material-icons"
            :class="{active: task.isFav}" 
            @click="taskStore.toggleFav(task.id)">
            favorite
          </i>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "../stores/TaskStore";

const taskStore = useTaskStore();

const props = defineProps({
    task:{
        type: Object,
    }
})

</script>

<style lang="scss" scoped>

</style>