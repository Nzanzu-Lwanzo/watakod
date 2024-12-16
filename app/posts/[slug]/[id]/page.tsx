import "@/assets/css/post.css";
import LatestPosts from "@/app/ui/LatestPosts";
import Actions from "./ui/Actions";
import Image from "next/image";

const PostReading = () => {
  return (
    <section>
      <article>
        <div className="top-card center">
          <h1>Harnessing the power of JavaScript decorators</h1>
          <div className="author">
            <div className="profile-image">
              <Image
                src="/images/profile.jpg"
                height={300}
                width={300}
                alt="Profile image of me"
              />
            </div>
            <div className="infos">
              <div>
                <span>written by</span> <span>Victor Nzanzu</span>
              </div>
              <div>12·08·2024</div>
              <div>
                <span>#Js</span> <span>#Web</span> <span>#Code</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          adipisci magni placeat, quibusdam non labore natus asperiores vel
          saepe aut doloremque atque temporibus nostrum quam voluptatum iure
          consectetur? Explicabo, quasi! <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          placeat iure incidunt assumenda debitis nulla magni a dignissimos sed
          distinctio et facilis veritatis asperiores laborum voluptatibus modi
          cum, aliquid at. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus officiis et quod ducimus autem possimus, sequi atque
          corrupti debitis accusantium iusto tenetur quibusdam perspiciatis
          aliquid obcaecati ipsum doloribus repudiandae.
        </div>
        <Actions />
      </article>
      <div className="stick-articles">
        <LatestPosts />
      </div>
      <i id="post-page"></i>
    </section>
  );
};

export default PostReading;
