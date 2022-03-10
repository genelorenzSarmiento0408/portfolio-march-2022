import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <br />
        <div className="other-infos">
          <li>Education</li>
          <li>
            <Link href="/quotes">Quotes</Link>
          </li>
          <li>Contact</li>
        </div>
      </ul>
    </nav>
  );
}
