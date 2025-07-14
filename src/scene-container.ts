import { WebGLRenderer, Vector2, OrthographicCamera, Scene } from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene_setup = async (scene: Scene) => {
  //let scene = (await import(`../src/trig-scenes/${scene_id}.ts`)).default
  //let scene = (await import('../src/trig-scenes/sine')).default

  const aspectRatio = window.innerWidth / window.innerHeight
  const cameraSize = 200;
  const camera = new OrthographicCamera(-cameraSize * aspectRatio, cameraSize * aspectRatio, cameraSize, -cameraSize, -1000, 1000);

  const renderer = new WebGLRenderer({ preserveDrawingBuffer: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const label_renderer = new CSS2DRenderer()
  label_renderer.setSize(window.innerWidth, window.innerHeight)
  label_renderer.setSize(window.innerWidth, window.innerHeight);
  label_renderer.domElement.style.position = 'absolute';
  label_renderer.domElement.style.top = '0px';
  label_renderer.domElement.style.pointerEvents = 'none';
  document.body.appendChild(label_renderer.domElement);


  // SCENE SETUP
  //const RADIUS = 100
  //const HALF_RADIUS = RADIUS / 2


  // SCENE UPDATING
  //let angle = 0
  //let cosAngle = 1
  //let sinAngle = 0
  //let tanAngle = 0
  const updateScene = () => {
    //angle = Math.atan2(normalizedScreenCoordinates.y, normalizedScreenCoordinates.x)
    //cosAngle = Math.cos(angle)
    //sinAngle = Math.sin(angle)
    //tanAngle = Math.tan(angle)

    scene.userData.update(scaledScreenCoordinates)

  }



  // 0x00aaff lovly blue
  // 0x00ffaa lovly sea green

  let autoClearToggle = true
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 't') {
      renderer.clear()
      autoClearToggle = !autoClearToggle
      renderer.autoClear = autoClearToggle
      renderer.autoClearColor = autoClearToggle
    }
    if (autoClearToggle === true) {
      renderer.clear()
    }
    if (e.key === ' ') {
      renderer.clear()
    }
  }
  document.addEventListener('keydown', onKeyDown)


  const screenCoordinates = new Vector2(0, 0)
  const normalizedScreenCoordinates = new Vector2(0, 0)
  const scaledScreenCoordinates = new Vector2(0, 0)
  const onMouseMove = (e: MouseEvent) => {
    screenCoordinates.set(e.clientX, e.clientY)
    normalizedScreenCoordinates.set(2 * (e.clientX / window.innerWidth) - 1, -2 * (e.clientY / window.innerHeight) + 1)
    scaledScreenCoordinates.set(cameraSize * normalizedScreenCoordinates.x * aspectRatio / camera.zoom, cameraSize * normalizedScreenCoordinates.y / camera.zoom)
    scaledScreenCoordinates.add(camera.position)
    const labels = scene.userData.labels
  }

  document.addEventListener('mousemove', onMouseMove);
  document.onwheel = (e: MouseEvent) => {

    const labels = scene.userData.labels ? scene.userData.labels : []
    for (let n = 0; n < labels.length; n++) {
      const l = labels[n] as CSS2DObject
      // This works somehow
      l.element.style.fontSize = 24 * camera.zoom + 'px'
    }

  }


  const controls = new OrbitControls(camera, renderer.domElement)
  // ANIMATION LOOP

  //camera.position.set(-4, 4, 10)
  camera.position.set(0, 0, 10)
  controls.update()

  const animate = async () => {

    updateScene()

    controls.update()

    renderer.render(scene, camera)
    label_renderer.render(scene, camera)

  }

  //animate()
  renderer.setAnimationLoop(animate);
}

export default scene_setup

