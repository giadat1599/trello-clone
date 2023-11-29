import { PropsWithChildren } from "react";

interface ListWrapperProps extends PropsWithChildren {}

export const ListWrapper = ({ children }: ListWrapperProps) => {
   return <li className="shrink-0 h-full w-[272px] select-none">{children}</li>;
};
