export const filterFolders = ([todoArr, folderArr]) => {
  const parentIdArr = Array.from(
    new Set(todoArr.filter((e) => e.is_todo === 1).map((e) => e.parent_id))
  );

  // filter array when its elements have id in parentIdArray or one of element child or nth-child has id in parentIdArray

  const filterArr = (arr) =>
    arr.filter((e) =>
      parentIdArr.includes(e.id)
        ? true
        : e.children &&
          e.children.reduce(
            (total, curr) =>
              parentIdArr.includes(curr.id) || total
                ? true
                : curr.children && filterArr(curr.children),
            false
          )
        ? e
        : false
    );

  // apply filter to all elements and its childs and nth-childs and add todos array with id matching element id

  const filterFolders = (arr) => {
    return filterArr(arr).map((e) =>
      e.children
        ? parentIdArr.includes(e.id)
          ? {
              ...e,
              children: filterFolders(e.children),
              todos: todoArr.filter((el) => el.parent_id === e.id),
            }
          : {
              ...e,
              children: filterFolders(e.children),
            }
        : { ...e, todos: todoArr.filter((el) => el.parent_id === e.id) }
    );
  };

  return filterFolders(folderArr);
};
