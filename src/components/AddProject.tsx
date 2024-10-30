import { useState } from "react";
import { Details } from "../interface/detailsInterface";
import { addProject } from '../api/addProject';
import { getCookie } from '../utils/saveCookie';
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { errorState, successState } from "../atom";

const alertTypes = [
    'WebsiteUnreachable',
    'SSLCertificateExpiring',
    'ServerResponseTimeHigh',
    'BrokenLinks',
    'InternalServerError',
    'UnauthorizedAccess',
    'DNSResolutionIssue',
    'ServiceUnavailable'
];

export const AddProject = () => {
    const [projectDetails, setProjectDetails] = useState<Details>({
        username: '',
        projectname: '',
        AlertTriggers: [{ sitename: '', siteurl: '', alerttype: [] }]
    });
    const [_error, setError] = useRecoilState(errorState);
    const [_success, setSuccess] = useRecoilState(successState);

    const { email } = useParams<{ email: string }>();

    const token = getCookie("jwtToken");

    const handleInputChange = (field: string, value: string) => {
        setProjectDetails(prev => ({ ...prev, [field]: value }));
    };

    const handleAlertTriggerChange = (index: number, field: string, value: string) => {
        const updatedTriggers = [...projectDetails.AlertTriggers!];
        updatedTriggers[index] = { ...updatedTriggers[index], [field]: value };
        setProjectDetails({ ...projectDetails, AlertTriggers: updatedTriggers });
    };

    const handleAlertTypeChange = (index: number, alertType: string) => {
        const updatedTriggers = [...projectDetails.AlertTriggers!];
        const currentAlertTypes = updatedTriggers[index].alerttype;
        const newAlertTypes = currentAlertTypes.includes(alertType)
            ? currentAlertTypes.filter(type => type !== alertType)
            : [...currentAlertTypes, alertType];
        updatedTriggers[index] = { ...updatedTriggers[index], alerttype: newAlertTypes };
        setProjectDetails({ ...projectDetails, AlertTriggers: updatedTriggers });
    };

    const handleAddTrigger = () => {
        setProjectDetails(prev => ({
            ...prev,
            AlertTriggers: [...prev.AlertTriggers!, { sitename: '', siteurl: '', alerttype: [] }]
        }));
    };

    const handleSubmit = async () => {
        if (!email|| !token || !projectDetails.projectname) {
            setError("Please fill out all required fields.");
            return;
        }

        projectDetails.username = email;

        try {
            const success = await addProject(email, token, projectDetails);
            if (!success) {
                setError("Project addition unsuccessful");
                return;
            } else {
                setSuccess("Project added successfully!");
                setProjectDetails({ username: '', projectname: '', AlertTriggers: [{ sitename: '', siteurl: '', alerttype: [] }] });
            }
        } catch (error) {
            console.error("Error adding project:", error);
            setError("Project addition unsuccessful");
        }
    };

    return (
        <div className="h-screen flex flex-col items-center w-full p-6">
            <div className="border p-6 rounded-lg shadow-lg w-3/4">
                <h2 className="text-lg font-semibold mb-4 text-white">Add Project Details</h2>

                <input
                    type="text"
                    value={projectDetails.projectname}
                    onChange={(e) => handleInputChange('projectname', e.target.value)}
                    className="w-full mb-2 p-2 border bg-gray-700 rounded text-white"
                    placeholder="Project Name"
                />

                <div className="mt-4">
                    <h3 className="text-md font-semibold text-white">Alert Triggers</h3>
                    {projectDetails.AlertTriggers!.map((trigger, idx) => (
                        <div key={idx} className="bg-gray-700 p-4 rounded-md mb-4">
                            <input
                                type="text"
                                value={trigger.sitename}
                                onChange={(e) => handleAlertTriggerChange(idx, 'sitename', e.target.value)}
                                className="w-full mb-2 p-2 border bg-gray-700 rounded text-white"
                                placeholder="Site Name"
                            />
                            <input
                                type="text"
                                value={trigger.siteurl}
                                onChange={(e) => handleAlertTriggerChange(idx, 'siteurl', e.target.value)}
                                className="w-full mb-2 p-2 border bg-gray-700 rounded text-white"
                                placeholder="Site URL"
                            />
                            <div className="flex flex-wrap gap-2">
                                {alertTypes.map(type => (
                                    <label key={type} className="flex items-center text-white">
                                        <input
                                            type="checkbox"
                                            checked={trigger.alerttype.includes(type)}
                                            onChange={() => handleAlertTypeChange(idx, type)}
                                            className="mr-2"
                                        />
                                        {type}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button
                        onClick={handleAddTrigger}
                        className="bg-transparent border hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mt-2"
                    >
                        Add Alert Trigger
                    </button>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};
