import React, { createContext, useState } from "react";
import { Language } from "../pages";

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
export const LanguageContext = createContext({
  language: "EN" as Language,
  setLanguage: (l: Language) => {},
});
// const StateDispatchContext = createContext(undefined);

// // A "provider" is used to encapsulate only the
// // components that needs the state in this context
// function StateProvider({ children }) {
//   const [language, setLanguage] = useState({
//     language: "ENG",
//   });

//   return (
//     <StateContext.Provider value={language}>
//       <StateDispatchContext.Provider value={setLanguage}>
//         {children}
//       </StateDispatchContext.Provider>
//     </StateContext.Provider>
//   );
// }

// export { StateProvider, StateContext, StateDispatchContext };
