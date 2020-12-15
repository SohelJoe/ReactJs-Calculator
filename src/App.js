import React from 'react';
import './App.css';
import * as calFunction from './function';



function App() {
  return (
    <>
      <p> Calculator Using React-JS: </p>
      <div className="calculator">

        <input type="text" id="result" className="calculator-screen" disabled />

        <div className="calculator-keys">
          <button type="button" className="operator" onClick={calFunction.calShow}>(</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>)</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>%</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>&divide;</button>

          <button type="button" onClick={calFunction.calShow}>7</button>
          <button type="button" onClick={calFunction.calShow}>8</button>
          <button type="button" onClick={calFunction.calShow}>9</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>&times;</button>

          <button type="button" onClick={calFunction.calShow}>4</button>
          <button type="button" onClick={calFunction.calShow}>5</button>
          <button type="button" onClick={calFunction.calShow}>6</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>-</button>

          <button type="button" onClick={calFunction.calShow}>1</button>
          <button type="button" onClick={calFunction.calShow}>2</button>
          <button type="button" onClick={calFunction.calShow}>3</button>
          <button type="button" className="operator" onClick={calFunction.calShow}>+</button>

          <button type="button" onClick={calFunction.calShow}>.</button>
          <button type="button" onClick={calFunction.calShow}>0</button>
          <button type="button" className="all-clear" onClick={calFunction.default}>AC</button>
          <button type="button" className="equal-sign" onClick={calFunction.solve}>=</button>
        </div>
      </div>

      {/* <table>
        <tr>
          <td colspan="3"><input type="text" id="result" /></td>
          <td><input type="button" value="c" onClick={calFunction.default} /></td>
        </tr>
        <tr>
          <td><input type="button" value="1" onClick={calFunction.one} /> </td>
          <td><input type="button" value="2" onClick={calFunction.two} /> </td>
          <td><input type="button" value="3" onClick={calFunction.three} /> </td>
          <td><input type="button" value="/" onClick={calFunction.divide} /> </td>
        </tr>
        <tr>
          <td><input type="button" value="4" onClick={calFunction.four} /> </td>
          <td><input type="button" value="5" onClick={calFunction.five} /> </td>
          <td><input type="button" value="6" onClick={calFunction.six} /> </td>
          <td><input type="button" value="-" onClick={calFunction.minus} /> </td>
        </tr>
        <tr>
          <td><input type="button" value="7" onClick={calFunction.seven} /> </td>
          <td><input type="button" value="8" onClick={calFunction.eight} /> </td>
          <td><input type="button" value="9" onClick={calFunction.nine} /> </td>
          <td><input type="button" value="+" onClick={calFunction.plus} /> </td>
        </tr>
        <tr>
          <td><input type="button" value="." onClick={calFunction.dot} /> </td>
          <td><input type="button" value="0" onClick={calFunction.zero} /> </td>
          <td><input type="button" value="=" onClick={calFunction.solve} /> </td>
          <td><input type="button" value="*" onClick={calFunction.multiply} /> </td>
        </tr>
      </table> */}
    </>
  );
}

export default App;
