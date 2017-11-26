import { FETCH_SCHEDULES, FETCH_SCHEDULES_ERROR } from '../actions/actionTypes';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SCHEDULES:
        let allTimeSlot = action.payload.AvailableDates;
        let allSchedules = action.payload.bookedSlot;
        let newPayload=allTimeSlot.reduce(function(payload, item){
            let allBookedSlots= allSchedules.filter((bookedItem)=>{
                return (bookedItem.date == item)
            })
            if(allBookedSlots.length < 2){
                return payload.concat(item);
            }
            else{
                return payload
            }
        },[])
        return { ...state, error: '', allSchedules: newPayload };
    case FETCH_SCHEDULES_ERROR:
        return { ...state, error: action.payload, allSchedules: '' };
    default: return {...state}
  }
}
