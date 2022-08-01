//three js code of all the products in our mall
var my_scene = document.querySelector("a-scene");
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "74 0 -130");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto");
AFRAME.registerComponent("do-something-once-loaded", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Ready Player Me\n Men's Stylish Jackket&itemrating=3.9&price=5000&product=./products/p1.glb&description=Biker Jacket,Pattern Solid,Regular fit Jacket&scale=3.7 3.7 3.7&qr=./qr_code/1p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p1.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 5,000");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "3.9");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.35");
model.setAttribute(
  "troika-text",
  "value",
  "Ready Player Me\nMen's Stylish Jackket"
);
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);

//
//
//
//

var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "83 0 -137");
// sceneEl.setAttribute("position", "110 0 0");
sceneEl.setAttribute("rotation", "0 35 0");
sceneEl.setAttribute("id", "goto1");
AFRAME.registerComponent("do-something-once-loaded-1", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto1");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Mens Casual Wear&itemrating=4.2&price=3500&product=./products/p2.glb&description=Formal,Regular Fit,Solid,Spread,Long Sleeve&scale=3.7 3.7 3.7&qr=./qr_code/2p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p2.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 3,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.2");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.8 0.34");
model.setAttribute("troika-text", "value", "Mens Casual Wear");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-1", "");
my_scene.appendChild(sceneEl);
//
//
//
//

var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "95 0 -147");
// sceneEl.setAttribute("position", "115 0 0");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto2");
AFRAME.registerComponent("do-something-once-loaded-2", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto2");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Mens Stylish Party Coat&itemrating=4.3&price=6500&product=./products/p3.glb&description=Slim Fit,80percent Wool 20 percent Polyester,Lining:100 percent Polyester.Two side pockets and two inner pockets&scale=3.7 3.7 3.7&qr=./qr_code/3p.png `,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p3.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 6,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.3");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.8 0.34");
model.setAttribute("troika-text", "value", "Mens Stylish Party Coat");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-2", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "76 0 -148");
// sceneEl.setAttribute("position", "119 0 0");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto3");
AFRAME.registerComponent("do-something-once-loaded-3", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto3");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Men's Lime Green\nOffice Shirt&itemrating=4.0&price=2500&product=./products/p4.glb&description=Loose Fit
        Fabric : Rayon
        Color : Multi
        Sleeve Type : Fullsleeve
        Can be be styled both as a breezy casual outfit and a playful outfit&scale=3.7 3.7 3.7&qr=./qr_code/4p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p4.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 2,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.0");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Men's Lime Green\nOffice Shirt");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-3", "");
my_scene.appendChild(sceneEl);
//
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "90 0 -156");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto4");
AFRAME.registerComponent("do-something-once-loaded-4", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto4");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Women Stylish Looking\nDress&itemrating=4.5&price=5500&product=./products/p5.glb&description=Fabric - Cotton
        Pattern - Solid
        Neck style - Shirt Collar
        Closure Type - Button
        Sleeve Length - Short Sleeves&scale=3.7 3.7 3.7&qr=./qr_code/5p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p5.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 5,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.5");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women Stylish Looking\nDress");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-4", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "67 0 -136");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto5");
AFRAME.registerComponent("do-something-once-loaded-5", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto5");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Women Party Wear\nDress&itemrating=4.2&price=5500&product=./products/p6.glb&description=Fit Type: Slim Fit
        Material: 95 percent Cotton 5 percent Polyester, Pattern: Solid
        Sleeve: Sleeveless, Neck: Mock Neck
        Fit Type: Slim Fit, Closure: Pull On&scale=3.7 3.7 3.7&qr=./qr_code/6p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p6.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 5,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.2");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women Party Wear\nDress");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-5", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "111 0 -159");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto6");
AFRAME.registerComponent("do-something-once-loaded-6", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto6");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Women's Beautiful Pink\nDress&itemrating=3.8&price=2500&product=./products/p7.glb&description=Type: Regular
        Material: Cotton , Color : Multicolor , Printed ,Sleeve - 4 Inches
        Item Length : 4 Feet ( 49 Inches) ,Chest Size : Free Size (Up To 44 Inches -Xxl)
        Fit Style : Regular Fit ,Package Contents: 1 Midi Dress; Neck Type And Sleeves: Round Neck & Short Sleeve Attached Inside&scale=3.7 3.7 3.7&qr=./qr_code/7p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p7.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 2,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "3.8");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women's Beautiful Pink\nDress");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-6", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "105 0 -164");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto7");
AFRAME.registerComponent("do-something-once-loaded-7", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto7");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Women's Indian Casual\nWear&itemrating=4.3&price=4500&product=./products/p8.glb&description=Fabric detail: Beautiful Stitched 100 percent pure Cotton printed Salwar Suit For women
        Readymade Stitched Fabric Set: Stitched Cotton Top, Stitched Cotton Bottom and Stitched Cotton Dupatta&scale=3.7 3.7 3.7&qr=./qr_code/8p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p8.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 4,500");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.3");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women's Indian Casual\nWear");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-7", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "129 0 -173");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto8");
