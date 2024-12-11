# Gestion des États du Processus

Ce projet propose deux implémentations (en JavaScript et TypeScript) d'un système permettant de gérer les états d'un processus en utilisant des opérations sur des bits.

## Fonctionnalités
- **Centralisation des états** : Les états du processus sont définis à l'aide de constantes ou d'une énumération (TypeScript).
- **Affichage des états actifs** : Les états actifs d'un processus sont affichés sous forme lisible.
- **Ajout et suppression d'états** : Possibilité d'ajouter ou de supprimer dynamiquement des états.

## Prérequis
- **JavaScript** : Un environnement Node.js ou un navigateur pour exécuter le script.
- **TypeScript** : Un compilateur TypeScript pour convertir le code TypeScript en JavaScript.

## Fichiers fournis
- **`process-states.js`** : Version en JavaScript.
- **`process-states.ts`** : Version en TypeScript.

## Utilisation

### 1. Version JavaScript
Le fichier `process-states.js` propose une implémentation avec des constantes pour représenter les états.

#### Exemple d'exécution
1. Exécutez le script avec Node.js :
   ```bash
   node process-states.js
   ```
2. Suivez les états du processus dans la console.

#### Description des Fonctions
- **`afficherEtatProcessus(status)`** : Affiche les états actifs du processus.
- **`ajouterEtats(status, ...etats)`** : Ajoute un ou plusieurs états.
- **`supprimerEtats(status, ...etats)`** : Supprime un ou plusieurs états.

### 2. Version TypeScript
Le fichier `process-states.ts` offre une implémentation similaire, mais en utilisant une énumération pour représenter les états. Cette version fournit une vérification statique des types.

#### Installation
1. Installez TypeScript si ce n'est pas déjà fait :
   ```bash
   npm install -g typescript
   ```
2. Compilez le fichier TypeScript :
   ```bash
   tsc process-states.ts
   ```
3. Exécutez le fichier compilé JavaScript :
   ```bash
   node process-states.js
   ```

#### Description des Fonctions
Les fonctions sont identiques à celles de la version JavaScript mais utilisent la puissance des types TypeScript :
- **`afficherEtatProcessus(status: number)`** : Affiche les états actifs du processus.
- **`ajouterEtats(status: number, ...etats: ProcessStates[])`** : Ajoute un ou plusieurs états.
- **`supprimerEtats(status: number, ...etats: ProcessStates[])`** : Supprime un ou plusieurs états.

## Structure des états
Les états disponibles sont :

| État         | Description           |
|---------------|-----------------------|
| `RUNNING`     | Le processus est en cours d'exécution |
| `NOTIFIED`    | Le processus a été notifié      |
| `OUTDATED`    | Le processus est obsolète       |
| `DISPOSED`    | Le processus a été supprimé    |
| `HAS_ERROR`   | Le processus contient une erreur |
| `TRACKING`    | Le processus est en suivi       |

## Exemple d'étapes d'exécution
1. **Initialisation** : Création d'un processus avec l'état `RUNNING`.
2. **Ajout d'états** : Ajout des états `NOTIFIED` et `OUTDATED`.
3. **Suppression d'états** : Suppression de l'état `OUTDATED`, puis `NOTIFIED`.
4. **Ajout simultané** : Ajout des états `DISPOSED` et `HAS_ERROR`.
5. **Suivi actif** : Activation de l'état `TRACKING`.

## Avantages de l'approche
- **Optimisation** : Manipulation efficace des états grâce à l'utilisation des opérations binaires.
- **Lisibilité** : Les noms des états et leurs manipulations sont explicites.
- **Flexibilité** : Ajout et suppression d'états dynamiques.

## Améliorations possibles
- Ajout de tests unitaires pour garantir le bon fonctionnement.
- Intégration d'un gestionnaire d'états avec journalisation.

## Contribution
Les contributions sont les bienvenues ! Créez une issue ou soumettez une pull request.

---

**Auteur** : Projet inspiré par une gestion classique des processus en programmation.
