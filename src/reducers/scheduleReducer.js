import { FETCH_SCHEDULES, FETCH_SCHEDULES_ERROR } from '../actions/actionTypes';
import {schedule} from '../config';
export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_SCHEDULES:
        let allTimeSlot = action.payload.AvailableDates;
        let allSchedules = action.payload.bookedSlot;
        let newPayload=allTimeSlot.reduce((payload, item)=>{
            let data={}
            let allBookedSlots= allSchedules.filter((bookedItem)=>{
                return (bookedItem.date == item)
            })
            //there are sessions already booked on this date
            if(allBookedSlots.length < 2){
                data.date=item
                //reduce all available sessions (allAvail sessions - all booked sessions)
                let availableSessions = schedule.sessionPeriods.reduce((sessPayload, sItem)=>{
                    //filter out all used sessions
                    let allBookedSess= allBookedSlots.filter((bookedItem)=>{
                        return (bookedItem.slot == sItem.from)
                    })
                    if(allBookedSess.length == 0){
                        return sessPayload.concat(sItem)
                    }
                    return sessPayload;
                },[])

                data.AvailSession=availableSessions
                return payload.concat(data);
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
