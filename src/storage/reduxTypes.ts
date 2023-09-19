import store from "./store";

//типизируем стейт
export type RootState = ReturnType<typeof store.getState>;
