import { FallbackProps } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  console.table(error);
  return (
    <div role="alert">
      <p>エラーが発生しました:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>再試行</button>
    </div>
  );
};

export default ErrorFallback;
