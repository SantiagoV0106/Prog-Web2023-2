import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useState, useEffect } from "react";

export const useProject = () => {
   
    const {id} = useParams()
    console.log(id);

    const [project, setProject] = useState(null)

    useEffect(()=> {

        const getProject = async() => {

            try {
                
                const projectRef = doc(db, 'projects', id)
                const projectSnap = await getDoc(projectRef)

                if (projectSnap.exists) {
                    console.log(projectSnap.data());
                    setProject(projectSnap.data())

                } else {
                    console.log('paila');
                }
    
            } catch (error) {
                console.error(error);
            }

        }

        return ()=> getProject()

    },[id])

    return {
        project
    }
  
}