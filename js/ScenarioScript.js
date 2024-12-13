
// ====================  TOP COMPONENT ================================================================================ 
AFRAME.registerComponent('top', { 
    schema: { 
        color1: {type: 'string', default: 'red'}, 
        color2: {type: 'string', default: 'purple'},
        color3: {type: 'string', default: 'purple'},
        stage: {type: 'number', default: 3},
        showOperations: {type: 'boolean', default: false}
    },
    init: function () { 
        const mainBody = document.createElement('a-cone');
        mainBody.setAttribute('id', 'Top');
        mainBody.setAttribute('position', '0 0 0');
        mainBody.setAttribute('rotation', '0 0 0');
        mainBody.setAttribute('scale', '1.5 1 1.5');
        mainBody.setAttribute('color', this.data.color1);
        mainBody.setAttribute('visible', 'true');

        const sphere1 = document.createElement('a-sphere');
        sphere1.setAttribute('id', 'sphere1');
        sphere1.setAttribute('position', '0 0.2 0');
        sphere1.setAttribute('rotation', '0 0 0');
        sphere1.setAttribute('scale', '0.5 0.5 1');
        sphere1.setAttribute('material', 'opacity: 0.4; color: blue');
        sphere1.setAttribute('visible', this.data.showOperations);

        if (this.data.stage == 1) {
            this.el.appendChild(sphere1);
            mainBody.setAttribute('csg-meshs', 'subtract: #sphere1');
            this.el.appendChild(mainBody);
            return;
        }

        const sphere2 = document.createElement('a-sphere');
        sphere2.setAttribute('id', 'sphere2');
        sphere2.setAttribute('position', '1 0 0');
        sphere2.setAttribute('rotation', '0 0 45');
        sphere2.setAttribute('scale', '0.3 0.6 1');
        sphere2.setAttribute('material', 'opacity: 0.4; color: blue');
        sphere2.setAttribute('visible', this.data.showOperations);

        const sphere3 = document.createElement('a-sphere');
        sphere3.setAttribute('id', 'sphere3');
        sphere3.setAttribute('position', '-1 0 0');
        sphere3.setAttribute('rotation', '0 0 -45');
        sphere3.setAttribute('scale', '0.3 0.6 1');
        sphere3.setAttribute('material', 'opacity: 0.4; color: blue');
        sphere3.setAttribute('visible', this.data.showOperations);

        if (this.data.stage == 2) {
            sphere1.setAttribute('visible', false);
            this.el.appendChild(sphere1);
            this.el.appendChild(sphere2);
            this.el.appendChild(sphere3);

            mainBody.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere2, #sphere3');
            this.el.appendChild(mainBody);
            return;
        }

        const sphere4 = document.createElement('a-sphere');
        sphere4.setAttribute('id', 'sphere4');
        sphere4.setAttribute('position', '0.5 0.4 0');
        sphere4.setAttribute('rotation', '0 0 0');
        sphere4.setAttribute('scale', '0.5 0.5 1');
        sphere4.setAttribute('material', 'opacity: 0.4; color: yellow');
        sphere4.setAttribute('visible', this.data.showOperations);

        const sphere5 = document.createElement('a-sphere');
        sphere5.setAttribute('id', 'sphere5');
        sphere5.setAttribute('position', '-0.5 0.4 0');
        sphere5.setAttribute('rotation', '0 0 0');
        sphere5.setAttribute('scale', '0.5 0.5 1');
        sphere5.setAttribute('material', 'opacity: 0.4; color: yellow');
        sphere5.setAttribute('visible', this.data.showOperations);

        const sphere7 = document.createElement('a-sphere');
        sphere7.setAttribute('id', 'sphere7');
        sphere7.setAttribute('position', '1 0 0');
        sphere7.setAttribute('rotation', '0 0 45');
        sphere7.setAttribute('scale', '0.3 0.6 1');
        sphere7.setAttribute('material', 'opacity: 0.4; color: blue');
        sphere7.setAttribute('visible', false);
        this.el.appendChild(sphere7);

        this.el.appendChild(sphere2);
        const topRight = document.createElement('a-cone');
        topRight.setAttribute('id', 'topRight');
        topRight.setAttribute('position', '0 0 0');
        topRight.setAttribute('rotation', '0 0 0');
        topRight.setAttribute('scale', '1.5 1 1.5');
        topRight.setAttribute('color', this.data.color3);
        topRight.setAttribute('visible', 'true');
        topRight.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere7; intersect: #sphere4');
        this.el.appendChild(topRight);

        const topLeft = document.createElement('a-cone');
        topLeft.setAttribute('id', 'topLeft');
        topLeft.setAttribute('position', '0 0 0');
        topLeft.setAttribute('rotation', '0 0 0');
        topLeft.setAttribute('scale', '1.5 1 1.5');
        topLeft.setAttribute('color', this.data.color3);
        topLeft.setAttribute('visible', 'true');
        topLeft.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere3; intersect: #sphere5');
        this.el.appendChild(topLeft);


    
        sphere1.setAttribute('visible', false);
        sphere2.setAttribute('visible', false);
        sphere3.setAttribute('visible', false);
        this.el.appendChild(sphere1);
        this.el.appendChild(sphere2);
        this.el.appendChild(sphere3);
        this.el.appendChild(sphere4);
        this.el.appendChild(sphere5);

        

        if (this.data.stage == 3) { 
            mainBody.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere2, #sphere3, #sphere4, #sphere5');
            this.el.appendChild(mainBody);   
            return;
        }

        sphere5.setAttribute('visible', false);
        sphere4.setAttribute('visible', false);

        this.strips = document.createElement('a-entity');
        this.strips.setAttribute('id', 'strips');
        this.strips.setAttribute('strips', 'color1: ' + this.data.color2 +'; stage: 1');
        this.strips.setAttribute('position', '0 0 0');
        this.strips.setAttribute('rotation', '0 0 0');
        this.strips.setAttribute('scale', '2 1 2');

        this.strips2 = document.createElement('a-entity');
        this.strips2.setAttribute('id', 'strips2');
        this.strips2.setAttribute('strips', 'color1: yellow; opacity: 0.4 ; stage: 1');
        this.strips2.setAttribute('position', '0 0 0');
        this.strips2.setAttribute('rotation', '0 0 0');
        this.strips2.setAttribute('scale', '2 1 2');
        this.strips2.setAttribute('visible', this.data.showOperations);

        mainBody.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere2, #sphere3, #sphere4, #sphere5, #strips2');
        this.strips.setAttribute('csg-meshs', 'subtract: #sphere1, #sphere2, #sphere3, #sphere4, #sphere5; intersect: #Top');
        this.el.appendChild(mainBody); 
        this.el.appendChild(this.strips);
        this.el.appendChild(this.strips2);
    }
});

