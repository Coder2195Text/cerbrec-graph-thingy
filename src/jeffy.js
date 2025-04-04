import { organize } from "./script.ts"
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

let active = true;
let checkBoxes = [];
let checkBoxesPositions = [];
let links = [];
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
    //updates control points positions to move with bg
    links.forEach((l) => {
      let xYPair = l.control_points;
      xYPair.forEach((c) => {
        c.x += deltaX;
        c.y += deltaY;
      });
    });

    tablePositions.forEach(({ element, relativeLeft, relativeTop }) => {
      element.style.left = `${relativeLeft + bgPosX}px`;
      element.style.top = `${relativeTop + bgPosY}px`;
    });

    startX = e.clientX;
    startY = e.clientY;
  }
  if (active) {
    refresh();
  }
});
//release
document.addEventListener("mouseup", () => {
  isDraggingBackground = false;
  if (isDraggingTable) {
    isDraggingTable = null;
  }
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
          //double parse so reset doesn't delete original, allows for the same graph to be redisplayed later on single session
          inputGraph = JSON.parse(JSON.stringify(JSON.parse(fileContent)));
          createDivs();
          bgPosX=0; //makes sure created graph loads in correct spot
          bgPosY=0; 
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file); //reads file and adds to assigns to inputGraph
    } else {
      console.log("No file was selected.");
    }
  });
//left input table
let createInput = () => {
  links = inputGraph.links;
  const inputValues = inputGraph.inputs;
  const inputDiv = document.createElement("div");
  inputDiv.classList.add("inputTable");
  inputValues.forEach((i) => {
    const input = document.createElement("label");
    const temp = document.createElement("input");
    const name = document.createElement("div");
    input.setAttribute("id", i.name);
    temp.setAttribute("type", "checkbox");
    temp.classList.add("input-box");
    name.innerText = i.name;
    input.append(name);
    input.append(temp);
    inputDiv.append(input);
  });
  body.append(inputDiv);
};
//right output table
let createOutput = () => {
  const outputValues = inputGraph.outputs;
  const outputDiv = document.createElement("div");
  outputDiv.classList.add("outputTable");
  outputValues.forEach((i) => {
    const output = document.createElement("label");
    const temp = document.createElement("input");
    const name = document.createElement("div");
    output.setAttribute("id", i.name);
    temp.setAttribute("type", "checkbox");
    temp.classList.add("output-box");
    name.innerText = i.name;
    output.append(name);
    output.append(temp);
    outputDiv.append(output);
  });
  body.append(outputDiv);
};
//sending operations from obj into div
let createDivs = () => {
  operations = Array.from(inputGraph.operations);
  //appends normal operations
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
  createInput();
  createOutput();
  initializeOperations();
  parseCheckBoxes();
  addConnections();
};
//adds events to new operations
let initializeOperations = () => {
  active = true;
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

let parseCheckBoxes = () => {
  checkBoxes = document.querySelectorAll(
    "input[type='checkbox'], output[type='checkbox']"
  );
  //parses position of each parsed input/output of operations excluding input and output
  checkBoxes.forEach((checkbox) => {
    const rect = checkbox.getBoundingClientRect();
    if (
      checkbox.parentElement?.parentElement?.parentElement?.classList.contains(
        "inputOutputContainer"
      )
    ) {
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
    } else {
      checkBoxesPositions.push({
        x: rect.x,
        y: rect.y,
        data: checkbox.previousElementSibling.innerText,
        operation: "this", //not really sure how the links with this works so...
      });
    }
  });
};

//basic function to draw a line between two coordiantes
let drawLine = (x1, y1, x2, y2) => {
  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1);
  line.setAttribute("y1", y1);
  line.setAttribute("x2", x2);
  line.setAttribute("y2", y2);
  line.setAttribute("stroke", "#5555");
  line.setAttribute("stroke-width", "2");
  svgCanvas.appendChild(line);
};
//draws all lines based on checkBoxesPositions and link arrays
let addConnections = () => {
  let posOne = [];
  let posTwo = [];
  //grabs rels of links from original array and coords of new array
  links.forEach((l) => {
    let controlPoints = l.control_points;
    checkBoxesPositions.forEach((box) => {
      if (box.data === l.sink.data && box.operation === l.sink.operation) {
        posTwo = [box.x, box.y];
      }
      if (box.data === l.source.data && box.operation === l.source.operation) {
        posOne = [box.x, box.y];
      }
    });
    if (controlPoints.length === 0) {
      drawLine(posOne[0] + 5, posOne[1] + 7, posTwo[0] + 5, posTwo[1] + 7);
    } else {
      controlPoints.forEach((point) => {
        drawLine(posOne[0] + 5, posOne[1] + 7, point.x + 5, point.y + 7);
        posOne = [point.x, point.y];
      });
      drawLine(posOne[0] + 5, posOne[1] + 7, posTwo[0] + 5, posTwo[1] + 7);
    }
  });
};
//refreshs lines
let refresh = () => {
  svgCanvas.innerHTML = "";
  parseCheckBoxes();
  addConnections();
};
let resetFunction = () => {
  document.querySelectorAll(".draggable-table").forEach((e) => e.remove());
  document.querySelector(".inputTable").remove();
  document.querySelector(".outputTable").remove();

  bgPosX = 0;
  bgPosY = 0;
  startX = 0;
  startY = 0;
  xPosRandIncrement = 400;
  yPosRandIncrement = 400;
  svgCanvas.innerHTML = "";
  checkBoxes = [];
  checkBoxesPositions = [];
  active = false;
  tablePositions=[];
};

document.getElementById("reset").addEventListener("click", resetFunction);
document.getElementById("organize").addEventListener("click", () => {
  inputGraph =organize(inputGraph);
  resetFunction();
  createDivs();
  refresh();
});
