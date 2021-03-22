import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(3, 2, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.5
mesh.position.y = -0.6
mesh.position.z = 0.7
mesh.scale.set(0.3, 0.5, 0.7)
mesh.rotation.set(0, Math.PI/2, 0)
scene.add(mesh)

//mesh.position.set(1, 1, 1)


// Axes Helper
const axesHelper =  new THREE.AxesHelper(0.5)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

console.log(window.devicePixelRatio)

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 1
camera.position.z = 3.2
camera.position.y = 0.3
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)