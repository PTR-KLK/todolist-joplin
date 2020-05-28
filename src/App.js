import React, { useState, useEffect } from "react";
import { filterFolders } from "./modules/filterTools";
import Form from "./components/form";
import Tree from "./components/tree";
import List from "./components/list/list";

export const storageToken = localStorage.getItem("joplinToken");
const notesUrl = `http://localhost:41184/notes?token=${storageToken}`;
const fodlersUrl = `http://localhost:41184/folders?token=${storageToken}`;

function App() {
  const [token, setToken] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [fetchLoading, setLoading] = useState(true);
  const [viewedFolder, setFolder] = useState('');

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
    setFolder(event.target.className);
  };

  return (
    <>
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
          <Tree
            todoTree={filterFolders(todoData)}
            onClickFolder={onClickFolder}
          />
          <List todoTree={filterFolders(todoData)} listId={viewedFolder} />
        </>
      )}
    </>
  );
}

export default App;
