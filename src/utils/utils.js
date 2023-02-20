export const formatDate = (timeStamp) => {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const d = new Date(timeStamp);
  return d
    .toLocaleDateString("de-DE", options)
    .replaceAll(".", "")
    .replaceAll(",", "");
};
