import { useLoaderData } from "@remix-run/react";

export function loader() {
    const subCategories = [
		{
			id: 1,
			name: "SubCategory 1",
			description: "This is the first subcategory",
		},
		{
			id: 2,
			name: "SubCategory 2",
			description: "This is the second subcategory",
		},
		{
			id: 3,
			name: "SubCategory 3",
			description: "This is the third subcategory",

		}
	];

	return new Response(JSON.stringify({ subCategories }), {
		headers: {
			"Content-Type": "application/json",
		},
	});
}

export default function SubCategoryId() {
	const { subCategories } = useLoaderData<typeof loader>();
	console.log("🚀 ~ CategoryId ~ subCategories:", subCategories)

	return (
    <h4>SubCategories</h4>
	);
}
