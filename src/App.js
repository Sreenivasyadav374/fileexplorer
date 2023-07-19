import "./styles.css";
import explorer from "./data/data";
import { useState } from "react";
import Folder from "./components/Folder";
import traversehook from "./hooks/traversehook";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insert } = traversehook();
  const handleData = (folderid, item, isFolder) => {
    const node = insert(explorerData, folderid, item, isFolder);
    setExplorerData(node);
  };
  return (
    <div className="App">
      <Folder explorer={explorerData} handleData={handleData} />
    </div>
  );
}