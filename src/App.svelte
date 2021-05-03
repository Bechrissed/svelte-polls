<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import PollList from './components/PollList.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add new Polls'];
  let activeItem = 'Current Polls';

  let polls = [
    {
      id: 1,
      question: 'Dog or Cat?',
      answerA: 'Dog',
      answerB: 'Cat',
      votesA: 12,
      votesB: 26,
    },
  ];

  const tabChangeHandler = (e) => {
    activeItem = e.detail;
  };

  const addHandler = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = 'Current Polls';
  };

  const voteHandler = (e) => {
    const {id, option} = e.detail;

    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find(poll => poll.id == id);
    
    if(option === 'a'){
      upvotedPoll.votesA++;
    }
    if(option === 'b'){
      upvotedPoll.votesB++;
    }
    polls = copiedPolls;    
  }
</script>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={tabChangeHandler} />
  {#if activeItem === 'Current Polls'}
    <PollList {polls} on:vote={voteHandler} />
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
