// import React, { useEffect } from 'react';
// import { ZoomMtg } from '@zoomus/websdk';


// const Meeting = () => {
//   useEffect(() => {
//     // Initialize Zoom SDK
//     ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.1/lib', '/av');
//     ZoomMtg.preLoadWasm();
//     ZoomMtg.prepareJssdk();

//     const apiKey = 'YOUR_API_KEY';
//     const meetingNumber = 'MEETING_ID';
//     const userName = 'Your Name';
//     const passWord = 'MEETING_PASSWORD';

//     ZoomMtg.init({
//       leaveUrl: 'YOUR_LEAVE_URL',
//       isSupportAV: true,
//       success: function () {
//         ZoomMtg.join({
//           signature: 'MEETING_SIGNATURE',
//           apiKey: apiKey,
//           meetingNumber: meetingNumber,
//           userName: userName,
//           passWord: passWord,
//           error: function (res) {
//           },
//         });
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <div className='thtntnntntnt' id="zmmtg-root"></div>
//     </div>
//   );
// };

// export default Meeting;


import React from 'react'

const Meeting = () => {
  return (
    <div>Meeting</div>
  )
}

export default Meeting
