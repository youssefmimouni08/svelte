<script>
  // @ts-nocheck

  import { deleteTodo, completeTodo } from "../stores/todoStore.js";
  export let todo;
</script>

<li class="my_li">
  <input
    name="completed"
    type="checkbox"
    checked={todo.completed}
    on:change={() => completeTodo(todo.id)}
    class="my_checkbox"
  />
  <span
    class="my_span"
    style={`text-decoration: ${todo.completed ? "line-through" : "none"}`}
    >{todo.text}</span
  >
  {#if todo.completed}
    <button
      type="button"
      class="my_delete_button"
      on:click={() => deleteTodo(todo.id)}>Delete</button
    >
  {/if}
</li>

<style>
  .my_li {
    background-color: white;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm in Tailwind CSS */
    border: 1px solid #e2e8f0; /* Equivalent to border and border-gray-200 in Tailwind CSS */
    border-radius: 0.375rem; /* Equivalent to rounded-md in Tailwind CSS */
    margin-top: 0.5rem; /* Equivalent to my-2 in Tailwind CSS */
    margin-bottom: 0.5rem; /* Equivalent to my-2 in Tailwind CSS */
    margin-left: 0.75rem; /* Equivalent to mx-3 in Tailwind CSS */
    margin-right: 0.75rem; /* Equivalent to mx-3 in Tailwind CSS */
    padding-top: 0.5rem; /* Equivalent to py-2 in Tailwind CSS */
    padding-right: 1rem; /* Equivalent to px-4 in Tailwind CSS */
    padding-bottom: 0.5rem; /* Equivalent to py-2 in Tailwind CSS */
    padding-left: 1rem;
  }
  .my_checkbox {
    margin-right: 0.5rem; /* Equivalent to mr-2 in Tailwind CSS */
    width: 1.25rem; /* Equivalent to w-5 in Tailwind CSS */
    height: 1.25rem; /* Equivalent to h-5 in Tailwind CSS */
  }
  .my_span {
    flex: 1; /* Equivalent to flex-1 in Tailwind CSS */
    color: #2d3748; /* Equivalent to text-gray-800 in Tailwind CSS */
  }

  .my_delete_button {
    font-size: 0.875rem; /* Equivalent to text-sm in Tailwind CSS */
    background-color: #e53e3e; /* Equivalent to bg-red-500 in Tailwind CSS */
    color: #fff; /* Equivalent to text-white in Tailwind CSS */
    padding-top: 0.25rem; /* Equivalent to py-1 in Tailwind CSS */
    padding-right: 0.5rem; /* Equivalent to px-2 in Tailwind CSS */
    padding-bottom: 0.25rem; /* Equivalent to py-1 in Tailwind CSS */
    padding-left: 0.5rem; /* Equivalent to px-2 in Tailwind CSS */
    border-radius: 0.375rem; /* Equivalent to rounded in Tailwind CSS */
    outline: none; /* Equivalent to focus:outline-none in Tailwind CSS */
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.5); /* Equivalent to focus:shadow-outline in Tailwind CSS */
  }
  .my_delete_button:hover {
    background-color: #fc8181; /* Equivalent to hover:bg-red-600 in Tailwind CSS */
  }
</style>
