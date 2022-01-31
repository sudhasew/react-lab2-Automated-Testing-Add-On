import { useState } from "react";
import { Post } from "../Post";

export function PostForm(props: {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  return (
    <div className="form-container">
      <label htmlFor="title">Title</label>
      <input
        className="title"
        // Two way binding.
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
      />

      <label htmlFor="thought">Thought</label>
      <textarea
        className="setThought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
        name="thought"
      ></textarea>

      <button
        className="addPost"
        onClick={() => props.onSubmit({ title, thought })}
      >
        Add Post
      </button>
      <button
        className="closeBtn"
        onClick={() => {
          props.onClose();
        }}
      >
        &#x2715;
      </button>
    </div>
  );
}
