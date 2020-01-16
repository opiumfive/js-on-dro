!function r(a,o,h){function l(t,e){if(!o[t]){if(!a[t]){var i="function"==typeof require&&require;if(!e&&i)return i(t,!0);if(u)return u(t,!0);var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}var n=o[t]={exports:{}};a[t][0].call(n.exports,function(e){return l(a[t][1][e]||e)},n,n.exports,r,a,o,h)}return o[t].exports}for(var u="function"==typeof require&&require,e=0;e<h.length;e++)l(h[e]);return l}({1:[function(e,t,i){"use strict";var s=e("../loader"),n=e("./system");window.demoNum=2;new s(n)},{"../loader":4,"./system":3}],2:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e};function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e("../particle-base")),s(a,[{key:"update",value:function(){this.alternate?(this.amplitude=(this.system.size/2-Math.abs(this.mesh.position.x))/(this.system.size/2),this.amplitude*=this.system.osc1Eased,this.speed=this.loader.elapsedMilliseconds/750,this.mesh.position.y=10*this.system.simplex.getRaw2DNoise(this.mesh.position.x*this.noiseScale+this.speed,0)*this.amplitude):(this.amplitude=(this.system.size/2-Math.abs(this.mesh.position.x))/(this.system.size/2),this.amplitude*=1-this.system.osc1Eased,this.speed=this.loader.elapsedMilliseconds/750,this.mesh.position.y=10*this.system.simplex.getRaw2DNoise(this.mesh.position.x*this.noiseScale+this.speed+1e3,1e3)*this.amplitude);var e=(this.size,this.amplitude);this.mesh.material.opacity=.1+.9*this.amplitude,e=.05+.1*this.amplitude,this.mesh.scale.set(e,e,e),this.mesh.position.z=this.alternate?.05+10*this.amplitude:-(.05+10*this.amplitude)}}]),a);function a(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e,t,i));return s.alternate=e.alternate,s.noiseScale=.15,s.amplitude=0,s.speed=0,s}t.exports=r},{"../particle-base":5}],3:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e};function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function a(e,t,i){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(void 0===s){var n=Object.getPrototypeOf(e);return null===n?void 0:a(n,t,i)}if("value"in s)return s.value;var r=s.get;return void 0!==r?r.call(i):void 0}var r=e("../system-base"),o=e("./particle"),h=e("../utils/osc"),l=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,r),s(u,[{key:"reset",value:function(){this.osc1.reset(),this.osc1Eased=0,this.osc2.reset(),this.rotationZTarget=0,this.lastRotationZTarget=this.rotationZTarget,this.rotationZProgress=0}},{key:"replay",value:function(){a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"replay",this).call(this),this.reset()}},{key:"update",value:function(){a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"update",this).call(this),this.osc1.update(this.loader.deltaTimeNormal),this.osc1Eased=this.osc1.val(this.ease.inOutExpo),this.osc2.update(this.loader.deltaTimeNormal),this.osc2.triggerBot&&(this.lastRotationZTarget=this.rotationZTarget,this.rotationZTarget+=Math.PI/-2,this.rotationZProgress=this.rotationZProgress-1),this.rotationZProgress<1&&(this.rotationZProgress+=.025*this.loader.deltaTimeNormal),this.rotationZProgress=this.calc.clamp(this.rotationZProgress,0,1),this.particleGroup.rotation.z=this.calc.map(this.ease.inOutExpo(this.rotationZProgress,0,1,1),0,1,this.lastRotationZTarget,this.rotationZTarget),!this.exiting||this.loader.isOrbit||this.loader.isGrid||(this.loader.camera.position.z=this.loader.cameraBaseZ-this.ease.inExpo(this.exitProgress,0,1,1)*this.loader.cameraBaseZ)}}]),u);function u(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e));t.duration=7700,t.simplex=new FastSimplexNoise,t.count=300,t.size=30;for(var i=0;i<t.count;i++){var s=t.calc.map(i,0,t.count,-t.size/2,t.size/2)+t.size/t.count/2;t.particles.push(new o({group:t.particleGroup,x:s,y:0,z:0,size:t.calc.map(Math.abs(s),0,t.size/2,.2,.01),color:i%2==0?16777215:5648670,opacity:1,alternate:i%2==0},t,t.loader))}return t.osc1=new h(.2,.015),t.osc2=new h(0,.015,!0,!1),t.reset(),t}t.exports=l},{"../system-base":6,"../utils/osc":10,"./particle":2}],4:[function(e,t,i){"use strict";var s=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e};function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=e("./utils/calc"),a=e("./utils/ease"),o=e("./utils/axis"),h=(s(l,[{key:"setupDebug",value:function(){var s=this;this.isDebug=0<location.hash.indexOf("debug"),this.isGrid=0<location.hash.indexOf("grid"),this.isOrbit=0<location.hash.indexOf("orbit"),this.debugHash="",this.isDebug?(this.isGrid=!0,this.isOrbit=!0,this.debugHash+="debug",this.dom.html.classList.add("is-debug")):(this.debugHash+=this.isGrid?"grid":"",this.debugHash+=this.isOrbit?"orbit":""),this.debugHash&&[].slice.call(document.querySelectorAll(".demo")).forEach(function(e,t,i){e.setAttribute("href",e.getAttribute("href")+"#"+s.debugHash)})}},{key:"setupTime",value:function(){this.timescale=1,this.clock=new THREE.Clock,this.deltaTimeSeconds=this.clock.getDelta()*this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0}},{key:"setupScene",value:function(){this.scene=new THREE.Scene}},{key:"setupCamera",value:function(){this.camera=new THREE.PerspectiveCamera(100,0,1e-4,1e4),this.cameraBaseX=this.isGrid?-20:0,this.cameraBaseY=this.isGrid?15:0,this.cameraBaseZ=this.isGrid?20:30,this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ}},{key:"setupRenderer",value:function(){this.renderer=new THREE.WebGLRenderer({alpha:!0,antialias:!0}),this.dom.container.appendChild(this.renderer.domElement)}},{key:"setupControls",value:function(){this.isOrbit&&(this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.2,this.controls.enableKeys=!1,this.dom.timescaleWrap.style.visibility="visible")}},{key:"setupHelpers",value:function(){this.isGrid&&(this.gridOpacityMap=[.4,.2,.2,.2,.1,.2,.1,.1],this.gridHelper=new THREE.GridHelper(300,60,16777215,16777215),this.gridHelper.material.transparent=!0,this.gridHelper.material.opacity=this.gridOpacityMap[demoNum-1],this.scene.add(this.gridHelper),this.axisOpacityMap=[1,.6,.6,.6,.3,.6,.3,.3],this.axisHelper=new o(150,this.axisOpacityMap[demoNum-1]),this.scene.add(this.axisHelper),this.camera.lookAt(new THREE.Vector3))}},{key:"update",value:function(){this.deltaTimeSeconds=this.clock.getDelta(),this.diffTime&&(this.deltaTimeSeconds-=this.diffTime,this.diffTime=0),this.deltaTimeSeconds*=this.timescale,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds+=this.deltaTimeMilliseconds,this.system.update(),this.isOrbit&&this.controls.update()}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"listen",value:function(){var t=this;window.addEventListener("resize",function(e){return t.onResize(e)}),this.dom.replayButton.addEventListener("click",function(e){return t.onReplayButtonClick(e)}),this.dom.debugButton.addEventListener("click",function(e){return t.onDebugButtonClick(e)}),this.isOrbit&&(this.dom.timescaleRange.addEventListener("change",function(e){return t.onTimescaleRangeChange(e)}),this.dom.timescaleRange.addEventListener("mousemove",function(e){return t.onTimescaleRangeChange(e)})),this.hidden=null,this.visibilityChange=null,void 0!==document.hidden?(this.hidden="hidden",this.visibilityChange="visibilitychange"):void 0!==document.msHidden?(this.hidden="msHidden",this.visibilityChange="msvisibilitychange"):void 0!==document.webkitHidden&&(this.hidden="webkitHidden",this.visibilityChange="webkitvisibilitychange"),void 0===document.addEventListener||void 0===document.hidden||window.addEventListener(this.visibilityChange,function(e){return t.onVisibilityChange(e)})}},{key:"replay",value:function(){document.documentElement.classList.remove("completed"),document.documentElement.classList.add("loading"),this.camera.position.x=this.cameraBaseX,this.camera.position.y=this.cameraBaseY,this.camera.position.z=this.cameraBaseZ,this.timescale=1,this.deltaTimeSeconds=1/60,this.deltaTimeMilliseconds=1e3*this.deltaTimeSeconds,this.deltaTimeNormal=this.deltaTimeMilliseconds/(1e3/60),this.elapsedMilliseconds=0,this.blurTime=0,this.diffTime=0,this.focusTime=0,this.system.replay(),this.completed=!1,this.clock.start(),this.loop()}},{key:"complete",value:function(){var e=this;this.isOrbit||this.isGrid||(setTimeout(function(){e.clock.stop(),cancelAnimationFrame(e.raf)},600),this.completed=!0,this.dom.html.classList.remove("loading"))}},{key:"onResize",value:function(){this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=1<window.devicePixelRatio?2:1,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(this.width,this.height)}},{key:"onReplayButtonClick",value:function(e){e.preventDefault(),this.replay()}},{key:"onDebugButtonClick",value:function(e){e.preventDefault();var t=window.location.href.split("#")[0];this.isDebug?(history?history.pushState("",document.title,window.location.pathname):location.hash="",location.href=t):location.href=t+"#debug",location.reload()}},{key:"onTimescaleRangeChange",value:function(){this.timescale=parseFloat(this.dom.timescaleRange.value),this.dom.timescaleValue.innerHTML=this.timescale.toFixed(1)}},{key:"onVisibilityChange",value:function(){document.hidden?this.blurTime=Date.now():(this.focusTime=Date.now(),this.blurTime&&(this.diffTime=(this.focusTime-this.blurTime)/1e3))}},{key:"loop",value:function(){var e=this;this.update(),this.render(),this.raf=window.requestAnimationFrame(function(){return e.loop()})}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),this.calc=new r,this.ease=new a,this.dom={html:document.documentElement,container:document.querySelector(".loader"),timescaleWrap:document.querySelector(".timescale-wrap"),timescaleRange:document.querySelector(".timescale-range"),timescaleValue:document.querySelector(".timescale-value"),replayButton:document.querySelector(".replay-animation"),debugButton:document.querySelector(".icon--debug")},this.dom.html.classList.add("loading"),this.completed=!1,this.raf=null,this.setupDebug(),this.setupTime(),this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupControls(),this.setupHelpers(),this.listen(),this.onResize(),this.system=new e(this),this.loop()}t.exports=h},{"./utils/axis":7,"./utils/calc":8,"./utils/ease":9}],5:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"createMesh",value:function(){this.geometry=this.system.sphereGeometry,this.material=new THREE.MeshBasicMaterial({color:this.color,transparent:!0,opacity:this.opacity,depthTest:!1,precision:"lowp"}),this.mesh=new THREE.Mesh(this.geometry,this.material),this.mesh.position.x=this.x,this.mesh.position.y=this.y,this.mesh.position.z=this.z,this.mesh.scale.set(this.size,this.size,this.size),this.group.add(this.mesh)}},{key:"reset",value:function(){}}]),r);function r(e,t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.system=t,this.loader=i,this.calc=this.loader.calc,this.ease=this.loader.ease,this.group=e.group,this.x=e.x,this.y=e.y,this.z=e.z,this.size=e.size,this.color=e.color,this.opacity=e.opacity,this.createMesh()}t.exports=n},{}],6:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"update",value:function(){for(var e=this.particles.length;e--;)this.particles[e].update();if(this.entering&&this.enterProgress<1){this.enterProgress+=this.enterRate*this.loader.deltaTimeNormal,1<this.enterProgress&&(this.enterProgress=1,this.entering=!1);var t=this.ease.inOutExpo(this.enterProgress,0,1,1);this.particleGroup.scale.set(t,t,t)}!this.exiting&&this.loader.elapsedMilliseconds>this.duration&&(this.exiting=!0),this.exiting&&(this.exitProgress+=this.exitRate*this.loader.deltaTimeNormal,1<=this.exitProgress&&!this.loader.completed&&(this.exitProgress=1,this.loader.complete()))}},{key:"replay",value:function(){this.particleGroup.scale.set(1e-4,1e-4,1e-4);for(var e=this.particles.length;e--;)this.particles[e].reset();this.entering=!0,this.enterProgress=0,this.exiting=!1,this.exitProgress=0}}]),r);function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.loader=e,this.calc=this.loader.calc,this.ease=this.loader.ease,this.sphereGeometry=new THREE.SphereBufferGeometry(1,16,16),this.boxGeometry=new THREE.BoxBufferGeometry(1,1,1),this.center=new THREE.Vector3,this.particles=[],this.particleGroup=new THREE.Object3D,this.particleGroup.scale.set(1e-4,1e-4,1e-4),this.loader.scene.add(this.particleGroup),this.entering=!0,this.enterProgress=0,this.enterRate=.015,this.exiting=!1,this.exitProgress=0,this.exitRate=.01,this.duration=1/0}t.exports=n},{}],7:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"createAxis",value:function(e,t,i){var s=new THREE.Geometry,n=new THREE.LineBasicMaterial({color:i,opacity:this.opacity,transparent:!0});s.vertices.push(e,t);var r=new THREE.Line(s,n);this.object3d.add(r)}}]),r);function r(e,t){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this.object3d=new THREE.Object3D,this.axisLength=e,this.opacity=t,this.createAxis(new THREE.Vector3(-this.axisLength,0,0),new THREE.Vector3(this.axisLength,0,0),new THREE.Color("hsl(0, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,-this.axisLength,0),new THREE.Vector3(0,this.axisLength,0),new THREE.Color("hsl(120, 100%, 100%)")),this.createAxis(new THREE.Vector3(0,0,-this.axisLength),new THREE.Vector3(0,0,this.axisLength),new THREE.Color("hsl(240, 100%, 100%)")),this.object3d}t.exports=n},{}],8:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"rand",value:function(e,t,i){void 0===t&&(t=e,e=0);var s=Math.random();return i&&(s=i(Math.random(),0,1,1)),s*(t-e)+e}},{key:"randInt",value:function(e,t,i){return void 0===t&&(t=e,e=0),Math.random(),i&&i(Math.random(),0,1,1),Math.floor(Math.random()*(t-e+1))+e}},{key:"randArr",value:function(e){return e[Math.floor(Math.random()*e.length)]}},{key:"map",value:function(e,t,i,s,n){return(e-t)/(i-t)*(n-s)+s}},{key:"clamp",value:function(e,t,i){return Math.max(Math.min(e,i),t)}},{key:"lerp",value:function(e,t,i){return e+(t-e)*i}},{key:"roundToUpperInterval",value:function(e,t){return e%t==0&&(e+=1e-4),Math.ceil(e/t)*t}},{key:"roundToLowerInterval",value:function(e,t){return e%t==0&&(e-=1e-4),Math.floor(e/t)*t}},{key:"roundToNearestInterval",value:function(e,t){return Math.round(e/t)*t}},{key:"intersectSphere",value:function(e,t){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y)+(e.z-t.z)*(e.z-t.z))<e.radius+t.radius}},{key:"getIndexFromCoords",value:function(e,t,i){return e+t*i}},{key:"getCoordsFromIndex",value:function(e,t){return{x:e%t,y:Math.floor(e/t)}}},{key:"visibleHeightAtZDepth",value:function(e,t){var i=t.position.z;e<i?e-=i:e+=i;var s=t.fov*Math.PI/180;return 2*Math.tan(s/2)*Math.abs(e)}},{key:"visibleWidthAtZDepth",value:function(e,t){return this.visibleHeightAtZDepth(e,t)*t.aspect}}]),r);function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r)}t.exports=n},{}],9:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"inQuad",value:function(e,t,i,s){return i*(e/=s)*e+t}},{key:"outQuad",value:function(e,t,i,s){return-i*(e/=s)*(e-2)+t}},{key:"inOutQuad",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e+t:-i/2*(--e*(e-2)-1)+t}},{key:"inCubic",value:function(e,t,i,s){return i*(e/=s)*e*e+t}},{key:"outCubic",value:function(e,t,i,s){return i*((e=e/s-1)*e*e+1)+t}},{key:"inOutCubic",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}},{key:"inQuart",value:function(e,t,i,s){return i*(e/=s)*e*e*e+t}},{key:"outQuart",value:function(e,t,i,s){return-i*((e=e/s-1)*e*e*e-1)+t}},{key:"inOutQuart",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e+t:-i/2*((e-=2)*e*e*e-2)+t}},{key:"inQuint",value:function(e,t,i,s){return i*(e/=s)*e*e*e*e+t}},{key:"outQuint",value:function(e,t,i,s){return i*((e=e/s-1)*e*e*e*e+1)+t}},{key:"inOutQuint",value:function(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e*e*e+t:i/2*((e-=2)*e*e*e*e+2)+t}},{key:"inSine",value:function(e,t,i,s){return-i*Math.cos(e/s*(Math.PI/2))+i+t}},{key:"outSine",value:function(e,t,i,s){return i*Math.sin(e/s*(Math.PI/2))+t}},{key:"inOutSine",value:function(e,t,i,s){return-i/2*(Math.cos(Math.PI*e/s)-1)+t}},{key:"inExpo",value:function(e,t,i,s){return 0==e?t:i*Math.pow(2,10*(e/s-1))+t}},{key:"outExpo",value:function(e,t,i,s){return e==s?t+i:i*(1-Math.pow(2,-10*e/s))+t}},{key:"inOutExpo",value:function(e,t,i,s){return 0==e?t:e==s?t+i:(e/=s/2)<1?i/2*Math.pow(2,10*(e-1))+t:i/2*(2-Math.pow(2,-10*--e))+t}},{key:"inCirc",value:function(e,t,i,s){return-i*(Math.sqrt(1-(e/=s)*e)-1)+t}},{key:"outCirc",value:function(e,t,i,s){return i*Math.sqrt(1-(e=e/s-1)*e)+t}},{key:"inOutCirc",value:function(e,t,i,s){return(e/=s/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+t:i/2*(Math.sqrt(1-(e-=2)*e)+1)+t}},{key:"inElastic",value:function(e,t,i,s){var n=1.70158,r=0,a=i;return 0==e?t:1==(e/=s)?t+i:(r=r||.3*s,a<Math.abs(i)?a=i:n=r/(2*Math.PI)*Math.asin(i/a),-a*Math.pow(2,10*--e)*Math.sin((e*s-n)*(2*Math.PI)/r)+t)}},{key:"outElastic",value:function(e,t,i,s){var n=1.70158,r=0,a=i;return 0==e?t:1==(e/=s)?t+i:(r=r||.3*s,a<Math.abs(i)?a=i:n=r/(2*Math.PI)*Math.asin(i/a),a*Math.pow(2,-10*e)*Math.sin((e*s-n)*(2*Math.PI)/r)+i+t)}},{key:"inOutElastic",value:function(e,t,i,s){var n=1.70158,r=0,a=i;return 0==e?t:2==(e/=s/2)?t+i:(r=r||s*(.3*1.5),a<Math.abs(i)?a=i:n=r/(2*Math.PI)*Math.asin(i/a),e<1?a*Math.pow(2,10*--e)*Math.sin((e*s-n)*(2*Math.PI)/r)*-.5+t:a*Math.pow(2,-10*--e)*Math.sin((e*s-n)*(2*Math.PI)/r)*.5+i+t)}},{key:"inBack",value:function(e,t,i,s,n){return null==n&&(n=1.70158),i*(e/=s)*e*((n+1)*e-n)+t}},{key:"outBack",value:function(e,t,i,s,n){return null==n&&(n=1.70158),i*((e=e/s-1)*e*((n+1)*e+n)+1)+t}},{key:"inOutBack",value:function(e,t,i,s,n){return null==n&&(n=1.70158),(e/=s/2)<1?i/2*(e*e*((1+(n*=1.525))*e-n))+t:i/2*((e-=2)*e*((1+(n*=1.525))*e+n)+2)+t}}]),r);function r(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r)}t.exports=n},{}],10:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var n=(function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}(r,[{key:"reset",value:function(){this._val=this._valBase,this._rate=this._rateBase,this._dir=this._dirBase,this._flip=this._flipBase,this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1}},{key:"update",value:function(e){this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1,this._dir?this._val<1?this._val+=this._rate*e:(this.trigger=!0,this.triggerTop=!0,this._flip?this._val=this._val-1:(this._val=1-(this._val-1),this._dir=!this._dir)):0<this._val?this._val-=this._rate*e:(this.trigger=!0,this.triggerBot=!0,this._flip?this._val=1+this._val:(this._val=-this._val,this._dir=!this._dir))}},{key:"val",value:function(e){return e?e(this._val,0,1,1):this._val}}]),r);function r(e,t){var i=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],s=3<arguments.length&&void 0!==arguments[3]&&arguments[3];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),this._val=e,this._rate=t,this._dir=i,this._flip=s,this._valBase=e,this._rateBase=t,this._dirBase=i,this._flipBase=s,this.trigger=!1,this.triggerTop=!1,this.triggerBot=!1}t.exports=n},{}]},{},[1]);