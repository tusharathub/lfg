import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <nav className="bg-gray-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">GameMate</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline"> Home </a>
          <a href="/create" className="hover:underline"> Create Session</a>
          <a href="" className="hover:underline"> Profile</a>
      <UserButton/>
        </div>
      </div>
    </nav>
  );
}
