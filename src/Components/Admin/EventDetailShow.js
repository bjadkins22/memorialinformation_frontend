import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { EventsDetailShowbyIDAction } from "../../Redux/actions/EventsAction";
import { useDispatch, useSelector } from "react-redux";

const EventDetailShow = () => {
  const dispatch = useDispatch();
  const { eventId } = useParams();

  const { EventsDetailShowbyID } = useSelector(
    (state) => state.EventsDetailShowbyIDReducer
  );

  useEffect(() => {
    dispatch(EventsDetailShowbyIDAction(eventId));
  }, []);


  return (
    <div>
      <div className="card-legacydetailsshow">
        <div className="details-pageleg">
          <div className="lastupdated-date">
            <h6 className="team-name legacy-det">Event Details</h6>
          </div>

          <div>
            <div class="my-6">
              <h1 class="plan-ahed capitalize break-words">Title</h1>
              <p class="decisions-contnet capitalize break-words	">
            {EventsDetailShowbyID?.title}
              </p>
            </div>
            <div class="my-6">
              <h1 class="plan-ahed capitalize break-words">Event Date</h1>
              <p class="decisions-contnet capitalize break-words	">
              {EventsDetailShowbyID?.date}

              </p>
            </div>

            <div class="my-6">
              <h1 class="plan-ahed capitalize break-words">Description</h1>
              <p class="decisions-contnet capitalize break-words	">
              {EventsDetailShowbyID?.description}

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailShow;
