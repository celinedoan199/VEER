let shape;

// Load the file and create a p5.Geometry object.
// Normalize the geometry's size to fit the canvas.
async function setup() {
    shape = await loadModel('assets/vr_helm.obj', true);
    createCanvas(windowWidth, 500, WEBGL);
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Draw the shape.
  model(shape);
}