import { type AnyAbility, PureAbility } from "@casl/ability";
import { useCallback, useContext, useEffect, useState } from "react";

import { AbilitiesContext } from "../context/AbilitiesContext";
import { useAuthContext } from "../context/AuthContext";

export interface CsalAbolitiesProps {
  abilities: PureAbility;
}

export const useAbilitiesContext = (): AnyAbility =>
  useContext(AbilitiesContext);

export const useAbilities = (): CsalAbolitiesProps => {
  const [abilities, setAbilities] = useState(new PureAbility());

  const { user } = useAuthContext();

  const updateAbilities = useCallback(
    (roles: any) => {
      const newAbilities = new PureAbility(roles);
      setAbilities(newAbilities);
    },
    [setAbilities]
  );

  useEffect(() => {
    if (user) {
      updateAbilities(user.roles);
    }
  }, [updateAbilities, user]);

  return { abilities };
};
