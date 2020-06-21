import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "./main.style";
import Form from "../../pages/form/form";
import Projects from "../../pages/projects/projects";
import Home from "../../pages/home/home";
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
                  activeFolder={props.activeFolder}
                  todoTree={props.todoData[1]}
                  onClickFolder={props.onClickFolder}
                  onClickDeleteFolder={props.onClickDeleteFolder}
                  submitNewProject={props.submitNewProject}
                  onChangeText={props.onChangeText}
                  textInput={props.textInput}
                  onClickInput={props.onClickInput}
                  activeInput={props.activeInput}
                />
              ) : null}
            </>
          ) : null}
          <Switch>
            <Route exact path="/">
              {props.fetchLoading ? (
                "Loading"
              ) : (
                <>
                  <Home data={props.todoData} />
                </>
              )}
            </Route>
            <Route exact path="/projects">
              {props.fetchLoading ? (
                "Loading"
              ) : (
                <>
                  <Projects
                    onChangeText={props.onChangeText}
                    textInput={props.textInput}
                    todoTree={props.todoData[1]}
                    activeFolder={props.activeFolder}
                    onClickCheckbox={props.onClickCheckbox}
                    submitNewTodo={props.submitNewTodo}
                    onClickInput={props.onClickInput}
                    activeInput={props.activeInput}
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
