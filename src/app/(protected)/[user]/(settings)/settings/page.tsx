import { redirect } from "next/navigation";

export default async function AppIndexPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;
}
