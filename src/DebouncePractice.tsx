import { useState } from "react";
import _ from "lodash";
const DebouncePractice = () => {
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = _.debounce((term: string) => {
    // 実際のAPI呼び出しをシミュレート
    setResults([`Result for ${term}`]);
  }, 300);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="検索..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncePractice;
