const isVaildUrl = (data) => {
  try {
    new URL(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default isVaildUrl;
