import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material'
export const History = () => {
  const [queries, setQueries] = useState([{queryString: '', queryOutput: '', _id:''}]);

  useEffect(() => {
    fetch('http://localhost:8080/api/nmap', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => setQueries(data))
  });

  return (
    <>
      <Box sx={{p:2}}>
        <Typography variant={"h3"} sx={{p:2}}>History</Typography>
        <Button href={"/"}>Query Interface</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Query</TableCell>
                <TableCell>Output</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {queries.map((query) => (
                <TableRow
                  key={query._id}
                >
                  <TableCell>{query.queryString}</TableCell>
                  <TableCell>{query.queryOutput}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}