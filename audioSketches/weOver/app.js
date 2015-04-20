define(function(require, exports, module) {

  var Womb                = require( 'Womb/Womb'                  );
  
  var m                   = require( 'Utils/Math'                 );
  var recursiveFunctions  = require( 'Utils/RecursiveFunctions'   );
  
  var fragmentShaders     = require( 'Shaders/fragmentShaders'    );
  var vertexShaders       = require( 'Shaders/vertexShaders'      );
  var physicsShaders      = require( 'Shaders/physicsShaders'     );
  var shaderChunks        = require( 'Shaders/shaderChunks'       );

  var physicsShaders      = require( 'Shaders/physicsShaders'     );
  var physicsParticles    = require( 'Shaders/physicsParticles'   );
  
  var PhysicsSimulator    = require( 'Species/PhysicsSimulator'   );
  var title = "DEFUALT";
  /*
   
     Create our womb

  */
  var link = 'http://soundcloud.com/holyother';
  var info =  "Drag to spin, scroll to zoom,<br/> press 'x' to hide interface";
  
   var VisSettings;

      jQuery.ajax({
        async: false,
        dataType: "json",
        url: "jsontest.json" ,
        success: function( data ) {
          VisSettings = data ;
        }
      });
      
      jQuery(document).ready( function() {
      } ) ;
  
  womb = new Womb({ //Top Left Text
    cameraController: 'TrackballControls',
    title:            VisSettings.SongName,
    link:             link, 
    summary:          info,
    color:            '#000000',
    failureVideo:     84019684,
    size:             400
  });

    //select MP3
  womb.stream = womb.audioController.createStream( VisSettings.MP3 );


//Particle System Settings
  womb.ps = new PhysicsSimulator( womb , {
    
    textureWidth: 100, //amount of particles created per update?
    debug: false,//6 oddly colored squares appear on screen
    velocityShader: physicsShaders.velocity.curl,
    velocityStartingRange:1, //doesnt'
    startingPositionRange:[1 , .000002, 0 ], //spawn area for particles? [width, height, depth]
    positionShader: physicsShaders.positionAudio_4,
    particlesUniforms:        physicsParticles.uniforms.audio,
    particlesVertexShader:    physicsParticles.vertex.audio,
    particlesFragmentShader:  physicsParticles.fragment.audio,

    bounds: 100, //width of particle spawn, affects particle density
    speed: .1, //speed of particles
    particleParams:   {
        size: VisSettings.particleParams.size, //size of particles
        sizeAttenuation: VisSettings.particleParams.sizeAttenuation, // no clue
        blending: THREE.AdditiveBlending,//Types of blending refer to http://threejs.org/examples/#webgl_materials_blending for more options
        depthWrite: false,//turns particles into bubbles?
        transparent: VisSettings.particleParams.transparent,//transparancy, particles become sprite like(2d circles)
        fog: true, //I don't see any difference between true or false
        map: THREE.ImageUtils.loadTexture( VisSettings.particleParams.map ),//texture for particles
        opacity:    1,
      }, 
    audio: womb.stream

  });
  
  womb.u = {//nothiing noticible

    texture:    { type: "t", value: womb.stream.texture.texture },
    image:      { type: "t", value: womb.stream.texture.texture },
    color:      { type: "v3", value: new THREE.Vector3( .3 , .01 , .1 ) },//Nothing noticible
    time:       womb.time,
    pow_noise:  { type: "f" , value: 0.2 },
    pow_audio:  { type: "f" , value: .3 },

  };

 

  womb.loader.loadBarAdd();//loads visualizer
  
  womb.start = function(){

    womb.stream.play();//stream music
    womb.ps.enter();//start particle system needs music to be streaming to work

  }


});