// ====================  FLAG COMPONENT ================================================================================ 
AFRAME.registerComponent('flag', { 
    schema: { 
        color1: {type: 'string', default: 'red'}, 
        color2: {type: 'string', default: 'purple'},
        stage: {type: 'number', default: 3},
        showOperations: {type: 'boolean', default: false}

    },
    init: function (){ 
        const flag = document.createElement('a-box');
        flag.setAttribute('id', 'Flag');
        flag.setAttribute('position', '0 0 0');
        flag.setAttribute('rotation', '0 0 0');
        flag.setAttribute('scale', '1.7 0.8 0.05');
        flag.setAttribute('color', this.data.color1);
        flag.setAttribute('visible', 'true');

        const triangle = document.createElement('a-cone');
        triangle.setAttribute('id', 'triangle');
        triangle.setAttribute('position', '0.2 0 0');
        triangle.setAttribute('rotation', '0 0 90');
        triangle.setAttribute('scale', '0.6 1.5 0.1');
        triangle.setAttribute('material', 'opacity: 0.4; color: blue');
        triangle.setAttribute('visible', this.data.showOperations);

        if(this.data.stage == 1){
            this.el.appendChild(triangle);
            flag.setAttribute('csg-meshs', 'subtract: #triangle');
            this.el.appendChild(flag);
            return;
        }

        const pole = document.createElement('a-box');
        pole.setAttribute('id', 'pole');
        pole.setAttribute('position', '-0.9 -0.5 0');
        pole.setAttribute('rotation', '0 0 0');
        pole.setAttribute('scale', '0.1 1.8 0.1');
        pole.setAttribute('color', (this.data.showOperations !== false ? 'purple' : this.data.color2));

        triangle.setAttribute('visible', false);
        flag.setAttribute('csg-meshs', 'subtract: #triangle');
        this.el.appendChild(triangle);
        this.el.appendChild(flag);
        this.el.appendChild(pole);
    }
});

