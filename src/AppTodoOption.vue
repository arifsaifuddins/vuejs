<template>
  <div class="container p-4">
    <h1 class="text-center my-4">{{ todoTitle }}</h1>

    <div class="col-lg-6 mx-auto">
      <div class="row">
        <input
          @keydown.enter="addTodo"
          class="form-control mb-3"
          type="text"
          v-model="todoText"
          autofocus
        />
        <div class="btn btn-primary mb-4" @click="addTodo">Add Todo</div>
      </div>
    </div>
    <TodoListVue
      :todos="todoLists"
      @finish-todo="finishTodo"
      @delete-todo="deleteTodo"
    />
    <div class="col-lg-6 mx-auto">
      <div class="row text-center">
        <div class="btn btn-secondary mt-3">Total : {{ total }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import TodoListVue from "./components/todooption/TodoList.vue";
  export default {
    components: {
      TodoListVue,
    },
    data() {
      return {
        todoTitle: "Todo App Vue",
        todoText: "",
        todoLists: [],
      };
    },
    mounted() {
      JSON.parse(localStorage.getItem("todosvue")).length > 0
        ? (this.todoLists = JSON.parse(localStorage.getItem("todosvue")))
        : (this.todoLists = []);
    },
    computed: {
      total() {
        return this.todoLists.length;
      },
    },
    methods: {
      addTodo() {
        this.todoLists.unshift({
          title: this.todoText,
          isFinish: false,
        });
        this.todoText = "";
        this.localStorageAdd();
      },
      deleteTodo(index) {
        this.todoLists = this.todoLists.filter((todo, idx) => {
          if (idx !== index) {
            return todo;
          }
        });
        this.localStorageAdd();
      },
      finishTodo(index) {
        this.todoLists = this.todoLists.filter((todo, idx) => {
          if (idx == index) {
            todo.isFinish = !todo.isFinish;
          }
          return todo;
        });
        this.localStorageAdd();
      },
      localStorageAdd() {
        return localStorage.setItem("todosvue", JSON.stringify(this.todoLists));
      },
    },
  };
</script>