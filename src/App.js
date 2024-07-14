import './App.css';
// import Product from "./components/Product";
// import Cart from "./components/Cart";
// import products from "./product.json";

import { Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './redux/slices/todoSlice';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="App">
      <Button variant="contained" onClick={() => dispatch(fetchTodos())}>Fetch Todos</Button>
      {/* {state.todo.data && state.todo.data.map(
        (e) =>
          <ul key={e.id}>
            <li>{e.id}</li>
            <li>{e.title}</li>
          </ul>
      )} */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 60 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: '1px solid rgba(224, 224, 224, 1)' }}>Id</TableCell>
              <TableCell>Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.todo.data && state.todo.data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ width: '10%', borderRight: '1px solid rgba(224, 224, 224, 1)' }}>
                  {row.id}
                </TableCell>
                <TableCell sx={{ flexGrow: 1 }}>
                  {row.title}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;