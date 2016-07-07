import { AUTHENTICATE_COMPLETE } from "./authenticate";

export function fakeLogin() {
  return {
    type: AUTHENTICATE_COMPLETE,
    user: {
      id: "fake@user.com",
    }
  };
}
