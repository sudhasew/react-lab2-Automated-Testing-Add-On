import { useState } from "react";
import { Post } from "../Post";
import { PostInList } from "./PostInList";
import { PostForm } from "./PostForm";
import React from "react";
import Modal from "react-modal";

export function SocialPosts() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [posts, setNewPosts] = useState<Post[]>([
    { title: "Grand Circus", thought: "Grand Circus is cool." },
    { title: "React", thought: "React gave me power!" },
    { title: "Beatrice", thought: "Lorem ipsum" },
  ]);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  function deletePost(index: number) {
    const newList = posts.slice(0);
    newList.splice(index, 1);
    setNewPosts(newList);
  }

  return (
    <div className="socialPosts-container">
      {/* <button onClick={openModal}>Open Modal</button> */}
      <header>My Thoughts</header>
      <main>
        <button className="newThought" onClick={openModal}>
          New Thought
        </button>
        <ul className="list-container">
          {posts.map((post, i) => (
            <PostInList
              key={i}
              post={post}
              onDelete={() => deletePost(i)}
            ></PostInList>
          ))}
        </ul>
      </main>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PostForm
          onSubmit={(post) => setNewPosts([...posts, post])}
          onClose={() => console.log("close")}
        ></PostForm>
      </Modal>
    </div>
  );
}
