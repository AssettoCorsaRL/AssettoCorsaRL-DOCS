import React from "react";

interface FileEntry {
  name: string;
  absPath: string;
  publicUrl: string;
}

import generatedEntries from "./fileList";
import useBaseUrl from "@docusaurus/useBaseUrl";

const fileEntries: FileEntry[] = generatedEntries as FileEntry[];

const RacingLineFiles: React.FC = () => {
  const copy = (text: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        // ignore
      });
    }
  };

  return (
    <div>
      <p>
        Available JSON files (copy the link into <code>racing_line_path</code>{" "}
        in env config):
      </p>
      <p>
        To find valid config locations on your computer, run{" "}
        <code>acrl ac config-locations</code> in your terminal.
      </p>
      <ul>
        {fileEntries.map((f) => (
          <li key={f.name} style={{ marginBottom: "0.5em" }}>
            <a href={useBaseUrl(f.publicUrl)} target="_blank" rel="noreferrer">
              {f.name}
            </a>{" "}
          </li>
        ))}
        {fileEntries.length === 0 && (
          <li>
            <em>No JSON files found</em>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RacingLineFiles;
