import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Course {
    id: bigint;
    title: string;
    duration: string;
    description: string;
    level: string;
    category: string;
}
export interface Instructor {
    id: bigint;
    bio: string;
    title: string;
    name: string;
}
export type Time = bigint;
export interface Submission {
    name: string;
    submittedAt: Time;
    email: string;
    courseInterest: string;
    message: string;
}
export interface PricingPlan {
    id: bigint;
    features: Array<string>;
    name: string;
    isPopular: boolean;
    billingPeriod: string;
    price: bigint;
}
export interface Testimonial {
    id: bigint;
    studentName: string;
    quote: string;
    courseTaken: string;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<Submission>>;
    getCourses(): Promise<Array<Course>>;
    getInstructors(): Promise<Array<Instructor>>;
    getPricingPlans(): Promise<Array<PricingPlan>>;
    getSubmissionById(id: bigint): Promise<Submission>;
    getTestimonials(): Promise<Array<Testimonial>>;
    submitForm(name: string, email: string, courseInterest: string, message: string): Promise<void>;
}
