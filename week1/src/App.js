import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <center>
        <strong>

        <p>This is sample for text for understanding the rendering of html code in React.</p>
        <p>Below given is the table of Student Details</p>

        </strong>
        <table border="1">
            <tr>
                <th>Name</th>
                <th>Enrollment No.</th>
            </tr>
            <tr>
                <td>Aashutosh Verma</td>
                <td>200130116010</td>
            </tr>
            <tr>
                <td>Uttam Makwana</td>
                <td>200130116035</td>
            </tr>
            <tr>
                <td>Divyesh Bhadrka</td>
                <td>200130116041</td>
            </tr>
            <tr>
                <td>Aaditya Chaturvedi</td>
                <td>200130116059</td>
            </tr>
        </table>
    </center>
    </div>
  );
}

export default App;
