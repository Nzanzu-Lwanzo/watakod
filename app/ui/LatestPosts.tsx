import PostCard from "./PostCard";

const LatestPosts = () => {
  return (
    <div className="articles-list">
      <h3>Latest Posts</h3>
      <ul>
        <PostCard />
        <PostCard />
        {/* On desktop, only display 2 posts so we don't have the scrollbar */}
      </ul>
    </div>
  );
}

export default LatestPosts