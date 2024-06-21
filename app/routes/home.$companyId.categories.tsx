// home.$companyId.categories_.tsx
import { Outlet, useLoaderData } from "@remix-run/react";

export function loader() {
	const categories = [
		{
			id: 1,
			name: "Category 1",
			description: "This is the first category",
		},
		{
			id: 2,
			name: "Category 2",
			description: "This is the second category",
		},
		{
			id: 3,
			name: "Category 3",
			description: "This is the third category",

		}
	];
	return new Response(JSON.stringify({ categories }), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default function Categories() {
	const { categories } = useLoaderData<typeof loader>();
	console.log("🚀 ~ Categories ~ categories:", categories)

	return (
		<>
			<h3>Categories</h3>
			<Outlet />
		</>
	);
}
