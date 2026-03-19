import type { Enquiry } from "@/backend";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetEnquiries() {
  const { actor, isFetching } = useActor();
  return useQuery<Enquiry[]>({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getEnquiries();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      country: string;
      phone: string;
      service: string;
      timezone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEnquiry(
        data.name,
        data.email,
        data.country,
        data.phone,
        data.service,
        data.timezone,
        data.message,
      );
    },
  });
}

export function useUpdateEnquiryStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, status }: { id: bigint; status: string }) => {
      if (!actor) throw new Error("Not connected");
      return actor.updateEnquiryStatus(id, status);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["enquiries"] }),
  });
}

export function useDeleteEnquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteEnquiry(id);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["enquiries"] }),
  });
}
