function* generator() {
  yield 1;
}

export default function* rootSaga() {
  yield console.log(generator().next());
}

// function root() {
//   const iterator
// }
