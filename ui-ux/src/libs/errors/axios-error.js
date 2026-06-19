import axios from "axios";
import AppErorr from "./app-error";

const handleAxiosError = (error) => {
  if (error instanceof AppErorr) return error;

  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || "An unexpected server error occurred.";
    const status = error.response?.status || 400;
    return new AppError(message, status);
  }

  if (error instanceof Error) {
    return new AppError(error.message, 500, false);
  }

  return new AppError("An unknown error occurred.", 500, false);
};

export default handleAxiosError;
