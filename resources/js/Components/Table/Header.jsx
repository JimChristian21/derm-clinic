import { React } from "react";

export const Header = () => {

    return (
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
        </thead>)
    ;
}