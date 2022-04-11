<script>
  export let type = 'primary';
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot />
</button>

<style>
  button {
    cursor: pointer;
    border: 0;
    padding: 8px 12px;
    border-radius: 6px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }
  .primary {
    background-color: #13ca91;
    color: white;
  }

  .secondary {
    background-color: #45c49c;
    color: white;
  }
  .flat {
    box-shadow: none;
  }
  .primary.inverse {
    color: #13ca91;
    background-color: white;
    border: 2px solid #13ca91;
  }
  .secondary.inverse {
    color: #45c49c;
    background-color: white;
    border: 2px solid #45c49c;
  }
</style>
