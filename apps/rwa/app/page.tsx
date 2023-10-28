import { redirect } from "next/navigation";

function RootPage(): void {
  redirect("/home");
}

export default RootPage;
