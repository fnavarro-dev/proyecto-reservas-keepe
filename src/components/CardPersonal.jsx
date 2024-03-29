import React from "react";
import "../Assets/css/styleCardPersonal.css";
import cardBeli from "../Assets/IMG/cardBeli.png";
import cardAlfo from "../Assets/IMG/cardAlfo.png";
import cardAri from "../Assets/IMG/cardAri.png";
import cardFran from "../Assets/IMG/cardFran.png";
import cardCono from "../Assets/IMG/cardCono.png";
import iconoLinkedIn from "../Assets/IMG/iconoLinkedIn.png";

const CardPersonalComponent = () => {
  return (
    <div class="row justify-content-center mb-5">
      <h1 className="text-center titulo-principal-color ">
        ¡Estas a cargo de los mejores!
      </h1>
      <div class="col-lg-2 col-xs-4 col-medidas mb-2">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cardBeli}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/belén-oyarce-santibáñez/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </a>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">Belén Oyarce</h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            “Scrum Master”
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-2">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cardAlfo}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <a target="_blank" href="https://www.linkedin.com/in/alfonsovs/">
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </a>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Alfonso Vilches
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            “Product Owner”
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-2">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cardAri}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ariel-sepulveda-596435238/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </a>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Ariel Sepúlveda
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            “Developer”
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-2">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cardFran}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/francisco-navarro-flores/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </a>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Francisco Navarro
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            “Developer”
          </h3>
        </div>
      </div>
      <div class="col-lg-2 col-xs-4 col-medidas mb-5 mb-2">
        <div class="card mx-auto my-5 bg-card ">
          <div class="row">
            <div className="col-8">
              <img
                src={cardCono}
                alt="Foto del rostro de la persona 1"
                class="mx-auto d-block pb-5 pt-2 bg-image"
              />
            </div>
            <div className="col-4 mt-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/constanza-sanchez-019205181/"
              >
                <img
                  src={iconoLinkedIn}
                  alt="Icono de la persona 1"
                  class="small rounded-circle mx-auto d-block bg-linkedin"
                />
              </a>
            </div>
          </div>
          <h3 class="card-title text-center mt-2 titulo-color">
            Constanza Sánchez
          </h3>
          <h3 class="card-title text-center mt-2 mb-5 titulo-color2">
            “Developer”
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardPersonalComponent;
