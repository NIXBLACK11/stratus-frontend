import React, { useState } from 'react';
import { useRecoilState } from "recoil";
import { editState, editValueState } from "../atom";

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

export const EditProjectPopup = () => {
    const [openEdit, setOpenEdit] = useRecoilState(editState);
    const [editValue, setEditValue] = useRecoilState(editValueState);
    const [localEditValue, setLocalEditValue] = useState(editValue);

    const handleInputChange = (index: number, field: string, value: string) => {
        const updatedTriggers = localEditValue.AlertTriggers ? [...localEditValue.AlertTriggers] : [];
        if (updatedTriggers[index]) {
            updatedTriggers[index] = { ...updatedTriggers[index], [field]: value };
            setLocalEditValue({ ...localEditValue, AlertTriggers: updatedTriggers });
        }
    };

    const handleAlertTypeChange = (index: number, alertType: string) => {
        const updatedTriggers = localEditValue.AlertTriggers ? [...localEditValue.AlertTriggers] : [];
        if (updatedTriggers[index]) {
            const currentAlertTypes = updatedTriggers[index].alerttype;
            updatedTriggers[index].alerttype = currentAlertTypes.includes(alertType)
                ? currentAlertTypes.filter(type => type !== alertType)
                : [...currentAlertTypes, alertType];
            setLocalEditValue({ ...localEditValue, AlertTriggers: updatedTriggers });
        }
    };

    // const handleSubmit = async () => {
    //     try {
    //         // Call the updateValue function (assuming it's imported from the API folder)
    //         await updateValue(localEditValue);
    //         setEditValue(localEditValue);
    //         setOpenEdit(false);
    //     } catch (error) {
    //         console.error("Error updating value:", error);
    //         // Handle error (e.g., show an error message to the user)
    //     }
    // };

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 flex items-center justify-center text-center h-2/3 w-3/5">
            <div className="h-2/3 w-3/5 border bg-[#000000] bg-opacity-75 shadow-lg p-4 overflow-y-auto">
                {localEditValue && localEditValue.AlertTriggers && localEditValue.AlertTriggers.length > 0 ? (
                    <div className="flex flex-col items-start w-full">
                        {localEditValue.AlertTriggers.map((trigger, idx) => (
                            <div key={idx} className="bg-transparent p-4 rounded-md mb-4 w-full">
                                <input
                                    type="text"
                                    value={trigger.sitename}
                                    onChange={(e) => handleInputChange(idx, 'sitename', e.target.value)}
                                    className="w-full mb-2 p-2 bg-gray-700 text-white"
                                    placeholder="Site Name"
                                />
                                <input
                                    type="text"
                                    value={trigger.siteurl}
                                    onChange={(e) => handleInputChange(idx, 'siteurl', e.target.value)}
                                    className="w-full mb-2 p-2 bg-gray-700 text-white"
                                    placeholder="Site URL"
                                />
                                <div className="flex flex-wrap gap-2">
                                    {alertTypes.map((type) => (
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
                    </div>
                ) : (
                    <p>No detailed information available for this project.</p>
                )}
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={()=>{console.log('clicked')}}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                    <button
                        onClick={() => setOpenEdit(false)}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};