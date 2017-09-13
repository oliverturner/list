import moment from "moment";

export const dateFormat = dateString =>
  dateString ? moment(dateString).format("MM/DD/YYYY") : "";

export const getDateString = date => {
  try {
    return date ? moment(date).toISOString() : "";
  } catch (e) {
    return "";
  }
};
