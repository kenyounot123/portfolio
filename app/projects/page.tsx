import Link from "next/link";
export default function Projects() {
  return (
    <>
      <Link className="text-green-700" href={"/"}>
        Clicking this will link to root page or home page
      </Link>
      <h1>Yooo, this is projects page!</h1>
    </>
  );
}
