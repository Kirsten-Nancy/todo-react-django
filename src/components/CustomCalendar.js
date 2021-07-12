import { useState } from "react"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

const CustomCalendar = ({ chooseDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (date) => {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    setSelectedDate(date)
    chooseDate({ year: year, month: month, day: day })
  }
  return <Calendar onChange={handleDateChange} value={selectedDate} />
}

export default CustomCalendar
