import { Post } from "../Post";

interface Props {
  post: Post;
  onDelete: () => void;
}

export function PostInList({ post, onDelete }: Props) {
  return (
    <li>
      <div className="side-by-side">
        <div>
          <h2>{post.title}</h2>
          <p>{post.thought}</p>
        </div>
        <div>
          <button className="deleteBtn" onClick={onDelete}>
            Del
          </button>
        </div>
      </div>
    </li>
  );
}
