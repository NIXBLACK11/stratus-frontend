import { PencilIcon, TrashIcon } from "lucide-react";

interface DetailedProjectItemProps {
    label: string;
    details: {
        username?: string;
        projectname?: string;
        AlertTriggers?: Array<{
            sitename: string;
            siteurl: string;
            alerttype: string[];
        }>
    };
}

export const DetailedProjectItem = ({ label, details }: DetailedProjectItemProps) => {
    return (
        <div className="flex flex-col items-start justify-center my-10 text-white w-full ">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{label.toUpperCase()}</h2>
                <PencilIcon
                    className="ml-24 hover:text-gray-700"
                    onClick={() => {

                    }}
                />
                <TrashIcon 
                    className="ml-24 hover:text-gray-700"
                    onClick={() => {

                    }}
                />
            </div>
            {/* Check if we have project details */}
            {details && details.AlertTriggers && details.AlertTriggers.length > 0 ? (
                <div className="flex flex-col items-start w-full">
                    {/* Loop through AlertTriggers and display each */}
                    {details.AlertTriggers.map((trigger, idx) => (
                        <div key={idx} className="bg-transparent p-4 rounded-md mb-4 w-2/3">
                            <p className="font-semibold">Site Name: {trigger.sitename}</p>
                            <p>Site URL: <a href={trigger.siteurl} className="text-blue-400" target="_blank" rel="noopener noreferrer">{trigger.siteurl}</a></p>
                            <p>Alert Types: {trigger.alerttype.join(", ")}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No detailed information available for this project.</p>
            )}
        </div>
    );
};
