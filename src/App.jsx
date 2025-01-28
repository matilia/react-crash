import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import {useState} from "react";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);


  function showModalHandler(){
    setModalIsVisible(true);
  }

  function hideModalHandler(){
    setModalIsVisible(false);
  }
  return (
      <>
        <MainHeader onCreatePost={showModalHandler}/>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </>
      )

}

export default App;
