import { useState, useEffect } from "react"

//Firebase
import { db } from "../../config/firebase"
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"

//Custom hooks
import { useProjects } from "../../User/hooks/useProjects"

const initialInputState = ''

export function useUpload() {

    // useProjects
    const { filteredProjects, getProjects } = useProjects()

    // Form States
    const [projectName, setProjectName] = useState(initialInputState)
    const [projectDesc, setProjectDesc] = useState(initialInputState)
    const [imgUrl, setImgUrl] = useState(initialInputState)

    //Filter Satets
    const [uxChecked, setIsUxChecked] = useState(false)
    const [uiChecked, setIsUiChecked] = useState(false)
    const [webChecked, setIsWebChecked] = useState(false)


    // deleteSate

    const [isDeleted, setisDeleted] = useState(false)

    const projectsCollectionRef = collection(db, 'projects')


    const handleOnSubmit = (e) => {
        e.preventDefault()
        uploadProject()
        resetInputs()
    }

      // Funcion para agregar proyecto

      const uploadProject = async () => {

        try {
            await addDoc(projectsCollectionRef, {
                title: projectName,
                image: imgUrl,
                description: projectDesc,
                uidesign: uiChecked,
                uxresearch: uxChecked,
                webdev: webChecked,
            })

            getProjects()

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getProjects()
    }, [])

    const deleteProject = async (id) => {

        try {
            const projectDoc = doc(db, 'projects', id);
            await deleteDoc(projectDoc)

            setisDeleted(true)

        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getProjects().then(() => {
            setisDeleted(false)
        })
    }, [isDeleted])

    const resetInputs = () => {

        setProjectName(initialInputState)
        setProjectDesc(initialInputState)
        setImgUrl(initialInputState)

        setIsUxChecked(false)
        setIsWebChecked(false)
        setIsUiChecked(false)

    }



    return {

            filteredProjects,
            handleOnSubmit,
            projectName,
            setProjectName,
            projectDesc,
            setProjectDesc,
            imgUrl,
            setImgUrl,
            uxChecked,
            setIsUxChecked,
            uiChecked,
            setIsUiChecked,
            webChecked,
            setIsWebChecked,
            deleteProject

    }


}