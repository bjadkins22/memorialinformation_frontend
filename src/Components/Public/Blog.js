import React from "react";
import { Frontend_URL } from "../../environment";

const Blog = () => {
  return (
    <div>
      <div className="main-about-page">
        <div className="about-fixedimage">
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
                        <span className="land-text-contnet">Blog</span>
                      </h1>
                      <p className="funeral-contnet mt-4">Homepage / Blog us</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-blog-page">
            <div className="blog-page flex gap-4">
              <div className="blog-imagescontnet">
                <div className="memorial-blogimg">
                  <img src="/img/memrialflower.jpg" />
                  <div className="delivery-contnet">Delivery</div>
                </div>
                <div>
                  <div class="item-content">
                    <div class="entry-header">
                      <h3 class="entry-title">
                        Helping close a Friend in Grief Get Started with a
                        Beautiful Template
                      </h3>

                      <div className="admin-contnet">
                        <div className="icon-contnetitem">
                          <i class="fa fa-user common-icon-contnet"></i>
                          <span>Admin</span>
                        </div>
                        <div>|</div>
                        <div className="icon-contnetitem">
                          <i class="fa fa-calendar common-icon-contnet"></i>
                          <span>23 Apr 2019</span>
                        </div>
                        <div>|</div>

                        <div className="icon-contnetitem">
                          <i class="fa fa-comment common-icon-contnet"></i>
                          <span>Admin</span>
                        </div>
                      </div>
                    </div>
                    <div class="entry-content">
                      <p>
                        A friend has experienced the death of someone loved. You
                        want to help, but you are not sure how to go about it.
                        This article will guide you in ways to turn your cares
                        and concerns
                      </p>
                      <a
                        href="blog-single-right.html"
                        class="read-more btn-small btn btn-maincolor2"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-content-text">
                <div className="blogsearch">
                  <h1 className="serch-contnet mb-4">Search...</h1>
                  <div class="relative text-gray-600">
                    <input
                      type="search"
                      name="serch"
                      placeholder="Search"
                      class="searchblog-btn  bg-white h-10 px-6  w-full rounded-full text-sm focus:outline-none placeholder:text-black   placeholder:text-lg placeholder:font-normal"
                    />
                    <button
                      type="submit"
                      class="svgsearch absolute right-0 top-0 mt-3 mr-4"
                    >
                      <i class="fa fa-search search-iconsvg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
