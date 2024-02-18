import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PartnerSuggestionGetByIDAction } from "../../Redux/actions/PartnerAction";

function Partner_suggestion_Detail() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { PartnerPlatfromSuggestionGet } = useSelector(
    (state) => state.PartnerPlatfromSuggestionGetReducer
  );

  const { SuggestionId } = useParams();

  const { PartnerSuggestionGetByID } = useSelector(
    (state) => state.PartnerSuggestionGetByIDReducer
  );

  useEffect(() => {
    if (SuggestionId) {
      dispatch(PartnerSuggestionGetByIDAction(SuggestionId));
    }
  }, [SuggestionId]);

  const HnadleBack = () => {
    navigate(-1);
  };


  return (
    <>
      <div>
        <div className="">
          <div className="main-page-div bg-green-200">
            <h1 className="heading-top">Suggestion Details</h1>
            <div className="common-divbg bg-white">
              <div class="p-8">
                <div className="card-legacydetailsshow">
                  <div className="details-pageleg">
                    <div className="lastupdated-date">
                      <h6 className="team-name legacy-det">legacy accounts </h6>

                      <div>
                        <button
                          onClick={HnadleBack}
                          type="button"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                          Back
                        </button>
                      </div>
                    </div>

                    <div>
                      <div class="my-6">
                        <h1 class="plan-ahed capitalize break-words	">
                          Description
                        </h1>
                        <p class="decisions-contnet capitalize break-words	">
                          {PartnerSuggestionGetByID?.description ?? "N/A"}
                        </p>
                      </div>
                      <div class="my-6">
                        <h1 class="plan-ahed capitalize break-words	">
                          Category
                        </h1>
                        <p class="decisions-contnet capitalize break-words	">
                          {PartnerSuggestionGetByID?.category ?? "N/A"}
                        </p>
                      </div>
                      <div class="my-6">
                        <h1 class="plan-ahed capitalize break-words	">
                          Features
                        </h1>
                        <p class="decisions-contnet break-words">
                          {" "}
                          {PartnerSuggestionGetByID?.features ?? "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partner_suggestion_Detail;
