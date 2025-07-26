import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-300">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Course Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, we couldn't find the course you're looking for. The course may
          have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go to Homepage
          </Link>
          <div>
            <Link
              href="/ielts-course"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Browse IELTS Course
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
