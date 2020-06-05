import React from "react";
import { Switch, Route } from "react-router-dom";
import { filterFolders } from "../../modules/filterTools";
import { Container } from "./main.style";
import List from "../list/list";
import Form from "../form/form";
import Sidebar from "../sidebar/sidebar";

function Main(props) {
  
  return (
    <Container>
      {localStorage.getItem("joplinToken") === null ? (
        <Form
          token={props.token}
          handleChange={props.handleChange}
          handleClick={props.handleClick}
        />
      ) : (
        <>
          {(props.menuVisible || props.size.width >= 1024) && !props.fetchLoading ? (
            <Sidebar
              isFixed={props.size.width < 1024}
              todoTree={filterFolders(props.todoData)}
              onClickFolder={props.onClickFolder}
            />
          ) : null}
          <Switch>
            <Route exact path="/">
              {props.fetchLoading ? (
                "Loading"
              ) : (
                <>
                  <List
                    todoTree={filterFolders(props.todoData)}
                    listId={props.viewedFolder}
                    onClickCheckbox={props.onClickCheckbox}
                  />
                </>
              )}
            </Route>
            <Route exact path="/settings">
              <Form
                token={props.token}
                handleChange={props.handleChange}
                handleClick={props.handleClick}
              />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}

export default Main;
