import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Addmodal({ showaddModal, setShowaddModal, addToDo }) {
  // ایجاد وضعیت برای نظارت بر ورودی‌ها
  const [header, setHeader] = useState("");
  const [todo, setTodo] = useState("");
  // تابعی برای بررسی وضعیت ورودی‌ها و تنظیم وضعیت دکمه "Add"
  const isAddButtonDisabled = header.trim() === "" || todo.trim() === "";

  const [selectedOption, setSelectedOption] = useState("primary");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.id);
  };

  return (
    <div>
      <Modal show={showaddModal} onHide={() => setShowaddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <form id="addForm">
          <Modal.Body>
            <input
              type="text"
              id="header"
              className="p-1 mb-1"
              style={{
                width: "100%",
                height: 50,
                fontSize: "xx-large",
                borderRadius: 10,
              }}
              placeholder="Header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              required
            />
            <textarea
              id="todo"
              className="p-1"
              style={{
                resize: "none",
                width: "100%",
                height: 100,
                borderRadius: 10,
              }}
              placeholder="What Do you Want To Do ?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              required
            />
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="primary"
              autoComplete="off"
              checked={selectedOption === "primary"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-primary" htmlFor="primary">
              Primary
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="success"
              autoComplete="off"
              checked={selectedOption === "success"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-success" htmlFor="success">
              Success
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="danger"
              autoComplete="off"
              checked={selectedOption === "danger"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-danger" htmlFor="danger">
              Danger
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="warning"
              autoComplete="off"
              checked={selectedOption === "warning"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-warning" htmlFor="warning">
              Warning
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="info"
              autoComplete="off"
              checked={selectedOption === "info"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-info" htmlFor="info">
              Info
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="light"
              autoComplete="off"
              checked={selectedOption === "light"}
              onChange={handleOptionChange}
            />
            <label className="btn btn-light" htmlFor="light">
              Light
            </label>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowaddModal(false)}>
              Close
            </Button>
            {/* استفاده از وضعیت برای فعال یا غیرفعال کردن دکمه "Add" */}
            <Button
              variant="primary"
              onClick={() => {
                // اگر وضعیت ورودی‌ها معتبر باشد، عملیات اضافه کردن انجام شود
                if (!isAddButtonDisabled) {
                  // انجام عملیات اضافه کردن
                  // ...
                  // بعد از اتمام عملیات، می‌توانید وضعیت ورودی‌ها را صفر کنید
                  addToDo({
                    header: header,
                    todo: todo,
                    color: selectedOption,
                  });
                  setHeader("");
                  setTodo("");
                  setSelectedOption("primary");
                  setShowaddModal(false);
                }
              }}
              disabled={isAddButtonDisabled} // غیرفعال کردن دکمه در صورت لزوم
            >
              Add
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
}
export default Addmodal;
