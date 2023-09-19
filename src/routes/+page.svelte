<script>
    // @ts-nocheck
    import TodoForm from '../components/TodoForm.svelte';
    import Todo from '../components/Todo.svelte';
    import { todos } from '../stores/todoStore.js';
</script>

<main>
    <h1 class="my_heading">Todo App</h1>
    <TodoForm />
    {#each $todos as todo}
        <Todo {todo} index={todo.id} />
    {/each}
</main>


<style>
 .my_heading {
    
  font-size: 1.5rem; /* Equivalent to text-2xl in Tailwind CSS */
  font-weight: bold; /* Equivalent to font-bold in Tailwind CSS */
  text-align: center; /* Equivalent to text-center in Tailwind CSS */
  color: #333; /* Equivalent to text-gray-800 in Tailwind CSS */

 }
 @media (min-width: 768px) {
  .my_heading {
    font-size: 2rem; /* Adjust font size for md:text-3xl */
  }
}
</style>