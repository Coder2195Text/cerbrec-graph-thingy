import { Application, Container, Graphics, Rectangle, Text, } from "pixi.js";
import { Composite } from "./types"
import { Button } from "@pixi/ui";
import { basic_organize } from "./basic_organize";
import { GAP_SIZE, height } from "./graph";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

let composite: Composite | undefined = undefined;

let rects: Graphics[] = [];
let mouse = new Graphics().circle(0, 0, 5).fill(0xff0000);
const opContainer = new Container();

let offsetX = 0;
let offsetY = 0;
let deltaX = 0;
let deltaY = 0;
let currentGrabbedBox: Graphics | null = null;

let mousedown = false;
canvas.addEventListener("pointerup", () => {
  mousedown = false;
  currentGrabbedBox = null;
})

canvas.addEventListener("pointerdown", (e) => {
  mousedown = true;
  const boxes = getBoxesAtPoint(e.clientX, e.clientY);
  if (boxes.length) {
    currentGrabbedBox = boxes.sort((a, b) => a.zIndex - b.zIndex)[boxes.length - 1];
    deltaX = e.clientX + offsetX - currentGrabbedBox.x;
    deltaY = e.clientY + offsetY - currentGrabbedBox.y;
  }
  console.log(currentGrabbedBox)
})

canvas.addEventListener("pointermove", (e) => {
  if (!mousedown) return;
  mouse.x = e.clientX;
  mouse.y = e.clientY;

  if (!currentGrabbedBox) {

    offsetX += e.movementX;
    offsetY += e.movementY;


  } else {
    let box = currentGrabbedBox;
    // move box
    box.x = e.clientX - deltaX + offsetX;
    box.y = e.clientY - deltaY + offsetY;

    // move op
    let opName = box.label;
    let op = composite?.operations?.find(o => o.name === opName);
    if (op) {
      op.position = {
        x: box.x,
        y: box.y
      }
      console.log(JSON.stringify(op.position))
    }
  }

})

function getBoxesAtPoint(x: number, y: number) {
  return rects.filter(r => r.getBounds().containsPoint(x, y));
}

async function load() {
  const elm = document.createElement("input");
  elm.setAttribute("type", "file");
  elm.setAttribute("accept", ".json");
  elm.click();
  return await new Promise((resolve, reject) => {
    elm.addEventListener("change", async (e) => {
      const elm = e.target as HTMLInputElement;
      if (!elm?.files?.length) {
        reject("No file selected");
        return;
      }
      const file = elm?.files[0];
      if (file) {
        const reader = new FileReader();
        rects = [];
        opContainer.removeChildren();
        reader.readAsText(file);
        reader.onload = async () => {
          composite = JSON.parse(reader.result as string) as Composite;
          composite = basic_organize(composite);
          console.log(composite);

          for (const node of composite?.operations || []) {
            const rect = new Graphics().rect(node.position?.x || 0, node.position?.y || 0, GAP_SIZE, height(node)).fill(0xdddddd).stroke(0x000000).stroke({
              width: 1
            });
            rect.label = node.name;
            rects.push(rect)
          }
          opContainer.addChild(...rects);
          resolve(composite);
        };
      } else {
        console.log("No file was selected.");
      }
      elm.value = "";
    });

  })

}

async function init() {
  const app = new Application();
  await app.init({
    canvas: canvas,
    backgroundColor: 0xffffff
  })

  app.resizeTo = window;

  let buttonBg = new Graphics()
    .rect(0, 20, 200, 50)
    .fill(0xddffff);
  buttonBg.addChild(new Text({
    text: "Organize",
    style: {
      fontSize: 20,
    },
    x: 50,
    y: 25
  }));
  const button = new Button(
    buttonBg
  );

  button.onPress.connect(load);

  app.stage.addChild(button.view);

  app.stage.addChild(mouse);

  app.stage.addChild(opContainer);
  opContainer.zIndex = -10

  console.log(opContainer)



  let fps = new Text({
    style: {
      fill: "black",
      fontSize: 10,
    }
  });

  app.stage.addChild(fps);
  fps.x = 10;
  fps.y = 10;


  app.ticker.add((ticker) => {
    fps.text = `${ticker.FPS.toFixed(1)} FPS, Offset: (${offsetX}, ${offsetY})`;
    button.view.width = 200;
    opContainer.x = offsetX;
    opContainer.y = offsetY;
    app.renderer.render(app.stage);
  });
}
init();