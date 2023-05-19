import React, { useState, useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import "./company.css";
import { Button } from "react-bootstrap";

// Defining the table columns
const columns = [
  {
    dataField: "importance_score",
    text: "Importance Score",
    sort: true,
    classes: "text-center"
  },
  {
    dataField: "news_original",
    text: "News Original",
    sort: true
  },
  {
    dataField: "task_analysis",
    text: "Task Analysis",
    sort: true
  }
];

function Company() {
  // Storing the JSON data in a state variable
  const [data, setData] = useState([]);

  // Storing the loading state in a state variable
  const [loading, setLoading] = useState(true);

  // Storing the selected importance score in a state variable
  const [score, setScore] = useState("");

  // Handling the change of select input
  const handleSelect = (event) => {
    setScore(event.target.value);
    // Updating the table data based on the selected score
    onSearch(event.target.value);
  };

  // Updating the table data based on a selected score
  const onSearch = (score) => {
    // If score is empty, show all data
    if (!score) {
      setData(data);
      return;
    }
    // Filter the data by checking if importance score matches the selected score
    const filteredData = data.filter((item) => item.importance_score === score);
    // Set the filtered data as table data
    setData(filteredData);
  };

  // Fetching and filtering the JSON data from a file using useEffect hook
  useEffect(() => {
    fetch("/news_today.json")
      .then((response) => response.json())
      .then((jsonData) => {
        // If score is empty, show all data
        if (!score) {
          setData(jsonData);
        } else {
          // Filter the data by checking if importance score matches the selected score
          const filteredData = jsonData.filter(
            (item) => item.importance_score === score
          );
          // Set the filtered data as table data
          setData(filteredData);
        }
        // Set the loading state to false
        setLoading(false);
      });
  }, [score]);

  return (
    <Container className="company-page">
      <h1 className="company-data">
        <span className="circle"></span>Company Data
        <span className="circle"></span>
      </h1>

      <div className="controls">
        <Form className="select-importance-all">
          <Form.Group controlId="formScore">
            <Form.Label className="select-importance">
              Select importance score
            </Form.Label>
            <Form.Control
              as="select"
              value={score}
              onChange={handleSelect}
              className="select-importance"
            >
              <option value="">All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <Button href="/amazon2.pdf" target="_blank" className="btn btn-primary">
          Check company source data(PDF)
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <BootstrapTable
          keyField="news_original"
          data={data}
          columns={columns}
          className="importance-number"
        />
      )}
    </Container>
  );
}

export default Company;
