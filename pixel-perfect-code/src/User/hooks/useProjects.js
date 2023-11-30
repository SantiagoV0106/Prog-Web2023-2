import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

// Firebase Imports
import { db } from "../../config/firebase"
import { getDocs, collection } from "firebase/firestore"

export const useProjects = () => {

    // Filter States
    const [filters, setFilters] = useState({
        ux: false,
        ui: false,
        web: false
    })


    const location = useLocation()
    const showFilters = location.pathname

    const [projectsList, setProjectsList] = useState([])
    const projectsCollectionRef = collection(db, 'projects')

    const getProjects = async () => {
        try {
            const data = await getDocs(projectsCollectionRef);
            const filtereData = data.docs.map((doc) => ({

                ...doc.data(),
                id: doc.id
            }))

            console.log(filtereData);
            setProjectsList(filtereData)

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    const handleCheckboxChange = (filter) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filter]: !prevFilters[filter],
        }));
    };


    //Funcion que devuelve los proyectos filtrados

    const filterProjects = () => {
        // si no hay ningun filtro select
        if (!filters.ux && !filters.ui && !filters.web) {
            return projectsList;
        }

        return projectsList.filter((project) => {
            const { uxresearch, uidesign, webdev } = project;
            return (
                (filters.ux && uxresearch) ||
                (filters.ui && uidesign) ||
                (filters.web && webdev)
            );
        });
    };

    const filteredProjects = filterProjects();

    return {
        filters,
        showFilters,
        handleCheckboxChange,
        filteredProjects,
        getProjects,
    }
}