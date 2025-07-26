import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Welcome to 10 Minute School</h1>
        <Link
          href="/ielts-course"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors inline-block"
        >
          View IELTS Course
        </Link>
      </div>
    </div>
  );
}
