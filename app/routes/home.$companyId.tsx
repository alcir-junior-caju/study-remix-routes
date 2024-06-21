// home.$companyId_.tsx
import { Outlet, useLoaderData } from "@remix-run/react";

export function loader() {
  const companies = [
    {
      id: 1,
      name: "Company 1",
      description: "This is the first company",
    },
    {
      id: 2,
      name: "Company 2",
      description: "This is the second company",
    },
    {
      id: 3,
      name: "Company 3",
      description: "This is the third company",
    }
  ];
  return new Response(JSON.stringify({ companies }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function CompanyId() {
  const { companies } = useLoaderData<typeof loader>();
  console.log("🚀 ~ CompanyId ~ companies:", companies)

	return (
    <>
      <h2>CompanyId</h2>
      <Outlet />
    </>
	);
}
