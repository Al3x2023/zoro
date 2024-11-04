import React, { useContext, useEffect, useState } from "react";
import { useFeed } from "../../Context/FeedContext";

import { Login } from "../Screens/Login/Login";
import { HolaMundo } from "../Screens/HolaMundo";

import { Sale } from "../Screens/Sale";
import { Sales } from "../Screens/Sales";
import { Dashboard } from "../Screens/Dashboard";
import { Main } from "../Screens/Main";
import { AuthContext } from "../../Context/AuthContext";
import { useSession } from "../../Context/SessionContext";
// import {Sale} from '../Screens/Sale';
export const Layout: React.FC = () => {
  const { feed, changeFeed } = useFeed();
  const {session, changeSession}=useSession();
  const { authState } = useContext(AuthContext);

  // // Verificar autenticación y ajustar feed en consecuencia
  // useEffect(() => {
  //     if (authState.isLoggenIn) {
  //         changeFeed(1)
  //         changeSession(1); 
  //     }
  // }, [authState.isLoggenIn]);


  switch (feed) {
    case 0:
      return <Main />;;
    case 1:
      return <Main />;
    case 2:
      return <Main />;
    case 3:
      return <Sale />;
    case 4:
      return <Dashboard />;
    // case 6:
    //     return <Contact />;
    // case 7:
    //     return <Students />;
    // case 8:
    //     return null;
    // case 10:
    //     return <Store />;
    // case 11:
    //     return <Help />;
    default:
      return <section>Página Web No Disponible</section>;
  }
};
