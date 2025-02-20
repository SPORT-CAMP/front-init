import { useContext, createContext, useState, useMemo } from 'react';

export type MainMenuContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialState: MainMenuContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

const MainMenuContext = createContext<MainMenuContextType>(initialState);

export const useMainMenuContext = () => {
  return useContext(MainMenuContext);
};

export const MainMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);
  return <MainMenuContext.Provider value={state}>{children}</MainMenuContext.Provider>;
};
