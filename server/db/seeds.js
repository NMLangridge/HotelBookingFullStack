use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Niall Morris",
    email: "niall.morris@codeclan.com",
    checked_in_status: true
  },
  {
    name: "Jordan Davidson",
    email: "jordan.davidson@codeclan.com",
    checked_in_status: true
  },
  {
    name: "Colin Bell",
    email: "smellyloser@codeclan.com",
    checked_in_status: false
  },
  {
    name: "Steven Meiklejohn",
    email: "steven.meiklejohn@codeclan.com",
    checked_in_status: true
  }
]);
