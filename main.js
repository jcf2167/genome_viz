$(document).ready(function() { 

window.onload = function() {
    var filecon;
    var listNodes = [];
    nodesListIndex = 0;
    var node = new Object();
    var edge = new Object();
    var size = new Object();
    var rate = new Object();
    var migration = new Object();

    //this function parses a file given by user 
    $("#filename").change(function(e) {
        var ext = $("input#filename").val().split(".").pop().toLowerCase();
        if (e.target.files != undefined) {
        var reader = new FileReader();
        reader.onload = function(e) {

        var csvval=e.target.result.split("\n");
        for (var i = 0; i < csvval.length; i++)
        {
            // nodeEuToAA = node(admixtureGeneration);
            //sen[0] = nodeEuToAA 
            // sen[1]  = node(admixtureGeneration);
            if (sen){
                var sen = csvval[i].split(" = ");
                if (sen[1].substring("node"))
                {
                    listNodes[nodesListIndex++] =  x
                }
            }
        }
        var csvvalue=csvval[0].split(",");
        filecon = csvval;
        alert(filecon);
        var inputrad="";
        for(var i=0;i<csvvalue.length;i++)
        {
            var temp=csvvalue[i];
            var inputrad=inputrad+" "+temp;
            
        }
        $("#csvimporthinttitle").show();
        };
        reader.readAsText(e.target.files.item(0));
        for(var i =0; i<csvvalue.length;i++)
        {
            var sent = csvvalue[i]

        }

        }
        return false;
    });
    $("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });
   
    var renderer,
        scene,
        camera,
        controls,
        meshMaterial;

    var mouse = []
    mouse = new THREE.Vector2()
    
    var material = new THREE.LineBasicMaterial({
        color: 0x000000
    });
    if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

    //this sets up render and creates a scene 
    renderer = new THREE.WebGLRenderer({ antialias: true });
    document.body.appendChild( renderer.domElement );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColorHex( 0xeeeeee, 1.0 );

    scene = new THREE.Scene();
     
    meshMaterial = new THREE.MeshBasicMaterial({  color: 0xFFE4C4, opacity: 0.5});
 
    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( -25, 25, 25 );
    scene.add( sphere );
    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( 4, 40, 100 );
    scene.add( sphere );

    var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-25, 25, 25));
    geometry.vertices.push(new THREE.Vector3(4, 40,100));
    var line = new THREE.Line(geometry, material);
    scene.add( line);

    var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( -5, 22, 29);
    scene.add( sphere );

      var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(4, 40, 100));
    geometry.vertices.push(new THREE.Vector3(-5, 22,29));
    var line = new THREE.Line(geometry, material);
    scene.add( line);

     var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( -5, 32, 40);
    scene.add( sphere );

     var geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-5, 22, 29));
    geometry.vertices.push(new THREE.Vector3(-5, 32,40));
    var line = new THREE.Line(geometry, material);
    scene.add( line);


     var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( -3, 100, 29);
    scene.add( sphere );
     var sphere = new THREE.Mesh( new THREE.SphereGeometry( 5 ), meshMaterial );
    sphere.position.set( 10, 22, 5);
    scene.add( sphere );
    
    // Add axes
    axes = buildAxes( 1000 );
    scene.add( axes );
    mouse = new THREE.Vector2();
    
    // We need a camera to look at the scene!
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 30, 50, 120 );
    camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

    
    // And some sort of controls to move around
    // We'll use one of THREE's provided control classes for simplicity
    controls = new THREE.TrackballControls( camera );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 0.2;
    controls.panSpeed = 0.8;

    controls.noZoom = false;
    controls.noPan = false;

    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;
    
    document.addEventListener( 'mouseclick', onDocumentMouseMove, false );


    // and go!
    animate();

    function onDocumentMouseMove( event ) {
        event.preventDefault();
        mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
        mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;


    }


    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
    }

    function buildAxes( length ) {
        var axes = new THREE.Object3D();

        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( length, 0, 0 ), 0xFF0000, false ) ); // +X
        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -length, 0, 0 ), 0xFF0000, true) ); // -X
        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, length, 0 ), 0x00FF00, false ) ); // +Y
        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, -length, 0 ), 0x00FF00, true ) ); // -Y
        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, length ), 0x0000FF, false ) ); // +Z
        axes.add( buildAxis( new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -length ), 0x0000FF, true ) ); // -Z

        return axes;

    }

    function buildAxis( src, dst, colorHex, dashed ) {
        var geom = new THREE.Geometry(),
            mat; 

        if(dashed) {
            mat = new THREE.LineDashedMaterial({ linewidth: 3, color: colorHex, dashSize: 3, gapSize: 3 });
        } else {
            mat = new THREE.LineBasicMaterial({ linewidth: 3, color: colorHex });
        }

        geom.vertices.push( src.clone() );
        geom.vertices.push( dst.clone() );
        geom.computeLineDistances(); // This one is SUPER important, otherwise dashed lines will appear as simple plain lines

        var axis = new THREE.Line( geom, mat, THREE.LinePieces );

        return axis;

    }
    }
});