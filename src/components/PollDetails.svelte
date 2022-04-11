<script>
  import { db } from '../firebase';
  import { tweened } from 'svelte/motion';
  import Card from '../shared/Card.svelte';
  // import Button from '../shared/Button.svelte';
  // import PollStore from '../stores/PollStore';

  export let poll;

  $: totalVotes = poll.data().votesA + poll.data().votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.data().votesA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.data().votesB) || 0;

  // tweened percentages
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  const voteHandler = (option, id) => {
    // PollStore.update((curPoll) => {
    //   let copiedPolls = [...curPoll];
    //   let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

    //   if (option === 'a') upvotedPoll.votesA++;

    //   if (option === 'b') upvotedPoll.votesB++;

    //   return copiedPolls;
    // });

    if (option === 'a') {
      let vote = poll.data().votesA + 1;
      console.log(vote);
      db.collection('poll').doc(id).update({
        votesA: vote,
      });
    }

    if (option === 'b') {
      let vote = poll.data().votesB + 1;
      db.collection('poll').doc(id).update({
        votesB: vote,
      });
    }
  };

  // const deleteHandler = (id) => {
  //   db.collection('poll').doc(id).delete();
  //   //   PollStore.update((curPoll) => {
  //   //     return curPoll.filter((poll) => poll.id != id);
  //   //   });
  // };
</script>

<Card>
  <div class="poll">
    <h3>
      {poll.data().question}
    </h3>
    <p>Totaal aantal stemmen: {totalVotes}</p>
    <div class="answer" on:click={() => voteHandler('a', poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%" />
      <span>
        {poll.data().answerA} ({poll.data().votesA})
      </span>
    </div>
    <div class="answer" on:click={() => voteHandler('b', poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%" />
      <span>
        {poll.data().answerB} ({poll.data().votesB})
      </span>
    </div>
  </div>
  <!-- <div class="delete">
    <Button flat on:click={() => deleteHandler(poll.id)}>Delete</Button>
  </div> -->
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid #e4254b;
    background-color: rgba(217, 27, 66, 0.4);
  }
  .percent-b {
    border-left: 4px solid #45c496;
    background-color: rgba(69, 196, 66, 0.4);
  }

  /* .delete {
    margin-top: 30px;
    text-align: center;
  } */
</style>
