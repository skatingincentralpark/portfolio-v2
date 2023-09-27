import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="space-y-3">
        <h2 className="font-bold">Route Not Found</h2>
        <p className="text-sm">Could not find requested resource</p>
        <Link className="text-blue-600" href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
}
