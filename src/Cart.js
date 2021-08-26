import React, { useEffect, useState } from "react";
import { getOutput } from "./axios";
import "./Cart.css";

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
              <th>Bike Name</th>
              <th>Company Name</th>
              <th>City Name</th>
              <th>Country Name</th>
            </tr>
          </table>
          {item.slice(0, 5).map((user, index) => {
            return (
              <div className="center">
              <table>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.company}</td>
                  <td>{user.location.city}</td>
                  <td>{user.location.country}</td>
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
