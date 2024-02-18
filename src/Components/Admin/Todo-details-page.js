import React, { useEffect } from "react";
import { FamilyTodoGetListByIdAction } from "../../Redux/actions/LegacyAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Todo_details_page = () => {
  const dispatch = useDispatch();
  const { todoId } = useParams();

  const { FamilyTodoGetListById } = useSelector(
    (state) => state.FamilyTodoGetListByIdReducer
  );

  useEffect(() => {
    if (todoId) {
      dispatch(FamilyTodoGetListByIdAction(todoId));
    }
  }, [todoId]);


  return (
    <div>
      <div className="">
        <div className="main-page-div bg-green-200">
          <h1 className="heading-top">Todo Detail</h1>
          <div className="common-divbg bg-white">
            <section class="text-gray-700 body-font overflow-hidden bg-white">
              <div class="main-details-pagetodo">
                <div class=" lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h1 class="plan-ahed detailspage capitalize break-words mb-2">
                    {FamilyTodoGetListById?.title ?? "N/A"}
                  </h1>
                  <p class="decisions-contnet detailspage description-11 capitalize break-words">
                    {FamilyTodoGetListById?.description ?? "N/A"}
                  </p>
                  <p class="decisions-contnet detailspage description-11 capitalize break-words">
                    {FamilyTodoGetListById?.status ?? "N/A"}
                  </p>
                  <p class="decisions-contnet detailspage description-11 capitalize break-words">
                    {FamilyTodoGetListById?.date ?? "N/A"}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo_details_page;
