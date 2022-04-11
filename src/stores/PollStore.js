import { writable } from "svelte/store";
// const storedPolls = localStorage.getItem('polls');

let PollStore = writable([
  {
    id: 1,
    question: "Yay or Nay?",
    answerA: "Yay",
    answerB: "Nay",
    votesA: 1,
    votesB: 0,
  },
]);

// const PollStore = writable(storedPolls);

export default PollStore;
