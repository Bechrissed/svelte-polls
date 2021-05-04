<script>
  // import { onDestroy } from 'svelte';
  import { fade, slide, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import PollDetails from './PollDetails.svelte';
  import PollStore from '../stores/PollStore';

  // export let polls = [];

  // const unsubscribe = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
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
