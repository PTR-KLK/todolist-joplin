import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "./main.style";
import Form from "../../pages/form/form";
import Projects from "../../pages/projects/projects";
import ProjectsBar from "../projectsBar/projectsBar";
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
          {(props.menuVisible || props.size.width >= 1024) &&
          !props.fetchLoading ? (
            <>
              <Sidebar
                isFixed={props.size.width < 1024}
                showProjectsBar={props.showProjectsBar}
              />
              {props.projectsBarVisible ? (
                <ProjectsBar
                  isFixed={props.size.width < 1024}
                  todoTree={props.todoData[1]}
                  onClickFolder={props.onClickFolder}
                  submitNewProject={props.submitNewProject}
                  onChangeText={props.onChangeText}
                  newTodoText={props.newTodoText}
                />
              ) : null}
            </>
          ) : null}
          <Switch>
            <Route exact path="/projects">
              {props.fetchLoading ? (
                "Loading"
              ) : (
                <>
                  <Projects
                    onChangeText={props.onChangeText}
                    newTodoText={props.newTodoText}
                    todoTree={props.todoData[1]}
                    listId={props.viewedFolder}
                    onClickCheckbox={props.onClickCheckbox}
                    submitNewTodo={props.submitNewTodo}
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
