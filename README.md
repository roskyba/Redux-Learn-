#### @reduxjs/toolkit

#### thunk

The builder object in extraReducers provides methods that let us define additional case reducers that will run in response to actions defined outside of the slice:

builder.addCase(actionCreator, reducer): defines a case reducer that handles a single known action type based on either an RTK action creator or a plain action type string
builder.addMatcher(matcher, reducer): defines a case reducer that can run in response to any action where the matcher function returns true
builder.addDefaultCase(reducer): defines a case reducer that will run if no other case reducers were executed for this action.
You can chain these together, like builder.addCase().addCase().addMatcher().addDefaultCase(). If multiple matchers match the action, they will run in the order they were defined.

```js
const initialsState = {
  users: [],
  loading: "idle",
};
// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload);
    });
  },
});
```
