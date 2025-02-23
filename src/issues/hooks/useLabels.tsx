import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels.action";
import { GitHubLabel } from "../interfaces";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });

  return {
    labelsQuery,
  };
};
