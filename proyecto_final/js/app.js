const container = document.getElementById("app-container");
const panorama = new PANOLENS.ImagePanorama("../images/car_workshop_pan.png");

const balanceador_llantas = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
balanceador_llantas.position.set(492, 44, -500);
balanceador_llantas.addHoverText("", -60);
balanceador_llantas.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 20px; width: 300px;">
    <h2 style="text-align: center; font-size: 18px; padding-bottom: 20px;">
      Balanceador de llantas
    <h2/>
    <p style="font-size: 14px;">
      Una máquina de balanceo de llantas es un equipo diseñado para detectar y corregir desequilibrios en las ruedas de un vehículo. Funciona mediante sensores que analizan la distribución del peso en la rueda y determinan dónde se deben colocar contrapesos para equilibrarla.
    </p>
  </div>
`;

const destalonadora = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
destalonadora.position.set(302, -155, -500);
destalonadora.addHoverText("", -60);
destalonadora.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 20px; width: 300px;">
    <h2 style="text-align: center; font-size: 18px; padding-bottom: 20px;">
      Destalonadora
    <h2/>
    <p style="font-size: 14px;">
      La máquina destalonadora de llantas es un equipo diseñado para desmontar y montar neumáticos en rines de manera rápida y eficiente. Su función principal es separar el neumático de la llanta sin dañarlo, facilitando el proceso de cambio, reparación o mantenimiento.
    </p>
  </div>
`;

const extractor_liquido_frenos = new PANOLENS.Infospot(
  50,
  PANOLENS.DataImage.Info
);
extractor_liquido_frenos.position.set(-124, -123, -500);
extractor_liquido_frenos.addHoverText("", -60);
extractor_liquido_frenos.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 20px; width: 400px;">
    <h2 style="text-align: center; font-size: 18px; padding-bottom: 20px;">
      Extractor de Liquido de Frenos
    <h2/>
    <p style="font-size: 14px;">
      La máquina extractora de líquido de frenos es un equipo diseñado para realizar la extracción y reemplazo del fluido de frenos en vehículos de manera eficiente y segura. Su función principal es eliminar el líquido viejo y contaminado del sistema de frenos, evitando la presencia de humedad y aire, lo que garantiza un frenado óptimo y prolonga la vida útil de los componentes del sistema.
    </p>
  </div>
`;

const alineacion_direccion = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
alineacion_direccion.position.set(-500, 97, 19);
alineacion_direccion.addHoverText("", -60);
alineacion_direccion.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 20px; width: 400px;">
    <h2 style="text-align: center; font-size: 18px; padding-bottom: 20px;">
      Alineador de dirección
    <h2/>
    <p style="font-size: 14px;">
      Una máquina de alineación de dirección es un equipo utilizado para medir y ajustar los ángulos de las ruedas de un vehículo, asegurando que estén correctamente alineadas según las especificaciones del fabricante. Su función principal es optimizar la estabilidad, el control y la vida útil de los neumáticos, evitando desgastes irregulares y mejorando la eficiencia del combustible.
    </p>
  </div>
`;

const elevador_hidraulico = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
elevador_hidraulico.position.set(-500, -38, 468);
elevador_hidraulico.addHoverText("", -60);
elevador_hidraulico.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #fff; border-radius: 5px; padding: 20px; width: 400px;">
    <h2 style="text-align: center; font-size: 18px; padding-bottom: 20px;">
      Elevador hidraulico
    <h2/>
    <p style="font-size: 14px;">
      Un elevador hidráulico de plataforma es un equipo utilizado en talleres mecánicos para elevar vehículos de manera segura y estable, facilitando tareas de mantenimiento, reparación y alineación. Funciona mediante un sistema hidráulico que acciona cilindros de elevación, permitiendo al operador levantar el automóvil con poco esfuerzo.
    </p>
  </div>
`;


const gabinete_herramientas = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
const videoId = "gabineteVideo"; // ID único para el iframe
gabinete_herramientas.position.set(-500 ,-129 , 101);
gabinete_herramientas.addHoverText("", -60);
gabinete_herramientas.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: rgb(255, 255, 255); border-radius: 5px; padding: 10px; font-size: 14px; width: 720px;">
    <h1 style="color: rgb(255, 255, 255); text-align: center;">
      Gabinete de herramientas
    </h1>  
    <iframe id="${videoId}" width="720" height="480" src="https://www.youtube.com/embed/df4_C9ez3oQ?enablejsapi=1" title="Gabinetes configurables Knova" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
`;

function controlVideo(action) {
  const iframe = document.getElementById(videoId);
  if (iframe) {
    iframe.contentWindow.postMessage(`{"event":"command","func":"${action}"}`, "*");
  }
}
gabinete_herramientas.addEventListener("hover", () => {
  controlVideo("playVideo");
});
gabinete_herramientas.addEventListener("hoverleave", () => {
  controlVideo("stopVideo");
});

panorama.add(gabinete_herramientas);
panorama.add(balanceador_llantas);
panorama.add(destalonadora);
panorama.add(extractor_liquido_frenos);
panorama.add(alineacion_direccion);
panorama.add(elevador_hidraulico);

viewer = new PANOLENS.Viewer({
  container: container,
  output: "fullscreen",
  autohideInfospot: false,
});

viewer.add(panorama);
