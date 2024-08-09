import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./Loading";
import ErrorFallback from "./ErrorFallback";
import DataContent from "./DataContent";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const DataDisplay = ({ id }: { id: string }) => {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        reset();
      }}
    >
      <Suspense fallback={<Loading />}>
        <DataContent id={id} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default DataDisplay;
