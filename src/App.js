import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [b, setB] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateID, setUpdateID] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [important, setImportant] = useState(false);
  const [zoom, setZoom] = useState("");
  const [time, setTime] = useState("");

  const [inputtitle, setInputtitle] = useState("");
  const [inputdate, setInputDate] = useState("");
  const [inputimportant, setInputimportant] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks"
    );
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/jjimenez98/zoom-scheduler/tasks/${id}`
    );
    const data = await res.json();
    return data;
  };

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const updateTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    if (update == false) {
      setInputtitle(data.title);
      setInputDate(data.day);
      setInputimportant(data.important);
      setUpdate(true);
      setUpdateID(id);
    } else {
      setUpdate(false);
    }
  };

  const updateTaskSubmit = async () => {
    if (title.length == 0 && title.length > 30) {
      alert("length of title is empty or too long");
    }

    const tasktoToggle = await fetchTask(updateID);
    const updTask = {
      ...tasktoToggle,
      important: important,
      title: title,
      day: date,
      zoom: zoom,
      time: time,
    };

    const res = await fetch(`http://localhost:5000/tasks/${updateID}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    // alert(data);

    setTasks(
      tasks.map((task) =>
        task.id === updateID
          ? {
              ...task,
              important: data.important,
              title: data.title,
              day: data.day,
              zoom: data.zoom,
              time: data.time,
            }
          : task
      )
    );
  };

  const createMeeting = () => {
    console.log("create-meeting");
    setB(true);
  };

  const fullSchedule = () => {
    setB(false);
  };

  return (
    <div className="container">
      {b ? (
        <div>
          <div className="create-meeting">
            <div className="header">
              <Header className="title" header="Zoom Meetings Manager" />
              <button className="btn" onClick={fullSchedule}>
                Full Schedule
              </button>
            </div>
            <AddTask onAdd={addTask} />
          </div>
        </div>
      ) : (
        <div className="create-meeting">
          <div className="header">
            <Header className="title" header="Zoom Meetings Manager" />
            <button className="btn" onClick={createMeeting}>
              Create a Meeting
            </button>
          </div>
          {tasks.length === 0 ? (
            <p style={{ textAlign: "center" }}>No Meetings Available</p>
          ) : (
            <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updateTask} />
          )}
          {update ? (
            <div>
              <form
                className="add-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  updateTaskSubmit();
                }}
              >
                <div className="form-control">
                  <label style={{ marginBottom: "1rem" }} for="meeting">
                    Meeting
                  </label>
                  <input
                    type="text"
                    placeholder="Update Task"
                    id="meeting"
                    style={{ display: "inline-block" }}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="form-control">
                  <label style={{ marginBottom: "1rem" }} for="date">
                    {" "}
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="Update Date"
                    id="date"
                    style={{ display: "inline-block" }}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="form-control">
                  <label style={{ marginBottom: "1rem" }} for="date">
                    {" "}
                    Time
                  </label>
                  <input
                    type="time"
                    placeholder="Time"
                    id="time"
                    style={{ display: "inline-block" }}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="form-control">
                  <label style={{ marginBottom: "1rem" }} for="date">
                    {" "}
                    Zoom Link
                  </label>
                  <input
                    type="text"
                    placeholder="zoom link"
                    id="date"
                    style={{ display: "inline-block" }}
                    onChange={(e) => setZoom(e.target.value)}
                  />
                </div>
                <br />
                <br />
                <div className="from-control form-control-check">
                  <label className="label-important" for="important">
                    Important
                  </label>
                  <input
                    id="important"
                    type="checkbox"
                    onChange={(e) => setImportant(e.target.value)}
                    className="checkbox"
                  />
                </div>
                <input className="btn1" type="submit" value="Save" />
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
};

export default App;
