/*

Given an object containing
counts of both upvotes and downvotes,
return what vote count should be displayed. 
This is calculated by subtracting the
number of downvotes from upvotes.

*/

function getVoteCount(obj){
     console.log(obj.upvotes-obj.downvotes)
}

getVoteCount({ upvotes: 13, downvotes: 0 }) // 13

getVoteCount({ upvotes: 2, downvotes: 33 }) // -31

getVoteCount({ upvotes: 132, downvotes: 132 }) // 0


