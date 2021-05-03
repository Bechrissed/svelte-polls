<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add new Polls'];
  let activeItem = 'Current Polls';
</script>

<Header />
<main>
  <Tabs {items} {activeItem} />
  <h1>Hello Bitch!</h1>
</main>
<Footer />

<style>
  main {
    text-align: center;
    max-width: 960px;
    margin: 40px auto;
  }
</style>
