let currentMarkerPosition = 0;
const moveClasses = [
  "0", "100", "200", "300", "400", "500", "600"
].map(position => `move-to-${position}`);


function toggleList(listId, imageTriangle) {
    var list = document.getElementById(listId);
    var image = document.getElementById(imageTriangle);
    if (list.style.display === "none") {
        list.style.display = "block";
        image.src = '/Images/triangule down Nosotros.png'
    } else {
        list.style.display = "none";
        image.src = "/Images/triangule right Nosotros.png";
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector(".left-arrow-button");
    const rightButton = document.querySelector(".right-arrow-button");
    const timeLineYearMarker = Array.from(document.querySelectorAll(".year-marker"));
    const seeMoreButtons = document.querySelectorAll('.see-more');
    const displayText = document.getElementById('display-text');

    function moveAllMarkers(amount) {
        return () => {
            currentMarkerPosition = Math.max((amount + currentMarkerPosition) % moveClasses.length, 0)
            const newMovePositionClass = moveClasses[currentMarkerPosition]

            timeLineYearMarker.forEach(marker => {
                const isUp = marker.className.includes("up")
                const directionClass = (isUp) ? "up" : "down"
                marker.className = `year-marker ${directionClass} ${newMovePositionClass}`
            })
        }
    }

    rightButton.addEventListener("click", moveAllMarkers(1))
    leftButton.addEventListener("click", moveAllMarkers(-1))

    const texts = {
        "2006": {
            h2: "Fundación de Adwise",
            h3: "2006",
            text: "La firma comenzó en el 2006 con oficinas en Costa Rica y un enfoque en soluciones de capital humano para la región."
        },
        "2008": {
            h2: "Ampliación de soluciones",
            h3: "2008",
            text: `En 2008, la empresa comenzó a ofrecer nuevas soluciones en otras áreas de negocio, específicamente en el campo de la optimización de procesos. Abrió sus primeras oficinas fuera de Costa Rica en Panamá y Trinidad y Tobago, se implementó un entrenamiento de alto nivel para el SM JALEEL en Trinidad y Tobago, compartió otras iniciativas de coaching en República Dominicana.`
        },
        "2009": {
            h2: "Transnacionales en Centroamérica y el Caribe",
            h3: "2009",
            text: "En 2009, la firma se centró en empresas transnacionales en Centroamérica y el Caribe y diseñó la estrategia que llevó a TETRA PAK Centroamérica & Caribe a ganar el premio mundial «Market Region of the Year 2008»."
        },
        "2010": {
            h2: "Sucursal en Bogotá, Colombia",
            h3: "2010",
            text: "En 2010, la firma abrió una sucursal en Bogotá, Colombia y se incorporó la división de calidad, desarrollando nuevas soluciones de negocio en cada una de sus áreas de especialización. También comenzó a trabajar con Scotiabank en Panamá y Costa Rica en proyectos de outsourcing y headhunting."
        },
        "2010.5": {
            h2: "Nuevos consultores y directores",
            h3: "2010",
            text: "La firma incorporó nuevos consultores y directores en 2010 y logró concluir un proyecto de optimización con ahorros significativos en la cadena de abastecimiento para TETRA PAK en Panamá."
        },
        "2011": {
            h2: "Marca Adwise",
            h3: "2011",
            text: "En el 2011, la Firma comienza a operar bajo la marca ADWISE fortaleciendo y diversificando sus soluciones, de conformidad con las necesidades del mercado y expandiendo su presencia física hacia Centroamérica, Suramérica y el Caribe mediante oficinas de representación y un centro de operaciones comerciales en Miami Fl."
        },
        "2013": {
            h2: "Consolidación de unidad de outsourcing",
            h3: "2013",
            text: "En el año 2013, ADWISE es adjudicada por Scotiabank Costa Rica para implementar exitosamente un proyecto de Outsourcing administrando más de 60 recursos para el banco y asume proyectos de Planillas Administradas para SCOTIABANK en Panamá y Costa Rica.  "
        },
        "2015": {
            h2: "Casa Matriz",
            h3: "2015",
            text: "A partir del año 2015, se reubica la Casa Matriz de la Firma en Ciudad de Panamá, ubicando su Expertise Delivery Center. En el corto y mediano plazo la firma continuará fortaleciendo y diversificando sus soluciones, de conformidad con las necesidades del mercado y expandiendo su presencia física hacia Centroamérica, Suramérica y el Caribe. Actualmente la Firma cuenta con socios en América Latina, Estados Unidos & España."
        }
    };

    seeMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const year = button.getAttribute('data-year');
            const data = texts[year];

            if (data) {
                displayText.innerHTML = '';

                const h2 = document.createElement('h2');
                h2.textContent = data.h2;
                displayText.appendChild(h2);

                const h3 = document.createElement('h3');
                h3.textContent = data.h3;
                displayText.appendChild(h3);

                const p = document.createElement('p');
                p.textContent = data.text;
                displayText.appendChild(p);

                displayText.style.display = 'block'; 
            } else {
                displayText.innerHTML = "<p>No detailed information available for this year</p>";
                displayText.style.display = 'block'; 
            }
        });
    });
});

