import { useState, useEffect } from "react";
import { getMergeSortAnimations } from "../SortingAlgorithm/mergeSort.js";
import "./SortingVisualizer.css";
import { getQuickSortAnimations } from "../SortingAlgorithm/quickSort.js";
import { getBubbleSortAnimations } from "../SortingAlgorithm/bubbleSort.js";

const ANIMATION_SPEED_MS = 0.5;
const NUMBER_OF_ARRAY_BARS = 100;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";
const COLOR = "#b3cde0";

function SortingVisualizer() {
  // State to hold the array for sorting
  const [array, setArray] = useState([]);

  // Function to generate a new random array
  function resetArray() {
    const newArray = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      newArray.push(randomIntFromInterval(10, 580));
    }
    setArray(newArray);
    const arrayBars = document.getElementsByClassName("array-bar");
    for (let i = 0; i < arrayBars.length; i++) {
      arrayBars[i].style.backgroundColor = COLOR;
    }
  }

  // useEffect to initialize the array when the component mounts
  useEffect(() => {
    resetArray();
  }, []);

  // Function to perform merge sort and animate the sorting process
  function mergeSort() {
    const animations = getMergeSortAnimations(array.slice());
    animations.forEach((animation, idx) => {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = idx % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animation;
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = idx % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, idx * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barIdx, newHeight] = animation;
          const barStyle = arrayBars[barIdx].style;
          barStyle.height = `${newHeight}px`;
        }, idx * ANIMATION_SPEED_MS);
      }
    });
  }

  // Function to visualize Quick Sort
  const quickSort = () => {
    const animations = getQuickSortAnimations(array.slice());
    const arrayBars = document.getElementsByClassName("array-bar");

    animations.forEach((animation, idx) => {
      const [barOneIdx, barTwoIdx, color] = animation;
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      setTimeout(() => {
        if (color === "turquoise") {
          barOneStyle.backgroundColor = "turquoise"; // Comparison color
          barTwoStyle.backgroundColor = "turquoise"; // Comparison color
        } else if (color === "red") {
          const tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;
          barOneStyle.backgroundColor = "red"; // Swap color
          barTwoStyle.backgroundColor = "red"; // Swap color
        } else if (color === "green") {
          barOneStyle.backgroundColor = "green"; // Pivot in sorted position color
          barTwoStyle.backgroundColor = "green"; // Pivot in sorted position color
        } else if (color === "orange") {
          barOneStyle.backgroundColor = "orange"; // Highlight pivot color
          barTwoStyle.backgroundColor = "orange"; // Highlight pivot color
        }
      }, idx * ANIMATION_SPEED_MS); // Adjust animation speed here (100 milliseconds per frame)
    });
  };

  // Function to visualize Bubble Sort
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(array.slice());
    const arrayBars = document.getElementsByClassName("array-bar");

    animations.forEach((animation, idx) => {
      const [barOneIdx, barTwoIdx, color] = animation;
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      setTimeout(() => {
        if (color === "blue") {
          barOneStyle.backgroundColor = "blue"; // First color for comparison
          barTwoStyle.backgroundColor = "blue"; // First color for comparison
        } else if (color === "turquoise") {
          barOneStyle.backgroundColor = "turquoise"; // Second color for comparison
          barTwoStyle.backgroundColor = "turquoise"; // Second color for comparison
        } else if (color === "red") {
          const tempHeight = barOneStyle.height;
          barOneStyle.height = barTwoStyle.height;
          barTwoStyle.height = tempHeight;
          barOneStyle.backgroundColor = "red"; // Swap color
          barTwoStyle.backgroundColor = "red"; // Swap color
        } else if (color === "green") {
          barOneStyle.backgroundColor = "green"; // Final color indicating comparison completion
          barTwoStyle.backgroundColor = "green"; // Final color indicating comparison completion
        }
      }, idx * ANIMATION_SPEED_MS); // Adjust animation speed here (100 milliseconds per frame)
    });
  };

  // Function to generate a random integer within a range
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // JSX to render the component
  return (
    <div className="quick-visualizer">
      <div className="array-container">
        {/* Render array bars based on the array state */}
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}

        {/* Buttons for generating a new array and performing sorting */}
      </div>
      <div className="button-container">
        <button className="custom-button" onClick={resetArray}>
          Generate New Array
        </button>
        <button className="custom-button" onClick={mergeSort}>
          Merge Sort
        </button>
        <button className="custom-button" onClick={quickSort}>
          Quick Sort
        </button>
        <button className="custom-button" onClick={bubbleSort}>
          Bubble Sort
        </button>
      </div>
    </div>
  );
}

export default SortingVisualizer;
