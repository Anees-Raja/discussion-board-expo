export const fetcher = store => next => action => {
  if(action.type === 'FETCH'){
    console.log(action)
  }
}