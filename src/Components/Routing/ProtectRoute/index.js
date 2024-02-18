// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const { userData } = useSelector((state) => state.authReducer);

//   return userData ? children : <Navigate to="/login" />;
// }

// import React from "react";
// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const { userData } = useSelector((state) => state.authReducer);
//   const { SubscriptionCheck } = useSelector(
//     (state) => state.SubscriptionCheckReducer
//   );

//   // return userData ? (
//   //   userData?.user?.account_type == 1 && SubscriptionCheck?.payment_verified ? (
//   //     children
//   //   ) : (
//   //     <Navigate to="/plan" />
//   //   )
//   // ) : (
//   //   <Navigate to="/login" />
//   // );

//   return userData ? (
//     userData?.user?.account_type == 1 && SubscriptionCheck?.payment_verified ? (
//       children
//     ) : (
//       <Navigate to="/plan" />
//     )
//   ) : userData?.user?.account_type == 0 ||
//     userData?.user?.account_type == 3 ||
//     userData?.user?.account_type == 4 ? (
//     children
//   ) : (
//     <Navigate to="/login" />
//   );
// }

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { userData } = useSelector((state) => state.authReducer);
  const { SubscriptionCheck } = useSelector(
    (state) => state.SubscriptionCheckReducer
  );
  if (!userData) {
    return <Navigate to="/login" />;
  } else if (
    userData?.user?.account_type == 1 &&
    SubscriptionCheck?.payment_verified == false
  ) {
    return <Navigate to="/plan" />;
  } else {
    return children;
  }
}
