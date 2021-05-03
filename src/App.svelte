<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add new Polls'];
  let activeItem = 'Current Polls';

  const tabChangeHandler = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === 'Current Polls'}
    <p>Current Polls</p>
  {:else if activeItem === 'Add new Polls'}
    <CreatePollForm />
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