AFRAME.registerComponent("do-something-once-loaded-8", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto8");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Women's Sizzling Red\nParty Dress&itemrating=4.1&price=4000&product=./products/p9.glb&scale=3.7 3.7 3.7&description=Long sleeve
        Classic notch lapel
        Two button front, double breasted
        Two hand pockets, four colors available
        Plain design, simple but fashion, essential wool coat
        &qr=./qr_code/9p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p9.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 4,000");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.1");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women's Sizzlig Red\nParty Dress");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-8", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "57 0 -145");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto9");
AFRAME.registerComponent("do-something-once-loaded-9", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto9");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Indian Women's Salwar\nSuit&itemrating=4.2&price=3750&product=./products/p10.glb&scale=3.7 3.7 3.7&description=Fabric detail: Beautiful Stitched 100 percent pure Cotton printed Salwar Suit For women
        Readymade Stitched Fabric Set: Stitched Cotton Top, Stitched Cotton Bottom and Stitched Cotton Dupatta&qr=./qr_code/10p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/p10.glb");
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", "Rs 3,750");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.2");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Indian Women's Salwar\nSuit");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-9", "");
my_scene.appendChild(sceneEl);
//
//
//
//
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "16 0 -185");
// sceneEl.setAttribute("position", "55 0 -175");
// sceneEl.setAttribute("rotation", "0 -30 0");
sceneEl.setAttribute("rotation", "0 -47 0");
sceneEl.setAttribute("id", "goto10");
AFRAME.registerComponent("do-something-once-loaded-10", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto10");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=ELTOP Lifestyle Nano Fabric\nSofa Set&itemrating=4.1&price=24,999&product=./products/sofa1/scene.gltf&scale=0.35 0.18 0.18&description=Type	Sectional
        Room Type	Living Room
        Seating Capacity	3
        Product Dimensions	20D x 25W x 30H Centimeters&qr=./qr_code/p12.png`,
        "_blank"
      );
    }); //ELTOP Lifestyle Nano Fabric\nSofa Set\n\nRs 24,999\nRated-4.1/5
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/sofa1/scene.gltf");
entityEl.setAttribute("position", "0 3.5 -2");
// entityEl.setAttribute("scale", "0.1 0.06 0.06");
entityEl.setAttribute("scale", "1.4 1 1");
sceneEl.appendChild(entityEl);
//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 7");
model.setAttribute("radius", "16");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 4; height: 3.2;depth: 0.1"
);
model.setAttribute("rotation", "-14 70 0");
model.setAttribute("position", "16 5.1 2");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-entity");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "16.1 5.9 2");
model.setAttribute("rotation", "0 70 0");
model.setAttribute(
  "troika-text",
  "value",
  "\nELTOP Lifestyle Nano Fabric\nSofa Set\n\nRs 24,999\nRated-4.1/5"
);
model.setAttribute("scale", "1.3 1.3 1.3");
model.setAttribute("troika-text", "color", "black");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-10", "");
my_scene.appendChild(sceneEl);
//
//
///
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "15 0 -180");
sceneEl.setAttribute("position", "52 0 -192");
sceneEl.setAttribute("rotation", "0 -30 0");
// sceneEl.setAttribute("rotation", "0 -47 0");
sceneEl.setAttribute("id", "goto11");
AFRAME.registerComponent("do-something-once-loaded-11", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto11");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Sekar Lifestyle Polyurethane \nFabric Sofa Set&itemrating=4.2&price=26,999&product=./products/sofa/scene.gltf&scale=0.035 0.016 0.016&description=Product Material: Original solid Sheesham Wood.
        Product Dimension: Length (71 inch), Width (29 inch), Height (32 inch) Meatrial: Sheesham Wood, Seating Capacity: 3 Seat
        Color: (Honey Finish)Cushion: Beige color, Style: Contemporary&qr=./qr_code/p11.png`,
        "_blank"
      );
    });
  },
}); //Sekar Lifestyle Polyurethane \nFabric Sofa Set\n\nRs 26,999\nRated-4.2/5

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/sofa/scene.gltf");
entityEl.setAttribute("position", "0 2.1 0");
entityEl.setAttribute("scale", "0.1 0.06 0.06");
// entityEl.setAttribute("scale", "1.4 1 1");
sceneEl.appendChild(entityEl);
//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "-6 1 -9");
model.setAttribute("radius", "18.5");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 4; height: 3.2;depth: 0.1"
);
model.setAttribute("rotation", "-14 70 0");
model.setAttribute("position", "8 5.1 2");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-entity");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "8.1 5.9 2.05");
model.setAttribute("rotation", "0 70 0");
model.setAttribute(
  "troika-text",
  "value",
  "\nSekar Lifestyle Polyurethane \nFabric Sofa Set\n\nRs 26,999\nRated-4.2/5"
);
model.setAttribute("scale", "1.3 1.3 1.3");
model.setAttribute("troika-text", "color", "black");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-11", "");
my_scene.appendChild(sceneEl);
