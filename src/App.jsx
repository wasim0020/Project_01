import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [color, setcolor] = useState("white");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="py-[25px] rounded  flex justify-center  buttom-12 ">
          <button
            onClick={() => {
              setcolor("Red");
            }}
            className="bg-red-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setcolor("Green");
            }}
            className="bg-green-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => {
              setcolor("Blue");
            }}
            className="bg-blue-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setcolor("Olive");
            }}
            className="bg-orange-300 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "olive" }}
          >
            Oliva
          </button>

          <button
            onClick={() => {
              setcolor("Gray");
            }}
            className="bg-gray-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>

          <button
            onClick={() => {
              setcolor("Yellow");
            }}
            className="bg-yellow-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => {
              setcolor("Pink");
            }}
            className="bg-pink-300 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => {
              setcolor("Purple");
            }}
            className="bg-purple-700 rounded py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => {
              setcolor("Black");
            }}
            className="bg-black rounded  text-white py-[20px] px-[30px] mx-[4px]"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

          <button
            onClick={() => {
              setcolor("White");
            }}
            className="bg-white rounded py-[20px] px-[30px] mx-[4px] text-black"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
