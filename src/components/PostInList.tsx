import { Post } from "../Post";
import { FaTrash } from "react-icons/fa";
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
          <button className="deleteBtn" title="delete" onClick={onDelete}>
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
}
