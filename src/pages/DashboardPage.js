import React, { useEffect } from "react";
import axiosInstance from "../auth/axiosInstance";

const jwt_token = localStorage.getItem("token");
const DashboardPage = () => {
  console.log("jwt_token", jwt_token);

  const fetchTransactions = async () => {
    try {
      const response = await axiosInstance.post(
        "/transaction-manager/v1/admin/dashboard/search",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt_token}`,
          },
        }
      );

      console.log("Response", response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="text_c">Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
