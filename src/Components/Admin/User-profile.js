import React from "react";
import { Frontend_URL } from "../../environment";

const User_profile = () => {
  return (
    <div>
      <div>
        <div
          class="bg-no-repeat bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Frontend_URL}img/beautiful-church-.jpg)`,
          }}
        >
          <div class="p-4">
            <div class="flex justify-center self-center  z-10">
              <div class="">
                <div class="font-sans bg-grey-lighter p-8">
                  <div class="profile-card mx-auto bg-white rounded-lg shadow-lg">
                    <div
                      class="bg-cover h-40"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1522093537031-3ee69e6b1746?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a634781c01d2dd529412c2d1e2224ec0&auto=format&fit=crop&w=2098&q=80')",
                      }}
                    ></div>
                    <div class="border-b px-4 pb-6">
                      <div class="text-center sm:text-left sm:flex mb-4">
                        <img
                          class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                          src="https://randomuser.me/api/portraits/women/21.jpg"
                          alt=""
                        />
                        <div class="py-2">
                          <h3 class="font-bold text-2xl mb-1">
                            Cait Genevieve
                          </h3>
                          <div class="inline-flex text-grey-dark sm:flex items-center">
                            <svg
                              class="h-5 w-5 text-grey mr-1"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="24"
                              height="24"
                            >
                              <path
                                class="heroicon-ui"
                                d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                              />
                            </svg>
                            New York, NY
                          </div>
                        </div>
                      </div>
                      <div class="flex">
                        <button class="flex-1 rounded-full bg-blue text-white antialiased font-bold hover:bg-blue-dark px-4 py-2 mr-2">
                          Follow
                        </button>
                        <button class="flex-1 rounded-full border-2 border-grey font-semibold text-black px-4 py-2">
                          Message
                        </button>
                      </div>
                    </div>
                    <div class="px-4 py-4">
                      <div class="flex items-center text-grey-darker mb-4">
                        <svg
                          class="h-6 w-6 text-grey mr-1"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path
                            class="heroicon-ui"
                            d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
                          />
                        </svg>
                        <span>
                          <strong class="text-black">12</strong> Followers you
                          know
                        </span>
                      </div>
                    </div>
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

export default User_profile;
