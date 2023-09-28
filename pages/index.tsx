import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Cookies from "js-cookie";
import Sidebar from "./components/sidebar";
import Addmodal from "./components/addmodal";
import lists from "./list.json";
import { parse } from "path";
import { parseCookie } from "next/dist/compiled/@edge-runtime/cookies";

interface list {
  header: string;
  todo: string;
  color: string;
}

function IndexPage() {
  const [showaddModal, setShowaddModal] = useState(false);
  const [list, setList] = useState<list[]>([]);

  useEffect(() => {
    // دریافت اطلاعات از کوکی به عنوان یک رشته
    const cookieData = Cookies.get("todolist");

    if (cookieData) {
      try {
        // تبدیل رشته به JSON
        const parsedData = JSON.parse(cookieData);

        // چک کردن معتبر بودن داده‌ها (با توجه به ساختار داده)
        if (Array.isArray(parsedData)) {
          setList(parsedData);
        } else {
          console.error("داده‌های کوکی به درستی فرمت JSON ندارند");
        }
      } catch (error) {
        console.error("خطا در تجزیه و تحلیل JSON:", error);
      }
    }
  }, []); // اجرای این افکت تنها در زمان اولیه صفحه
  
  const addToDo = (Item) => {
    const newItem = Item;

    // اضافه کردن تسک جدید به لیست
    const updatedList = [...list, newItem];
    
    // به روز کردن وضعیت list و ذخیره در کوکی
    setList(updatedList);
    Cookies.set("todolist", JSON.stringify(updatedList));
  };

  return (
    <div className="container-sm">
      <Sidebar />
      <div className="row" id="list">
        {list.map((data: list) => (
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <div
              className={`btn text-start btn-${data.color}`}
              style={{ height: 300, width: "100%" }}
            >
              <div className="itemheader">{data.header}</div>
              <div
                style={{
                  height: 235,
                  overflow: "hidden",
                  wordWrap: "break-word",
                }}
              >
                <div style={{ margin: 0 }}>{data.todo}</div>
              </div>
            </div>
          </div>
        ))}
        <div
          className="col-12 col-md-6 col-lg-3 mb-2"
          onClick={() => setShowaddModal(true)}
        >
          <div
            className="btn btn-secondary d-flex justify-content-center align-items-center"
            style={{ height: 300 }}
          >
            <div className="plusitem">+</div>
          </div>
        </div>
      </div>

      <Addmodal showaddModal={showaddModal} setShowaddModal={setShowaddModal} addToDo={addToDo}/>
    </div>
  );
}

export default IndexPage;
