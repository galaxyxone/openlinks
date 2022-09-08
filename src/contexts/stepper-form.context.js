import { createContext } from "react";

const StepperFormContext = createContext({});

export const StepperFormContextConsumer = StepperFormContext.Consumer;
export const StepperFormContextProvider = StepperFormContext.Provider;

export default StepperFormContext;
