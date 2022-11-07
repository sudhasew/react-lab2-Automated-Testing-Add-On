import React from "react";
import "./App.css";
import { SocialPosts } from "./components/SocialPosts";
import Modal from "react-modal";
// import { PostInList } from "./PostInList";

Modal.setAppElement(document.getElementById("#root") as HTMLElement);

function App() {
  return (
    <div className="App">
      <SocialPosts></SocialPosts>
    </div>
  );
}

export default App;
