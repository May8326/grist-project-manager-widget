# Grist Project Manager Widget

> ⚠️ Ceci est un fork du widget de management de projet développé et mis à disposition par [Isaytoo](https://github.com/isaytoo) sur GitHub à [cette adresse](https://github.com/isaytoo/grist-project-manager-widget.git)



> **Author:** Said Hamadou
> **License:** Apache-2.0

---

Widget de gestion de projets pour Grist avec tableau Kanban, vue tableau, diagramme de Gantt et templates de tâches.

**URL du widget :** `https://isaytoo.github.io/grist-project-manager-widget/`

### 🚀 Utilisation rapide

1. Dans Grist, cliquez sur **"Ajouter un widget à la page"**
2. Sélectionnez **"Personnalisé"** comme type de widget
3. Entrez l'URL :
   ```
   https://isaytoo.github.io/grist-project-manager-widget/
   ```
4. Définissez le niveau d'accès sur **"Full document access"**
5. C'est prêt ! Commencez à gérer vos projets.

### 📋 Fonctionnalités

- **Tableau Kanban** : Glisser-déposer les tâches entre colonnes (À faire, En cours, Terminé)
- **Vue tableau** : Édition inline avancée avec recherche, tri et filtres
- **Diagramme de Gantt** : Visualisation timeline avec navigation par année, niveaux de zoom (jours, semaines, mois, année complète)
- **Templates de tâches** : Créez et réutilisez des modèles de tâches préformatés
- **Gestion des tâches** : Titre, statut, priorité, assigné, date de début, échéance
- **Tableau de bord** : Statistiques total, à faire, en cours, terminées
- **Recherche & filtres** : Par statut, priorité et mots-clés
- **Interface bilingue** (Français / Anglais, détection automatique)
- **🆕 Système de mapping de colonnes** : Mappez vos propres tables et colonnes Grist existantes (voir [GUIDE_MAPPING.md](GUIDE_MAPPING.md))

### 🔒 Sécurité

- Protection XSS sur toutes les entrées utilisateur
- Sanitization des identifiants pour compatibilité Grist
- Validation des entrées avant soumission

### 🛠️ Développement local

```bash
git clone https://github.com/isaytoo/grist-project-manager-widget.git
cd grist-project-manager-widget
python3 -m http.server 8091
```

Puis dans Grist, utilisez : `http://localhost:8091/index.html`

### ⚙️ Configuration requise

Le widget nécessite un **accès complet au document** pour :
- Créer et gérer les tables de tâches
- Lire et écrire les données des tâches
- Gérer les templates de tâches

### 📁 Structure des fichiers

```
grist-project-manager-widget/
├── index.html       # Interface HTML + CSS du widget
├── widget.js        # Logique JavaScript (Kanban, Tableau, Gantt, i18n)
├── package.json     # Métadonnées
├── vercel.json      # Configuration Vercel (headers iframe)
├── .gitignore
└── README.md
```

---

## 🔗 Resources / Ressources

- [Grist Custom Widgets Documentation](https://support.getgrist.com/widget-custom/)
- [Grist Plugin API](https://support.getgrist.com/code/modules/grist_plugin_api/)
- [GristUp Widget Marketplace](https://www.gristup.fr)
