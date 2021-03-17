import Tasks from "./Tasks";
import { useState, useEffect } from "react";
const Task = (props) => {
  const [important, setImportant] = useState(false);

  useEffect(() => {
    setImportant(props.task.important);
  });

  return (
    <div>
      {important ? (
        <div>
          <div
            className="task-item-important"
            onDoubleClick={() => props.onUpdate(props.task.id)}
          >
            <div className="task-title">
              <h3 style={{ marginBottom: "0", marginTop: "0" }}>
                {props.task.title}
              </h3>
              <div
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => props.onDelete(props.task.id)}
                className="task-delete"
              >
                Delete
              </div>
            </div>
            <p style={{ marginBottom: "0", marginTop: "0" }}>
              {props.task.day}
            </p>
            <p style={{ marginBottom: "0", marginTop: "0" }}>
              {props.task.time}
            </p>
            <a href={props.task.zoom}>{props.task.zoom}</a>
          </div>
        </div>
      ) : (
        <div>
          <div
            className="task-item"
            onDoubleClick={() => props.onUpdate(props.task.id)}
          >
            <div className="task-title">
              <h3 style={{ marginBottom: "0", marginTop: "0" }}>
                {props.task.title}
              </h3>
              <div
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => props.onDelete(props.task.id)}
                className="task-delete"
              >
                <p className="deletep">Delete</p>
              </div>
            </div>
            <p style={{ marginBottom: "0", marginTop: "0" }}>
              {props.task.day}
            </p>
            <p style={{ marginBottom: "0", marginTop: "0" }}>
              {props.task.time}
            </p>
            <a href={props.task.zoom}>{props.task.zoom}</a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Task;
