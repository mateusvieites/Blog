import { useEffect, useState } from 'react';
import axiosInstance from '../../configs/axios';

interface IResponse {
  content: IPost | IPost[];
  code: number;
}

interface IPost {
  title: string;
  description: string;
  createdAt: string;
  tags: string[];
  user:{
    name:string
  }
}

const PostComponent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    axiosInstance
      .get('/posts')
      .then((response) => {
        console.log(response.data);
        setPosts(response.data.content as IPost[]);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <article key={index} className="bg-gray-800 p-6 rounded-lg ">
          <h2 className="text-2xl font-bold text-purple-400">{post.title}</h2>
          <p className="text-gray-400 mb-2">
            Posted on {post.createdAt} by {post.user.name}
          </p>
          <p>{post.description}</p>
          <div className="flex flex-wrap gap-1 mt-4">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="tag bg-purple-400 text-white rounded-full px-2 py-1 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostComponent;
