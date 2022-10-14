import { TablaPerros } from "./TablaPerros";

export function App(){ // SE EXPORTA UNA FUNCION E IMPORTA (EXPORTA GLOBALMENTE)

    return (

        <div>
            <header className="container mt-3">
                <div className="mt-4 p-5 bg-primary text-white rounded">
                    <h1>HUELLITAS</h1>
                </div>
            </header>
            <main>
                <TablaPerros />
            </main>

        </div>

    );

}