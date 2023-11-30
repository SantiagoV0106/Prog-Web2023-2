
import { Footer, Header, Loader } from "../../ui/Componets";
import { ProjectSection } from "../Components";
import { useProject } from "../hooks/useProject";

export function ProjecDetailPage() {

    const { project } = useProject()

    if (!project) {
        return (
            <Loader />
        )
    }


    return (
        <>
            <Header />
            <ProjectSection
                title={project.title}
                desc={project.description}
                img={project.image}
                ux={project.uxresearch}
                ui={project.uidesign}
                web={project.webdev}
            />
            <Footer />
        </>
    )
}