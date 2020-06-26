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
  const [activeFolder, setFolder] = useState("");
  const [menuVisible, setMenuVisibility] = useState(false);
  const [projectsBarVisible, setProjectsBarVisibility] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [activeInput, setActiveInput] = useState("");
  const [refreshData, setRefreshData] = useState(true);

  const refreshTodoData = useCallback(() => {
    return Promise.all([
      fetch(notesUrl).then((response) => response.json()),
      fetch(fodlersUrl).then((response) => response.json()),
    ])
      .then((data) => setTodoData([...filterFolders(data)]))
      .then(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (refreshData) {
      refreshTodoData();
      setRefreshData(false);
    }
  }, [refreshTodoData, refreshData]);

  const size = useWindowSize();

  const handleChange = (event) => {
    setToken(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("joplinToken", token);
  };

  const onClickFolder = (event) => {
    setFolder(event.target.parentNode.id);
  };

  const onClickDeleteFolder = (event) => {
    fetch(
      `http://localhost:41184/folders/${event.target.parentNode.id}?token=${storageToken}`,
      {
        method: "DELETE",
      }
    );

    setTodoData(todoData.filter((e) => e.id !== event.target.parentNode.id));
    setFolder(todoData[0].id);
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

  const onClickDeleteTodo = (event) => {
    fetch(
      `http://localhost:41184/notes/${event.target.parentNode.id}?token=${storageToken}`,
      {
        method: "DELETE",
      }
    );

    setRefreshData(true);
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
    setTextInput(event.target.value);
  };

  const onClickInput = (event) => {
    setActiveInput(event.target.parentNode.name);
  };

  const submitNewTodo = (event) => {
    event.preventDefault();
    fetch(`http://localhost:41184/notes?token=${storageToken}`, {
      method: "POST",
      body: JSON.stringify({
        title: textInput,
        is_todo: 1,
        parent_id: event.target.name,
      }),
    });

    setRefreshData(true);
    setTextInput("");
  };

  const submitNewProject = (event) => {
    event.preventDefault();
    fetch(`http://localhost:41184/folders?token=${storageToken}`, {
      method: "POST",
      body: JSON.stringify({
        title: textInput,
        children: [],
      }),
    }).then((response) => {
      response.json().then((data) => {
        setTodoData([...todoData, data]);
        setFolder(data.id);
      });
    });

    setTextInput("");
  };

  const submitNewSubproject = (event) => {
    event.preventDefault();

    const folderName = event.target.name;

    const parentFolder = todoData.find((e) => e.id === folderName);
    const todoDataCopy = todoData.filter((e) => e.id !== folderName);

    fetch(`http://localhost:41184/folders?token=${storageToken}`, {
      method: "POST",
      body: JSON.stringify({
        title: textInput,
        parent_id: folderName,
        children: [],
      }),
    }).then((response) => {
      response.json().then((data) => {
        setTodoData([
          ...todoDataCopy,
          { ...parentFolder, children: [data,...parentFolder.children] },
        ]);
      });
    });

    setTextInput("");
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
        onClickDeleteFolder={onClickDeleteFolder}
        onClickDeleteTodo={onClickDeleteTodo}
        fetchLoading={fetchLoading}
        onClickCheckbox={onClickCheckbox}
        activeFolder={activeFolder}
        menuVisible={menuVisible}
        size={size}
        showProjectsBar={showProjectsBar}
        projectsBarVisible={projectsBarVisible}
        textInput={textInput}
        activeInput={activeInput}
        onClickInput={onClickInput}
        onChangeText={onChangeText}
        submitNewTodo={submitNewTodo}
        submitNewProject={submitNewProject}
        submitNewSubproject={submitNewSubproject}
      />
    </Router>
  );
}

export default App;
