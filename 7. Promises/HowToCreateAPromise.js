//Promise object is native to javascript
//If it is native to javascript, it is synchronous in nature
//Hence, the creation of promise object is synchronous in nature
// A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

// Any Promise object is in one of three mutually exclusive states: fulfilled, rejected, and pending:

// A promise p is fulfilled if p.then(f, r) will immediately enqueue a Job to call the function f.
// A promise p is rejected if p.then(f, r) will immediately enqueue a Job to call the function r.
// A promise is pending if it is neither fulfilled nor rejected.
// A promise is said to be settled if it is not pending, i.e. if it is either fulfilled or rejected.

// A promise is resolved if it is settled or if it has been “locked in” to match the state of another promise. Attempting to resolve or reject a resolved promise has no effect. A promise is unresolved if it is not resolved. An unresolved promise is always in the pending state. A resolved promise may be pending, fulfilled or rejected.

//The three states:
//1. Pending => When we create a new promise object, this is the default state. It represents the work in progress.
//The state can migrate from pending to either of below states
//2. Fulfilled => If the opeartion is completed succesfully
//3. Rejected => If the operation waas not succesfull, then it will go on rejected state
