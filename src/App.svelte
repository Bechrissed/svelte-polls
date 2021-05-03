<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add new Polls'];
  let activeItem = 'Current Polls';

  const tabChangeHandler = (e) => {
    activeItem = e.detail;
  };

  const addHandler = (e) => {
    activeItem = 'Current Polls';
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === 'Current Polls'}
    <PollList />
  {:else if activeItem === 'Add new Polls'}
    <CreatePollForm on:add={addHandler} />
  {/if}
</main>
<Footer />

<style>
  main {
    text-align: center;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