// ====================  BASE COMPONENT ================================================================================ 
AFRAME.registerComponent('base', { 
    schema: { 
        color1: {type: 'string', default: 'red'},
        color2: {type: 'string', default: 'purple'},
        stage: {type: 'number', default: 3},
        showOperations: {type: 'boolean', default: false}

    },
    init: function (){ 
        this.base = document.createElement('a-cylinder');
        this.base.setAttribute('id', 'Base');
        this.base.setAttribute('position', '0 0 0');
        this.base.setAttribute('rotation', '0 0 0');
        this.base.setAttribute('scale', '1.5 1 1.5');
        this.base.setAttribute('color', this.data.color1);
        this.base.setAttribute('visible', 'true');

        this.cube = document.createElement('a-box');
        this.cube.setAttribute('id', 'cube');
        this.cube.setAttribute('position', '0 -0.2 1.35');
        this.cube.setAttribute('rotation', '0 0 0');
        this.cube.setAttribute('scale', '0.7 0.6 0.75');
        this.cube.setAttribute('material', 'opacity: 0.4; color: blue');
        this.cube.setAttribute('visible', this.data.showOperations);


        if(this.data.stage == 1){
            this.el.appendChild(this.cube);
            this.base.setAttribute('csg-meshs', 'subtract: #cube');
            this.el.appendChild(this.base);
            return;
        }

        this.cylinder = document.createElement('a-cylinder');
        this.cylinder.setAttribute('id', 'cylinder');
        this.cylinder.setAttribute('position', '0 0 0');
        this.cylinder.setAttribute('rotation', '0 0 0');
        this.cylinder.setAttribute('scale', '1.45 1.1 1.45');
        this.cylinder.setAttribute('material', 'opacity: 0.4; color: blue');
        this.cylinder.setAttribute('visible', this.data.showOperations);

        this.cube.setAttribute('visible', false);

        if(this.data.stage == 2){
            this.base.setAttribute('csg-meshs', 'subtract: #cube, #cylinder');
            this.el.appendChild(this.cube);
            this.el.appendChild(this.cylinder);
            this.el.appendChild(this.base);
        }

        this.strips = document.createElement('a-entity');
        this.strips.setAttribute('id', 'strips');
        this.strips.setAttribute('strips', 'color1: ' + this.data.color2 +'; stage: 1');
        this.strips.setAttribute('position', '0 0 0');
        this.strips.setAttribute('rotation', '0 0 0');
        this.strips.setAttribute('scale', '2 1 2');

        this.strips2 = document.createElement('a-entity');
        this.strips2.setAttribute('id', 'strips2');
        this.strips2.setAttribute('strips', 'color1: yellow; opacity: 0.4 ; stage: 1');
        this.strips2.setAttribute('position', '0 0 0');
        this.strips2.setAttribute('rotation', '0 0 0');
        this.strips2.setAttribute('scale', '2 1 2');
        this.strips2.setAttribute('visible', this.data.showOperations);

        this.cylinder.setAttribute('visible', false);

        this.strips.setAttribute('csg-meshs', 'intersect: #Base; subtract: #cylinder, #cube');
        this.base.setAttribute('csg-meshs', 'subtract: #cube, #cylinder, #strips2');
        this.el.appendChild(this.strips);
        this.el.appendChild(this.strips2);
        this.el.appendChild(this.cube);
        this.el.appendChild(this.cylinder);
        this.el.appendChild(this.base);
    }
});

