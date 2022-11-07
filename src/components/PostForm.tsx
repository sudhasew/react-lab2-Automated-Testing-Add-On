import { FormEvent, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { Post } from "../Post";

interface Props {
  onSubmit: (post: Post) => void;
  onClose: () => void;
}

export function PostForm({ onSubmit, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.info("title :", title);
    console.info("thought :", thought);
    onSubmit({ title, thought });
    window.alert(`You added ${title} ${thought} new thought`);
    onClose();
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
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
          // onClick={() => onSubmit({ title, thought })}
        >
          Add Post
        </button>
        <button
          className="closeBtn"
          onClick={() => {
            onClose();
          }}
        >
          <FaTimesCircle />
        </button>
      </form>
    </div>
  );
}
