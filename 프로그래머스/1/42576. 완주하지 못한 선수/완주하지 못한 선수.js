function solution(participant, completion) {
    participant.sort();
    completion.sort();
    return participant.find((x, i) => x !== completion[i]);
}