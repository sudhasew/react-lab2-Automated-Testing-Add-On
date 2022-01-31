import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SocialPosts } from "./components/SocialPosts";
import ReactDOM from "react-dom";
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
