import React, { useState } from "react";
import { useFeed } from "../../Context/FeedContext";

import { Login } from "../Screens/Login";
import { HolaMundo } from "../Screens/HolaMundo";

import { Sale } from "../Screens/Sale";
import { Sales } from "../Screens/Sales";
import { Dashboard } from "../Screens/Dashboar";
import { Main } from "../Screens/Main";
// import {Sale} from '../Screens/Sale';
export const Layout: React.FC = () => {
  const { feed } = useFeed();

  switch (feed) {
    case 0:
      return <HolaMundo />;
    case 1:
      return <Login />;
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
