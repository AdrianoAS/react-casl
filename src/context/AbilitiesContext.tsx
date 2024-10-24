import { ReactNode, createContext, memo } from "react";

import { type AnyAbility } from "@casl/ability";
import { createContextualCan } from "@casl/react";

import { useAbilities } from "../hooks/useAbilities";

const AbilitiesContext = createContext({} as AnyAbility);
const Can = createContextualCan(AbilitiesContext.Consumer);

const AbilitiesProvider = memo(({ children }: { children: ReactNode }) => {
  const { abilities } = useAbilities();

  return (
    <AbilitiesContext.Provider value={abilities}>
      {children}
    </AbilitiesContext.Provider>
  );
});

export { AbilitiesProvider, Can, AbilitiesContext };
