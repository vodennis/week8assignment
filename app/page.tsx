"use client"
import { useEffect, useState } from "react";

const Page = () => {
  const [currentMedia, setMedia] = useState([])
  const [selectedMedia, setSelectedMedia] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const data = await response.json();
      setMedia(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Book List</h1>
      <ul className="list-disc pl-5">
        {currentMedia.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedMedia(item)}
            className="cursor-pointer hover:text-blue-500"
          >
            {item.title}
          </li>
        ))}
      </ul>

      {selectedMedia && (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">{selectedMedia.title}</h2>
          <p>Author: {selectedMedia.author}</p>
          <p>Year: {selectedMedia.year}</p>
        </div>
      )}
    </div>
  );
}
  
export default Page;