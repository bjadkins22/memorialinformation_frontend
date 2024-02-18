import React, { useState } from "react";

const StepbyStepQuestion = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };


  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Answer the Questions</h1>

        <div className="common-divbg bg-white">
          <div className="stepbystepinfo">
            {currentStep === 1 && (
              <div className="current-steppost">
               <h1 className="step-stepactive">Step 1 :</h1>
                <div>
                  <div className="questiondivmap">
                    <div>
                      <label className="questionanswer">
                        What is your name ?{" "}
                      </label>
                    </div>
                    <input
                      value={formData.personalInfo}
                      name="personalInfo"
                      onChange={handleChange}
                      className="questionaddanswer"
                      type="text"
                      placeholder="Add Answer"
                    />
                  </div>
                  <div className="questiondivmap mt-4">
                    <div>
                      <label className="questionanswer">
                        What is your age ?{" "}
                      </label>
                    </div>
                    <input
                      value={formData.personalInfo}
                      name="personalInfo"
                      onChange={handleChange}
                      className="questionaddanswer"
                      type="text"
                      placeholder="Add Answer"
                    />
                  </div>
                  <div className="flex justify-center mt-12">
                    <button className="next-btn" onClick={nextStep}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepbyStepQuestion;
