import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileDropCompo = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mb-6 bg-white rounded-sm">
      <div
        {...getRootProps()}
        className={`border border-dashed rounded-sm py-8 flex flex-col items-center justify-center transition-colors cursor-pointer
          ${
            isDragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 bg-gray-50"
          }`}
      >
        <input {...getInputProps()} />

        <div className="border border-blue-200 text-sm capitalize font-medium text-blue-600 px-6 py-2 rounded-md bg-white shadow-sm mb-3 font-medium">
          Add File
        </div>

        <span className="text-gray-500 text-sm">Or drag and drop files</span>
      </div>
    </div>
  );
};

export default FileDropCompo;
