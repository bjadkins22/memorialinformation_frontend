import React, { useState, useEffect } from "react";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  EventsDeleteAction,
  EventsListGetAction,
} from "../../Redux/actions/EventsAction";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { FamilyTodoListShowAction } from "../../Redux/actions/LegacyAction";

const localizer = momentLocalizer(moment);

function Partner_Active_contract() {
  const dispatch = useDispatch();

  const { EventsListGetList, success } = useSelector(
    (state) => state.EventsListGetReducer
  );

  const { success: deletesuccess } = useSelector(
    (state) => state.EventsDeleteReducer
  );

  useEffect(() => {
    dispatch(EventsListGetAction());
  }, [deletesuccess]);

  const [usersForRender, setUsersForRender] = useState([]);

  useEffect(() => {
    let userData = [];
    EventsListGetList?.map((item, index) => {
      item.title = item.title;
      item.date = item.date;
      item.description = item.description.slice(0, 30) + "...";

      //   item.status = (
      //     <div className="flex">
      //       {item.status ? (
      //         <span className=" text-xs py-1 px-3 leading-none text-center whitespace-nowrap align-baseline font-medium bg-green-200 text-green-600 rounded-full">
      //           Active
      //         </span>
      //       ) : (
      //         <span className="text-xs py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-medium bg-red-200 text-red-600 rounded-full">
      //           Inactive
      //         </span>
      //       )}
      //     </div>
      //   );

      item.action = (
        <div className="flex text-lg">
          <Link
            title="edit"
            className="EditBut editAdminButton"
            to={`/add-blogs/${item.id}`}
          >
            <i className="fas fa-pencil pr-2 text-blue-500 "></i>
          </Link>
          <div className="flex">
            <button
              title="delete"
              className="deletebutt"
              onClick={() => deleteHandler(item.id)}
            >
              <i className="fa fa-trash text-red-500"></i>
            </button>
          </div>
        </div>
      );
      userData.push(item);
    });

    setUsersForRender(userData);
  }, [EventsListGetList]);

  const data = {
    columns: [
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 500,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 500,
      },
      {
        label: "date",
        field: "date",
        sort: "asc",
        width: 500,
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: usersForRender,
  };

  const deleteHandler = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this event?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(EventsDeleteAction(id));
        swal({
          title: "",
          text: "Successfully Deleted!",
          className: "successAlert",
          icon: "/img/Memorial icon.png",
          buttons: false,
          timer: 1500,
        });
      }
    });
  };

  const [tooltipEvent, setTooltipEvent] = useState(null);

  const events = EventsListGetList?.map((event) => ({
    id: event.id,
    title: event.title,
    start: moment(event.date).toDate(),
    end: moment(event.date).toDate(),
    description: event.description,
  }));

  const handleEventMouseOver = (event) => {
    setTooltipEvent(event);
  };

  const handleEventMouseOut = () => {
    setTooltipEvent(null);
  };

  const { FamilyTodoListShow } = useSelector(
    (state) => state.FamilyTodoListShowReducer
  );

  const { success: Tododeletesuccess } = useSelector(
    (state) => state.FamilyTodoDeleteListReducer
  );

  useEffect(() => {
    dispatch(FamilyTodoListShowAction());
  }, [Tododeletesuccess]);

  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Actice Contacts</h1>
            <div className="common-divbg bg-white">
              <div className="Topallpage AllPageHight Custompage">
                {/* <div className="addevent-detailscalendar">
                  <Link to="/events">
                    <button className="add-event-showtab">Add Event</button>
                  </Link>
                </div> */}

                <div>
                  <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    onSelectEvent={handleEventMouseOver}
                    onDrillDown={handleEventMouseOut}
                    onSelectSlot={handleEventMouseOut}
                    components={{
                      event: ({ event }) => (
                        <div>
                          <strong>
                            <Link to={`/events-detail/${event.id}`}>
                              {event.title}
                            </Link>
                          </strong>
                        </div>
                      ),
                    }}
                  />
                  {tooltipEvent && (
                    <div className="event-tooltip">
                      <strong>{tooltipEvent.title}</strong>
                      <p>{tooltipEvent.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner_Active_contract;
