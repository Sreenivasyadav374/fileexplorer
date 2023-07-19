const traversehook = () => {
  const insert = function (tree, folderId, name, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder,
        items: []
      });
      return tree;
    }
    let arr = [];
    arr = tree.items.map((each) => {
      return insert(each, folderId, name, isFolder);
    });
    return { ...tree, items: arr };
  };
  return { insert };
};

export default traversehook;