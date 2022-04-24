import Sketch from "react-p5";
import p5Types from "p5";

let z = 0;

const Figure = () => {
  let SIZE = 50;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    if (canvasParentRef.children.length === 0) {
      p5.createCanvas(10 * SIZE, 10 * SIZE, p5.WEBGL).parent(canvasParentRef);
    }
  };

  const draw = (p5: p5Types) => {
    p5.background(SIZE * 2);
    p5.translate(3 * SIZE, 2 * SIZE, 0);
    p5.rotateY(z / 30);
    p5.lights();

    const degree = p5.radians(30);

    p5.fill(255, 173, 0);
    p5.box(SIZE);

    p5.translate(0, 2 * SIZE, 0);
    p5.fill(81, 173, 241);
    p5.box(SIZE);

    p5.translate(-(SIZE * 0.683), -SIZE, -(SIZE * 0.183));
    p5.rotateY(-degree);
    p5.fill(255, 173, 0);
    p5.box(SIZE);
    p5.rotateY(degree);

    p5.translate(SIZE * 0.683 * 2, 0, SIZE * 0.183 * 2);
    p5.rotateY(-degree);
    p5.fill(255, 173, 0);
    p5.box(SIZE);
    p5.rotateY(degree);

    if (p5.mouseIsPressed && p5.mouseButton === p5.LEFT) z++;
    else if (p5.mouseIsPressed) z--;
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default Figure;
