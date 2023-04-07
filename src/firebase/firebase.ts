import { initializeApp } from "firebase/app"
import { getDownloadURL, getStorage, ref } from "firebase/storage"
import { firebaseConfig as config } from '../utils/constants'

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.appId
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

export const getImage = async (callback: (url: string) => void) => {
  try {
    const storageRef = ref(storage, "/plants_1.JPG")
    const url = await getDownloadURL(storageRef)
    callback(url)
  } catch (error) {
    console.log("Error: ", error)
  }
}