import type { Course, Instructor, PricingPlan, Testimonial } from "@/backend.d";
import { useActor } from "@/hooks/useActor";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetCourses() {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCourses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetInstructors() {
  const { actor, isFetching } = useActor();
  return useQuery<Instructor[]>({
    queryKey: ["instructors"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getInstructors();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetPricingPlans() {
  const { actor, isFetching } = useActor();
  return useQuery<PricingPlan[]>({
    queryKey: ["pricingPlans"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPricingPlans();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      courseInterest,
      message,
    }: {
      name: string;
      email: string;
      courseInterest: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(name, email, courseInterest, message);
    },
  });
}
