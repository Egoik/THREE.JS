// SCENE
const scene = new THREE.Scene()

//SIZES
const sizes = {
    width: 800,
    height: 600
}

// GEOMERTY
const cube = new THREE.BoxGeometry(1,1,1)

// MATERIAL
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})

// MESHES
const mesh = new THREE.Mesh (cube, cubeMaterial)
scene.add(mesh)

// CAMERAS (fov,aspectRatio)
const camera1 = new THREE.PerspectiveCamera(85,sizes.width / sizes.height)
camera1.position.z = 3
scene.add(camera1)


// RENDERER
const canvas = document.querySelector('.webgl')
const renderer = new  THREE.WebGLRenderer ({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera1)
