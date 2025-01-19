import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase.js";

export const tweetsRef = collection(db, "tweets");

export async function getTweets() {
  const querySnapshot = await getDocs(tweetsRef);
  const tweets = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
    };
  });
  return tweets;
}

/**
 *
 * @param {number} docId
 * @param {Object} data
 */
export async function updateTweet(docId, data) {
  const docRef = doc(db, "tweets", docId);
  await updateDoc(docRef, data);
}
