import { useState } from "react";

const AddTask = (props) => {
  const [title, setTitle] = useState("");
  const [day, setDay] = useState("");
  const [important, setImportant] = useState(false);
  const [zoom, setZoom] = useState("");
  const [time, setTime] = useState("");

  function isFutureDate(idate) {
    var today = new Date().setHours(0, 0, 0, 0);
    idate = idate.split("/");
    idate = new Date(idate[0], idate[1] - 1, idate[2]).getTime();
    return today - idate < 0;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    var res = day.replace("-", "/");
    var res = res.replace("-", "/");

    var today = isFutureDate(res);

    if (title.length == 0 || title.length > 30) {
      alert("length of title is empty or too long");
      return "";
    }

    if (!today) {
      alert("Must include future dates");
      return "";
    }

    if (!zoom.includes("zoom")) {
      alert("The link does not contain zoom");
      return "";
    }

    props.onAdd({ title, day, important, zoom, time });
    alert("task added");
    setTitle("");
    setDay("");
    setImportant(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label style={{ marginBottom: "1rem" }} for="meeting">
          Meeting
        </label>
        <input
          type="text"
          placeholder="Add Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="meeting"
          style={{ display: "inline-block" }}
        />
      </div>
      <br />
      <br />
      <div className="form-control">
        <label style={{ marginBottom: "1rem" }}> Date</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          id="date"
          placeholder="dd/mm/yyyy"
          name="begin"
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
        <label className="label-important">Important</label>
        <input
          type="checkbox"
          checked={important}
          value={important}
          onChange={(e) => setImportant(e.currentTarget.checked)}
          className="checkbox"
        />
      </div>

      <input className="btn1" type="submit" value="Save" />
    </form>
  );
};

export default AddTask;
