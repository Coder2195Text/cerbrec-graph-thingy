import { organize } from "./script.ts";
//import { organize } from "./script.ts"
const body = document.querySelector("body");
let tables = document.querySelectorAll(".draggable-table");
let tablePositions = [];
let isDraggingBackground = false;
let isDraggingTable = null;
let startX, startY;
let bgPosX = 0;
let bgPosY = 0;
let inputGraph;
let operations = [];
let xPosRandIncrement = 400;
let yPosRandIncrement = 400;

let checkBoxes = [];
let checkBoxesPositions = [];

const svgCanvas = document.getElementById("connectionSVG");

//press, xPos and yPos of bg at start
body.addEventListener("mousedown", (e) => {
  if (!e.target.classList.contains("draggable-table")) {
    isDraggingBackground = true;
    startX = e.clientX;
    startY = e.clientY;
  }
});
//mouse movement
document.addEventListener("mousemove", (e) => {
  if (isDraggingTable) {
    const newLeft = e.clientX - startX;
    const newTop = e.clientY - startY;
    isDraggingTable.style.left = `${newLeft}px`;
    isDraggingTable.style.top = `${newTop}px`;
  } else if (isDraggingBackground) {
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    bgPosX += deltaX;
    bgPosY += deltaY;
    body.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;

    tablePositions.forEach(({ element, relativeLeft, relativeTop }) => {
      element.style.left = `${relativeLeft + bgPosX}px`;
      element.style.top = `${relativeTop + bgPosY}px`;
    });

    startX = e.clientX;
    startY = e.clientY;
  }
});
//release
document.addEventListener("mouseup", () => {
  isDraggingBackground = false;
  if (isDraggingTable) {
    isDraggingTable = null;
  }
  refresh();
});
//Obtain object from last inputted json inputted json
document
  .getElementById("inputFile")
  .addEventListener("change", function (event) {
    const file = event.target.files[event.target.files.length - 1];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileContent = e.target.result;
        try {
          inputGraph = JSON.parse(fileContent);
          createDivs();
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file); //reads file and adds to assigns to inputGraph
    } else {
      console.log("No file was selected.");
    }
  });
