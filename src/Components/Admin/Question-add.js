import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Question_add = () => {
  const [inputList, setInputList] = React.useState([
    { question: "", answers: [""] },
  ]);

  const handleInputChange = (e, index, key) => {
    const list = [...inputList];
    list[index][key] = e.target.value;
    setInputList(list);
  };

  const handleAnswerInputChange = (e, questionIndex, answerIndex) => {
    const list = [...inputList];
    list[questionIndex].answers[answerIndex] = e.target.value;
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { question: "", answers: [""] }]);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddAnswerClick = (questionIndex) => {
    const list = [...inputList];
    list[questionIndex].answers.push("");
    setInputList(list);
  };

  return (
    <div>
      <div className="main-page-div bg-green-200">
        <h1 className="heading-top">Questions Add</h1>

        <div className="common-divbg bg-white">
          <div className="stepbystepinfo">
            {inputList.map((x, i, query) => {
              return (
                <>
                  <div key={query} className="current-steppost  mt-4">
                    <div className="question-container">
                      <div className="questiontypeselect">
                        <h1 className="add-query">Add Query {`${i + 1} `}</h1>
                        <Box
                          sx={{
                            width: "150px",
                            backgroundColor: "white",
                            color: "white",
                          }}
                        >
                          <FormControl fullWidth>
                            <InputLabel
                            // id={`demo-simple-select-label-${index}`}
                            >
                              Type
                            </InputLabel>
                            <Select
                            // labelId={`demo-simple-select-label-${index}`}
                            // id={`demo-simple-select-${index}`}
                            // value={question.type}
                            // label="Type"
                            // onChange={(event) => handleChange(event, index)}
                            // sx={{ minWidth: 120 }}
                            >
                              <MenuItem value={10}>Dropdown</MenuItem>
                              <MenuItem value={20}>Checkboxes</MenuItem>
                              <MenuItem value={30}>Field</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </div>
                      <div>
                        <div className="questiondivmap">
                          <div>
                            <label className="questionanswer">
                              Question ?{" "}
                            </label>
                          </div>
                          <input
                            className="questionaddanswer"
                            type="text"
                            placeholder="Add Question"
                            value={x.firstName}
                            onChange={(e) => handleInputChange(e, i)}
                          />
                        </div>

                        {x.answers.map((answer, j) => (
                          <div key={j} className="questiondivmap mt-4">
                            <div>
                              <label className="questionanswer">{`Answer ${
                                j + 1
                              }`}</label>
                            </div>
                            <div className="flex items-center gap-2">
                              <input
                                className="questionaddanswer"
                                type="text"
                                placeholder={`Add Answer ${j + 1}`}
                                value={answer}
                                onChange={(e) =>
                                  handleAnswerInputChange(e, i, j)
                                }
                              />

                              {j === x.answers.length - 1 && (
                                <button onClick={() => handleAddAnswerClick(i)}>
                                  <i class="fa fa-plus-square plusbtnsqure"></i>
                                </button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center gap-2 mt-12 ">
                        {inputList.length !== 1 && (
                          <button
                            className="next-btn remove-btn w-44"
                            onClick={() => handleRemoveClick(i)}
                          >
                            Remove
                          </button>
                        )}
                        {inputList.length - 1 === i && (
                          <button
                            className="next-btn w-44"
                            onClick={handleAddClick}
                          >
                            Add
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question_add;
