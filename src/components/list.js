import React from "react";

const List = (props) => {
  return (
    <>
      {props.todoTree.map((e) => {
        return (
          <section key={e.id}>
            {e.children.map((el) => {
              return (
                <section key={el.id}>
                  <ul>
                    {el.todos.map((ele, idx) => (
                      <li key={ele.id}>
                        <input
                          type="checkbox"
                          name={`todo-${idx}`}
                          value="Bike"
                        />
                        <label htmlFor={`todo-${idx}`}>{ele.title}</label>
                      </li>
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

export default List;
