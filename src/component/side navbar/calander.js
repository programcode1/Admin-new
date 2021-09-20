import React ,{useEffect , useRef} from 'react'
import './calander.css'
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin,{Draggable} from '@fullcalendar/interaction';
function Calendar_event(){
	var date = new Date();

    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
   	console.log(window.location.pathname)

    function dropablefuntion(date,allDay){	// this function is called when something is dropped
    		// retrieve the dropped element's stored Event Object
    		var originalEventObject = $(this).data('eventObject');

    		// we need to copy it, so that multiple events don't have a reference to the same object
    		var copiedEventObject = $.extend({},originalEventObject);
    		// assign it the date that was reported
            copiedEventObject.start = date;
            copiedEventObject.allDay = allDay;

            // render the event on the calendar
            // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
            $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
            if ($('#drop-remove').is(':checked')) {
                // if so, remove the element from the "Draggable Events" list
                $(this).remove();
           }

            
    }

    useEffect(()=>{
     	$('#external-events .fc-h-event').each(function(){
     		var eventObject = {
     			title : $.trim($(this).text()) // use the element's text as the event title
     		}
     		//store the Event object in the dom element so we can go
     		$(this).data('eventObject',eventObject);

     		//make the envet draggable using jquery ui
     		$(this).draggable({
     			zIndex:999,
     			revert:true,// will cause the event to go back to its
                revertDuration: 0 //  original position after the drag
     		})
     	})
     })	
	return (
		<div className='bg-color-body'> 
			<div className='container text-white'>

				<h5 className='py-3 font-22'>Typography</h5>
				<div className='row bg-color calendar'>
					<div className='col-md-2 mt-5 text-center'>
						<div className='form-input mb-3'>
							<h3 className='mb-4'>Created Events</h3>
							<input type='text'  placeholder='Add new event..' className='form-control mx-3'/>
						</div>
						<div id='external-events' className='m-2'>
							<h3 className='mb-4'>Draggable Events</h3>
							<div className='mb-2 fc-h-event'>My Event1</div>
							<div className='mb-2 fc-h-event'>My Event2</div>
							<div className='mb-2 fc-h-event'>My Event3</div>
							<div className='mb-2 fc-h-event'>My Event4</div>
							<p>
								<input type='checkbox' className="form-check-input" id='drop-remove'/>
								<label className='text-muted mx-1 mt-1' for='drop-remove'>remove after drop</label>

							</p>	
						</div>
					</div>
					<div className='col-md-10 p-4'>
						<div id='calendar' >
							<FullCalendar
								plugins = {[dayGridPlugin , interactionPlugin]}
								editable = {true}
								initialView = 'dayGridMonth'
								headerToolbar={{
								    left: 'prev,next today',
								    center: 'title',
								    right: 'dayGridMonth,dayGridWeek,dayGridDay'
								  }}
								 
								  events={[
								  	{
				                    title: 'All Day Event',
				                    start: new Date(y, m, 1)
				                    },
								   {
				                        title: 'Long Event',
				                        start: new Date(y, m, d-5),
				                        end: new Date(y, m, d-2)
				                    },
				                    {
				                        id: 999,
				                        title: 'Repeating Event',
				                        start: new Date(y, m, d-3, 16, 0),
				                        allDay: false
				                    },
				                    {
				                        id: 999,
				                        title: 'Repeating Event',
				                        start: new Date(y, m, d+4, 16, 0),
				                        allDay: false
				                    },
				                    {
				                        title: 'Meeting',
				                        start: new Date(y, m, d, 10, 30),
				                        allDay: false
				                    },
				                    {
				                        title: 'Lunch',
				                        start: new Date(y, m, d, 12, 0),
				                        end: new Date(y, m, d, 14, 0),
				                        allDay: false
				                    },
				                    {
				                        title: 'Birthday Party',
				                        start: new Date(y, m, d+1, 19, 0),
				                        end: new Date(y, m, d+1, 22, 30),
				                        allDay: false
				                    },
				                    {
				                        title: 'Click for Google',
				                        start: new Date(y, m, 28),
				                        end: new Date(y, m, 29),
				                        url: 'http://google.com/'
				                    }
								  ]}
								  droppable = {true}  // this allows things to be dropped onto the calendar !!!
								 drop = {dropablefuntion}
								 
								/>
						</div>
					</div>
				</div>
			</div>
		</div>
		)
}
export default Calendar_event;