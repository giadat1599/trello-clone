import { useState, useCallback } from "react";

import { ActionState, FieldErrors } from "@/lib/create-safe-action";

type Action<TInput, TOutput> = (data: TInput) => Promise<ActionState<TInput, TOutput>>;

interface UseActionOptions<TOutput> {
   onSuccess?: (data: TOutput) => void;
   onError?: (error: string) => void;
   onComplete?: () => void;
}

export const useAction = <TInput, TOuput>(
   action: Action<TInput, TOuput>,
   options: UseActionOptions<TOuput> = {}
) => {
   const [fieldErrors, setFieldErrors] = useState<FieldErrors<TInput> | undefined>(undefined);
   const [error, setError] = useState<string | undefined>(undefined);
   const [data, setData] = useState<TOuput | undefined>(undefined);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const execute = useCallback(
      async (input: TInput) => {
         setIsLoading(true);

         try {
            const result = await action(input);

            if (!result) return;

            setFieldErrors(result.fieldErrors);

            if (result.error) {
               setError(result.error);
               options.onError && options.onError(result.error);
            }

            if (result.data) {
               setData(result.data);
               options.onSuccess && options.onSuccess(result.data);
            }
         } finally {
            setIsLoading(false);
            options.onComplete && options.onComplete();
         }
      },
      [action, options]
   );

   return {
      execute,
      fieldErrors,
      error,
      data,
      isLoading,
   };
};
