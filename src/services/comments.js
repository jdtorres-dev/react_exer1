import { comments as data } from "../data/comments";
import { generateId } from "../utils" 

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  return comments.find((comment) => comment.id === id);
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  return comments.filter((commentPost) => commentPost.postId === postId);
}

export function updateCommentBody(id, body) {
  //update comment body
  const comment = comments.find(commment => commment.id === id) 
  comment.body = body
  return comment
}

export function deleteCommentById(id) {
  // Delete comment by id
  comments = comments.filter((comment) => comment.id !== id);
  return comments
}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  const newComment = {
    ...comment,
    id: generateId(comments) 
  };

  comments = [...comments, newComment];
  
  return comments; 
}
