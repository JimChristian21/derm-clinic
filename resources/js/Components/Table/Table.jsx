import { React, useEffect, useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";

export const Table = ( {data} ) => {

    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setColumns(data.column);
    });

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <Header column={columns} />
                <Body/>
            </table>
        </div>
    );
}