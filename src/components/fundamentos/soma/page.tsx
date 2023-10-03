import React from 'react';
export default function Page() {
    const nome = 'Wemerson';
    const idade:number = 37;
    return (
        <section>
            <p>{nome}</p>
            <p>{idade}</p>
        </section>
    );
}