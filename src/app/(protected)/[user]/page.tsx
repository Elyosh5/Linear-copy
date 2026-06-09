import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function UserHomePage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const session = await getServerSession(authOptions);
  const { user } = await params;
  const id = decodeURIComponent(user);
}
