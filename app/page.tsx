import { fetchMetadata } from "frames.js/next";

export async function generateMetadata() {
  return {
    title: "My Page",
    other: await fetchMetadata(
      new URL("/frames",  process.env.VERCEL_URL ? `https://{process.env.VERCEL_URL}` : "http://localhost:3001" )
    ),
  };
}

export default function Page() {
  return <span>My existing page</span>;
}
