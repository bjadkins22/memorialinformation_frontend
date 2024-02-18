export const firstName = (value) => {
  if (!value) return "First name is required";

  // if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
  //   return "First Name can only contain characters";

  return null;
};

export const lastName = (value) => {
  if (!value) return "Last name is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "Last Name can only contain characters ";

  return null;
};

export const username = (value) => {
  if (!value) return "Username is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "Username can only contain characters";

  return null;
};

export const fullname = (value) => {
  if (!value) return "Full Name is required";

  if (!value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g))
    return "FullName can only contain characters";

  return null;
};

export const role = (value) => {
  if (!value) return "Role type is required";

  return null;
};




export const email = (value) => {
  if (!value) return "Email is required";

  if (
    !value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    return "Email is not valid";

  return null;
};

export const mobileNumber = (mobile) => {
  // const mobileRegex = /^(?:\+?1)?[2-9]\d{0,12}$/;

  const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10,}$/;

  // const mobileRegex2 = /^(\+\d{1,3}[- ]?)?\d{10}$/;

  if (!mobile) {
    return "Phone Number is required";
  }

  if (!mobileRegex.test(mobile)) {
    return "Phone Number is not valid";
  }

  return null;
};

export const telePhoneNumber = (mobile) => {
  const mobileRegex = /^123\d{8}$/;

  if (!mobile) {
    return "Phone Number is required";
  }

  if (!mobileRegex.test(mobile)) {
    return "Phone Number is not valid";
  }

  return null;
};

export const socialMediaLink = (value) => {
  if (value) return;

  if (
    !String(value).match(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9]+\.[a-zA-Z]{2,}(\/\S*)?$/
    )
  )
    return "Please enter a valid social media URL";

  return null;
};
export const oldpassword = (value) => {
  if (!value) return "Password is required";

  return null;
};
export const password = (value) => {
  if (!value) return "Password is required";
  // if (value.length < 7) return "Atleast 7 characters required";
  return null;
};

export const confirmPassword = (password, confirmPassword) => {
  if (!password) return "Confirm Password is required";
  if (password !== confirmPassword) return "Passwords do not match";
  return null;
};

export const partner_type = (value) => {
  if (!value) return "Partner type is required";

  return null;
};

export const bank_account_number = (value) => {
  if (!value) return "Bank Account Number is required";

  return null;
};
export const gst_number = (value) => {
  if (!value) return "Gst Number is required";

  return null;
};
export const company_name = (value) => {
  if (!value) return "company Name is required";

  return null;
};

export const Partnerrequest = (value) => {
  if (!value) return "This filed is required";

  return null;
};



export const RequiredFiled = (value) => {
  if (!value) return "This filed is required";

  return null;
};

