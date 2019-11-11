function add() {
  var count = 0;
  for (var i = 0; i < arguments.length; i++) {
    count += arguments[i];
  }
  return count;
}
