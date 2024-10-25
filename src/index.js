//Call all functions inside services and log updated value/s
import * as userService from "./services/users";
import * as commentService from "./services/comments";
import * as postService from "./services/posts";

userService.addUser({
    name: "Sample",
    username: "SampleUser",
    email: "Sample@april.biz",
    address: {
      street: "Sample st.",
      suite: "Sample000",
      city: "Sample City",
      zipcode: "1234-5678",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "123489273423",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  })
userService.addUser({
    name: "Sample2",
    username: "SampleUser",
    email: "Sample@april.biz",
    address: {
      street: "Sample st.",
      suite: "Sample000",
      city: "Sample City",
      zipcode: "1234-5678",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "123489273423",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  })
userService.addUser({
    name: "Sample3",
    username: "SampleUser",
    email: "Sample@april.biz",
    address: {
      street: "Sample st.",
      suite: "Sample000",
      city: "Sample City",
      zipcode: "1234-5678",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    }
  })

userService.updateUser(1, { email: "roger@77.com" });
console.log(userService.getAllUsers());

const getUser = userService.getUserById(12001)
console.log(getUser)


// COMMMENTS ---------------------------------------- //
const getComment = commentService.getCommentById(1)
console.log(getComment)

const getCommentPost = commentService.getCommentsByPostId(3)
console.log(getCommentPost)

const updatedComment = commentService.updateCommentBody(2, 'sample comment')
console.log(updatedComment)

const deletedComment = commentService.deleteCommentById(1)
console.log(deletedComment)

const newComment = commentService.addComment(
    {
    postId: 3,
    name: "Sample Commnet",
    email: "samplen@timmothy.net",
    body: "sample body",
    }
)
console.log(newComment)

// POST ---------------------------------------

const getPostById = postService.getPostById(1)
console.log(getPostById)

const getPostByUserId = postService.getPostsByUser(1)
console.log(getPostByUserId)

postService.addPost(
  {
      userId: 2,
      title: "Dummy Title",
      body: "Dummy Body",
  }
)

postService.updatePost(
  3,
  {title: "Sample Title"}
)

postService.updatePostBody(
  4,
  "Sample Body Dummy"
)

postService.updatePostTitle(
  5,
  "Sample Title Dummy"
)

postService.deletePostById(6)

postService.deletePostsByUserId(3)

console.log(postService.getPosts())