/* Pluto, Merc, Mars, Neptune, Earth, Venus, Uranus, Saturn, Jupiter */

var scene = new THREE.Scene();
// This is what sees the stuff:

var aspect_ratio = window.innerWidth / window.innerHeight;
var above_cam = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 1e6); 
above_cam.position.z = 1000;
scene.add(above_cam);

var earth_cam = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 1e6); scene.add(earth_cam);
var camera = above_cam;

// This will draw what the camera sees onto the screen:

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ******** START CODING ON THE NEXT LINE ********

document.body.style.backgroundColor = 'black';
var surface = new THREE.MeshPhongMaterial({ambient: 0xFFD700}); 
var star = new THREE.SphereGeometry(50, 28, 21);
var sun = new THREE.Mesh(star, surface);
scene.add(sun);

var ambient = new THREE.AmbientLight(0xffffff); scene.add(ambient);
var sunlight = new THREE.PointLight(0xffffff, 5, 1290); 
sun.add(sunlight);

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x00ffff}); 
var planet = new THREE.SphereGeometry(10, 13, 15);
var mercury = new THREE.Mesh(planet, surface);
var mercuryOrbit = new THREE.Object3D()
mercuryOrbit.add(mercury)
mercury.position.set(120, 0, 0)
sun.add(mercuryOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff6000}); 
var planet = new THREE.SphereGeometry(23, 30, 15);
var venus = new THREE.Mesh(planet, surface);
var venusOrbit = new THREE.Object3D()
venusOrbit.add(venus)
venus.position.set(220, 0, 0)
sun.add(venusOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x0000cd}); 
var planet = new THREE.SphereGeometry(19, 15, 15);
var earth = new THREE.Mesh(planet, surface);
var earthOrbit = new THREE.Object3D()
earthOrbit.add(earth)
sun.add(earthOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(7, 15, 25);
var moon = new THREE.Mesh(planet, surface);
var moonOrbit = new THREE.Object3D()
moonOrbit.add(moon)
moonOrbit.add(earth_cam)
moon.position.set(0, 35, 0)
earth.add(moonOrbit)
earth_cam.rotation.set(Math.PI/2, 0, 0)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff0000}); 
var planet = new THREE.SphereGeometry(14, 15, 15);
var mars = new THREE.Mesh(planet, surface);
var marsOrbit = new THREE.Object3D()
marsOrbit.add(mars)
mars.position.set(490, 0, 0)
sun.add(marsOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(4, 15, 25);
var phobos = new THREE.Mesh(planet, surface);
var phobosOrbit = new THREE.Object3D()
phobosOrbit.add(phobos)
phobos.position.set(0, 65, 0)
mars.add(phobosOrbit)
var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(3, 15, 25);
var deimos = new THREE.Mesh(planet, surface);
var deimosOrbit = new THREE.Object3D()
deimosOrbit.add(deimos)
deimos.position.set(0, 100, 0)
mars.add(deimosOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(34, 15, 15);
var jupiter = new THREE.Mesh(planet, surface);
var jupiterOrbit = new THREE.Object3D()
jupiterOrbit.add(jupiter)
jupiter.position.set(700, 0, 0)
sun.add(jupiterOrbit)

//Io, Europa, Ganymede, and Callisto
var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(5, 15, 25);
var io = new THREE.Mesh(planet, surface);
var ioOrbit = new THREE.Object3D()
ioOrbit.add(io)
io.position.set(0, 90, 0)
jupiter.add(ioOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(5, 15, 25);
var europa = new THREE.Mesh(planet, surface);
var europaOrbit = new THREE.Object3D()
europaOrbit.add(europa)
europa.position.set(0, 120, 0)
jupiter.add(europaOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(5, 15, 25);
var ganymede = new THREE.Mesh(planet, surface);
var ganymedeOrbit = new THREE.Object3D()
ganymedeOrbit.add(ganymede)
ganymede.position.set(0, 75, 0)
jupiter.add(ganymedeOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xffffff}); 
var planet = new THREE.SphereGeometry(7, 15, 25);
var callisto = new THREE.Mesh(planet, surface);
var callistoOrbit = new THREE.Object3D()
callistoOrbit.add(callisto)
callisto.position.set(0, 50, 0)
jupiter.add(callistoOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff2000}); 
var planet = new THREE.SphereGeometry(29, 15, 15);
var saturn = new THREE.Mesh(planet, surface);
var saturnOrbit = new THREE.Object3D()
saturnOrbit.add(saturn)
saturn.position.set(860, 0, 0)
sun.add(saturnOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff2000}); 
var planet = new THREE.SphereGeometry(25, 15, 15);
var uranus = new THREE.Mesh(planet, surface);
var uranusOrbit = new THREE.Object3D()
uranusOrbit.add(uranus)
uranus.position.set(950, 0, 0)
sun.add(uranusOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0xff2000}); 
var planet = new THREE.SphereGeometry(16, 15, 15);
var neptune = new THREE.Mesh(planet, surface);
var neptuneOrbit = new THREE.Object3D()
neptuneOrbit.add(neptune)
neptune.position.set(1100, 0, 0)
sun.add(neptuneOrbit)

