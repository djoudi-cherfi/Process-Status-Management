// Définition des constantes des états du processus avec un objet pour une gestion centralisée
enum ProcessStates {
    RUNNING = 1 << 0,
    NOTIFIED = 1 << 1,
    OUTDATED = 1 << 2,
    DISPOSED = 1 << 3,
    HAS_ERROR = 1 << 4,
    TRACKING = 1 << 5,
}

// Fonction pour afficher les états actifs du processus
const afficherEtatProcessus = (status: number): void => {
    const étatsActifs = Object.entries(ProcessStates)
        .filter(([_, valeur]) => typeof valeur === 'number' && (status & valeur))
        .map(([clé]) => clé.toLowerCase().replace('_', ' '));

    console.log("\nÉtat actuel du processus :");
    if (étatsActifs.length > 0) {
        étatsActifs.forEach((état) => console.log(`- ${état.charAt(0).toUpperCase() + état.slice(1)}`));
    } else {
        console.log("- Aucun état actif");
    }
};

// Fonction pour ajouter des états
const ajouterEtats = (status: number, ...etats: ProcessStates[]): number => 
    etats.reduce((acc, état) => acc | état, status);

// Fonction pour supprimer des états
const supprimerEtats = (status: number, ...etats: ProcessStates[]): number => 
    etats.reduce((acc, état) => acc & ~état, status);

// Initialisation : création d'un nouveau processus avec l'état RUNNING
let statusProcessus: number = ProcessStates.RUNNING;
console.log("Initialisation :");
afficherEtatProcessus(statusProcessus);

// Ajout de plusieurs états
statusProcessus = ajouterEtats(statusProcessus, ProcessStates.NOTIFIED, ProcessStates.OUTDATED);
console.log("\nAjout des états NOTIFIED et OUTDATED :");
afficherEtatProcessus(statusProcessus);

// Suppression d'un état
statusProcessus = supprimerEtats(statusProcessus, ProcessStates.OUTDATED);
console.log("\nSuppression de l'état OUTDATED :");
afficherEtatProcessus(statusProcessus);

// Suppression d'un autre état
statusProcessus = supprimerEtats(statusProcessus, ProcessStates.NOTIFIED);
console.log("\nSuppression de l'état NOTIFIED :");
afficherEtatProcessus(statusProcessus);

// Ajout de plusieurs états simultanément
statusProcessus = ajouterEtats(statusProcessus, ProcessStates.DISPOSED, ProcessStates.HAS_ERROR);
console.log("\nAjout des états DISPOSED et HAS_ERROR :");
afficherEtatProcessus(statusProcessus);

// Activation du suivi
statusProcessus = ajouterEtats(statusProcessus, ProcessStates.TRACKING);
console.log("\nActivation du suivi :");
afficherEtatProcessus(statusProcessus);
