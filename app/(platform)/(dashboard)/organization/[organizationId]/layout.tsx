import { PropsWithChildren } from "react";
import { OrgControl } from "./_components/org-control";

const OrganizationIdLauout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
};

export default OrganizationIdLauout;
