import React, { useState, useEffect } from "react";
// import filterTodosTree from "./components/getTodosTree";

export const storageToken = localStorage.getItem("joplinToken");
const notesUrl = `http://localhost:41184/notes?token=${storageToken}`;
const fodlersUrl = `http://localhost:41184/folders?token=${storageToken}`;

function App() {
  const [token, setToken] = useState("");
  const [todoData, setTodoData] = useState([]);
  const [fetchLoading, setLoading] = useState(true);

  const filterParentId = (arr) =>
    Array.from(
      new Set(arr.filter((e) => e.is_todo === 1).map((e) => e.parent_id))
    );

  const filterFolders = (arr, parentIdArr) => {
    const filteredArr = [];

    arr.forEach((e) => {
      if (parentIdArr.includes(e.id) && !e.children) {
        filteredArr.push({ id: e.id, title: e.title });
      } else if (
        e.children &&
        e.children.filter((el) => parentIdArr.includes(el.id)).length > 0
      ) {
        filteredArr.push({ id: e.id, title: e.title, children: [] });
        e.children.forEach((el) => {
          if (parentIdArr.includes(el.id)) {
            filteredArr[filteredArr.length - 1].children.push({
              id: el.id,
              title: el.title,
              todos: todoData[0].filter((ele) => ele.parent_id === el.id),
            });
          }
        });
      }
    });

    return filteredArr;
  };

  useEffect(() => {
    Promise.all([
      fetch(notesUrl).then((response) => response.json()),
      fetch(fodlersUrl).then((response) => response.json()),
    ])
      .then((data) => setTodoData(data))
      .then(() => setLoading(false));
  }, []);

  const parentId = !fetchLoading ? filterParentId(todoData[0]) : [];
  const todoTree = !fetchLoading ? filterFolders(todoData[1], parentId) : [];

  const handleChange = (event) => {
    setToken(event.target.value);
  };

  const handleClick = () => {
    localStorage.setItem("joplinToken", token);
  };

  const Form = () => {
    return (
      <>
        <input type="text" value={token} onChange={handleChange} />
        <button onClick={handleClick}>OK</button>
      </>
    );
  };

  const Tree = () => {
    return (
      <>
        {fetchLoading
          ? "Ładowanie"
          : todoTree.map((e) => {
              return (
                <section key={e.id}>
                  <h3>{e.title}</h3>
                  {e.children.map((el) => {
                    return (
                      <section key={el.id}>
                        <h4 >{el.title}</h4>
                        <ul>
                          {el.todos.map((ele) => (
                            <li key={ele.id}>{ele.title}</li>
                          ))}
                        </ul>
                      </section>
                    );
                  })}
                </section>
              );
            })}
      </>
    );
  };

  return (
    <>{localStorage.getItem("joplinToken") === null ? <Form /> : <Tree />}</>
  );
}

export default App;
