window.onload = function () {
  const select = document.getElementById("ubicaciones");
  const provincia = document.getElementById("provincia");
  const direccion = document.getElementById("direccion");

  // if (!select || !provincia || !direccion) {
  //   console.error("Error: No se encontraron los elementos en el HTML.");
  //   return;
  // }

  const ubicaciones = {
    alajuela: `
			<h1 style="color: rgb(0, 0, 0); font-size: 2.5rem;">
				Alajuela
			</h1>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Frente a la Plaza de Deportes, Bª Fatima
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Local 64, Centro Comercial Milenium 
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				c.115, Av.97.
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Alajuela. Costa Rica
			</p>
		`,
    cartago: `
			<h1 style="color: rgb(0, 0, 0); font-size: 2.5rem;">
				Cartago
			</h1>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				50 metros norte de la iglesia católica
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Bº San Francisco de Asís
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				c. El Molino, Av.5.
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Cartago. Costa Rica
			</p>
		`,
    guanacaste: `
			<h1 style="color: rgb(0, 0, 0); font-size: 2.5rem;">
				Guanacaste
			</h1>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				200 mts norte de escuela Cruz Faith
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Bª Capulín, Liberia
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				c. Los Olivos, Av. La Granja.
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Guanacaste. Costa Rica
			</p>
		`,
    heredia: `
			<h1 style="color: rgb(0, 0, 0); font-size: 2.5rem;">
				Heredia
			</h1>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				75 metros norte del Supermercado Palí
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Lomas de Macondo
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				c.7, Av.1.
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Alajuela. Costa Rica
			</p>
		`,
    san_jose: `
			<h1 style="color: rgb(0, 0, 0); font-size: 2.5rem;">
				San José
			</h1>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Frente a Mundo de Tiliches, Bº New Brooklyn
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				Local 7, Complejo Automotriz Luxury
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				c. Los Madriz, Av. San Pedro.
			</p>
			<p style="color: rgb(0, 0, 0); font-size: 1.5rem; line-height: 0.5;">
				San José. Costa Rica
			</p>
		`,
  };

  function mostrarUbicacion(valor) {
    provincia.innerHTML = `<img src="images/${valor}.jpg" style="height: 344px; width: 296px; margin: 0px 30px; border-radius: 10px; box-shadow: 0px 0px 15px 7px rgba(210,210,210,0.75);" alt="estadio" />`;
    direccion.innerHTML = ubicaciones[valor] || '<p style="color: red;">Ubicación no disponible</p>';
  }

  select.onchange = function () {
    mostrarUbicacion(select.value);
  };

  if (select.options.length > 0) {
    select.selectedIndex = 0;
    mostrarUbicacion(select.value);
  }
};
