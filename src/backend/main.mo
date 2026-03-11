import Text "mo:core/Text";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Int.compare(inquiry1.timestamp, inquiry2.timestamp);
    };
  };

  let inquiries = Map.empty<Time.Time, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text) : async () {
    if (name.trim(#char(' ')).size() == 0) {
      Runtime.trap("Name cannot be empty");
    };

    if (phone.trim(#char(' ')).size() == 0 or message.trim(#char(' ')).size() == 0) {
      Runtime.trap("Phone and message cannot be empty");
    };

    if (message.trim(#char(' ')).size() < 10) {
      Runtime.trap("Message must be at least 10 characters long");
    };

    let inquiry : Inquiry = {
      name;
      phone;
      message;
      timestamp = Time.now();
    };

    inquiries.add(inquiry.timestamp, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort().reverse();
  };
};
