export const handleCancel = store => next => action => {
  next(action)

  if(action.type === 'CANCEL'){
    store.dispatch({
      type: Navigation/GOBACK
    })
  }
}