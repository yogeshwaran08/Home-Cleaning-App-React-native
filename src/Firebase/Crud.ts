import { firebase } from "@react-native-firebase/database";
import { dbUrl } from "../config/constants";

const db = firebase.app().database(dbUrl)


export const getData = async (path : string) => {
    const ref = db.ref(path);
    return ref.once("value")
      .then(snapshot => {
        return snapshot.val();
      })
      .catch(error => {
        console.error("An error occurred:", error);
      });
};

export const setData = async(path : string, data : any) => {
    const ref = await db.ref(path).set(data)
    .then(success => {return true})
    .catch(error => {
        console.log("Error Occured on setting data" , error);
        return false;
    });
}