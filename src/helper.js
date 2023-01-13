function getTotal(items) {
  if (items.length) {
    let res = items.reduce(
      (total, item) => total + +item.price * +item.itemCount,
      0
    );

    return res;
  }

  return 0;
}

function getCartItems(items) {
  let arr = [].concat(...items);

  let res = arr.filter((item) => item.onCart === true);
  return res;
}

function addDuplicateCart(name, setCartItems) {
  setCartItems((prev) =>
    prev.map((item) => {
      if (item.name === name) {
        console.log("duplicate");
        return { ...item, itemCount: item.itemCount + 1 };
      }
      return item;
    })
  );
}

export { getTotal, getCartItems, addDuplicateCart };
