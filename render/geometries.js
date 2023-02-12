import * as THREE from 'three';

export function createSphere(){
    const geometry = new THREE.SphereGeometry(3, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      color: '#00ff83',
      roughness: 0.4,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

