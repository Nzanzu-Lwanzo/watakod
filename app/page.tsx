import "@/assets/css/home.css";
import Link from "next/link";
import LatestPosts from "./ui/LatestPosts";
import Image from "next/image";

export default function Home() {
  return (
    <div id="component">
      <div className="static">
        <div className="image">
          <Image
            src="/images/image-web-3-desktop.jpg"
            alt="Web 3.0 Desktop illustration"
            width={900}
            height={280}
          />
        </div>
        <div className="present">
          <h1>
            Hello gang ! I'm <span className="imp-light">Victor</span> and I
            like talking about programming.
          </h1>
        </div>
        <div className="cta">
          <p>
            I'm a lazy but very productive guy. Don't ask me how, that's just
            how things are ! I'm a big rap enthusiast and I'm the biggest fan of
            2Pac Shakur. I case you wanna know more about me, you know what step
            to take next !
          </p>
          <Link href="/" className="cta-btn">
            Let's Chat
          </Link>
        </div>

        <LatestPosts></LatestPosts>
      </div>
    </div>
  );
}
