// import { createBrowserRouter  } from "react-router-dom";
// import Rootlayout from "./app/Rootlayout";
// import Publiclayout from "./app/public/Publiclayout";
// import Homepage from "./app/public/Homepage";
// import Producttedails from "./app/public/Producttedails";
// import Authleyout from "./app/auth/Authleyout";
// import Loginform from "./app/auth/Loginform";
// import Registerform from "./app/auth/Registerform";
// import Contacts from "./app/public/Contacts";
// import Card from "./components/card";
// import Loginformular from "./components/Loginformular";
// import Registerformular from "./components/Registerformular";



// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Rootlayout/>,
//         children: [
//           {
//             path: "/",
//             element: <Publiclayout/>,
//             children: [
//               {
//                 index: true,
//                 element: <Homepage />
//               },
//               {
//                 path: 'Productdetails/:id',
//                 element: <Producttedails/>,
                
//               },
//               {
//                 path: "Contacts",
//                 element: <Contacts/>
//               }        
//             ]
//           },      
//           {
//             path: "authleyout",
//             element: <Authleyout/>,
//             children: [
//               {
//                 path: "Loginform",
//                 element: <Loginform/>,
//                 children: [
//                     {
//                         path: 'Card',
//                         element:<Card/>
//                     },
//                     {
//                         path:'Loginformular',
//                         element:<Loginformular/>
//                     }
//                 ]
//               },
//               {
//                 path: "Registerform",
//                 element: <Registerform/>,
//                 children: [
//                     {
//                         path:'Card',
//                         element:<Card/>
//                     },
//                     {
//                         path:'Registerformular',
//                         element:<Registerformular/>
//                     }
//                 ],
                
//               }
//             ]
//           }
//         ]
//       }
//     ])



// router.jsx
import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "./app/Rootlayout";
import Publiclayout from "./app/public/Publiclayout";
import Homepage from "./app/public/Homepage";
import Producttedails from "./app/public/Producttedails";
import Authleyout from "./app/auth/Authleyout";
import Loginform from "./app/auth/Loginform";
import Registerform from "./app/auth/Registerform";
import Contacts from "./app/public/Contacts";
import Card from "./components/card";
import Loginformular from "./components/Loginformular";
import Registerformular from "./components/Registerformular";
import Checkout from "./components/Checkout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: "/",
        element: <Publiclayout />,
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: 'Productdetails/:id',
            element: <Producttedails />,
          },
          {
            path: "Contacts",
            element: <Contacts />,
          },
        ],
      },
      {
        path: "authleyout",
        element: <Authleyout />,
        children: [
          {
            path: "Loginform",
            element: <Loginform />,
            children: [
              {
                path: 'Card',
                element: <Card />,
              },
              {
                path: 'Loginformular',
                element: <Loginformular />,
              },
            ],
          },
          {
            path: "Registerform",
            element: <Registerform />,
            children: [
              {
                path: 'Card',
                element: <Card />,
              },
              {
                path: 'Registerformular',
                element: <Registerformular />,
              },
            ],
          },
        ],
      },
    ],
  },
]);
