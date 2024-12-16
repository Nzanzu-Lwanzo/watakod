"use client"

import "@/assets/css/home.css";
import Link from "next/link";
import PostCard from "./ui/PostCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
  const componentRef = useRef(null);

  useGSAP(() => {

    // gsap.from

  }, { scope: componentRef });

  return (
    <div id="component" ref={componentRef}>
      <div className="static">
        <div className="image">
          <img
            src="/images/image-web-3-desktop.jpg"
            alt="Web 3.0 Desktop illustration"
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

        <div className="articles-list">
          <h3>Latest Posts</h3>
          <ul>
            <PostCard />
            <PostCard />
            {/* On desktop, only display 2 posts so we don't have the scrollbar */}
          </ul>
        </div>
      </div>
    </div>
  );
}
