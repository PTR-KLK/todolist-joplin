import React, { useState, useEffect } from "react";
import { filterFolders } from "./modules/filterTools";
import Header from "./components/header/header";
import Form from "./components/form";
import Tree from "./components/tree";
import List from "./components/list/list";

export const storageToken = localStorage.getItem("joplinToken");
const notesUrl = `http://localhost:41184/notes?token=${storageToken}&fields=id,parent_id,title,is_todo,todo_completed,todo_due`;
const fodlersUrl = `http://localhost:41184/folders?token=${storageToken}`;

function App() {
  const [token, setToken] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [fetchLoading, setLoading] = useState(true);
  const [viewedFolder, setFolder] = useState('');
  const [menuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(notesUrl).then((response) => response.json()),
      fetch(fodlersUrl).then((response) => response.json()),
    ])
      .then((data) => setTodoData(data))
      .then(() => setLoading(false));
  }, []);

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
    console.log(event.target.defaultChecked);
    return fetch(`http://localhost:41184/notes/${event.target.name}?token=${storageToken}`,{
      method: 'PUT',
      body: JSON.stringify({"todo_completed": !event.target.defaultChecked})
    });
  }

  const onClickMenu = () => {
    setMenuVisibility(!menuVisible);
    console.log(menuVisible);
  }

  return (
    <>
      <Header onClickMenu={onClickMenu} />
      {localStorage.getItem("joplinToken") === null ? (
        <Form
          token={token}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      ) : fetchLoading ? (
        "Ładowanie"
      ) : (
        <>
          {menuVisible ? <Tree
            todoTree={filterFolders(todoData)}
            onClickFolder={onClickFolder}
          /> : null}
          <List todoTree={filterFolders(todoData)} listId={viewedFolder} onClickCheckbox={onClickCheckbox} />
        </>
      )}
    </>
  );
}

export default App;
