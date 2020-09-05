const mongoose = require("mongoose");
const Campground = require("./models/campground");
const Comment = require("./models/comment");

const data = [
  {
    name: "Cloud's Rest",
    image:
      "https://theknow.denverpost.com/wp-content/uploads/2019/02/BERMAN-camp-ECHO-1-1.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, iure quas! Nulla nesciunt et, deserunt culpa saepe vel sit sapiente laudantium maxime totam, voluptatum numquam fugiat eius harum dolorum ipsa.",
  },
  {
    name: "Washburn",
    image:
      "https://lh3.googleusercontent.com/proxy/xCNlNIdlfgW5aHHTc-GF2NzJjbKkxqsqRnBwAykd7hsRnGPCMRXAzJ4BhrINMT7KBZx61oasl6MEUhpYlglDmYcVUtKbXPvVprbWFcvDqrfxS0NBUa0ZfQ7EZJr5bw",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, iure quas! Nulla nesciunt et, deserunt culpa saepe vel sit sapiente laudantium maxime totam, voluptatum numquam fugiat eius harum dolorum ipsa.",
  },
  {
    name: "Beach Campground",
    image:
      "https://www.gore-tex.com/sites/default/files/blog_images/beach-camping.jpg",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, iure quas! Nulla nesciunt et, deserunt culpa saepe vel sit sapiente laudantium maxime totam, voluptatum numquam fugiat eius harum dolorum ipsa.",
  },
];

function seedDB() {
  //Remove all campgrounds
  Campground.remove({}, function (err) {
    // if (err) {
    //   console.log(err);
    // }
    // console.log("removed campgrounds!");
    // Comment.remove({}, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log("removed comments!");
    //   //add a few campgrounds
    //   data.forEach(function (seed) {
    //     Campground.create(seed, function (err, campground) {
    //       if (err) {
    //         console.log(err);
    //       } else {
    //         console.log("added a campground");
    //         //create a comment
    //         Comment.create(
    //           {
    //             text: "This place is great, but I wish there was internet",
    //             author: "Homer",
    //           },
    //           function (err, comment) {
    //             if (err) {
    //               console.log(err);
    //             } else {
    //               campground.comments.push(comment);
    //               campground.save();
    //               console.log("Created new comment");
    //             }
    //           }
    //         );
    //       }
    //     });
    //   });
    // });
  });
}

module.exports = seedDB;
