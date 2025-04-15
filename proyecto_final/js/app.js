function goBack() {
  const ref = document.referrer;
  if (ref.includes('inicio.html')) {
    history.back();
  } else {
    window.location.href = 'landing.html';
  }
}

const container = document.getElementById("app-container");
const workshop_front_img = document.getElementById("workshop_front_img");
const workshop_front_alt = document.getElementById("workshop_front_alt");
const workshop_front_container = document.getElementById("workshop_front_container");
const toolbox_container = document.getElementById("toolbox_container")
const toolbox_video = document.getElementById("toolbox_video")
const panorama = new PANOLENS.ImagePanorama("../images/panolense/car_workshop_pan.png");

const balanceador_llantas = new PANOLENS.Infospot(64, 'images/panolense/tire-balance.png');
balanceador_llantas.position.set(500 ,-69 , -499);
balanceador_llantas.addHoverText("", -260);
balanceador_llantas.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Balanceador de llantas
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Diseñada para detectar desequilibrios en las ruedas y garantizar un rendimiento óptimo del vehículo. Asegura una conducción suave y reduce el desgaste irregular de los neumáticos.
    </p>
  </div>
`;

const destalonadora = new PANOLENS.Infospot(64, 'images/panolense/tire-pressure-warning.png');
destalonadora.position.set(302, -155, -500);
destalonadora.addHoverText("", 60);
destalonadora.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Destalonadora
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Equipo diseñado para desmontar neumáticos de forma rápida y segura. Facilita la separación del talón de la llanta sin dañar la rueda, optimizando el trabajo en talleres de llantas y mecánica.
    </p>
  </div>
`;

const extractor_liquido_frenos = new PANOLENS.Infospot(64, 'images/panolense/brake.png');
extractor_liquido_frenos.position.set(-124, -123, -500);
extractor_liquido_frenos.addHoverText("", 60);
extractor_liquido_frenos.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Extractor de Liquido de Frenos
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Permite una extracción rápida, limpia y segura del fluido de frenos, facilitando el mantenimiento del sistema hidráulico sin contaminar componentes.
    </p>
  </div>
`;

const alineacion_direccion = new PANOLENS.Infospot(64, 'images/panolense/wheel-alignment.png');
alineacion_direccion.position.set(-500, 97, 19);
alineacion_direccion.addHoverText("", -270);
alineacion_direccion.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Alineador de dirección
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Diseñada para calibrar el ángulo de las ruedas, evitando el desgaste irregular de los neumáticos, y garantizando una conducción segura y estable.
    </p>
  </div>
`;

const elevador_hidraulico = new PANOLENS.Infospot(64, 'images/panolense/car-jack.png');
elevador_hidraulico.position.set(-500, -38, 468);
elevador_hidraulico.addHoverText("", -256);
elevador_hidraulico.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Elevador hidraulico
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Permite levantar vehículos con facilidad y seguridad para realizar mantenimiento, inspecciones o reparaciones en la parte inferior. 
    </p>
  </div>
`;

const prensa_hidraulica = new PANOLENS.Infospot(48, 'images/panolense/hydraulic-pressure.png');
prensa_hidraulica.position.set(-500 ,-87 , -176);
prensa_hidraulica.addHoverText("", -256);
prensa_hidraulica.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Prensa hidraulica
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: justified;">
      Funciona mediante un sistema de cilindros y fluido hidráulico, y se emplea comúnmente para tareas como extraer e instalar rodamientos, bujes, engranajes, y enderezar piezas metálicas. 
    </p>
  </div>
`;

const horario = new PANOLENS.Infospot(48, 'images/panolense/clock.png');
horario.position.set(500 ,-44 , -8);
horario.addHoverText("", -226);
horario.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 260px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Horario de atención
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: center;">
      Lun-Vie: 8:00 am - 5:00 pm<br>
      Sáb: 9:00 am - 4:00 pm<br>
      Dom: Cerrado
    </p>
  </div>
