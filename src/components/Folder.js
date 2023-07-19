import { useState } from "react";

function Folder({ explorer, handleData }) {
  const [show, setShow] = useState(false);
  const [inp, setInp] = useState({
    visible: false,
    isFolder: false
  });

  const handleAdd = (e, isFolder) => {
    e.stopPropagation();
    setShow(true);
    setInp({ ...inp, visible: true, isFolder });
  };

  if (explorer.isFolder) {
    return (
      <div style={{}}>
        <div className="folder" onClick={() => setShow(!show)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleAdd(e, true)}>+ Folder</button>
            <button onClick={(e) => handleAdd(e, false)}>+ File</button>
          </div>
        </div>

        <div style={{ display: show ? "block" : "none", paddingLeft: 25 }}>
          {inp.visible && (
            <div className="inputContainer">
              <span>
                {inp.isFolder ? "📁" : "📄"}
                <input
                  type="text"
                  className="inputContainer__input"
                  onBlur={() => setInp({ ...inp, visible: false })}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13 && e.target.value) {
                      handleData(explorer.id, e.target.value, inp.isFolder);
                      setInp({ ...inp, visible: false });
                    }
                  }}
                ></input>
              </span>
            </div>
          )}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} handleData={handleData} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
}

export default Folder;