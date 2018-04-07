export const SET_CAL = 'SET_CAL'

const setCalendarEvents = (data) => ({
  type: SET_CAL,
  data
}) 

//gotta pass UID to this.
export const fetchCalendarEvents = (userAccessToken) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_CAL' })
    let cal_ids = await fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', { headers: { Authorization: `Bearer ${userAccessToken}`} })
    let cal_ids_res = await cal_ids.json()
    let cal_ids_array = await cal_ids_res.items
    let cal_events = await cal_ids_array.forEach((obj) => {
      fetch(`https://www.googleapis.com/calendar/v3/calendars/${obj.id}/events`, { headers: { Authorization: `Bearer ${userAccessToken}`} })
        .then((res) => res.json())
        .then((data) => {
          let events = data.items
          let fetches = 0
          if(fetches < 3){
            fetches++
          }else{ 
            console.log(fetches)
            return events
          }
        })
    })
  dispatch(setCalendarEvents(cal_events))
  }
}