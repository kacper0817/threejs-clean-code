import * as THREE from 'three';
import "../style.css";
import { sizes } from './sizes';
import { mainLight } from './lights'
import { createRenderer } from './renderer';
import { createSphere } from './geometries';
import { mainCamera } from './camera';
//scene 
const scene = new THREE.Scene();

//geometry
const sphere = createSphere();
scene.add(sphere);

//light
const light = mainLight();
scene.add(light);

//camera
const camera = mainCamera()
scene.add(camera);

//renderer
const renderer = createRenderer();
renderer.render(scene, camera);


//resize
window.addEventListener('resize', () =>{
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height)
});

const loop = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};


loop();
