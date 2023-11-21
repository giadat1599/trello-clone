import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizaitionPage() {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
