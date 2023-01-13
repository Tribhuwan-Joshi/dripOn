function getTotal(items) {
  if (items.length) {
    let res = items.reduce(
      (total, item) => total + +item.price * +item.itemCount,
      0
    );
    console.log("total cost element", res);

    return res;
  }

  return 0;
}

function getCartItems(items) {
  let arr = [].concat(...items);

  let res = arr.filter((item) => item.onCart === true);
  return res;
}

export { getTotal, getCartItems };
