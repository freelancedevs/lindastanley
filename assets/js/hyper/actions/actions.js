
var reviewLeft = function  (state, actions) {
  return (
    {reviewStatus:{
      currentReview: state.reviewStatus.currentReview - 1
    }}
  )
}

var reviewRight = function  (state, actions) {
  return (
    {reviewStatus:{
      currentReview: state.reviewStatus.currentReview + 1
    }}
  )
}


  



export const actions = {
  reviewLeft,
  reviewRight,
 
  
}
