<script>
  import { db } from '../firebase';
  import { createEventDispatcher } from 'svelte';
  import Button from '../shared/Button.svelte';
  import PollStore from '../stores/PollStore';

  let dispatch = createEventDispatcher();
  let fields = { question: '', answerA: '', answerB: '' };
  let errors = { question: '', answerA: '', answerB: '' };
  let valid = false;

  const submitHandler = () => {
    valid = true;

    // validating question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Voer een vraag van minimaal 5 karakters in';
    } else {
      errors.question = '';
    }

    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'Antwoord mag niet leeg zijn.';
    } else {
      errors.answerA = '';
    }

    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'Antwoord mag niet leeg zijn.';
    } else {
      errors.answerB = '';
    }

    if (valid) {
      let poll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        // id: Math.random(),
      };

      db.collection('poll').add(poll);

      // PollStore.update((curPolls) => {
      //   return [poll, ...curPolls];
      // });

      dispatch('add');
    }
  };
</script>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll vraag: </label>
    <input bind:value={fields.question} type="text" id="question" />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Antwoord A: </label>
    <input bind:value={fields.answerA} type="text" id="answer-a" />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Antwoord B: </label>
    <input bind:value={fields.answerB} type="text" id="answer-b" />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button inverse>Poll toevoegen</Button>
</form>

<style>
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 500px) {
    form {
      margin: 0 30px;
      text-align: center;
    }
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
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #13ca91;
  }
</style>
