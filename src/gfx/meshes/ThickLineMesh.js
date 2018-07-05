

import * as THREE from 'three';
import UberObject from './UberObject';
const Mesh = UberObject(THREE.Mesh);

class ThickLineMesh extends Mesh {
  constructor(geometry, material) {
    super(geometry, material);
  }

  _onBeforeRender(renderer, scene, camera) {
    const material = this.material;
    if (!material.uberOptions) {
      return;
    }

    material.uberOptions.projMatrixInv.getInverse(camera.projectionMatrix, true);
    const viewport = renderer.getSize();
    material.uberOptions.viewport.set(viewport.width, viewport.height);
  }
}

export default ThickLineMesh;

