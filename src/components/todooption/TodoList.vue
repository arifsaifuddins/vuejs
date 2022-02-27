<template>
  <div class="col-lg-6 mx-auto">
    <div class="row">
      <div
        class="border-2 border border-primary p-2 rounded-3 mb-3"
        v-for="(todoList, tIndex) in todos"
        :key="tIndex"
      >
        <div class="row">
          <div class="col-auto text-start pt-1">
            <h4 v-if="!todoList.isFinish">
              {{ todoList.title }}
            </h4>
            <del v-if="todoList.isFinish"
              ><h4>
                {{ todoList.title }}
              </h4>
            </del>
          </div>
          <div class="col text-end">
            <div class="btn btn-success mx-4" @click="finishT(tIndex)">
              Done
            </div>
            <div @click="deleteT(tIndex)" class="btn btn-danger">Delete</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      todos: {
        type: Array,
        default: [],
      },
    },
    methods: {
      deleteT(index) {
        this.$emit("delete-todo", index);
      },
      finishT(index) {
        this.$emit("finish-todo", index);
      },
    },
  };
</script>