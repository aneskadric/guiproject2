import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // Sky blue

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Green field (plane)
const geometry = new THREE.PlaneGeometry(100, 100);
const material = new THREE.MeshPhongMaterial({ color: 0x228b22 });
const plane = new THREE.Mesh(geometry, material);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Light
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5);
scene.add(light);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
