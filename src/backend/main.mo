import Int "mo:core/Int";
import Time "mo:core/Time";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  // Types
  type Submission = {
    name : Text;
    email : Text;
    courseInterest : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  type Course = {
    id : Nat;
    title : Text;
    description : Text;
    category : Text;
    duration : Text;
    level : Text;
  };

  type Instructor = {
    id : Nat;
    name : Text;
    title : Text;
    bio : Text;
  };

  type Testimonial = {
    id : Nat;
    studentName : Text;
    courseTaken : Text;
    quote : Text;
  };

  type PricingPlan = {
    id : Nat;
    name : Text;
    price : Nat;
    billingPeriod : Text;
    features : [Text];
    isPopular : Bool;
  };

  // State
  var nextSubmissionId = 0;
  let submissions = Map.empty<Nat, Submission>();

  // Static Data
  let courses = [
    {
      id = 1;
      title = "Game Design Fundamentals";
      description = "Learn the core principles of game design, including mechanics, storytelling, and level design.";
      category = "Design";
      duration = "8 weeks";
      level = "Beginner";
    },
    {
      id = 2;
      title = "Unity Game Development";
      description = "Master Unity for 2D and 3D game development, including C# scripting and asset integration.";
      category = "Development";
      duration = "12 weeks";
      level = "Intermediate";
    },
    {
      id = 3;
      title = "Advanced Graphics Programming";
      description = "Explore advanced graphics techniques, shaders, and optimization for high-performance games.";
      category = "Programming";
      duration = "10 weeks";
      level = "Advanced";
    },
  ];

  let instructors = [
    {
      id = 1;
      name = "Jane Smith";
      title = "Lead Game Designer";
      bio = "With over 15 years in the industry, Jane has worked on AAA titles and is passionate about teaching game design.";
    },
    {
      id = 2;
      name = "John Doe";
      title = "Senior Unity Developer";
      bio = "John specializes in Unity development and has created successful indie games across multiple platforms.";
    },
    {
      id = 3;
      name = "Emily Johnson";
      title = "Graphics Programming Expert";
      bio = "Emily holds a PhD in Computer Graphics and has published research on real-time rendering techniques.";
    },
  ];

  let testimonials = [
    {
      id = 1;
      studentName = "Michael Brown";
      courseTaken = "Game Design Fundamentals";
      quote = "This course completely changed my perspective on game development. The instructors are top-notch!";
    },
    {
      id = 2;
      studentName = "Sarah Lee";
      courseTaken = "Unity Game Development";
      quote = "The hands-on projects helped me land my first game developer job. Highly recommended!";
    },
    {
      id = 3;
      studentName = "David Kim";
      courseTaken = "Advanced Graphics Programming";
      quote = "The depth of knowledge and practical examples were incredible. I learned so much from this program.";
    },
  ];

  let pricingPlans = [
    {
      id = 1;
      name = "Basic";
      price = 499;
      billingPeriod = "One-time";
      features = ["Access to all beginner courses", "Community support", "Certificate of completion"];
      isPopular = false;
    },
    {
      id = 2;
      name = "Pro";
      price = 999;
      billingPeriod = "One-time";
      features = [
        "Access to all courses (beginner to advanced)",
        "1-on-1 mentoring sessions",
        "Exclusive workshops",
        "Priority support",
      ];
      isPopular = true;
    },
    {
      id = 3;
      name = "Enterprise";
      price = 2999;
      billingPeriod = "One-time";
      features = [
        "Team access (up to 10 users)",
        "Custom training programs",
        "Dedicated account manager",
        "Exclusive enterprise resources",
      ];
      isPopular = false;
    },
  ];

  // Core Features

  module Submission {
    public func compare(s1 : Submission, s2 : Submission) : Order.Order {
      Int.compare(s2.submittedAt, s1.submittedAt);
    }
  };

  // Submissions
  public shared ({ caller }) func submitForm(name : Text, email : Text, courseInterest : Text, message : Text) : async () {
    let submission : Submission = {
      name;
      email;
      courseInterest;
      message;
      submittedAt = Time.now();
    };
    submissions.add(nextSubmissionId, submission);
    nextSubmissionId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [Submission] {
    submissions.values().toArray().sort().sliceToArray(0, submissions.size());
  };

  // Static Data Queries
  public query ({ caller }) func getCourses() : async [Course] {
    courses;
  };

  public query ({ caller }) func getInstructors() : async [Instructor] {
    instructors;
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials;
  };

  public query ({ caller }) func getPricingPlans() : async [PricingPlan] {
    pricingPlans;
  };

  // Admin - Get Single Submission
  public query ({ caller }) func getSubmissionById(id : Nat) : async Submission {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission not found") };
      case (?submission) { submission };
    };
  };
};