var surface = new THREE.MeshPhongMaterial({ambient: 0x1a1a1a, color: 0x0fffff}); 
var planet = new THREE.SphereGeometry(7, 15, 15);
var pluto = new THREE.Mesh(planet, surface);
var plutoOrbit = new THREE.Object3D()
plutoOrbit.add(pluto)
pluto.position.set(1190, 0, 0)
sun.add(plutoOrbit)

var time = 0, 
    speed = 1,
    pause = false
    
function animate() { 
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
  
  if(pause) return
  time = time + speed

  var e_angle = time * 0.001;
  earth.position.set(320*Math.cos(e_angle), 250*Math.sin(e_angle), 0)
  
  var m_angle = time * 0.008;
  moonOrbit.rotation.set(0, 0, m_angle) 
  
  var d_angle = time * 0.004
  deimosOrbit.rotation.set(0, 0, d_angle)
  var p_angle = time * 0.009
  phobosOrbit.rotation.set(0, 0, p_angle)
  
  var io_angle = time * 0.009
  ioOrbit.rotation.set(0, 0, io_angle)
  var eur_angle = time * 0.006
  europaOrbit.rotation.set(0, 0, eur_angle)
  var call_angle = time * 0.005
  callistoOrbit.rotation.set(0, 0, call_angle)
  var gan_angle = time * 0.007
  ganymedeOrbit.rotation.set(0, 0, gan_angle)
  
  var merc_angle = time * 0.006
  mercuryOrbit.rotation.set(0, 0, merc_angle)
  
  var ven_angle = time * 0.003
  venusOrbit.rotation.set(0, 0, ven_angle)
  
  var mars_angle = time * 0.0009
  marsOrbit.rotation.set(0, 0, mars_angle)
  
  var jup_angle = time * 0.0007
  jupiterOrbit.rotation.set(0, 0, jup_angle)
  
  var sat_angle = time * 0.00065
  saturnOrbit.rotation.set(0, 0, sat_angle)
  
  var ur_angle = time * 0.00039
  uranusOrbit.rotation.set(0, 0, ur_angle)
  
  var nep_angle = time * 0.00029
  neptuneOrbit.rotation.set(0, 0, nep_angle)
  
  var plu_angle = time * 0.00019
  plutoOrbit.rotation.set(0, 0, plu_angle)
  
}
animate() 

var stars = new THREE.Geometry()

while (stars.vertices.length < 1e4) {
  var lat = Math.PI * Math.random() - Math.PI/2
  var lon = 2*Math.PI * Math.random()
  stars.vertices.push(new THREE.Vector3( 1e5 * Math.cos(lon) * Math.cos(lat), 1e5 * Math.sin(lon) * Math.cos(lat), 1e5 * Math.sin(lat)
  ))
}

var star_stuff = new THREE.ParticleBasicMaterial({size: 500})
var star_system = new THREE.ParticleSystem(stars, star_stuff) 
scene.add(star_system)

document.addEventListener("keydown", function(event) { 
  var code = event.keyCode;
  if (code === 67) changeCamera()
  if (code === 32) changeCamera()
  if (code === 80) pause = !pause
  if (code === 49) speed = 1
  if (code === 50) speed = 2
  if (code === 51) speed = 10
})

  function changeCamera() {
    if (camera === above_cam) camera = earth_cam
    else camera = above_cam
  }