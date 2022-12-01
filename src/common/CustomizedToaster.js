import { Toaster } from "react-hot-toast";

const CustomizedToaster = () => {
  return (
    <div className="App" role="alert">
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          duration: 6000,
          success: {
            style: {
              background: "#3cba92",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#3cba92",
            },
          },
          error: {
            style: {
              background: "#d92550",
            },
            iconTheme: {
              primary: "#fff",
              secondary: "#d92550",
            },
          },
          style: {
            width: "100%",
            padding: "10px 15px",
            borderRadius: "10px",
            color: "#FFFFFF",
            fontSize: "15px",
            boxShadow: "0px 8px 10px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
    </div>
  );
};

export default CustomizedToaster;