`;

///////////////////////////////////////////////////
////////////////////  VIDEO  //////////////////////
///////////////////////////////////////////////////

const gabinete_herramientas = new PANOLENS.Infospot(64, 'images/panolense/tool.png');
gabinete_herramientas.position.set(-500 ,-129 , 101);
gabinete_herramientas.addHoverText("", 36);
gabinete_herramientas.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Gabinete de herramientas
    </h1> 
      <p style="font-size: 16px; padding: 24px; text-align: center;">
      Clic en el boton para abrir el video.
    </p>
  </div>
`;
gabinete_herramientas.addEventListener('click', function() {
  const videoId = "df4_C9ez3oQ";
  toolbox_container.style.display = "block";
  toolbox_video.innerHTML = `<iframe id="${videoId}" width="1280" src="https://www.youtube.com/embed/df4_C9ez3oQ?enablejsapi=1&autoplay=1" title="Gabinetes configurables Knova" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
});

const toolbox_close_video = document.getElementById("toolbox_close_video")
toolbox_close_video.addEventListener('click', function() {
  controlVideo("stopVideo");
  toolbox_container.style.display = "none";
});

function controlVideo(action) {
  const iframe = toolbox_video.querySelector('iframe');
  if (iframe) {
    iframe.contentWindow.postMessage(`{"event":"command","func":"${action}"}`, "*");
  }
}

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const encendido_auto = new PANOLENS.Infospot(48, 'images/panolense/horn.png');
encendido_auto.position.set(131 ,-73 , 500);
encendido_auto.addHoverText("", 60);
encendido_auto.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); color: #000; border-radius: 100px; padding: 40px; font-size: 16px; border: 1px solid white;">
        <audio controls>
            <source src="media/car-ignition.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>
`;

const info = new PANOLENS.Infospot(32, 'images/panolense/information-button.png');
info.position.set(246 ,73 , -500);
info.addHoverText("", -236);
info.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
    <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
      Hoja de recepción en taller
    <h2/>
    <p style="font-size: 16px; padding: 24px; text-align: center;">
      Haz clic en el icono para ver ejemplo de hoja de recepcion en taller.
    </p>
  </div>
`;
info.addEventListener('click', function() {window.open("documents/ht-taller.pdf", "_blank");});

///////////////////////////////////////////////////
//////////////////////  IMAGEN  ///////////////////
///////////////////////////////////////////////////

const workshop_front = new PANOLENS.Infospot(48, 'images/panolense/image.png');
workshop_front.position.set(500 ,140 , -6);
workshop_front.addHoverText("", -316);
workshop_front.element.innerHTML =`
  <div style="background-color: rgba(0, 0, 0, 0.8); border: 1px solid rgba(255, 255, 255, 0.8); color: #fff; border-radius: 15px; width: 400px;">
  <h2 style="text-align: center; font-size: 22px; padding: 20px; width: 100%; background-color: white; color: black; border-radius: 15px 15px 0px 0px;">
  Imagen de taller
  <h2/>
  <div style="display: flex; justify-content: center; align-items: center; padding: 20px;">
    <img src="images/panolense/workshop-front.jpg" style="width: 300px">
  </div>
  
    <p style="font-size: 16px; padding: 24px; text-align: center;">
      Haz clic en el icono para abrir la imagen.
    </p>
  </div>
`;
workshop_front.addEventListener('click', function() {
  workshop_front_container.style.display = "block";
  workshop_front_img.src = workshop_front_img.src;
  workshop_front_alt.innerHTML = workshop_front_img.alt;
});

const workshop_close_img = document.getElementById("workshop_close_img")
workshop_close_img.addEventListener('click', function() {
    workshop_front_container.style.display = "none";
});

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

panorama.add(extractor_liquido_frenos);
panorama.add(gabinete_herramientas);
panorama.add(alineacion_direccion);
panorama.add(balanceador_llantas);
panorama.add(elevador_hidraulico);
panorama.add(prensa_hidraulica);
panorama.add(workshop_front);
panorama.add(encendido_auto);
panorama.add(destalonadora);
panorama.add(horario);
panorama.add(info);

viewer = new PANOLENS.Viewer({
  container: container,
  output: "fullscreen",
  autohideInfospot: false,
});

viewer.add(panorama);
