import { Application, Graphics, Text, } from "pixi.js";
import { Composite } from "./types"
import { Button } from "@pixi/ui";
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

let composite: Composite | undefined = undefined;

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
        reader.readAsText(file);
        reader.onload = async () => {
          composite = JSON.parse(reader.result as string);
          console.log(composite);
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
    view: canvas,
    backgroundColor: 0xffffff
  })
  console.log(app)
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
    fps.text = ticker.FPS.toFixed(1) + " FPS"
    button.view.width = 200;
    app.renderer.render(app.stage);
  });
}
init();