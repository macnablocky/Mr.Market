export const sortByString = (colHeader, data, ascendingOrder) => {
  data = data.sort((obj1, obj2) => {
    const value1 = obj1[colHeader].toLowerCase();
    const value2 = obj2[colHeader].toLowerCase();

    if (value1 < value2) {
      return 1;
    } else if (value1 > value2) {
      return -1;
    }
    return 0;
  });

  if (!ascendingOrder) {
    data = data.reverse();
  }
  return data;
};

export const sortByNumber = (colHeader, data, ascendingOrder) => {
  return data.sort((obj1, obj2) => {
    const num1 = parseFloat(obj1[colHeader]);
    const num2 = parseFloat(obj2[colHeader]);

    return ascendingOrder ? num1 - num2 : num2 - num1;
  });
};

// Change fields when data change
export const sortCoins = (colHeader, data, ascendingOrder) => {
  if (colHeader === 'symbol' || colHeader === 'name' || colHeader=== 'market_cap') {
    return sortByString(colHeader, data, ascendingOrder);
  } else if (colHeader === 'price' || colHeader === 'percentage'|| colHeader === 'current_price' ||  colHeader === 'price_change_percentage_24h' || colHeader === 'market_cap_rank') {
    return sortByNumber(colHeader, data, ascendingOrder);
  }
  return data;
};

export const sortSpot = (colHeader, data, ascendingOrder) => {
  if (colHeader === 'first') {
    return sortByString(colHeader, data, ascendingOrder);
  } else if (colHeader === 'price' || colHeader === 'percentage') {
    return sortByNumber(colHeader, data, ascendingOrder);
  }
  return data;
};