import React, { useEffect, useState } from "react";
import { getOutput } from "./axios";
import "./Cart.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function Cart() {
  let [item, setItem] = useState([]);

  useEffect(() => {
    async function getdata() {
      let details = await getOutput();
      setItem(details.data.networks);
    }
    getdata();
  }, []);

  return (
    <>
      <div className="row">
        <div class="table">
          <table className="center">
            <tr>
              <th class="col-md-3">Bike Name</th>
              <th class="col-md-3">Company Name</th>
              <th class="col-md-3">City Name</th>
              <th class="col-md-3">Country Name</th>
            </tr>
          </table>
          {item.slice(0, 5).map((user, index) => {
            return (
              <div className="center">
              <table>
                <tr>
                  <td class="col-md-3">{user.name}</td>
                  <td class="col-md-3">{user.company}</td>
                  <td class="col-md-3">{user.location.city}</td>
                  <td class="col-md-3">{user.location.country}</td>
                </tr>
              </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