// ====================  DOOR COMPONENT ================================================================================
AFRAME.registerComponent('door', { 
    schema: { 
        color1: {type: 'string', default: 'red'}, 
        stage: {type: 'number', default: 3},
        showOperations: {type: 'boolean', default: false}

    },
    init: function (){ 
        const door = document.createElement('a-box');
        door.setAttribute('id', 'Door');
        door.setAttribute('position', '0 0 0');
        door.setAttribute('rotation', '0 0 0');
        door.setAttribute('scale', '3 1.5 0.05');
        door.setAttribute('color', this.data.color1);
        door.setAttribute('visible', 'true');

        const cube2 = document.createElement('a-box');
        cube2.setAttribute('id', 'cube2');
        cube2.setAttribute('position', '0 -0.5 0');
        cube2.setAttribute('rotation', '0 0 0');
        cube2.setAttribute('scale', '2.55 1 0.1');
        cube2.setAttribute('material', 'opacity: 0.4; color: blue');
        cube2.setAttribute('visible', this.data.showOperations);

        
        this.el.appendChild(cube2);
        door.setAttribute('csg-meshs', 'subtract: #cube2');
        this.el.appendChild(door);
        

    }
});

// ====================  GROUND COMPONENT ================================================================================

AFRAME.registerComponent('ground', { 
    schema: { 
        color1: {type: 'string', default: 'red'},
        color2: {type: 'string', default: 'purple'},
        stage: {type: 'number', default: 3},
        showOperations: {type: 'boolean', default: false}

    },
    init: function (){ 
        const ground = document.createElement('a-sphere');
        ground.setAttribute('id', 'Ground');
        ground.setAttribute('position', '0 0 0');
        ground.setAttribute('rotation', '0 0 0');
        ground.setAttribute('scale', '1 1 1');
        ground.setAttribute('color', this.data.color1);
        ground.setAttribute('visible', 'true');

        const cylinder3 = document.createElement('a-cylinder');
        cylinder3.setAttribute('id', 'cylinder3');
        cylinder3.setAttribute('position', '0 0.5 0');
        cylinder3.setAttribute('rotation', '0 0 0');
        cylinder3.setAttribute('scale', '1 1 1');
        cylinder3.setAttribute('material', 'opacity: 0.4; color: blue');
        cylinder3.setAttribute('visible', this.data.showOperations);

        if(this.data.stage == 1){
            this.el.appendChild(cylinder3);
            ground.setAttribute('csg-meshs', 'subtract: #cylinder3');
            this.el.appendChild(ground)
            return;
        }

        const cylinder4 = document.createElement('a-cylinder');
        cylinder4.setAttribute('id', 'cylinder4');
        cylinder4.setAttribute('position', '0 -0.05 0');
        cylinder4.setAttribute('rotation', '0 0 0');
        cylinder4.setAttribute('scale', '1.1 0.1 1.1');
        cylinder4.setAttribute('material', 'opacity: 0.4; color: yellow');
        cylinder4.setAttribute('visible', this.data.showOperations);

        const grass = document.createElement('a-sphere');
        grass.setAttribute('id', 'grass');
        ground.setAttribute('position', '0 0 0');
        ground.setAttribute('rotation', '0 0 0');
        ground.setAttribute('scale', '1 1 1');
        grass.setAttribute('color', this.data.color2);
        grass.setAttribute('visible', 'true');

        cylinder3.setAttribute('visible', false);
        ground.setAttribute('csg-meshs', 'subtract: #cylinder3, #cylinder4');
        grass.setAttribute('csg-meshs', 'intersect: #cylinder4');
        this.el.appendChild(cylinder3);
        this.el.appendChild(cylinder4);
        this.el.appendChild(grass);
        this.el.appendChild(ground);
        
    }
});

// ================================= MISC OBJECTS

