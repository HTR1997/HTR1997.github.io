import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshNormalMaterial, Color, } from 'three';

const scene = new Scene(); scene.background = new Color(0x242424);
const camera = new PerspectiveCamera( 75, window.innerWidth/ window.innerHeight, 0.1, 1000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);

const geometry = new BoxGeometry();
const material = new MeshNormalMaterial();
const cube = new Mesh(geometry, material);
scene.add(cube)

camera.position.z = 5

const animate = () => {
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.02;

  renderer.render(scene, camera);
}

renderer.setAnimationLoop( animate );


