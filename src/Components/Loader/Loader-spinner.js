import React from "react";
import "./Spinner.css";

export default function LoaderSpinner() {
  return (
    <>
      <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg--700 opacity-75 flex flex-col items-center justify-center">
        <div
          class="w-16 h-16 rounded-full animate-spin
                    border-4 border-dashed border-yellow-500 border-t-transparent mb-4"
        ></div>
        <h2 class="text-center text-black text-xl font-semibold">Loading...</h2>
      </div>
    </>
  );
}
