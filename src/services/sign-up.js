// mock
export function sendSignUp() {
  return Promise.resolve()
    .then(() => new Promise((resolve) => setTimeout(resolve, 1000)));
}

export default { sendSignUp };
