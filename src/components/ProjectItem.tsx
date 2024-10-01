interface ProjectItemProps {
    label: string;
}

export const ProjectItem = ({ label }: ProjectItemProps) => {
    return (
        <div className="flex items-center justify-center my-10 mx-4 text-white">
            {label.toUpperCase()}
        </div>
    )
};