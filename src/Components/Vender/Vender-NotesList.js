import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import {
  VenderNotesDeleteAction,
  VenderNotesListAction,
  VenderProdcutDeleteAction,
  VenderdProdcutListAction,
} from "../../Redux/actions/VenderAction";
import tinycolor from "tinycolor2";
import moment from "moment";

const Vender_NotesList = () => {
  const dispatch = useDispatch();

  const { VenderNotesList } = useSelector(
    (state) => state.VenderNotesListRecuer
  );

  const { success } = useSelector((state) => state.VenderNotesDeleteReducer);

  useEffect(() => {
    dispatch(VenderNotesListAction());
  }, [success]);

  const DeleteNote = (id) => {
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this Note?",
      className: "errorAlert",
      icon: "/img/Memorial icon.png",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(VenderNotesDeleteAction(id));
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

  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  const getRandomLightColor = () => {
    const letters = "0123456789ABCDEF";
    const randomColor =
      "#" + (Math.random().toString(16) + "000000").slice(2, 8);
    const lightenedColor = tinycolor(randomColor).lighten(20).toString(); // Adjust the percentage as needed
    return lightenedColor;
  };

  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Notes List</h1>
        <div className="common-divbg bg-white">
          <div className="addevent-detailscalendar mb-6">
            <Link to="/vender/notes">
              <button className="add-event-showtab">Add Note</button>
            </Link>
          </div>

          <div className="">
            <div className="grid grid-cols-4 gap-4">
              {VenderNotesList?.map((note, index) => (
                <div
                  key={index}
                  className="w-full flex flex-col justify-between rounded-lg border mb-6 py-5 px-4"
                  style={{ backgroundColor: getRandomLightColor() }}
                >
                  <div>
                    <h2 class="productname mb-2  ">
                      {note?.title?.length > 20
                        ? note?.title?.slice(0, 20) + "..."
                        : note?.title}
                    </h2>

                    <p class="productdescription mb-2 text-base dark:text-gray-300 text-gray-700">
                      {note?.content?.length > 50
                        ? note?.content?.slice(0, 50) + "..."
                        : note?.content}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 justify-between text-gray-800">
                      <p className="text-sm">
                        {" "}
                        {moment(note?.created_at).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </p>
                      <button
                        onClick={() => DeleteNote(note.id)}
                        className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                        aria-label="edit note"
                        role="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                      <Link to={`/vender/notes/${note.id}/`}>
                        <button
                          className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-pink-300 focus:ring-black"
                          aria-label="edit note"
                          role="button"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-pencil"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5"></line>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vender_NotesList;
