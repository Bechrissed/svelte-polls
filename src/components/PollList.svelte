<script>
  // import { onDestroy } from 'svelte';
  import { db } from '../firebase';
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollDetails from './PollDetails.svelte';
  // import PollStore from '../stores/PollStore';

  let polls = [];

  db.collection('poll').onSnapshot((data) => {
    polls = data.docs;
  });

  // const unsubscribe = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <div out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
