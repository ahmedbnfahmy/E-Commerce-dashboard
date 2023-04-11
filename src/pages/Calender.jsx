import React from 'react'
import { schedule } from '@syncfusion/ej2'
import { ScheduleComponent,ViewDirective,ViewsDirective,Inject,
  Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { DatePickerComponent } from 
'@syncfusion/ej2-react-calendars'
import {scheduleData} from '../data/dummy'
import{Header} from '../components'


export const  Calender =()=> {
  return (
    // <div> hello Calender</div>
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category ='App' title='Calender'/>
      <ScheduleComponent 
      height='450px'
      eventSettings={{dataSource:scheduleData}}
      selectedDate={new Date(2021,0,16)}
      >
<Inject services={[Day,Week,WorkWeek,Month,Agenda,Resize,DragAndDrop]}/>

      </ScheduleComponent>

    </div>
  )
}

export default Calender