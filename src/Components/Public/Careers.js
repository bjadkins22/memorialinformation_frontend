import React, { useEffect, useState } from "react";
import { Frontend_URL } from "../../environment";
import swal from "sweetalert";
import {
  AdminGetAllJobAction,
  UserSendJobInqueryAction,
} from "../../Redux/actions/SuperAdminAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Careers = () => {
  const dispatch = useDispatch();

  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [message, setmessgae] = useState("");
  const [cv_upload, setcv_upload] = useState("");
  const [rerender, setRerender] = useState(false);

  const {
    success,
    error,
    message: successMessage,
  } = useSelector((state) => state.UserSendJobInqueryReducer);

  const { AdminGetAllJob } = useSelector(
    (state) => state.AdminGetAllJobReducer
  );

  const { success: deleteSuccess } = useSelector(
    (state) => state.AdminDeleteJobReducer
  );

  useEffect(() => {
    dispatch(AdminGetAllJobAction());
  }, []);

  const handleSubmit = () => {
    // Validation
    if (
      !first_name ||
      !last_name ||
      !email ||
      !phone_number ||
      !cv_upload ||
      !message
    ) {
      swal({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all the required fields.",
      });
      return;
    }

    const formdata = new FormData();
    formdata.append("first_name", first_name);
    formdata.append("last_name", last_name);
    formdata.append("email", email);
    formdata.append("phone_number", phone_number);
    formdata.append("message", message);
    formdata.append("cv_upload", cv_upload);

    dispatch(UserSendJobInqueryAction(formdata));
    setRerender(true);
  };

  const handleAddCv = (event) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type === "application/pdf") {
        setcv_upload(file);
      } else {
        swal({
          icon: "error",
          title: "Invalid File Type",
          text: "Please upload a PDF file.",
        });

        event.target.value = null;
      }
    }
  };

  useEffect(() => {
    if (success && rerender) {
      swal({
        title: "",
        text: successMessage,
        className: "successAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 5000,
      });
      setemail("");
      setfirst_name("");
      setlast_name("");
      setmessgae("");
      setphone_number("");
      setcv_upload("");

      setRerender(false);
    }
    if (error && rerender) {
      swal({
        title: "Error",
        text: error,
        className: "errorAlert",
        icon: "/img/Memorial icon.png",
        buttons: false,
        timer: 2000,
      });
      setRerender(false);
    }
  }, [success, error, rerender]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="main-about-page">
        <div className="about-fixedimage">
          <div
            className="main-containerabout"
            style={{
              backgroundImage: `url(${Frontend_URL}img/human-resources-concept.jpg)`,
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
                        <span className="land-text-contnet">Careers</span>
                      </h1>
                      <p className="funeral-contnet mt-4">Homepage / Careers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container my-12">
            <div>
              <h1 className="whychooseusess">Why Join uS?</h1>
              <p className="betterwhychooseus">
                Are you passionate about helping others? Are you looking for a
                true leadership opportunity to develop a collaborative and
                highly productive team? Do you have a keen ability to establish,
                nurture, and amplify professional relationships with various
                meaningful collaborators? Additionally, are you looking for an
                excellent opportunity to be well compensated for growing,
                managing, and expanding your book of business?
              </p>
              <p className="betterwhychooseus">
                If you save YES to these questions, then Memorial Information
                can be the perfect opportunity for your next career move.
                Memorial Information believes in helping families build and
                materially sustain generational legacies. This is not only for
                the users of our platform, but this applies to our Partners,
                Vendors, Affiliates, and especially our employees. We strongly
                believe in providing opportunities for our team members to
                flourish, make significant contributions, create unbreakable
                ties, and be compensated what you are actually worth in the
                process.
              </p>
              <p className="betterwhychooseus">
                Our employees are not just generic workers, we pride ourselves
                on being Loved-Ones who understand and sympathize with families
                facing the ultimate transition for their loved-ones. Our team
                members work collaboratively with Families, Partners, Vendors,
                Affiliates, and other end-of-life care teams to deliver
                compassionate leadership to facilitate a seamless final
                transition of life and far beyond.
              </p>
              <p className="betterwhychooseus">
                Memorial Information has developed a nationwide network of
                highly motivated and MI Certified Professionals and we would
                love to have you join our team. Our team members are go-getters,
                self-starters, collaborators, innovators, solution-oriented
                doers, engagers, motivators, leaders, sympathizers, creators,
                high-achievers, and most of all efficacious professionals. We
                promote from within. So our MI leadership knows exactly how to
                grow, develop, and succeed in this marketplace and are excited
                to help you do the same.
              </p>

              <p className="betterwhychooseus">
                Our local, national, and corporate offices have a variety of
                positions. But we are only looking for true leaders and
                facilitators who are ready to learn, build relationships, and
                grow financially, professionally, and personally. So if this
                resonates with you and you are looking for a career that will
                support your growth, legacy, and prosperity, then apply for one
                or more of our available positions. Our networks of offices,
                professionals, partners, vendors, affiliates, and leaders are
                expanding fast, so don’t wait, create your profile and apply
                now.
              </p>
            </div>
            <div class="my-6">
              <h1 className="whychooseusess">Current Openings</h1>
            </div>
            <div class="grid grid-cols-4 gap-6 flex justify-center mt=3">
              {AdminGetAllJob?.map((item) => (
                <div className="jobtitleadd ">
                  <Link
                    className="jobapplylinkadd"
                    to={`/job/apply/${item.id}`}
                  >
                    <div className="text-center">
                      <i class="fa fa-briefcase jobiconshow"></i>
                      <h1 className="developeradd uppercase">{item?.title}</h1>
                    </div>

                    <div>
                      <h2 className="yearnaccount">
                        (
                        <span className="salaryrangedsc">
                          {item?.salary_range}
                        </span>
                        ){item?.location}
                      </h2>
                    </div>
                  </Link>

                  <div className="">
                    <div>
                      <Link to={`/job/apply/${item.id}`}>
                        <button className="applaybuttonshow">Apply Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="container py-20">
              <div class=" max-w-2xl">
                <h1 className="whychooseusess">
                  Nothing for you ? Send your CV
                </h1>
                <div class="job-info py-2 mb-5">
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <input
                        value={first_name}
                        onChange={(e) => setfirst_name(e.target.value)}
                        type="text"
                        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="First Name"
                      />
                    </div>

                    <div>
                      <input
                        value={last_name}
                        onChange={(e) => setlast_name(e.target.value)}
                        type="text"
                        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Last Name"
                      />
                    </div>
                    <div>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="text"
                        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        value={phone_number}
                        onChange={(e) => setphone_number(e.target.value)}
                        type="text"
                        class="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>

                  <div class="mb-4 md:mb-0">
                    <label
                      for="company-logo"
                      class="block text-gray-700 text-sm mb-2"
                    >
                      Upload your CV*
                    </label>
                    <input
                      onChange={handleAddCv}
                      type="file"
                      phone_number
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                  </div>

                  <div>
                    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                      <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                        <label for="editor" class="sr-only">
                          Publish post
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setmessgae(e.target.value)}
                          rows="8"
                          class="block px-0 w-full text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none "
                          placeholder="Write an article..."
                        ></textarea>
                      </div>
                    </div>
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      class="applaybuttonshow"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footertext">
              <div className="container">
                <p>
                  Memorial Information provides equal employment opportunities
                  to all employees and applicants for employment and prohibits
                  discrimination and harassment of any type without regard to
                  race, color, religion, age, sex, national origin, disability
                  status, genetics, protected veteran status, sexual
                  orientation, gender identity or expression, or any other
                  characteristic protected by federal, state or local laws. This
                  policy applies to all terms and conditions of employment,
                  including recruiting, hiring, placement, promotion,
                  termination, layoff, recall, transfer, leaves of absence,
                  compensation and training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
