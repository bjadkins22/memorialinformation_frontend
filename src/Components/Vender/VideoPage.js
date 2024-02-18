// import { ZIM } from "zego-zim-web";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import "webrtc-adapter";

// const VideoPage = () => {
//   const { userData } = useSelector((state) => state.authReducer);

//   const userID2 = userData?.user?.user_id?.toString();
//   const userName = userData?.user?.first_name;

//   const appID = 693708486;
//   const serverSecret = "b550eb9270392cdcc276bd2181fefe68";
//   const TOKEN = ZegoUIKitPrebuilt?.generateKitTokenForTest(
//     appID,
//     serverSecret,
//     null,
//     userID2,
//     userName
//   );
//   const zp = ZegoUIKitPrebuilt?.create(TOKEN);
//   zp?.addPlugins({ ZIM });

//   function invite() {
//     const targetUser = {
//       userID: 3,
//       userName: "sachin",
//     };
//     zp.sendCallInvitation({
//       callees: [targetUser],
//       callType: ZegoUIKitPrebuilt.InvitationTypeVideoCall,
//       timeout: 60,
//     })
//       .then((res) => {
//         console.log("successEnd", res);
//       })
//       .catch((err) => {
//         console.warn(err);
//       });
//   }

//   useEffect(() => {
//     if (navigator.mediaDevices) {
//       navigator.mediaDevices
//         .getUserMedia({ audio: true })
//         .then((stream) => {})
//         .catch((error) => {
//           console.error("Error accessing microphone:", error);
//         });
//     } else {
//       console.warn("navigator.mediaDevices is not available.");
//     }
//   }, []);

//   return (
//     <>
//       <div onClick={invite} className="btnpro">
//         <i className="fas fa fa-video-camera text-[#fff]"></i>
//         click here 
//       </div>
//     </>
//   );
// };

// export default VideoPage;



// import React, { useEffect } from "react";
// import { ZoomMtg } from "@zoomus/websdk";

// const ZoomComponent = () => {
//   useEffect(() => {
//     ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.1/lib", "/av");
//     ZoomMtg.preLoadWasm();
//     ZoomMtg.prepareJssdk();

//     const API_KEY = "YOUR_API_KEY";
//     const API_SECRET = "YOUR_API_SECRET";

//     ZoomMtg.init({
//       leaveUrl: "http://localhost:3000", // Your app's URL where users will return after leaving the Zoom meeting
//       isSupportAV: true,
//       success: () => {
//         ZoomMtg.join({
//           signature: "GENERATED_SIGNATURE", // Generate a signature on the server-side using your API Key and Secret
//           apiKey: API_KEY,
//           meetingNumber: "MEETING_NUMBER",
//           userName: "Your Name",
//           passWord: "MEETING_PASSWORD", // If your meeting requires a password
//           success: (success) => {
//             console.log(success);
//           },
//           error: (error) => {
//             console.log(error);
//           },
//         });
//       },
//       error: (error) => {
//         console.log(error);
//       },
//     });

//     return () => {
//       ZoomMtg.leaveMeeting({});
//     };
//   }, []);

//   return (
//     <div id="zmmtg-root" style={{ width: "100%", height: "100vh" }}>
//       Zoom Meeting
//     </div>
//   );
// };

// export default ZoomComponent;