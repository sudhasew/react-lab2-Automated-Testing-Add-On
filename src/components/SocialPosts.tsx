import { useState } from "react";
import { Post } from "../Post";
import { PostInList } from "./PostInList";
import { PostForm } from "./PostForm";
import React from "react";
import Modal from "react-modal";

export function SocialPosts() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [posts, setNewPosts] = useState<Post[]>([
    { id: 0, title: "Grand Circus", thought: "Grand Circus is cool." },
    { id: 1, title: "React", thought: "React gave me power!" },
    { id: 2, title: "Beatrice", thought: "Lorem ipsum" },
  ]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: " #79c5e8",
      border: "1px solid black",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  function deletePost(id: number, post: Post) {
    const newList = posts.slice(0);
    newList.splice(id, 1);
    setNewPosts(newList);
    window.alert(`Do You Want to delete ${post.title}`);
  }

  return (
    <div className="socialPosts-container">
      <header>My Thoughts</header>
      <main>
        <button className="newThought" onClick={openModal}>
          New Thought
        </button>
        <ul className="list-container">
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <PostInList
                key={i}
                post={post}
                onDelete={() => deletePost(i, post)}
              ></PostInList>
            ))
          ) : (
            <p
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                textTransform: "uppercase",
                fontSize: "2rem",
                letterSpacing: "1px",
                wordSpacing: "10px",
              }}
            >
              No Posts found
            </p>
          )}
        </ul>
      </main>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <PostForm
          onSubmit={(post) => setNewPosts([...posts, post])}
          onClose={closeModal}
        ></PostForm>
      </Modal>
    </div>
  );
}
