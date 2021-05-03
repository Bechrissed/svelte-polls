import { writable } from 'svelte/store';

let PollStore = writable([{
    id: 1,
    question: 'Dog or Cat?',
    answerA: 'Dog',
    answerB: 'Cat',
    votesA: 12,
    votesB: 26,
}, ]);

export default PollStore;