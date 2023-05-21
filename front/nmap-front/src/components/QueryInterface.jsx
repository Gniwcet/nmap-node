import React, { useState } from 'react'
import { Box, Button, Container, TextField, Typography } from '@mui/material'


export const QueryInterface = () => {
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState("");

  const handleQueryString = (event) => {
    const queryString = event.target.value;
    setQuery(queryString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8080/api/nmap', {
      method: 'POST',
      body: JSON.stringify({query}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setQueryResult(data.queryOutput))
  }

  return (
    <>
      <Box sx={{p: 5}}>
        <Typography variant={"h3"} sx={{p: 3}}>
          Nmap Interface
        </Typography>

        <TextField label={"Query"} name={"query"} onChange={handleQueryString}></TextField>
        <br/>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button href={"/history"}>History</Button>
        <br/>
        <Container sx={{p:4}}>
          <Typography variant={"h5"}>
            Output:
          </Typography>

          <Container sx={{bgcolor: "lightgrey", p:2}}>
            <Typography variant={"body2"}>
              {queryResult}
            </Typography>
        </Container>
        </Container>
      </Box>
    </>
  );
};
