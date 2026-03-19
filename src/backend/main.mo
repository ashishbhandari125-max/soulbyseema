import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type Enquiry = {
    id : Nat;
    name : Text;
    email : Text;
    country : Text;
    phone : Text;
    service : Text;
    timezone : Text;
    message : Text;
    timestamp : Int;
    status : Text; // "Pending" or "Responded"
  };

  public type UserProfile = {
    name : Text;
  };

  module Enquiry {
    public func compare(e1 : Enquiry, e2 : Enquiry) : Order.Order {
      Nat.compare(e1.id, e2.id);
    };
  };

  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  var nextEnquiryId = 1;
  let enquiries = Map.empty<Nat, Enquiry>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Enquiry Management
  public shared ({ caller }) func submitEnquiry(name : Text, email : Text, country : Text, phone : Text, service : Text, timezone : Text, message : Text) : async Nat {
    let id = nextEnquiryId;
    let enquiry : Enquiry = {
      id;
      name;
      email;
      country;
      phone;
      service;
      timezone;
      message;
      timestamp = Time.now();
      status = "Pending";
    };

    enquiries.add(id, enquiry);
    nextEnquiryId += 1;
    id;
  };

  public query ({ caller }) func getEnquiries() : async [Enquiry] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin access required");
    };
    enquiries.values().toArray().sort();
  };

  public shared ({ caller }) func updateEnquiryStatus(id : Nat, status : Text) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin access required");
    };

    if (status != "Pending" and status != "Responded") {
      Runtime.trap("Invalid status value");
    };

    switch (enquiries.get(id)) {
      case (null) {
        Runtime.trap("Enquiry not found");
      };
      case (?enquiry) {
        let updatedEnquiry : Enquiry = {
          id = enquiry.id;
          name = enquiry.name;
          email = enquiry.email;
          country = enquiry.country;
          phone = enquiry.phone;
          service = enquiry.service;
          timezone = enquiry.timezone;
          message = enquiry.message;
          timestamp = enquiry.timestamp;
          status;
        };
        enquiries.add(id, updatedEnquiry);
      };
    };
  };

  public shared ({ caller }) func deleteEnquiry(id : Nat) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin access required");
    };

    if (not enquiries.containsKey(id)) {
      Runtime.trap("Enquiry not found");
    };

    enquiries.remove(id);
  };

  public query ({ caller }) func getEnquiryCount() : async Nat {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Admin access required");
    };
    enquiries.size();
  };
};
