import React, { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavbarKeepeComponent,
  RecintosComponent,
  FooterComponent,
  PromesasComponent,
  CardPersonalComponent,
  FormUserComponent,
  BootCard,
  QuehacemosComponent,
  CarruselMainComponent,
} from "../components";
import { getAllUsers, addUser, editUser, deleteUser } from "../services/User";

const usuario1 = [
  {
    username: "Joseph44",
    fullname: "Joestar Gonzalez",
    password: "1234ju",
    correo: "jo.jo@gmail.com",
    rut: "9864579-0",
    phonenumber: "337534687",
  },
  {
    username: "Joseph44645",
    fullname: "Manolito Hernandez",
    password: "1234ju45",
    correo: "jojojojo@gmail.com",
    rut: "19864579-0",
    phonenumber: "979534687",
  },
];
const HomePage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/", {}, [navigate]));
  const [user, setUser] = useState(usuario1);
  const [usuarioEditado, setUsuarioEditado] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const usuariosBD = await getAllUsers();
    setUser(usuariosBD);
  };

  const userAdd = async (usuarioAgregado) => {
    // en esta line agregamos un usuario a la db
    const usuariosBD = await addUser(usuarioAgregado);
    //aqui hacemos que la tabla se actualice
    getUsers();
  };

  const userEdit = async (usuarioEditado) => {
    const usuarioBD = await editUser(usuarioEditado);
    getUsers();
  };

  const userDelete = async (idUsuario) => {
    const usuarioBD = await deleteUser(idUsuario);
    getUsers();
  };
  return (
    <>
      <NavbarKeepeComponent />
      <CarruselMainComponent />
      <QuehacemosComponent />
      {/* <FormInicioComponent /> */}
      <RecintosComponent />
      <CardPersonalComponent />
      {/* <BootCard /> */}
      {/* <FormUserComponent
        userAdd={userAdd}
        usuarioEditado={usuarioEditado}
        setUsuarioEditado={setUsuarioEditado}
        userEdit={userEdit}
        className="bg-home"
      /> */}
      <PromesasComponent />
      {/* <FormUserComponent
        userAdd={userAdd}
        usuarioEditado={usuarioEditado}
        setUsuarioEditado={setUsuarioEditado}
        userEdit={userEdit}
      /> */}
      <FooterComponent />
    </>
  );
};
export default HomePage;
