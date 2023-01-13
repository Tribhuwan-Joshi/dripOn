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

export { getTotal };
