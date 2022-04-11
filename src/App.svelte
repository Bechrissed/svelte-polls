<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Actieve polls', 'Nieuwe poll'];
  let activeItem = 'Actieve polls';

  const tabChangeHandler = (e) => {
    activeItem = e.detail;
  };

  const addHandler = () => {
    activeItem = 'Actieve polls';
  };
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === 'Actieve polls'}
    <PollList />
  {:else if activeItem === 'Nieuwe poll'}
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
