import Link from "next/link";

const PostCard = () => {
  return (
    <li>
      <div className="post-card">
        <img src="/images/image-web-3-mobile.jpg" alt="Post image" />
        <div className="about">
          <h3>Harnessing the power of JavaScript decorators</h3>
          <Link href="/posts/slug/1" className="intro">
            Javascript is a OOP programming language used in many fields of
            computer sience for it's ease and its versatility. To make the most
            out of this beautiful language, there are some concepts we need to
            understand.
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
