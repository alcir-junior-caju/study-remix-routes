import { useLoaderData } from "@remix-run/react";

export function loader() {
  const creatives = [
    {
      id: 1,
      name: "Creative 1",
      description: "This is the first creative",
    },
    {
      id: 2,
      name: "Creative 2",
      description: "This is the second creative",
    },
    {
      id: 3,
      name: "Creative 3",
      description: "This is the third creative",
    }
  ];
  return new Response(JSON.stringify({ creatives }), {
    headers: {
    "Content-Type": "application/json",
    },
  });
}

export default function HomeIndex() {
  const { creatives } = useLoaderData<typeof loader>();
  console.log("🚀 ~ HomeIndex ~ creatives:", creatives)

	return (
    <h2>Child</h2>
	);
}