//sending operations from obj into div
let createDivs = () => {
  let operations = Array.from(inputGraph.operations);
  operations.forEach((o) => {
    const mainOperation = document.createElement("div");
    const name = document.createElement("div");
    const inputOutputContainer = document.createElement("div"); // Fixed from createAttribute
    const inputs = document.createElement("div");
    const outputs = document.createElement("div");
    let numInputs = o.inputs.length;
    let numOutputs = o.outputs.length;
    // Assign temporary x and y values for random graph visuals
    if (!o?.position?.x && !o?.position?.y) {
      o.position = {};
      o.position.x = xPosRandIncrement;
      o.position.y = yPosRandIncrement;
      xPosRandIncrement += 300;
      if (xPosRandIncrement > 1600) {
        xPosRandIncrement = 400;
        yPosRandIncrement += 300;
      }
    }
    tablePositions.push({
      element: mainOperation,
      relativeLeft: parseInt(o.position.x),
      relativeTop: parseInt(o.position.y),
    });
    // Creates the required input elements
    for (let i = 0; i < numInputs; i++) {
      // Fixed loop condition
      const input = document.createElement("label");
      const name = document.createElement("div");
      const temp = document.createElement("input");
      name.innerText = o.inputs[i].name;
      temp.setAttribute("type", "checkbox");
      temp.setAttribute("data-id", `input${i + 1}`);
      temp.classList.add("input-box");
      input.append(temp);
      input.append(name);
      inputs.append(input);
    }
    for (let i = 0; i < numOutputs; i++) {
      // Fixed loop condition
      const output = document.createElement("label");
      const name = document.createElement("div");
      const temp = document.createElement("input");
      name.innerText = o.outputs[i].name;
      temp.setAttribute("type", "checkbox");
      temp.setAttribute("data-id", `input${i + 1}`);
      temp.classList.add("output-box");
      output.append(name);
      output.append(temp);
      outputs.append(output);
    }

    mainOperation.classList.add("draggable-table");
    name.classList.add("name");
    name.textContent = o.name;
    inputOutputContainer.classList.add("inputOutputContainer");
    inputs.classList.add("inputs");
    outputs.classList.add("outputs");

    //initial x and y positions before mouse click
    mainOperation.style.left = `${o.position.x}px`;
    mainOperation.style.top = `${o.position.y}px`;

    inputOutputContainer.append(inputs);
    inputOutputContainer.append(outputs);

    mainOperation.append(name);
    mainOperation.append(inputOutputContainer);

    body.append(mainOperation);
  });
  initializeOperations();
  parseCheckBoxes();
  addConnections();
};
//adds events to new operations
let initializeOperations = () => {
  tables = document.querySelectorAll(".draggable-table");
  tables.forEach((table, index) => {
    table.addEventListener("mousedown", (e) => {
      isDraggingTable = table;
      startX = e.clientX - parseInt(window.getComputedStyle(table).left);
      startY = e.clientY - parseInt(window.getComputedStyle(table).top);

      e.stopPropagation(); //idk, doesn't work without this
    });
    //tables into objects and assigns starting relativeX and relativeY
    table.addEventListener("mouseup", () => {
      if (isDraggingTable) {
        const currentLeft = parseInt(window.getComputedStyle(table).left);
        const currentTop = parseInt(window.getComputedStyle(table).top);

        tablePositions[index].relativeLeft = currentLeft - bgPosX;
        tablePositions[index].relativeTop = currentTop - bgPosY;

        isDraggingTable = null;
      }
    });
  });
};
let resetFunction = () => {
  document.querySelectorAll(".draggable-table").forEach((e) => e.remove());
  bgPosX = 0;
  bgPosY = 0;
  startX = 0;
  startY = 0;
  xPosRandIncrement = 400;
  yPosRandIncrement = 400;
};

document.getElementById("reset").addEventListener("click", resetFunction);

let parseCheckBoxes = () => {
  checkBoxes = document.querySelectorAll(
    "input[type='checkbox']",
    "output[type='checkbox']"
  ); //parses all input/output objects
  checkBoxes.forEach((checkbox) => {
    //parses position of each parsed input/output
    const rect = checkbox.getBoundingClientRect();
    checkBoxesPositions.push({
      x: rect.x,
      y: rect.y,
      data: checkbox.nextElementSibling
        ? checkbox.nextElementSibling.innerText
        : checkbox.previousElementSibling.innerText,
      operation:
        checkbox.parentElement?.parentElement?.parentElement?.parentElement
          ?.querySelector("div")
          ?.textContent.trim(),
    });
  });
};

//basic function to draw a line between two coordiantes
let drawLine = (x1, y1, x2, y2) => {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "red");
  line.setAttribute("stroke-width", "4");
  svgCanvas.appendChild(line);
};

//draws all lines based on checkBoxesPositions and link arrays
let addConnections = () => {
  const links = inputGraph.links;
  let posOne = [];
  let posTwo = [];
  //grabs rels of links from original array and coords of new array
  links.forEach((l) => {
    checkBoxesPositions.forEach((box) => {
      console.log(box);
      console.log(l);
      if (box.data === l.sink.data && box.operation === l.sink.operation) {
        posTwo = [box.x, box.y];
        console.log(posTwo);
      }
      if (box.data === l.source.data && box.operation === l.source.operation) {
        posOne = [box.x, box.y];
        console.log(posOne);
      }
    });
    drawLine(posOne[0], posOne[1], posTwo[0], posTwo[1]);
  });
};
//refreshs lines
let refresh = () => {
  svgCanvas.innerHTML = "";
  parseCheckBoxes();
  addConnections();
};
