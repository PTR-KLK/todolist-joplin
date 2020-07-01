export const filterFolders = ([todoArr, folderArr]) => {
  const excludeArr = Array.from(
    new Set(todoArr.filter((e) => e.is_todo === 0).map((e) => e.parent_id))
  );

  // filter array with excludeArr
  const filterArr = (arr) =>
    arr.filter((e) =>
      !excludeArr.includes(e.id)
        ? true
        : e.children &&
          e.children.reduce(
            (total, curr) =>
              !excludeArr.includes(curr.id) || total
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
        ? !excludeArr.includes(e.id)
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
