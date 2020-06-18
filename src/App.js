import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import useWindowSize from "./modules/useWindowSize";
import Header from "./components/header/header";
import Main from "./components/main/main";
import { filterFolders } from "./modules/filterTools";

export const storageToken = localStorage.getItem("joplinToken");
const notesUrl = `http://localhost:41184/notes?token=${storageToken}&fields=id,parent_id,title,is_todo,todo_completed,todo_due`;
const fodlersUrl = `http://localhost:41184/folders?token=${storageToken}`;

function App() {
  const [token, setToken] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [fetchLoading, setLoading] = useState(true);
  const [viewedFolder, setFolder] = useState("");
  const [menuVisible, setMenuVisibility] = useState(false);
  const [projectsBarVisible, setProjectsBarVisibility] = useState(false);
  const [newTodoText, setNewTodoText] = useState("");

  const refreshTodoData = useCallback(()=>{
    return Promise.all([
      fetch(notesUrl).then((response) => response.json()),
      fetch(fodlersUrl).then((response) => response.json()),
    ])
      .then((data) => setTodoData([data[0], filterFolders(data)]))
      .then(() => setLoading(false));
  },[]);
  
  
  useEffect(() => {
    refreshTodoData();
  }, [refreshTodoData]);

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

  const showProjectsBar = (event) => {
    switch (event.target.id) {
      case "projects":
        setProjectsBarVisibility(true);
        break;
      default:
        setProjectsBarVisibility(false);
    }
  };

  const onChangeText = (event) => {
    setNewTodoText(event.target.value);
  };

  const submitNewTodo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:41184/notes?token=${storageToken}`, {
      method: "POST",
      body: JSON.stringify({
        title: newTodoText,
        is_todo: 1,
        parent_id: event.target.name,
      }),
    });

    refreshTodoData();
    setNewTodoText("");
  };

  const submitNewProject = (event) => {
    event.preventDefault();
    fetch(`http://localhost:41184/folders?token=${storageToken}`, {
      method: "POST",
      body: JSON.stringify({
        title: newTodoText,
        children: [],
      }),
    }).then((response) => {
      response
        .json()
        .then((data) => {
          setTodoData([todoData[0], [...todoData[1], data]]);
          setFolder(data.id);
        });
    });

    setNewTodoText("");
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
        showProjectsBar={showProjectsBar}
        projectsBarVisible={projectsBarVisible}
        newTodoText={newTodoText}
        onChangeText={onChangeText}
        submitNewTodo={submitNewTodo}
        submitNewProject={submitNewProject}
      />
    </Router>
  );
}

export default App;
