<script>
  import Button from '../shared/Button.svelte';
  let fields = { question: '', answerA: '', answerB: '' };

  const submitHandler = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question: </label>
    <input bind:value={fields.question} type="text" id="question" />
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A: </label>
    <input bind:value={fields.answerA} type="text" id="answer-a" />
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B: </label>
    <input bind:value={fields.answerB} type="text" id="answer-b" />
  </div>
  <Button inverse>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
</style>
