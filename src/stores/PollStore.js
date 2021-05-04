import { writable } from 'svelte/store';
// const storedPolls = localStorage.getItem('polls');

let PollStore = writable([{
    id: 1,
    question: 'Dog or Cat?',
    answerA: 'Dog',
    answerB: 'Cat',
    votesA: 12,
    votesB: 26,
}, ]);

// const PollStore = writable(storedPolls);

export default PollStore;