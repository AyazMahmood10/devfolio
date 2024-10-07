import Image from 'next/image';
import Link from 'next/link';
import profilePicture from '../public/profile_picture.webp';

export default function Sidebar() {
  return (
    <div className="h-screen w-64 bg-gray-900 p-4 text-white">
      <div className="flex flex-col items-center">
        <Image
          src={profilePicture}
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="mt-4 text-xl font-bold">Ayaz Mahmood</h1>
        <p className="text-gray-400">Software Engineer</p>
      </div>
      <nav className="mt-8">
        <ul>
          <li>
            <Link href="/skills" className="block py-2">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/Experience" className="block py-2">
              Experience
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block py-2">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block py-2">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
