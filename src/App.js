import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useWindowSize from "./modules/useWindowSize";
import Header from "./components/header/header";
import Main from "./components/main/main";

export const storageToken = localStorage.getItem("joplinToken");
const notesUrl = `http://localhost:41184/notes?token=${storageToken}&fields=id,parent_id,title,is_todo,todo_completed,todo_due`;
const fodlersUrl = `http://localhost:41184/folders?token=${storageToken}`;

function App() {
  const [token, setToken] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [fetchLoading, setLoading] = useState(true);
  const [viewedFolder, setFolder] = useState("");
  const [menuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(notesUrl).then((response) => response.json()),
      fetch(fodlersUrl).then((response) => response.json()),
    ])
      .then((data) => setTodoData(data))
      .then(() => setLoading(false));
  }, []);

  const size = useWindowSize();

  const handleChange = (event) => {
    setToken(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("joplinToken", token);
  };

  const onClickFolder = (event) => {
    setFolder(event.target.id);
  };

  const onClickCheckbox = (event) => {
    return fetch(
      `http://localhost:41184/notes/${event.target.name}?token=${storageToken}`,
      {
        method: "PUT",
        body: JSON.stringify({ todo_completed: !event.target.defaultChecked }),
      }
    );
  };

  const onClickMenu = () => {
    setMenuVisibility(!menuVisible);
  };

  return (
    <Router>
      <Header
        onClickMenu={onClickMenu}
        buttonVisible={
          size.width < 1024 && localStorage.getItem("joplinToken") !== null
        }
      />
      <Main
        todoData={todoData}
        token={token}
        handleChange={handleChange}
        handleClick={handleClick}
        onClickFolder={onClickFolder}
        fetchLoading={fetchLoading}
        onClickCheckbox={onClickCheckbox}
        viewedFolder={viewedFolder}
        menuVisible={menuVisible}
        size={size}
      />
    </Router>
  );
}

export default App;
