import React, { useState, useEffect } from "react";
import { Frontend_URL } from "../../environment";
import { Link, useParams } from "react-router-dom";
import { PartnerSearchFilterAction } from "../../Redux/actions/PartnerAction";
import { useDispatch, useSelector } from "react-redux";

const Partner_products = () => {
  const dispatch = useDispatch();

  const { businesType } = useParams();
  const [searchParnterType, SetsearchParnterType] = useState("");

  const { PartnerSearchFilter } = useSelector(
    (state) => state.PartnerSearchFilterReducer
  );

  useEffect(() => {
    dispatch(PartnerSearchFilterAction(businesType));
  }, [businesType]);

  return (
    <div>
      <div
        className="main-containerabout"
        style={{
          backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="bgimage-contnet">
          <div className="container p-3  mx-auto ">
            <div className="toptextabout">
              <div className="image-textcontnet">
                <div className="center-sectioncontnet">
                  <p className="merorialtext">Memorial Information</p>
                  <h1 className="letus-text-contnet text-white">
                    <span className="land-text-contnet start-busines">
                      Memorial Venue Listing
                    </span>
                  </h1>
                  <p className="funeral-contnet mt-4">
                    Find the perfect memorial vendor for your memorial. Search
                    memorial reception vendor reviews and vendors in your area.
                  </p>
                </div>
                {/* <div className="learnmorebtn flex gap-2 mt-6"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8">
        <div className="main-containerpartner">
          <div class="container">
            <div className="main-productsshow flex gap-6">
              <div className="firstdivproducts">
                <div class="filter-sidebar">
                  <div class="col-md-12 form-title">
                    <h2 className="refineseach">Refine Your Search</h2>
                  </div>
                  <form>
                    <div class="col-md-12 form-group">
                      <label class="productlabel" for="venuetype">
                        Venue Type
                      </label>
                      <select
                        id="venuetype"
                        name="venuetype"
                        class="form-control"
                      >
                        <option value="">Select Venue</option>
                        <option value="Barn">Barn</option>
                        <option value="Boutique">Boutique</option>
                        <option value="Castle">Castle</option>
                        <option value="Country House">Country House</option>
                        <option value="Exclusive use">Exclusive use</option>
                        <option value="Garden weddings">Garden weddings</option>
                        <option value="Gay friendly">Gay friendly</option>
                        <option value="Gothic">Gothic</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Intimate">Intimate</option>
                        <option value="Manor House">Manor House</option>
                        <option value="Marquee">Marquee</option>
                        <option value="Minimalist">Minimalist</option>
                        <option value="Modern">Modern</option>
                        <option value="Outside Weddings">
                          Outside Weddings
                        </option>
                        <option value="Palace">Palace</option>
                        <option value="Private School">Private School</option>
                        <option value="Romantic">Romantic</option>
                        <option value="Small">Small</option>
                        <option value="Waterside">Waterside</option>
                        <option value="Weekend">Weekend</option>
                      </select>
                    </div>
                    <div class="col-md-12 form-group">
                      <label class="productlabel" for="capacity">
                        Capacity
                      </label>
                      <select
                        id="capacity"
                        name="capacity"
                        class="form-control"
                      >
                        <option value="">Select Capacity</option>
                        <option value="0 - 99">0 - 99</option>
                        <option value="100 - 199">100 - 199</option>
                        <option value="200 - 299">200 - 299</option>
                        <option value="300 - 399">300 - 399</option>
                        <option value="400+">60 - 500</option>
                      </select>
                    </div>

                    <div class="col-md-12 form-group rating">
                      <label class="productlabel">Select Rating </label>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="1"
                          class="checkboxstyledpro"
                        />
                        <label for="checkbox-0" class="control-label">
                          {" "}
                          <i class="fa fa-star ratingstar"></i>{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="2"
                          class="checkboxstyledpro"
                        />
                        <label for="checkbox-1" class="control-label">
                          {" "}
                          <i class="fa fa-star ratingstar"></i>{" "}
                          <i class="fa fa-star ratingstar"></i>{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="3"
                          class="checkboxstyledpro"
                        />
                        <label for="checkbox-2" class="control-label">
                          {" "}
                          <i class="fa fa-star ratingstar"></i>{" "}
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="4"
                          class="checkboxstyledpro"
                        />
                        <label for="checkbox-3" class="control-label">
                          {" "}
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="5"
                          class="checkboxstyledpro"
                        />
                        <label for="checkbox-4" class="control-label">
                          {" "}
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>
                          <i class="fa fa-star ratingstar"></i>{" "}
                        </label>
                      </div>
                    </div>
                    <div class="col-md-12 form-group">
                      <label class="productlabel">Amenities</label>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          id="weddinghall"
                          value="Wedding Hall"
                          class="checkboxstyledpro"
                        />
                        <label for="weddinghall" class="control-label">
                          {" "}
                          Wedding Hall{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="Dining"
                          class="checkboxstyledpro"
                        />
                        <label for="dining" class="control-label">
                          {" "}
                          Dining{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="Liability Insurance"
                          class="checkboxstyledpro"
                        />
                        <label for="insurance" class="control-label">
                          {" "}
                          Liability Insurance{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="In House Catering"
                          class="checkboxstyledpro"
                        />
                        <label for="catering" class="control-label">
                          {" "}
                          In House Catering{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="5"
                          class="checkboxstyledpro"
                        />
                        <label for="djfacilities" class="control-label">
                          {" "}
                          DJ Facilities{" "}
                        </label>
                      </div>
                      <div class="checkbox checkbox-success">
                        <input
                          type="checkbox"
                          name="checkbox"
                          value="Dance Foor"
                          class="checkboxstyledpro"
                        />
                        <label for="dancefloor" class="control-label">
                          {" "}
                          Dance Foor{" "}
                        </label>
                      </div>
                    </div>
                    <div class="px-4 py-2">
                      <button type="submit" class="sarchbuttonprodicts">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mainseconddivprodcts grid grid-cols-3 gap-6">
                {PartnerSearchFilter?.map((item) => (
                  <div class="vendor-box">
                    <div className="partnerdivpro">
                      <div class="vendor-image">
                        <a href="#">
                          {item?.user?.user_profile?.image ? (
                            <img
                              src={item?.user?.user_profile?.image}
                              alt="wedding venue"
                              class="img-responsive"
                            />
                          ) : (
                            <img
                              src="/img/yearly-list-page-fallback.png"
                              alt="wedding venue"
                              class="img-responsive"
                            />
                          )}
                        </a>
                        <div class="favourite-bg">
                          <a href="#" class="">
                            <i class="fa fa-heart"></i>
                          </a>
                        </div>
                      </div>
                      <div class="vendor-detail">
                        <div class="caption">
                          <h2>
                            <Link to="/products/detail" class="title">
                              Venue Vendor Title
                            </Link>
                          </h2>
                          <small> {item?.partner_type ?? "N/A"}</small>
                          <p class="location">
                            <i class="fa fa-map-marker addressvender"></i>{" "}
                            {item?.user?.user_profile?.address ?? "N/A"}
                          </p>
                          <div class="rating ">
                            {" "}
                            <i class="fa fa-star ratingstar"></i>{" "}
                            <i class="fa fa-star ratingstar"></i>{" "}
                            <i class="fa fa-star ratingstar"></i>{" "}
                            <i class="fa fa-star ratingstar"></i>{" "}
                            <i class="fa fa-star-o ratingstar"></i>{" "}
                            <span class="rating-count ">(22)</span>{" "}
                          </div>
                        </div>
                        <div class="vendor-price">
                          <div class="price">$390 - $600</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner_products;
