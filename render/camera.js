import * as THREE from 'three';
import { sizes } from './sizes';

export function mainCamera(){
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 20;
    return camera;
}