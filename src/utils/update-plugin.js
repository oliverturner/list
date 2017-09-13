const UpdatePlugin = {
  reducer: {
    GRIDDLE_UPDATE_STATE_AFTER: state => {
      return state
        .set("filter", "")
        .setIn(["pageProperties", "currentPage"], 1)
        .setIn(["currentPosition", "yScrollChangePosition"], 0);
    }
  }
};

export default UpdatePlugin;
