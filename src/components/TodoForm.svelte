<script>
  import { addTodo } from "../stores/todoStore.js";
  let todo = "";
  const handleSubmit = () => {
    // console.log('Submitting...');
    if (todo === "") {
      todo = "";
      return alert("Please enter a todo as required!");
    }
    addTodo(todo);
    todo = "";
  };
</script>

<form class="myform" on:submit|preventDefault={handleSubmit}>
  <div class="my_div">
    <label for="todo" class="myLabel">Todo:</label>
    <input
      type="text"
      name="todo"
      bind:value={todo}
      placeholder="What's on your mind?"
      class="my_input"
    />
  </div>
  <button type="submit" class="my_submit_button">Add</button>
</form>

<style>
  .myform {
    margin-top: 1.5rem; /* Equivalent to my-6 in Tailwind CSS */
    margin-bottom: 1.5rem; /* Equivalent to my-6 in Tailwind CSS */
    margin-left: 0.75rem; /* Equivalent to mx-3 in Tailwind CSS */
    margin-right: 0.75rem; /* Equivalent to mx-3 in Tailwind CSS */
  }
  .my_div {
    display: flex; /* Equivalent to flex in Tailwind CSS */
    flex-direction: column; /* Equivalent to flex-col in Tailwind CSS */
    font-size: 0.875rem; /* Equivalent to text-sm in Tailwind CSS */
    margin-bottom: 0.5rem; /* Equivalent to mb-2 in Tailwind CSS */
  }
  .myLabel {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #2d3748;
  }
  .my_input {
    appearance: none; /* Equivalent to appearance-none in Tailwind CSS */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm in Tailwind CSS */
    border: 1px solid #e2e8f0; /* Equivalent to border and border-gray-200 in Tailwind CSS */
    padding: 0.5rem; /* Equivalent to p-2 in Tailwind CSS */
    outline: none; /* Equivalent to focus:outline-none in Tailwind CSS */
    border-color: #a0aec0; /* Equivalent to focus:border-gray-500 in Tailwind CSS */
    border-radius: 0.375rem;
  }
  .my_submit_button {
    width: 100%; /* Equivalent to w-full in Tailwind CSS */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm in Tailwind CSS */
    border-radius: 0.375rem; /* Equivalent to rounded in Tailwind CSS */
    background-color: #4299e1; /* Equivalent to bg-blue-500 in Tailwind CSS */
    color: #fff; /* Equivalent to text-white in Tailwind CSS */
    padding-top: 0.5rem; /* Equivalent to py-2 in Tailwind CSS */
    padding-right: 1rem; /* Equivalent to px-4 in Tailwind CSS */
    padding-bottom: 0.5rem; /* Equivalent to py-2 in Tailwind CSS */
    padding-left: 1rem; /* Equivalent to px-4 in Tailwind CSS */
    transition: background-color 0.3s ease; /* Hover effect */
  }
  .my_submit_button:hover {
    background-color: #3182ce; /* Equivalent to hover:bg-blue-600 in Tailwind CSS */
  }
</style>