AFRAME.registerComponent('strips', { 
    schema: { 
        color1: {type: 'string', default: 'blue'}, 
        opacity: {type: 'number', default: 1},
        stage: {type: 'number', default: 2}
    },
    init: function (){ 
        const strip1 = document.createElement('a-box');
        strip1.setAttribute('id', 'strip1');
        strip1.setAttribute('position', '0 0 0');
        strip1.setAttribute('rotation', '0 0 0');
        strip1.setAttribute('scale', '1.7 1 ' +  0.1);
        strip1.setAttribute('color', this.data.color1);
        strip1.setAttribute('opacity', this.data.opacity);

        const strip2 = document.createElement('a-box');
        strip2.setAttribute('id', 'strip1');
        strip2.setAttribute('position', '0 0 0');
        strip2.setAttribute('rotation', '0 15 0');
        strip2.setAttribute('scale', '1.7 1 ' +  0.1);
        strip2.setAttribute('color', this.data.color1);
        strip2.setAttribute('opacity', this.data.opacity);

        const strip3 = document.createElement('a-box');
        strip3.setAttribute('id', 'strip1');
        strip3.setAttribute('position', '0 0 0');
        strip3.setAttribute('rotation', '0 30 0');
        strip3.setAttribute('scale', '1.7 1 ' +  0.1);
        strip3.setAttribute('color', this.data.color1);
        strip3.setAttribute('opacity', this.data.opacity);

        const strip4 = document.createElement('a-box');
        strip4.setAttribute('id', 'strip1');
        strip4.setAttribute('position', '0 0 0');
        strip4.setAttribute('rotation', '0 45 0');
        strip4.setAttribute('scale', '1.7 1 ' +  0.1);
        strip4.setAttribute('color', this.data.color1);
        strip4.setAttribute('opacity', this.data.opacity);

        const strip5 = document.createElement('a-box');
        strip5.setAttribute('id', 'strip1');
        strip5.setAttribute('position', '0 0 0');
        strip5.setAttribute('rotation', '0 60 0');
        strip5.setAttribute('scale', '1.7 1 ' +  0.1);
        strip5.setAttribute('color', this.data.color1);
        strip5.setAttribute('opacity', this.data.opacity);

        const strip6 = document.createElement('a-box');
        strip6.setAttribute('id', 'strip1');
        strip6.setAttribute('position', '0 0 0');
        strip6.setAttribute('rotation', '0 75 0');
        strip6.setAttribute('scale', '1.7 1 ' +  0.1);
        strip6.setAttribute('color', this.data.color1);
        strip6.setAttribute('opacity', this.data.opacity);

        const strip7 = document.createElement('a-box');
        strip7.setAttribute('id', 'strip1');
        strip7.setAttribute('position', '0 0 0');
        strip7.setAttribute('rotation', '0 90 0');
        strip7.setAttribute('scale', '1.7 1 ' +  0.1);
        strip7.setAttribute('color', this.data.color1);
        strip7.setAttribute('opacity', this.data.opacity);

        const strip8 = document.createElement('a-box');
        strip8.setAttribute('id', 'strip1');
        strip8.setAttribute('position', '0 0 0');
        strip8.setAttribute('rotation', '0 105 0');
        strip8.setAttribute('scale', '1.7 1 ' +  0.1);
        strip8.setAttribute('color', this.data.color1);
        strip8.setAttribute('opacity', this.data.opacity);

        const strip9 = document.createElement('a-box');
        strip9.setAttribute('id', 'strip1');
        strip9.setAttribute('position', '0 0 0');
        strip9.setAttribute('rotation', '0 120 0');
        strip9.setAttribute('scale', '1.7 1 ' +  0.1);
        strip9.setAttribute('color', this.data.color1);
        strip9.setAttribute('opacity', this.data.opacity);

        const strip10 = document.createElement('a-box');
        strip10.setAttribute('id', 'strip1');
        strip10.setAttribute('position', '0 0 0');
        strip10.setAttribute('rotation', '0 135 0');
        strip10.setAttribute('scale', '1.7 1 ' +  0.1);
        strip10.setAttribute('color', this.data.color1);
        strip10.setAttribute('opacity', this.data.opacity);

        const strip11 = document.createElement('a-box');
        strip11.setAttribute('id', 'strip1');
        strip11.setAttribute('position', '0 0 0');
        strip11.setAttribute('rotation', '0 150 0');
        strip11.setAttribute('scale', '1.7 1 ' +  0.1);
        strip11.setAttribute('color', this.data.color1);
        strip11.setAttribute('opacity', this.data.opacity);

        const strip12 = document.createElement('a-box');
        strip12.setAttribute('id', 'strip1');
        strip12.setAttribute('position', '0 0 0');
        strip12.setAttribute('rotation', '0 165 0');
        strip12.setAttribute('scale', '1.7 1 ' +  0.1);
        strip12.setAttribute('color', this.data.color1);
        strip12.setAttribute('opacity', this.data.opacity);

        if(this.data.stage == 1){
            this.el.appendChild(strip1);
            this.el.appendChild(strip2);
            this.el.appendChild(strip3);
            this.el.appendChild(strip4);
            this.el.appendChild(strip5);
            this.el.appendChild(strip6);
            this.el.appendChild(strip7);
            this.el.appendChild(strip8);
            this.el.appendChild(strip9);
            this.el.appendChild(strip10);
            this.el.appendChild(strip11);
            this.el.appendChild(strip12);
            return;
        }
        
        this.el.appendChild(strip1);
        this.el.appendChild(strip3);
        this.el.appendChild(strip5);
        this.el.appendChild(strip7);
        this.el.appendChild(strip9);
        this.el.appendChild(strip11);

    }
});

