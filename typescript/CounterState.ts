interface CounterState{
    value :number,
    status : 'idle' | 'loading' | 'failed';
}
let a :CounterState = {
    value : 5,
    status: 'idle',
   
}
let another  = {
    value : 5,
    status: 'idle',
    other : 'Other'
};
console.log("A is ",a);