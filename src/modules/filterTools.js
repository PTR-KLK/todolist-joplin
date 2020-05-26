export const filterFolders = (arr) => {
  const parentIdArr = Array.from(
    new Set(arr[0].filter((e) => e.is_todo === 1).map((e) => e.parent_id))
  );

  const filteredArr = [];

  arr[1].forEach((e) => {
    if (parentIdArr.includes(e.id) && !e.children) {
      filteredArr.push({ id: e.id, title: e.title });
    } else if (
      e.children &&
      e.children.filter((el) => parentIdArr.includes(el.id)).length > 0
    ) {
      filteredArr.push({ id: e.id, title: e.title, children: [] });
      e.children.forEach((el) => {
        if (parentIdArr.includes(el.id)) {
          filteredArr[filteredArr.length - 1].children.push({
            id: el.id,
            title: el.title,
            todos: arr[0].filter((ele) => ele.parent_id === el.id),
          });
        }
      });
    }
  });

  return filteredArr;
};