AFRAME.registerComponent('freeze-csg-result', {
    schema: {
        source: { type: 'selector' },
        color: { type: 'color', default: null }, // Se não for definido, mantem a cor original
        delay: { type: 'number', default: 500 }, // Atraso em ms
        opacity: { type: 'number', default: 1 }  // Se não definido, opacidade = 1 (opaco)
    },
    init: function() {
        this.copied = false;
        this.copyScheduled = false;
    },
    tick: function() {
        if (this.copied || this.copyScheduled) return;

        const sourceEl = this.data.source;
        if (!sourceEl) {
            console.warn("freeze-csg-result: Nenhuma fonte definida ou não encontrada.");
            return;
        }

        const sourceCSGEntity = sourceEl.hasAttribute('csg-meshs') 
            ? sourceEl 
            : sourceEl.querySelector('[csg-meshs]');

        if (!sourceCSGEntity) {
            console.warn("freeze-csg-result: Não encontrou entidade com csg-meshs na fonte.");
            return;
        }

        const mesh = sourceCSGEntity.getObject3D('mesh');
        if (!mesh) {
            return; // Ainda não está pronto
        }

        this.copyScheduled = true;
        setTimeout(() => {
            const clonedMesh = mesh.clone(true);

        // Função auxiliar para clonar material e aplicar cor/opacidade se necessário
        const applyMaterialProperties = (originalMat) => {
            const newMat = originalMat.clone();

            // Aplica cor se fornecida
            if (this.data.color !== null) {
                newMat.color.set(this.data.color);
            }

            // Aplica opacidade se diferente de 1
            if (this.data.opacity !== 1) {
                newMat.opacity = this.data.opacity;
                newMat.transparent = this.data.opacity < 1;
            }

            return newMat;
        };

        if (Array.isArray(clonedMesh.material)) {
            clonedMesh.material = clonedMesh.material.map(m => applyMaterialProperties(m));
        } else {
            clonedMesh.material = applyMaterialProperties(clonedMesh.material);
        }

        this.el.setObject3D('mesh', clonedMesh);

        console.log(`freeze-csg-result: Mesh clonada após ${this.data.delay}ms.` +
            (this.data.color !== null ? ` Cor alterada para ${this.data.color}.` : ' Cor mantida.') +
            (this.data.opacity !== 1 ? ` Opacidade: ${this.data.opacity}.` : ' Opacidade mantida (1).')
        );

        this.copied = true;
        }, this.data.delay);
    }
});