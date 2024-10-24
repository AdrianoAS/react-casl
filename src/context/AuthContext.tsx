import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { permissions } from "../const/permissions";

type Role = {
  action: string;
  subject: string;
};

type User = {
  id: string;
  name: string;
  type: string;
  roles: Role[];
};

type UserContextPropz = {
  user: User;
};

const UserContext = createContext({} as UserContextPropz);

const AuthContext = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    const type = "manager" as string;

    const roles = permissions[type];

    setUser({
      ...user,
      id: "123",
      name: "Adriano",
      roles: roles,
      type: type,
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContext, useAuthContext };
