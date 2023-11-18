import React from "react";

export default function EmpWorkLog(props) {
  const handleWorklogBtn = () => {
    props.setshowWorklogSection(true);
  }
  return (
    <div>
      <div className="worklog-header">
        <h5>Latest Work Log</h5>
        <button onClick={handleWorklogBtn}>Add Worklog</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Working Hours</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">9 Hours 1 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:23 am</span>
            </td>
            <td>
              <span className="good-checkout-time">19:24 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Flutter Development</td>
            <td>
              <span className="good-working-hours">9 Hours 56 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:11 am</span>
            </td>
            <td>
              <span className="good-checkout-time">20:07 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Database Completed</td>
            <td>
              <span className="bad-working-hours">3 Hours 19 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:06 am</span>
            </td>
            <td>
              <span className="bad-checkout-time">14:18 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Backend Created</td>
            <td>
              <span className="good-working-hours">8 Hours 5 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:14 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:51 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">8 Hours 39 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">09:27 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:06 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">7 Hours 44 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:01 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:17 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="bad-working-hours">3 Hours 27 Minute</span>
            </td>
            <td>
              <span className="bad-checkout-time">14:04 pm</span>
            </td>
            <td>
              <span className="good-checkout-time">18:26 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">9 Hours 26 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:09 am</span>
            </td>
            <td>
              <span className="good-checkout-time">19:17 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">7 hours 0 minutes</span>
            </td>
            <td>
              <span className="good-checkout-time">11:23 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:37 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">10 Hours 4 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">09:57 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:01 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="good-working-hours">8 Hours 10 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">09:53 am</span>
            </td>
            <td>
              <span className="good-checkout-time">18:03 pm</span>
            </td>
          </tr>
          <tr>
            <td>10/08/2023</td>
            <td>Mern stack</td>
            <td>
              <span className="bad-working-hours">7 Hours 20 Minute</span>
            </td>
            <td>
              <span className="good-checkout-time">10:01 am</span>
            </td>
            <td>
              <span className="bad-checkout-time">17:21 pm</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
