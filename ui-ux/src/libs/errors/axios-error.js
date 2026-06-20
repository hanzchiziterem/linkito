import axios from "axios";
import AppError from "./app-error.js";

const handleAxiosError = (error) => {
  if (error instanceof AppError) return error;

  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || "An unexpected server error occurred.";
    const status = error.response?.status || 400;
    return new AppError(message, status);
  }

  if (error instanceof Error) {
    return new Error(error.message, 500, false);
  }

  return new AppError("An unknown error occurred.", 500, false);
};

export default handleAxiosError;
