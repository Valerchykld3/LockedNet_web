import React from "react";
import messagesUk from '../../../messages/uk.json';

const t = messagesUk.Locked;

export default function Page() {
    return (
        <div className="space-y-16 md:space-y-24">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-primary whitespace-pre-wrap leading-tight">{t.locked}</h1>
        </div>
    );
}