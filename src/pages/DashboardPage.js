import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../auth/axiosInstance";
import styles from "./dashboard.module.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchTransactions = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    console.log("fetching transactions", localStorage.getItem("token"));
    try {
      const response = await axiosInstance.post(
        "/transaction-manager/v1/admin/dashboard/search",
        {},
        config
      );
      setData(response.data.data);
      console.log("Response", response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1 className={styles.dashboard_title}>Dashboard Page</h1>

      <button
        className={`${styles.dashboard_logout} btn `}
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        Logout
      </button>
      <h3 className={styles.title_list}>List of Transaction</h3>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th className="tc table_headings" scope="col">
              Current Status
            </th>
            <th className="tc table_headings" scope="col">
              Receive Amount
            </th>
            <th className="tc table_headings" scope="col">
              Receive Country
            </th>
            <th className="tc table_headings" scope="col">
              Receiver Full Name
            </th>
            <th className="tc table_headings" scope="col">
              Send Amount
            </th>
            <th className="tc table_headings" scope="col">
              Send Country
            </th>
            <th className="tc table_headings" scope="col">
              Sender Full Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((items, index) => {
            return (
              <tr key={index}>
                <td className="tc custom_table_items">
                  {items["Current Status"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Receive Amount"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Receive Country"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Receiver Full Name"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Send Amount"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Send Country"]}
                </td>
                <td className="tc custom_table_items">
                  {items["Sender Full Name"]}
                </td>
                <td className="tc custom_table_items"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
