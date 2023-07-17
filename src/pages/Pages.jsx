import React, { useState } from "react";

const Pages = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [consultancy, setConsultancy] = useState("");
  const [experience, setExperience] = useState("");
  const [topics, setTopics] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedList, setSelectedList] = useState([]);
  const [selectedList2, setSelectedList2] = useState([]);

  const handleDropdownChange = (event) => {
    const selectedItem = event.target.value;
    setSelectedItem(selectedItem);

    const selectedData = jsonData.find((item) => item.name === selectedItem);
    setSelectedList(selectedData ? selectedData.list : []);
    setSelectedList2(selectedData ? selectedData.list2 || [] : []);
    setSelectedTopics([]); // Reset selected topics
  };

  // Generate an array of years
  const years = Array.from(
    { length: 50 },
    (_, index) => new Date().getFullYear() - index
  );
  const jsonData = [
    {
      name: "Application Support",
      name1: "Technical",
      list: [
        "Problems on Train",
        "Speed and Distance",
        "Profit and Loss",
        "Numbers and Series",
        "Problems on Ages",
        "Verbal Ability",
      ],
    },
    {
      name: "Developer",
      name1: "Technical",
      list: [
        "Problems on Train",
        "Speed and Distance",
        "Profit and Loss",
        "Numbers and Series",
        "Problems on Ages",
        "Verbal Ability",
      ],
      list2: [
        "Sql Server",
        "JavaScript",
        "C#",
        "Asp .net",
        "React JS",
        "Node JS",
      ],
    },
    {
      name: "System Analyst",
      name1: "Aplitube",
      list: [
        "Problems on Train",
        "Speed and Distance",
        "Profit and Loss",
        "Numbers and Series",
        "Problems on Ages",
        "Verbal Ability",
      ],
    },
  ];
  const months = [
    { value: "01", label: "January" },
    { value: "02", label: "February" },
    { value: "03", label: "March" },
    { value: "04", label: "April" },
    { value: "05", label: "May" },
    { value: "06", label: "June" },
    { value: "07", label: "July" },
    { value: "08", label: "August" },
    { value: "09", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log({
      role,
      name,
      mobile,
      email,
      consultancy,
      experience,
      topics,
    });
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <div className="card p-4" style={{ width: "800px", height: "800px" }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <label htmlFor="role" className="col-sm-4 col-form-label">
              Role
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <select
                id="dropdown"
                className="form-control"
                value={selectedItem}
                onChange={handleDropdownChange}
              >
                <option value="">Select</option>
                {jsonData.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="name" className="col-sm-4 col-form-label">
              Name
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="mobile" className="col-sm-4 col-form-label">
              Mobile
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="mobile"
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="email" className="col-sm-4 col-form-label">
              E-Mail Id
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="consultancy" className="col-sm-4 col-form-label">
              Consultancy/Refered By
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="consultancy"
                className="form-control"
                value={consultancy}
                onChange={(e) => setConsultancy(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="experience" className="col-sm-4 col-form-label">
              Experience
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                id="experience"
                className="form-control"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="monthYear" className="col-sm-4 col-form-label">
              Month and Year
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8">
              <div className="row">
                <div className="col">
                  <select
                    id="month"
                    className="form-select"
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    required
                  >
                    <option value="">Select a month</option>
                    {months.map((month) => (
                      <option key={month.value} value={month.value}>
                        {month.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col">
                  <select
                    id="year"
                    className="form-select"
                    value={selectedYear}
                    onChange={handleYearChange}
                    required
                  >
                    <option value="">Select a year</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="topics" className="col-sm-4 col-form-label">
              Topic(s) &amp; Subject(s)
              <span className="text-danger">*</span>
            </label>
            <div className="col-sm-8" style={{ height: "200px" }}>
              <div style={{ display: "flex" }}>
                {selectedList.length > 0 && (
                  <div
                    style={{
                      flex: 1,
                      marginRight: "10px",
                      maxHeight: "100%",
                      overflowY: "scroll",
                    }}
                  >
                    <>
                      <h4>Aptitude </h4>
                      <ul>
                        {selectedList.map((item) => (
                          <li key={item}>
                            <label>
                              <input
                                type="checkbox"
                                value={item}
                                checked={selectedTopics.includes(item)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedTopics((prevTopics) => [
                                      ...prevTopics,
                                      item,
                                    ]);
                                  } else {
                                    setSelectedTopics((prevTopics) =>
                                      prevTopics.filter(
                                        (topic) => topic !== item
                                      )
                                    );
                                  }
                                }}
                              />
                              {item}
                            </label>
                          </li>
                        ))}
                      </ul>
                      <p className="text-danger">
                        Please select atleast 4 subject(s).
                      </p>
                    </>
                  </div>
                )}

                {selectedList2.length > 0 && (
                  <div
                    style={{
                      flex: 1,
                      marginLeft: "10px",
                      maxHeight: "100%",
                      overflowY: "scroll",
                    }}
                  >
                    <>
                      <h4>Technical </h4>
                      <ul>
                        {selectedList2.map((item) => (
                          <li key={item}>
                            <label>
                              <input
                                type="checkbox"
                                value={item}
                                checked={selectedTopics.includes(item)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setSelectedTopics((prevTopics) => [
                                      ...prevTopics,
                                      item,
                                    ]);
                                  } else {
                                    setSelectedTopics((prevTopics) =>
                                      prevTopics.filter(
                                        (topic) => topic !== item
                                      )
                                    );
                                  }
                                }}
                              />
                              {item}
                            </label>
                          </li>
                        ))}
                      </ul>
                      <p className="text-danger">
                        Please select atleast 4 subject(s).
                      </p>
                    </>
                  </div>
                )}
              </div>

              {(selectedList.length === 0 && selectedList2.length === 0) ||
              selectedList.length === 0 ||
              selectedList2.length === 0
                ? null
                : null}
            </div>
          </div>

          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "104px" }}
          >
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Pages;
