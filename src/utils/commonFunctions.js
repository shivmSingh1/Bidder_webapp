import moment from "moment"


export const getTimeDef=(endDate)=>{
if(!endDate){
    return "Please provide end date to get difference"
}
if(!moment(endDate).isValid()){
   return "invalid date"
}
if(moment(endDate).isBefore()){
    return "Date is in the past"
}

const now = moment()
// console.log(moment(endDate))
const duration = moment.duration(moment(endDate).diff(now))
const days = Math.floor(duration.asDays())   // total days
const hours = duration.hours()               // leftover hours
const minutes = duration.minutes()           // leftover minutes

return `${days}d ${hours}h`
}

