import React, { useState } from 'react';
import { useFeed } from '../../Context/FeedContext';

import { Feed } from '../Screens/Feed';
import { HolaMundo } from '../Screens/HolaMundo';
import Dashboard from '../Screens/Main';
import { Sale } from '../Screens/Sale';
import { Sales } from '../Screens/Sales';
// import {Sale} from '../Screens/Sale';
export const Layout: React.FC = () => {
    const { feed } = useFeed(); 

 
    switch (feed) {
        case 0:
            return <HolaMundo />;
        case 1:
            return <Feed/>;
        case 2:
            return <Dashboard />;
         case 3:
             return <Sale/>;
        // case 5:
        //     return <Location />;
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
