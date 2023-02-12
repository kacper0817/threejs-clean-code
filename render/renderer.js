import * as THREE from 'three';
import { sizes } from './sizes';

export function createRenderer(){
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({canvas});
    renderer.setSize(sizes.width,sizes.height);
    renderer.setPixelRatio(2);
    return renderer;
}