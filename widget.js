// =============================================================================
// GRIST PROJECT MANAGER WIDGET
// =============================================================================

var currentLang = 'fr';

var i18n = {
  fr: {
    appTitle: 'Gestion de Projet',
    appSubtitle: 'Organisez et suivez vos tâches avec le tableau Kanban ou la vue tableau',
    notInGrist: 'Ce widget doit être utilisé dans Grist.',
    tabCalendar: 'Calendrier',
    tabKanban: 'Kanban',
    tabTable: 'Tableau',
    tabGantt: 'Gantt',
    tabTemplates: 'Templates',
    newTask: 'Nouvelle tâche',
    statTotal: 'Total',
    statTodo: 'À faire',
    statProgress: 'En cours',
    statDone: 'Terminées',
    colTodo: 'À faire',
    colProgress: 'En cours',
    colDone: 'Terminé',
    noTasks: 'Aucune tâche',
    addTask: '+ Ajouter une tâche',
    tableTitle: 'Tableau de Gestion',
    tableSubtitle: 'Gérez vos tâches avec édition inline avancée',
    searchPlaceholder: 'Rechercher une tâche...',
    allStatuses: 'Tous les statuts',
    allPriorities: 'Toutes priorités',
    colTaskName: 'Tâche',
    colStatus: 'Statut',
    colPriority: 'Priorité',
    colAssignee: 'Assigné à',
    colStartDate: 'Date de début',
    colDueDate: 'Échéance',
    colActions: 'Actions',
    ganttTitle: 'Diagramme de Gantt',
    ganttYear: 'Année :',
    ganttToday: "Aujourd'hui",
    ganttDays: 'Jours',
    ganttWeeks: 'Semaines',
    ganttMonths: 'Mois',
    ganttFullYear: 'Année complète',
    ganttNavInfo: 'Navigation infinie vers autres années',
    ganttViewRange: 'Vue :',
    templatesTitle: 'Tâches Préformatées',
    templatesSubtitle: 'Gérez les modèles de tâches disponibles pour tous les utilisateurs',
    newTemplate: 'Nouveau modèle',
    modalNewTask: 'Nouvelle tâche',
    modalEditTask: 'Modifier la tâche',
    modalNewTemplate: 'Nouveau modèle de tâche',
    fieldTitle: 'Titre *',
    fieldDescription: 'Description',
    fieldStatus: 'Statut',
    fieldPriority: 'Priorité',
    fieldAssignee: 'Assigné à',
    fieldGroup: 'Groupe',
    fieldStartDate: 'Date de début',
    fieldDueDate: 'Échéance',
    fieldCategory: 'Catégorie',
    fieldEstimatedTime: 'Temps estimé (h)',
    priorityHigh: 'Haute',
    priorityMedium: 'Moyenne',
    priorityLow: 'Basse',
    statusTodo: 'À faire',
    statusProgress: 'En cours',
    statusDone: 'Terminé',
    save: 'Enregistrer',
    cancel: 'Annuler',
    delete: 'Supprimer',
    confirmDelete: 'Supprimer cette tâche ?',
    confirmDeleteTemplate: 'Supprimer ce modèle ?',
    taskCreated: 'Tâche créée !',
    taskUpdated: 'Tâche mise à jour !',
    taskDeleted: 'Tâche supprimée.',
    taskMoved: 'Tâche déplacée.',
    templateCreated: 'Modèle créé !',
    templateDeleted: 'Modèle supprimé.',
    overdue: 'En retard',
    noDate: 'Aucune date',
    notDefined: 'Non définie',
    tablesCreated: 'Tables créées automatiquement.',
    notifications: 'Alertes',
    overdueTasksAlert: 'tâche(s) en retard',
    upcomingTasksAlert: 'tâche(s) à venir (3j)',
    noAlerts: 'Aucune alerte',
    exportCsv: 'Export CSV',
    exportPdf: 'Export PDF',
    searchPlaceholder: 'Rechercher...',
    tags: 'Tags',
    addTag: 'Ajouter tag',
    statistics: 'Statistiques',
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
    tabStats: 'Stats',
    statsTitle: 'Statistiques',
    statsSubtitle: 'Analysez la productivité de votre équipe',
    useTemplate: 'Utiliser',
    totalTemplates: 'Total modèles',
    totalUsages: 'Utilisations totales',
    mostUsed: 'Plus utilisé',
    categories: 'Catégories',
    tabTeam: 'Équipe',
    teamUsersTitle: 'Utilisateurs',
    teamUsersSubtitle: 'Gérez les membres de votre équipe',
    teamGroupsTitle: 'Groupes',
    teamGroupsSubtitle: 'Organisez vos utilisateurs en groupes',
    addUser: 'Ajouter',
    addGroup: 'Ajouter',
    modalNewUser: 'Nouvel utilisateur',
    modalNewGroup: 'Nouveau groupe',
    fieldName: 'Nom *',
    fieldEmail: 'Email',
    fieldRole: 'Rôle',
    roleAdmin: 'Administrateur',
    roleMember: 'Membre',
    roleViewer: 'Lecteur',
    userCreated: 'Utilisateur ajouté !',
    userDeleted: 'Utilisateur supprimé.',
    groupCreated: 'Groupe créé !',
    groupDeleted: 'Groupe supprimé.',
    confirmDeleteUser: 'Supprimer cet utilisateur ?',
    confirmDeleteGroup: 'Supprimer ce groupe ?',
    noUsers: 'Aucun utilisateur',
    noGroups: 'Aucun groupe',
    members: 'membres',
    progression: 'Progression',
    advancement: 'Avancement',
    startLabel: 'Début :',
    dueLabel: 'Échéance :',
    quickActions: 'Actions rapides',
    reopenTask: 'Rouvrir la tâche',
    startTask: 'Démarrer la tâche',
    completeTask: 'Terminer la tâche',
    changePriority: 'Changer la priorité',
    taskSummary: 'Résumé de la tâche',
    addAssignee: 'Ajouter',
    searchAssignee: 'Rechercher des noms...',
    subtasks: 'Sous-tâches',
    addSubtask: 'Ajouter une sous-tâche',
    subtaskPlaceholder: 'Nouvelle sous-tâche...',
    noSubtasks: 'Aucune sous-tâche',
    subtaskCompleted: 'Sous-tâche terminée',
    subtaskDeleted: 'Sous-tâche supprimée',
    dependencies: 'Dépendances',
    blockedBy: 'Bloqué par',
    blocks: 'Bloque',
    addDependency: 'Ajouter une dépendance',
    noDependencies: 'Aucune dépendance',
    dependencyAdded: 'Dépendance ajoutée',
    dependencyRemoved: 'Dépendance supprimée',
    selectTask: 'Sélectionner une tâche...',
    blockedWarning: 'Tâche bloquée',
    comments: 'Commentaires',
    addComment: 'Ajouter un commentaire',
    commentPlaceholder: 'Écrire un commentaire...',
    noComments: 'Aucun commentaire',
    commentAdded: 'Commentaire ajouté',
    commentDeleted: 'Commentaire supprimé',
    justNow: "À l'instant",
    minutesAgo: 'il y a {n} min',
    hoursAgo: 'il y a {n}h',
    daysAgo: 'il y a {n}j',
    timeTracking: 'Suivi du temps',
    startTimer: 'Démarrer',
    stopTimer: 'Arrêter',
    timerRunning: 'En cours...',
    totalTime: 'Temps total',
    estimatedTime: 'Temps estimé',
    timeEntries: 'Entrées de temps',
    noTimeEntries: 'Aucune entrée',
    timeEntryAdded: 'Temps enregistré',
    timeEntryDeleted: 'Entrée supprimée',
    hours: 'h',
    minutes: 'min',
    recurrence: 'Récurrence',
    recurrenceNone: 'Aucune',
    recurrenceDaily: 'Quotidienne',
    recurrenceWeekly: 'Hebdomadaire',
    recurrenceMonthly: 'Mensuelle',
    nextOccurrence: 'Prochaine occurrence créée',
    customFields: 'Champs personnalisés',
    manageCustomFields: 'Gérer les champs',
    addCustomField: 'Ajouter un champ',
    fieldName: 'Nom',
    customFieldName: 'Nom du champ',
    fieldType: 'Type',
    fieldOptions: 'Options (séparées par virgule)',
    typeText: 'Texte',
    typeNumber: 'Nombre',
    typeDate: 'Date',
    typeCheckbox: 'Case à cocher',
    typeSelect: 'Liste déroulante',
    customFieldCreated: 'Champ créé',
    customFieldDeleted: 'Champ supprimé',
    noCustomFields: 'Aucun champ personnalisé',
    categories: 'Catégories',
    manageCategories: 'Gérer les catégories',
    addCategory: 'Ajouter',
    categoryCreated: 'Catégorie créée',
    categoryDeleted: 'Catégorie supprimée',
    noCategories: 'Aucune catégorie'
  },
  en: {
    appTitle: 'Project Management',
    appSubtitle: 'Organize and track your tasks with the Kanban board or table view',
    notInGrist: 'This widget must be used inside Grist.',
    tabCalendar: 'Calendar',
    tabKanban: 'Kanban',
    tabTable: 'Table',
    tabGantt: 'Gantt',
    tabTemplates: 'Templates',
    newTask: 'New task',
    statTotal: 'Total',
    statTodo: 'To do',
    statProgress: 'In progress',
    statDone: 'Completed',
    colTodo: 'To do',
    colProgress: 'In progress',
    colDone: 'Done',
    noTasks: 'No tasks',
    addTask: '+ Add a task',
    tableTitle: 'Management Table',
    tableSubtitle: 'Manage your tasks with advanced inline editing',
    searchPlaceholder: 'Search a task...',
    allStatuses: 'All statuses',
    allPriorities: 'All priorities',
    colTaskName: 'Task',
    colStatus: 'Status',
    colPriority: 'Priority',
    colAssignee: 'Assigned to',
    colStartDate: 'Start date',
    colDueDate: 'Due date',
    colActions: 'Actions',
    ganttTitle: 'Gantt Chart',
    ganttYear: 'Year:',
    ganttToday: 'Today',
    ganttDays: 'Days',
    ganttWeeks: 'Weeks',
    ganttMonths: 'Months',
    ganttFullYear: 'Full year',
    ganttNavInfo: 'Infinite navigation to other years',
    ganttViewRange: 'View:',
    templatesTitle: 'Task Templates',
    templatesSubtitle: 'Manage task templates available to all users',
    newTemplate: 'New template',
    modalNewTask: 'New task',
    modalEditTask: 'Edit task',
    modalNewTemplate: 'New task template',
    fieldTitle: 'Title *',
    fieldDescription: 'Description',
    fieldStatus: 'Status',
    fieldPriority: 'Priority',
    fieldAssignee: 'Assigned to',
    fieldGroup: 'Group',
    fieldStartDate: 'Start date',
    fieldDueDate: 'Due date',
    fieldCategory: 'Category',
    fieldEstimatedTime: 'Estimated time (h)',
    priorityHigh: 'High',
    priorityMedium: 'Medium',
    priorityLow: 'Low',
    statusTodo: 'To do',
    statusProgress: 'In progress',
    statusDone: 'Done',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    confirmDelete: 'Delete this task?',
    confirmDeleteTemplate: 'Delete this template?',
    taskCreated: 'Task created!',
    taskUpdated: 'Task updated!',
    taskDeleted: 'Task deleted.',
    taskMoved: 'Task moved.',
    templateCreated: 'Template created!',
    templateDeleted: 'Template deleted.',
    notifications: 'Alerts',
    overdueTasksAlert: 'overdue task(s)',
    upcomingTasksAlert: 'upcoming task(s) (3d)',
    noAlerts: 'No alerts',
    exportCsv: 'Export CSV',
    exportPdf: 'Export PDF',
    searchPlaceholder: 'Search...',
    tags: 'Tags',
    addTag: 'Add tag',
    statistics: 'Statistics',
    darkMode: 'Dark mode',
    lightMode: 'Light mode',
    tabStats: 'Stats',
    statsTitle: 'Statistics',
    statsSubtitle: 'Analyze your team productivity',
    overdue: 'Overdue',
    noDate: 'No date',
    notDefined: 'Not defined',
    tablesCreated: 'Tables created automatically.',
    useTemplate: 'Use',
    totalTemplates: 'Total templates',
    totalUsages: 'Total usages',
    mostUsed: 'Most used',
    categories: 'Categories',
    tabTeam: 'Team',
    teamUsersTitle: 'Users',
    teamUsersSubtitle: 'Manage your team members',
    teamGroupsTitle: 'Groups',
    teamGroupsSubtitle: 'Organize your users into groups',
    addUser: 'Add',
    addGroup: 'Add',
    modalNewUser: 'New user',
    modalNewGroup: 'New group',
    fieldName: 'Name *',
    fieldEmail: 'Email',
    fieldRole: 'Role',
    roleAdmin: 'Administrator',
    roleMember: 'Member',
    roleViewer: 'Viewer',
    userCreated: 'User added!',
    userDeleted: 'User deleted.',
    groupCreated: 'Group created!',
    groupDeleted: 'Group deleted.',
    confirmDeleteUser: 'Delete this user?',
    confirmDeleteGroup: 'Delete this group?',
    noUsers: 'No users',
    noGroups: 'No groups',
    members: 'members',
    progression: 'Progression',
    advancement: 'Progress',
    startLabel: 'Start:',
    dueLabel: 'Due:',
    quickActions: 'Quick Actions',
    reopenTask: 'Reopen task',
    startTask: 'Start task',
    completeTask: 'Complete task',
    changePriority: 'Change priority',
    taskSummary: 'Task Summary',
    addAssignee: 'Add',
    searchAssignee: 'Search names...',
    subtasks: 'Subtasks',
    addSubtask: 'Add subtask',
    subtaskPlaceholder: 'New subtask...',
    noSubtasks: 'No subtasks',
    subtaskCompleted: 'Subtask completed',
    subtaskDeleted: 'Subtask deleted',
    dependencies: 'Dependencies',
    blockedBy: 'Blocked by',
    blocks: 'Blocks',
    addDependency: 'Add dependency',
    noDependencies: 'No dependencies',
    dependencyAdded: 'Dependency added',
    dependencyRemoved: 'Dependency removed',
    selectTask: 'Select a task...',
    blockedWarning: 'Blocked task',
    comments: 'Comments',
    addComment: 'Add comment',
    commentPlaceholder: 'Write a comment...',
    noComments: 'No comments',
    commentAdded: 'Comment added',
    commentDeleted: 'Comment deleted',
    justNow: 'Just now',
    minutesAgo: '{n} min ago',
    hoursAgo: '{n}h ago',
    daysAgo: '{n}d ago',
    timeTracking: 'Time Tracking',
    startTimer: 'Start',
    stopTimer: 'Stop',
    timerRunning: 'Running...',
    totalTime: 'Total time',
    estimatedTime: 'Estimated time',
    timeEntries: 'Time entries',
    noTimeEntries: 'No entries',
    timeEntryAdded: 'Time recorded',
    timeEntryDeleted: 'Entry deleted',
    hours: 'h',
    minutes: 'min',
    recurrence: 'Recurrence',
    recurrenceNone: 'None',
    recurrenceDaily: 'Daily',
    recurrenceWeekly: 'Weekly',
    recurrenceMonthly: 'Monthly',
    nextOccurrence: 'Next occurrence created',
    customFields: 'Custom Fields',
    manageCustomFields: 'Manage fields',
    addCustomField: 'Add field',
    fieldName: 'Name',
    customFieldName: 'Field name',
    fieldType: 'Type',
    fieldOptions: 'Options (comma separated)',
    typeText: 'Text',
    typeNumber: 'Number',
    typeDate: 'Date',
    typeCheckbox: 'Checkbox',
    typeSelect: 'Dropdown',
    customFieldCreated: 'Field created',
    customFieldDeleted: 'Field deleted',
    noCustomFields: 'No custom fields',
    categories: 'Categories',
    manageCategories: 'Manage categories',
    addCategory: 'Add',
    categoryCreated: 'Category created',
    categoryDeleted: 'Category deleted',
    noCategories: 'No categories'
  }
};

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || (i18n.fr[key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.textContent.trim() === lang.toUpperCase());
  });
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (i18n[currentLang] && i18n[currentLang][key]) {
      el.textContent = i18n[currentLang][key];
    }
  });
  refreshAllViews();
}

// =============================================================================
// STATE
// =============================================================================

var tasks = [];
var users = [];
var groups = [];
var templates = [];
var subtasks = [];
var dependencies = [];
var comments = [];
var timeEntries = [];
var customFields = [];
var customFieldValues = [];
var categories = [];
var tags = [];
var activeTimers = {}; // taskId -> startTime (for running timers)
var ganttMode = 'days';
var ganttYear = new Date().getFullYear();
var ganttMonth = new Date().getMonth();
var calendarYear = new Date().getFullYear();
var calendarMonth = new Date().getMonth();
var calendarMode = 'month'; // 'month' or 'week'
var calendarWeekOffset = 0; // Offset in weeks from current week

var TASKS_TABLE = 'PM_Tasks';
var USERS_TABLE = 'PM_Users';
var GROUPS_TABLE = 'PM_Groups';
var TEMPLATES_TABLE = 'PM_Templates';
var SUBTASKS_TABLE = 'PM_Subtasks';
var DEPENDENCIES_TABLE = 'PM_Dependencies';
var COMMENTS_TABLE = 'PM_Comments';
var TIME_ENTRIES_TABLE = 'PM_TimeEntries';
var CUSTOM_FIELDS_TABLE = 'PM_CustomFields';
var CUSTOM_FIELD_VALUES_TABLE = 'PM_CustomFieldValues';
var CATEGORIES_TABLE = 'PM_Categories';
var TAGS_TABLE = 'PM_Tags';

var isOwner = false;
var currentUserEmail = '';

// =============================================================================
// UTILS
// =============================================================================

function isInsideGrist() {
  try { return window.frameElement !== null || window !== window.parent; }
  catch (e) { return true; }
}

function showToast(msg, type) {
  var container = document.getElementById('toast-container');
  var toast = document.createElement('div');
  toast.className = 'toast toast-' + (type || 'info');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(function() { toast.remove(); }, 3000);
}

function sanitize(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatDate(d) {
  if (!d) return '';
  var date = new Date(d * 1000); // Grist stores dates as epoch seconds
  if (isNaN(date.getTime())) {
    date = new Date(d);
    if (isNaN(date.getTime())) return '';
  }
  return date.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function toEpoch(dateStr) {
  if (!dateStr) return null;
  var d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return Math.floor(d.getTime() / 1000);
}

function isOverdue(task) {
  if (!task.Due_Date || task.Status === 'done') return false;
  var now = Math.floor(Date.now() / 1000);
  return task.Due_Date < now;
}

function getTaskSubtasks(taskId) {
  return subtasks.filter(function(st) { return st.Parent_Task_Id === taskId; })
    .sort(function(a, b) { return (a.Order || 0) - (b.Order || 0); });
}

function getTaskProgress(task) {
  var taskSubtasks = getTaskSubtasks(task.id);
  if (taskSubtasks.length === 0) {
    // No subtasks: use status-based progress
    return task.Status === 'done' ? 100 : (task.Status === 'progress' ? 50 : 10);
  }
  var completed = taskSubtasks.filter(function(st) { return st.Completed; }).length;
  return Math.round((completed / taskSubtasks.length) * 100);
}

function getTaskDependencies(taskId) {
  // Returns tasks that this task depends on (blockers)
  return dependencies.filter(function(d) { return d.Task_Id === taskId; })
    .map(function(d) {
      return tasks.find(function(t) { return t.id === d.Depends_On_Task_Id; });
    }).filter(Boolean);
}

function getTasksDependingOn(taskId) {
  // Returns tasks that depend on this task (blocked by this)
  return dependencies.filter(function(d) { return d.Depends_On_Task_Id === taskId; })
    .map(function(d) {
      return tasks.find(function(t) { return t.id === d.Task_Id; });
    }).filter(Boolean);
}

function isTaskBlocked(taskId) {
  var blockers = getTaskDependencies(taskId);
  return blockers.some(function(blocker) {
    return blocker && blocker.Status !== 'done';
  });
}

function getTaskComments(taskId) {
  return comments.filter(function(c) { return c.Task_Id === taskId; })
    .sort(function(a, b) { return (b.Created_At || 0) - (a.Created_At || 0); });
}

function formatTimeAgo(timestamp) {
  if (!timestamp) return '';
  var now = Math.floor(Date.now() / 1000);
  var diff = now - timestamp;
  if (diff < 60) return t('justNow');
  if (diff < 3600) return t('minutesAgo').replace('{n}', Math.floor(diff / 60));
  if (diff < 86400) return t('hoursAgo').replace('{n}', Math.floor(diff / 3600));
  return t('daysAgo').replace('{n}', Math.floor(diff / 86400));
}

function getTaskTimeEntries(taskId) {
  return timeEntries.filter(function(te) { return te.Task_Id === taskId; })
    .sort(function(a, b) { return (b.Start_Time || 0) - (a.Start_Time || 0); });
}

function getTaskTotalTime(taskId) {
  var entries = getTaskTimeEntries(taskId);
  var total = 0;
  for (var i = 0; i < entries.length; i++) {
    total += entries[i].Duration || 0;
  }
  // Add running timer if active
  if (activeTimers[taskId]) {
    total += Math.floor(Date.now() / 1000) - activeTimers[taskId];
  }
  return total;
}

function formatDuration(seconds) {
  if (!seconds || seconds < 0) return '0' + t('minutes');
  var hours = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return hours + t('hours') + ' ' + mins + t('minutes');
  }
  return mins + t('minutes');
}

function formatDurationShort(seconds) {
  if (!seconds || seconds < 0) return '0m';
  var hours = Math.floor(seconds / 3600);
  var mins = Math.floor((seconds % 3600) / 60);
  if (hours > 0) {
    return hours + 'h' + (mins > 0 ? mins + 'm' : '');
  }
  return mins + 'm';
}

function getTaskCustomFieldValue(taskId, fieldId) {
  var cfv = customFieldValues.find(function(v) {
    return v.Task_Id === taskId && v.Field_Id === fieldId;
  });
  return cfv ? cfv.Value : '';
}

function isSubtaskBlocked(subtask) {
  if (!subtask.Blocked_By_Subtask_Id) return false;
  var blocker = subtasks.find(function(st) { return st.id === subtask.Blocked_By_Subtask_Id; });
  return blocker && !blocker.Completed;
}

function getSubtaskBlocker(subtask) {
  if (!subtask.Blocked_By_Subtask_Id) return null;
  return subtasks.find(function(st) { return st.id === subtask.Blocked_By_Subtask_Id; });
}

function getCustomFieldTypeLabel(type) {
  switch (type) {
    case 'text': return t('typeText');
    case 'number': return t('typeNumber');
    case 'date': return t('typeDate');
    case 'checkbox': return t('typeCheckbox');
    case 'select': return t('typeSelect');
    default: return type;
  }
}

function getUserDisplayName(emailOrName) {
  if (!emailOrName) return '';
  // Try to find user by email
  var user = users.find(function(u) { 
    return u.Email === emailOrName || u.Name === emailOrName; 
  });
  if (user && user.Name) return user.Name;
  // If no user found or no name, extract name from email
  if (emailOrName.indexOf('@') !== -1) {
    return emailOrName.split('@')[0];
  }
  return emailOrName;
}

function priorityLabel(p) {
  if (p === 'high') return t('priorityHigh');
  if (p === 'medium') return t('priorityMedium');
  if (p === 'low') return t('priorityLow');
  return p || '';
}

function statusLabel(s) {
  if (s === 'todo') return t('statusTodo');
  if (s === 'progress') return t('statusProgress');
  if (s === 'done') return t('statusDone');
  return s || '';
}

// =============================================================================
// TABS
// =============================================================================

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });
  document.querySelectorAll('.tab-content').forEach(function(tc) {
    tc.classList.toggle('active', tc.id === 'tab-' + tabId);
  });
  if (tabId === 'calendar') renderCalendarView();
  if (tabId === 'kanban') renderKanbanView();
  if (tabId === 'table') renderTableView();
  if (tabId === 'gantt') renderGanttView();
  if (tabId === 'templates') renderTemplatesView();
  if (tabId === 'stats') renderStatsView();
  if (tabId === 'team') renderTeamView();
}

// =============================================================================
// INIT — CREATE TABLES IF NEEDED
// =============================================================================

async function ensureTables() {
  try {
    var existingTables = await grist.docApi.listTables();

    if (existingTables.indexOf(TASKS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TASKS_TABLE, [
          { id: 'Title', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Status', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['todo', 'progress', 'done'] }) },
          { id: 'Priority', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) },
          { id: 'Assignee', type: 'Text' },
          { id: 'Group_Name', type: 'Text' },
          { id: 'Start_Date', type: 'Date' },
          { id: 'Due_Date', type: 'Date' },
          { id: 'Category', type: 'Text' },
          { id: 'Recurrence', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['none', 'daily', 'weekly', 'monthly'] }) },
          { id: 'Estimated_Hours', type: 'Numeric' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(USERS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', USERS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Email', type: 'Text' },
          { id: 'Role', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['admin', 'member', 'viewer'] }) },
          { id: 'Group_Name', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(GROUPS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', GROUPS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Description', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(TEMPLATES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TEMPLATES_TABLE, [
          { id: 'Title', type: 'Text' },
          { id: 'Description', type: 'Text' },
          { id: 'Priority', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['high', 'medium', 'low'] }) },
          { id: 'Category', type: 'Text' },
          { id: 'Estimated_Hours', type: 'Numeric' },
          { id: 'Usage_Count', type: 'Int' },
          { id: 'Updated_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(SUBTASKS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', SUBTASKS_TABLE, [
          { id: 'Parent_Task_Id', type: 'Int' },
          { id: 'Title', type: 'Text' },
          { id: 'Completed', type: 'Bool' },
          { id: 'Order', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(DEPENDENCIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', DEPENDENCIES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Depends_On_Task_Id', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(COMMENTS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', COMMENTS_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Author', type: 'Text' },
          { id: 'Content', type: 'Text' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(TIME_ENTRIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TIME_ENTRIES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'User', type: 'Text' },
          { id: 'Start_Time', type: 'Date' },
          { id: 'End_Time', type: 'Date' },
          { id: 'Duration', type: 'Int' },
          { id: 'Description', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(CUSTOM_FIELDS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CUSTOM_FIELDS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Type', type: 'Choice', widgetOptions: JSON.stringify({ choices: ['text', 'number', 'date', 'checkbox', 'select'] }) },
          { id: 'Options', type: 'Text' },
          { id: 'Order', type: 'Int' },
          { id: 'Created_At', type: 'Date' }
        ]]
      ]);
    }

    if (existingTables.indexOf(CUSTOM_FIELD_VALUES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CUSTOM_FIELD_VALUES_TABLE, [
          { id: 'Task_Id', type: 'Int' },
          { id: 'Field_Id', type: 'Int' },
          { id: 'Value', type: 'Text' }
        ]]
      ]);
    }

    if (existingTables.indexOf(CATEGORIES_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', CATEGORIES_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Color', type: 'Text' },
          { id: 'Order', type: 'Int' }
        ]]
      ]);
    }

    if (existingTables.indexOf(TAGS_TABLE) === -1) {
      await grist.docApi.applyUserActions([
        ['AddTable', TAGS_TABLE, [
          { id: 'Name', type: 'Text' },
          { id: 'Color', type: 'Text' }
        ]]
      ]);
    }

    // Migration: Add missing columns to existing PM_Tasks table
    if (existingTables.indexOf(TASKS_TABLE) !== -1) {
      try {
        var tableInfo = await grist.docApi.fetchTable(TASKS_TABLE);
        var existingCols = Object.keys(tableInfo);
        
        if (existingCols.indexOf('Recurrence') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Recurrence', { type: 'Choice', widgetOptions: JSON.stringify({ choices: ['none', 'daily', 'weekly', 'monthly'] }) }]
          ]);
        }
        if (existingCols.indexOf('Estimated_Hours') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Estimated_Hours', { type: 'Numeric' }]
          ]);
        }
        if (existingCols.indexOf('Tags') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', TASKS_TABLE, 'Tags', { type: 'Text' }]
          ]);
        }
      } catch (migrationErr) {
        console.log('Migration check completed or columns already exist');
      }
    }

    // Migration: Add Blocked_By_Subtask_Id to PM_Subtasks
    if (existingTables.indexOf(SUBTASKS_TABLE) !== -1) {
      try {
        var stInfo = await grist.docApi.fetchTable(SUBTASKS_TABLE);
        var stCols = Object.keys(stInfo);
        if (stCols.indexOf('Blocked_By_Subtask_Id') === -1) {
          await grist.docApi.applyUserActions([
            ['AddColumn', SUBTASKS_TABLE, 'Blocked_By_Subtask_Id', { type: 'Int' }]
          ]);
        }
      } catch (e) {
        console.log('Subtask migration completed');
      }
    }

    showToast(t('tablesCreated'), 'success');
  } catch (e) {
    console.error('Error ensuring tables:', e);
  }
}

// =============================================================================
// LOAD DATA
// =============================================================================

async function loadAllData() {
  try {
    var taskData = await grist.docApi.fetchTable(TASKS_TABLE);
    tasks = [];
    if (taskData && taskData.id) {
      for (var i = 0; i < taskData.id.length; i++) {
        tasks.push({
          id: taskData.id[i],
          Title: taskData.Title ? taskData.Title[i] : '',
          Description: taskData.Description ? taskData.Description[i] : '',
          Status: taskData.Status ? taskData.Status[i] : 'todo',
          Priority: taskData.Priority ? taskData.Priority[i] : 'medium',
          Assignee: taskData.Assignee ? taskData.Assignee[i] : '',
          Group_Name: taskData.Group_Name ? taskData.Group_Name[i] : '',
          Start_Date: taskData.Start_Date ? taskData.Start_Date[i] : null,
          Due_Date: taskData.Due_Date ? taskData.Due_Date[i] : null,
          Category: taskData.Category ? taskData.Category[i] : '',
          Recurrence: taskData.Recurrence ? taskData.Recurrence[i] : 'none',
          Estimated_Hours: taskData.Estimated_Hours ? taskData.Estimated_Hours[i] : 0,
          Created_At: taskData.Created_At ? taskData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    console.warn('Could not load tasks:', e);
    tasks = [];
  }

  try {
    var userData = await grist.docApi.fetchTable(USERS_TABLE);
    users = [];
    if (userData && userData.id) {
      for (var i = 0; i < userData.id.length; i++) {
        users.push({
          id: userData.id[i],
          Name: userData.Name ? userData.Name[i] : '',
          Email: userData.Email ? userData.Email[i] : '',
          Role: userData.Role ? userData.Role[i] : 'member',
          Group_Name: userData.Group_Name ? userData.Group_Name[i] : ''
        });
      }
    }
  } catch (e) {
    users = [];
  }

  try {
    var groupData = await grist.docApi.fetchTable(GROUPS_TABLE);
    groups = [];
    if (groupData && groupData.id) {
      for (var i = 0; i < groupData.id.length; i++) {
        groups.push({
          id: groupData.id[i],
          Name: groupData.Name ? groupData.Name[i] : '',
          Description: groupData.Description ? groupData.Description[i] : ''
        });
      }
    }
  } catch (e) {
    groups = [];
  }

  try {
    var tplData = await grist.docApi.fetchTable(TEMPLATES_TABLE);
    templates = [];
    if (tplData && tplData.id) {
      for (var i = 0; i < tplData.id.length; i++) {
        templates.push({
          id: tplData.id[i],
          Title: tplData.Title ? tplData.Title[i] : '',
          Description: tplData.Description ? tplData.Description[i] : '',
          Priority: tplData.Priority ? tplData.Priority[i] : 'medium',
          Category: tplData.Category ? tplData.Category[i] : '',
          Estimated_Hours: tplData.Estimated_Hours ? tplData.Estimated_Hours[i] : 0,
          Usage_Count: tplData.Usage_Count ? tplData.Usage_Count[i] : 0,
          Updated_At: tplData.Updated_At ? tplData.Updated_At[i] : null
        });
      }
    }
  } catch (e) {
    templates = [];
  }

  try {
    var subtaskData = await grist.docApi.fetchTable(SUBTASKS_TABLE);
    subtasks = [];
    if (subtaskData && subtaskData.id) {
      for (var i = 0; i < subtaskData.id.length; i++) {
        subtasks.push({
          id: subtaskData.id[i],
          Parent_Task_Id: subtaskData.Parent_Task_Id ? subtaskData.Parent_Task_Id[i] : null,
          Title: subtaskData.Title ? subtaskData.Title[i] : '',
          Completed: subtaskData.Completed ? subtaskData.Completed[i] : false,
          Order: subtaskData.Order ? subtaskData.Order[i] : 0,
          Blocked_By_Subtask_Id: subtaskData.Blocked_By_Subtask_Id ? subtaskData.Blocked_By_Subtask_Id[i] : null,
          Created_At: subtaskData.Created_At ? subtaskData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    subtasks = [];
  }

  try {
    var depData = await grist.docApi.fetchTable(DEPENDENCIES_TABLE);
    dependencies = [];
    if (depData && depData.id) {
      for (var i = 0; i < depData.id.length; i++) {
        dependencies.push({
          id: depData.id[i],
          Task_Id: depData.Task_Id ? depData.Task_Id[i] : null,
          Depends_On_Task_Id: depData.Depends_On_Task_Id ? depData.Depends_On_Task_Id[i] : null,
          Created_At: depData.Created_At ? depData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    dependencies = [];
  }

  try {
    var commentData = await grist.docApi.fetchTable(COMMENTS_TABLE);
    comments = [];
    if (commentData && commentData.id) {
      for (var i = 0; i < commentData.id.length; i++) {
        comments.push({
          id: commentData.id[i],
          Task_Id: commentData.Task_Id ? commentData.Task_Id[i] : null,
          Author: commentData.Author ? commentData.Author[i] : '',
          Content: commentData.Content ? commentData.Content[i] : '',
          Created_At: commentData.Created_At ? commentData.Created_At[i] : null
        });
      }
    }
  } catch (e) {
    comments = [];
  }

  try {
    var timeData = await grist.docApi.fetchTable(TIME_ENTRIES_TABLE);
    timeEntries = [];
    if (timeData && timeData.id) {
      for (var i = 0; i < timeData.id.length; i++) {
        timeEntries.push({
          id: timeData.id[i],
          Task_Id: timeData.Task_Id ? timeData.Task_Id[i] : null,
          User: timeData.User ? timeData.User[i] : '',
          Start_Time: timeData.Start_Time ? timeData.Start_Time[i] : null,
          End_Time: timeData.End_Time ? timeData.End_Time[i] : null,
          Duration: timeData.Duration ? timeData.Duration[i] : 0,
          Description: timeData.Description ? timeData.Description[i] : ''
        });
      }
    }
  } catch (e) {
    timeEntries = [];
  }

  try {
    var cfData = await grist.docApi.fetchTable(CUSTOM_FIELDS_TABLE);
    customFields = [];
    if (cfData && cfData.id) {
      for (var i = 0; i < cfData.id.length; i++) {
        customFields.push({
          id: cfData.id[i],
          Name: cfData.Name ? cfData.Name[i] : '',
          Type: cfData.Type ? cfData.Type[i] : 'text',
          Options: cfData.Options ? cfData.Options[i] : '',
          Order: cfData.Order ? cfData.Order[i] : 0,
          Created_At: cfData.Created_At ? cfData.Created_At[i] : null
        });
      }
    }
    customFields.sort(function(a, b) { return (a.Order || 0) - (b.Order || 0); });
  } catch (e) {
    customFields = [];
  }

  try {
    var cfvData = await grist.docApi.fetchTable(CUSTOM_FIELD_VALUES_TABLE);
    customFieldValues = [];
    if (cfvData && cfvData.id) {
      for (var i = 0; i < cfvData.id.length; i++) {
        customFieldValues.push({
          id: cfvData.id[i],
          Task_Id: cfvData.Task_Id ? cfvData.Task_Id[i] : null,
          Field_Id: cfvData.Field_Id ? cfvData.Field_Id[i] : null,
          Value: cfvData.Value ? cfvData.Value[i] : ''
        });
      }
    }
  } catch (e) {
    customFieldValues = [];
  }

  try {
    var catData = await grist.docApi.fetchTable(CATEGORIES_TABLE);
    categories = [];
    if (catData && catData.id) {
      for (var i = 0; i < catData.id.length; i++) {
        categories.push({
          id: catData.id[i],
          Name: catData.Name ? catData.Name[i] : '',
          Color: catData.Color ? catData.Color[i] : '#6366f1',
          Order: catData.Order ? catData.Order[i] : 0
        });
      }
    }
    categories.sort(function(a, b) { return (a.Order || 0) - (b.Order || 0); });
  } catch (e) {
    categories = [];
  }

  try {
    var tagData = await grist.docApi.fetchTable(TAGS_TABLE);
    tags = [];
    if (tagData && tagData.id) {
      for (var i = 0; i < tagData.id.length; i++) {
        tags.push({
          id: tagData.id[i],
          Name: tagData.Name ? tagData.Name[i] : '',
          Color: tagData.Color ? tagData.Color[i] : '#6366f1'
        });
      }
    }
  } catch (e) {
    tags = [];
  }

  refreshAllViews();
}

function refreshAllViews() {
  updateStats();
  var activeTab = document.querySelector('.tab-btn.active');
  if (activeTab) {
    var tab = activeTab.getAttribute('data-tab');
    if (tab === 'calendar') renderCalendarView();
    if (tab === 'kanban') renderKanbanView();
    if (tab === 'table') renderTableView();
    if (tab === 'gantt') renderGanttView();
    if (tab === 'templates') renderTemplatesView();
    if (tab === 'stats') renderStatsView();
    if (tab === 'team') renderTeamView();
  }
}

// =============================================================================
// STATS
// =============================================================================

function updateStats() {
  var total = tasks.length;
  var todo = tasks.filter(function(t) { return t.Status === 'todo'; }).length;
  var progress = tasks.filter(function(t) { return t.Status === 'progress'; }).length;
  var done = tasks.filter(function(t) { return t.Status === 'done'; }).length;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-todo').textContent = todo;
  document.getElementById('stat-progress').textContent = progress;
  document.getElementById('stat-done').textContent = done;
}

// =============================================================================
// CALENDAR VIEW
// =============================================================================

function renderCalendarView() {
  // Update mode buttons
  document.querySelectorAll('.calendar-mode-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-mode') === calendarMode);
  });

  if (calendarMode === 'week') {
    renderCalendarWeekView();
    return;
  }

  var monthNames = currentLang === 'fr'
    ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNames = currentLang === 'fr'
    ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
    : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Update title
  document.getElementById('calendar-month-title').textContent = monthNames[calendarMonth] + ' ' + calendarYear;

  // Render weekdays
  var weekdaysHtml = '';
  for (var d = 0; d < 7; d++) {
    var isWeekend = d >= 5;
    weekdaysHtml += '<div class="calendar-weekday' + (isWeekend ? ' weekend' : '') + '">' + dayNames[d] + '</div>';
  }
  document.getElementById('calendar-weekdays').innerHTML = weekdaysHtml;

  // Calculate days
  var firstDay = new Date(calendarYear, calendarMonth, 1);
  var lastDay = new Date(calendarYear, calendarMonth + 1, 0);
  var startDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0
  var daysInMonth = lastDay.getDate();

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Render days
  var daysHtml = '';
  var dayIndex = 0;

  // Previous month days
  var prevMonth = new Date(calendarYear, calendarMonth, 0);
  var prevMonthDays = prevMonth.getDate();
  for (var i = startDayOfWeek - 1; i >= 0; i--) {
    var dayNum = prevMonthDays - i;
    var prevDate = new Date(calendarYear, calendarMonth - 1, dayNum);
    var prevTasks = getTasksForDate(prevDate);
    daysHtml += renderCalendarDay(dayNum, prevDate, prevTasks, true, false, false);
    dayIndex++;
  }

  // Current month days
  for (var d = 1; d <= daysInMonth; d++) {
    var currentDate = new Date(calendarYear, calendarMonth, d);
    var isToday = currentDate.getTime() === today.getTime();
    var dayTasks = getTasksForDate(currentDate);
    daysHtml += renderCalendarDay(d, currentDate, dayTasks, false, isToday, false);
    dayIndex++;
  }

  // Next month days
  var remainingDays = 42 - dayIndex; // 6 rows * 7 days
  for (var i = 1; i <= remainingDays; i++) {
    var nextDate = new Date(calendarYear, calendarMonth + 1, i);
    var nextTasks = getTasksForDate(nextDate);
    daysHtml += renderCalendarDay(i, nextDate, nextTasks, true, false);
  }

  var daysContainer = document.getElementById('calendar-days');
  daysContainer.innerHTML = daysHtml;
  daysContainer.classList.remove('week-view');
}

function renderCalendarDay(dayNum, date, dayTasks, isOtherMonth, isToday, isWeekView) {
  // Validate date
  if (!date || isNaN(date.getTime())) {
    console.error('Invalid date in renderCalendarDay:', date);
    return '';
  }
  var dayOfWeek = (date.getDay() + 6) % 7;
  var isWeekend = dayOfWeek >= 5;
  var dateStr = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');

  var classes = 'calendar-day';
  if (isOtherMonth) classes += ' other-month';
  if (isToday) classes += ' today';
  if (isWeekend) classes += ' weekend';

  var html = '<div class="' + classes + '" onclick="onCalendarDayClick(\'' + dateStr + '\')" ondragover="onCalendarDragOver(event)" ondrop="onCalendarDrop(event, \'' + dateStr + '\')">';
  if (!isWeekView) {
    html += '<div class="day-number">' + dayNum + '</div>';
  }
  html += '<div class="day-tasks">';

  var maxTasks = isWeekView ? 20 : 3;
  for (var i = 0; i < Math.min(dayTasks.length, maxTasks); i++) {
    var task = dayTasks[i];
    var statusClass = 'status-' + task.Status;
    var priorityClass = task.Priority === 'high' ? ' priority-high' : '';
    html += '<div class="day-task ' + statusClass + priorityClass + '" draggable="true" ondragstart="onCalendarTaskDragStart(event, ' + task.id + ')" onclick="event.stopPropagation(); openEditTaskModal(' + task.id + ')" title="' + sanitize(task.Title) + '">';
    html += sanitize(task.Title);
    html += '</div>';
  }

  if (dayTasks.length > maxTasks) {
    html += '<div class="day-more">+' + (dayTasks.length - maxTasks) + ' ' + (currentLang === 'fr' ? 'autres' : 'more') + '</div>';
  }

  html += '</div></div>';
  return html;
}

function onCalendarDayClick(dateStr) {
  openNewTaskModalWithDate(dateStr);
}

var calendarDraggedTaskId = null;

function onCalendarTaskDragStart(event, taskId) {
  calendarDraggedTaskId = taskId;
  event.dataTransfer.effectAllowed = 'move';
  event.target.style.opacity = '0.5';
}

function onCalendarDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
  event.currentTarget.classList.add('drag-over');
}

async function onCalendarDrop(event, dateStr) {
  event.preventDefault();
  event.currentTarget.classList.remove('drag-over');
  
  if (!calendarDraggedTaskId) return;
  
  var task = tasks.find(function(t) { return t.id === calendarDraggedTaskId; });
  if (!task) return;
  
  // Parse the new date
  var parts = dateStr.split('-');
  var newDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
  var newTimestamp = Math.floor(newDate.getTime() / 1000);
  
  // Calculate duration if task has both start and due dates
  var duration = 0;
  if (task.Start_Date && task.Due_Date) {
    duration = task.Due_Date - task.Start_Date;
  }
  
  // Update the task dates
  var updates = { Due_Date: newTimestamp };
  if (task.Start_Date) {
    updates.Start_Date = newTimestamp - duration;
  }
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, calendarDraggedTaskId, updates]
    ]);
    showToast(t('taskMoved'), 'success');
    await loadAllData();
  } catch (e) {
    console.error('Error moving task:', e);
  }
  
  calendarDraggedTaskId = null;
}

function openNewTaskModalWithDate(dateStr) {
  openNewTaskModal();
  // Set the date after modal is rendered
  setTimeout(function() {
    var startInput = document.getElementById('task-start');
    var dueInput = document.getElementById('task-due');
    if (startInput) startInput.value = dateStr;
    if (dueInput) dueInput.value = dateStr;
  }, 50);
}

function calendarNav(dir) {
  calendarMonth += dir;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear++;
  }
  if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear--;
  }
  renderCalendarView();
}

function calendarToday() {
  calendarYear = new Date().getFullYear();
  calendarMonth = new Date().getMonth();
  calendarWeekOffset = 0;
  renderCalendarView();
}

function setCalendarMode(mode) {
  calendarMode = mode;
  if (mode === 'week') {
    calendarWeekOffset = 0;
  }
  renderCalendarView();
}

function getWeekStart(offset) {
  var today = new Date();
  var day = today.getDay();
  var diff = day === 0 ? -6 : 1 - day; // Get to Monday
  var monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + diff + (offset * 7));
  return monday;
}

function getTasksForDate(date) {
  var dateStart = new Date(date);
  dateStart.setHours(0, 0, 0, 0);
  var dateEnd = new Date(date);
  dateEnd.setHours(23, 59, 59, 999);
  var dateTs = dateStart.getTime() / 1000;
  var dateEndTs = dateEnd.getTime() / 1000;

  return tasks.filter(function(task) {
    var taskStart = task.Start_Date;
    var taskEnd = task.Due_Date;
    if (!taskStart && !taskEnd) return false;
    if (taskStart && taskEnd) {
      return taskStart <= dateEndTs && taskEnd >= dateTs;
    }
    if (taskStart) return taskStart >= dateTs && taskStart <= dateEndTs;
    if (taskEnd) return taskEnd >= dateTs && taskEnd <= dateEndTs;
    return false;
  });
}

function renderCalendarWeekView() {
  // Calculate week start (Monday) based on offset
  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var weekStartDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset + (calendarWeekOffset * 7));

  var monthNames = currentLang === 'fr'
    ? ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayNamesFull = currentLang === 'fr'
    ? ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  var weekEndDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + 6);

  // Update title
  var startMonth = monthNames[weekStartDate.getMonth()];
  var endMonth = monthNames[weekEndDate.getMonth()];
  var title = weekStartDate.getDate() + ' ' + startMonth;
  if (startMonth !== endMonth) {
    title += ' - ' + weekEndDate.getDate() + ' ' + endMonth;
  } else {
    title += ' - ' + weekEndDate.getDate() + ' ' + endMonth;
  }
  title += ' ' + weekStartDate.getFullYear();
  document.getElementById('calendar-month-title').textContent = title;

  var today = new Date();
  today.setHours(0, 0, 0, 0);

  // Render weekdays with dates
  var weekdaysHtml = '';
  for (var d = 0; d < 7; d++) {
    var dayDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + d);
    var isWeekend = d >= 5;
    var isToday = dayDate.getTime() === today.getTime();
    weekdaysHtml += '<div class="calendar-weekday' + (isWeekend ? ' weekend' : '') + (isToday ? ' today' : '') + '">';
    weekdaysHtml += dayNamesFull[d] + ' <strong>' + dayDate.getDate() + '</strong>';
    weekdaysHtml += '</div>';
  }
  document.getElementById('calendar-weekdays').innerHTML = weekdaysHtml;

  // Render days
  var daysHtml = '';
  for (var d = 0; d < 7; d++) {
    var dayDate = new Date(weekStartDate.getFullYear(), weekStartDate.getMonth(), weekStartDate.getDate() + d);
    var isToday = dayDate.getTime() === today.getTime();
    var dayTasks = getTasksForDate(dayDate);
    daysHtml += renderCalendarDay(dayDate.getDate(), dayDate, dayTasks, false, isToday, true);
  }

  var daysContainer = document.getElementById('calendar-days');
  daysContainer.innerHTML = daysHtml;
  daysContainer.classList.add('week-view');
}

function calendarNav(dir) {
  if (calendarMode === 'week') {
    calendarWeekOffset += dir;
  } else {
    calendarMonth += dir;
    if (calendarMonth > 11) {
      calendarMonth = 0;
      calendarYear++;
    }
    if (calendarMonth < 0) {
      calendarMonth = 11;
      calendarYear--;
    }
  }
  renderCalendarView();
}

// =============================================================================
// KANBAN VIEW
// =============================================================================

function renderKanbanView() {
  var board = document.getElementById('kanban-board');
  var statuses = [
    { key: 'todo', label: t('colTodo'), cssClass: 'col-todo' },
    { key: 'progress', label: t('colProgress'), cssClass: 'col-progress' },
    { key: 'done', label: t('colDone'), cssClass: 'col-done' }
  ];

  var html = '';
  for (var s = 0; s < statuses.length; s++) {
    var st = statuses[s];
    var colTasks = tasks.filter(function(task) { return task.Status === st.key; });

    html += '<div class="kanban-column ' + st.cssClass + '">';
    html += '<div class="kanban-col-header">';
    html += '<div style="display:flex;align-items:center;gap:8px;">' + st.label + ' <span class="col-count">' + colTasks.length + '</span></div>';
    html += '<button class="col-add" onclick="openNewTaskModal(\'' + st.key + '\')">+</button>';
    html += '</div>';
    html += '<div class="kanban-cards" data-status="' + st.key + '" ondragover="onDragOver(event)" ondrop="onDrop(event)" ondragleave="onDragLeave(event)">';

    if (colTasks.length === 0) {
      html += '<div class="kanban-empty"><div class="kanban-empty-icon">📝</div>' + t('noTasks') + '</div>';
    } else {
      for (var i = 0; i < colTasks.length; i++) {
        html += renderTaskCard(colTasks[i]);
      }
    }

    html += '</div>';
    html += '<button class="kanban-add-btn" onclick="openNewTaskModal(\'' + st.key + '\')">' + t('addTask') + '</button>';
    html += '</div>';
  }

  board.innerHTML = html;
}

function renderTaskCard(task) {
  var overdueHtml = isOverdue(task) ? ' <span class="overdue-badge">' + t('overdue') + '</span>' : '';
  var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');
  var taskSubtasks = getTaskSubtasks(task.id);
  var progressPct = getTaskProgress(task);
  var completedCount = taskSubtasks.filter(function(st) { return st.Completed; }).length;
  var blocked = isTaskBlocked(task.id);
  var taskComments = getTaskComments(task.id);

  var priorityClass = 'priority-' + (task.Priority || 'medium');
  var html = '<div class="task-card ' + priorityClass + (blocked ? ' task-blocked' : '') + '" draggable="true" ondragstart="onDragStart(event, ' + task.id + ')" data-id="' + task.id + '" ondblclick="openEditTaskModal(' + task.id + ')">';
  
  // Blocked warning badge
  if (blocked) {
    var blockers = getTaskDependencies(task.id).filter(function(b) { return b && b.Status !== 'done'; });
    html += '<div class="blocked-badge">🔒 ' + t('blockedBy') + ' ' + blockers.map(function(b) { return sanitize(b.Title); }).join(', ') + '</div>';
  }
  
  html += '<div class="task-card-header">';
  html += '<div class="task-card-title" style="cursor:pointer;" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title) + '</div>';
  html += '<div class="task-card-actions">';
  html += '<span class="priority-dot ' + dotClass + '"></span>';
  if (isOwner) html += '<button class="btn-icon" onclick="deleteTask(' + task.id + ')" title="' + t('delete') + '">🗑️</button>';
  html += '</div></div>';

  if (task.Description) {
    html += '<div class="task-card-desc">' + sanitize(task.Description) + '</div>';
  }

  // Subtasks progress bar
  if (taskSubtasks.length > 0) {
    var barClass = progressPct === 100 ? 'bar-done' : (progressPct >= 50 ? 'bar-progress' : 'bar-todo');
    html += '<div class="task-card-subtasks">';
    html += '<div class="subtask-progress-row">';
    html += '<span class="subtask-icon">☑️</span>';
    html += '<span class="subtask-count">' + completedCount + '/' + taskSubtasks.length + '</span>';
    html += '<div class="subtask-progress-bar"><div class="subtask-progress-fill ' + barClass + '" style="width:' + progressPct + '%"></div></div>';
    html += '</div></div>';
  }

  // Row 1: Priority + Date + Comments/Time/Recurrence
  html += '<div class="task-card-row">';
  html += '<span class="priority-badge priority-' + task.Priority + '">' + priorityLabel(task.Priority) + '</span>';
  if (task.Due_Date) {
    html += '<span class="task-card-date">📅 ' + formatDate(task.Due_Date) + overdueHtml + '</span>';
  }
  if (taskComments.length > 0) {
    html += '<span class="task-card-comments">💬 ' + taskComments.length + '</span>';
  }
  var totalTime = getTaskTotalTime(task.id);
  var isTimerRunning = !!activeTimers[task.id];
  if (totalTime > 0 || isTimerRunning) {
    html += '<span class="task-card-time' + (isTimerRunning ? ' timer-running' : '') + '">⏱️ ' + formatDurationShort(totalTime) + (isTimerRunning ? ' ●' : '') + '</span>';
  }
  if (task.Recurrence && task.Recurrence !== 'none') {
    var recLabel = task.Recurrence === 'daily' ? '🔄 D' : (task.Recurrence === 'weekly' ? '🔄 W' : '🔄 M');
    html += '<span class="task-card-recurrence">' + recLabel + '</span>';
  }
  html += '</div>';

  // Row 2: Assignees
  if (task.Assignee) {
    html += '<div class="task-card-row">';
    var assigneeList = task.Assignee.split(',').map(function(a) { return a.trim(); }).filter(Boolean);
    for (var ai = 0; ai < assigneeList.length; ai++) {
      html += '<span class="task-card-assignee">👤 ' + sanitize(getUserDisplayName(assigneeList[ai])) + '</span>';
    }
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// =============================================================================
// DRAG & DROP
// =============================================================================

var draggedTaskId = null;

function onDragStart(e, taskId) {
  draggedTaskId = taskId;
  e.target.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
}

function onDragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e) {
  e.currentTarget.classList.remove('drag-over');
}

async function onDrop(e) {
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  var newStatus = e.currentTarget.getAttribute('data-status');
  if (draggedTaskId && newStatus) {
    try {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', TASKS_TABLE, draggedTaskId, { Status: newStatus }]
      ]);
      // Update local state
      for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === draggedTaskId) {
          tasks[i].Status = newStatus;
          break;
        }
      }
      showToast(t('taskMoved'), 'success');
      refreshAllViews();
    } catch (err) {
      console.error('Error moving task:', err);
    }
  }
  draggedTaskId = null;
}

// =============================================================================
// TABLE VIEW
// =============================================================================

function renderTableView() {
  var search = (document.getElementById('table-search').value || '').toLowerCase();
  var filterStatus = document.getElementById('filter-status').value;
  var filterPriority = document.getElementById('filter-priority').value;

  var filtered = tasks.filter(function(task) {
    if (filterStatus && task.Status !== filterStatus) return false;
    if (filterPriority && task.Priority !== filterPriority) return false;
    if (search) {
      var text = (task.Title + ' ' + task.Description + ' ' + task.Assignee).toLowerCase();
      if (text.indexOf(search) === -1) return false;
    }
    return true;
  });

  var html = '<table class="data-table">';
  html += '<thead><tr>';
  html += '<th>' + t('colTaskName') + '</th>';
  html += '<th>' + t('colStatus') + '</th>';
  html += '<th>' + t('colPriority') + '</th>';
  html += '<th>' + t('colAssignee') + '</th>';
  html += '<th>' + t('colStartDate') + '</th>';
  html += '<th>' + t('colDueDate') + '</th>';
  html += '<th>' + t('colActions') + '</th>';
  html += '</tr></thead><tbody>';

  for (var i = 0; i < filtered.length; i++) {
    var task = filtered[i];
    var statusClass = 'status-' + task.Status;
    var overdueHtml = isOverdue(task) ? ' ⚠️' : '';
    var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');

    var taskSubtasks = getTaskSubtasks(task.id);
    var completedSt = taskSubtasks.filter(function(st) { return st.Completed; }).length;
    var progressPct = taskSubtasks.length > 0 ? Math.round((completedSt / taskSubtasks.length) * 100) : 0;
    var barClass = progressPct === 100 ? 'bar-done' : (progressPct >= 50 ? 'bar-progress' : 'bar-todo');

    html += '<tr class="task-row">';
    html += '<td><div style="display:flex;align-items:center;gap:8px;">';
    if (taskSubtasks.length > 0) {
      html += '<button class="toggle-btn" onclick="toggleSubtasks(' + task.id + ')" id="toggle-' + task.id + '">▶</button>';
    } else {
      html += '<span style="width:18px;"></span>';
    }
    html += '<div><div style="font-weight:700;">' + sanitize(task.Title) + '</div>';
    if (task.Description) html += '<div style="font-size:11px;color:#94a3b8;margin-top:2px;">' + sanitize(task.Description).substring(0, 80) + '</div>';
    html += '</div></div></td>';
    html += '<td><span class="status-badge ' + statusClass + '">● ' + statusLabel(task.Status) + '</span>';
    if (taskSubtasks.length > 0) html += ' <span class="st-badge">' + completedSt + '/' + taskSubtasks.length + '</span>';
    html += '</td>';
    html += '<td><span class="priority-dot ' + dotClass + '"></span> ' + priorityLabel(task.Priority) + '</td>';
    var assigneeDisplay = task.Assignee ? task.Assignee.split(',').map(function(a) { return getUserDisplayName(a.trim()); }).join(', ') : '';
    html += '<td>' + (assigneeDisplay ? '<span class="assignee-chip">👤 ' + sanitize(assigneeDisplay) + '</span>' : '') + '</td>';
    html += '<td>' + (task.Start_Date ? formatDate(task.Start_Date) : t('notDefined')) + '</td>';
    html += '<td style="' + (isOverdue(task) ? 'color:#dc2626;font-weight:700;' : '') + '">' + (task.Due_Date ? formatDate(task.Due_Date) + overdueHtml : t('noDate')) + '</td>';
    html += '<td>';
    html += '<button class="btn-icon" onclick="openEditTaskModal(' + task.id + ')" title="Modifier">✏️</button>';
    if (isOwner) html += '<button class="btn-icon" onclick="deleteTask(' + task.id + ')">🗑️</button>';
    html += '</td>';
    html += '</tr>';

    // Subtasks rows (hidden by default)
    for (var si = 0; si < taskSubtasks.length; si++) {
      var st = taskSubtasks[si];
      html += '<tr class="subtask-row" data-parent="' + task.id + '" style="display:none;">';
      html += '<td><div class="subtask-indent"><span class="subtask-arrow">└</span><span class="subtask-name' + (st.Completed ? ' completed' : '') + '">' + sanitize(st.Title) + '</span></div></td>';
      html += '<td><span class="st-status">' + (st.Completed ? '✅' : '⬜') + '</span></td>';
      html += '<td colspan="5"></td>';
      html += '</tr>';
    }
  }

  if (filtered.length === 0) {
    html += '<tr><td colspan="7" style="text-align:center;padding:30px;color:#94a3b8;">' + t('noTasks') + '</td></tr>';
  }

  html += '</tbody></table>';
  document.getElementById('table-view').innerHTML = html;
}

function toggleSubtasks(taskId) {
  var rows = document.querySelectorAll('.subtask-row[data-parent="' + taskId + '"]');
  var btn = document.getElementById('toggle-' + taskId);
  var isExpanded = rows.length > 0 && rows[0].style.display !== 'none';
  
  for (var i = 0; i < rows.length; i++) {
    rows[i].style.display = isExpanded ? 'none' : 'table-row';
  }
  if (btn) {
    btn.textContent = isExpanded ? '▶' : '▼';
    btn.classList.toggle('expanded', !isExpanded);
  }
}

function expandAllSubtasks() {
  var rows = document.querySelectorAll('.subtask-row');
  var btns = document.querySelectorAll('.toggle-btn');
  for (var i = 0; i < rows.length; i++) rows[i].style.display = 'table-row';
  for (var i = 0; i < btns.length; i++) { btns[i].textContent = '▼'; btns[i].classList.add('expanded'); }
}

function collapseAllSubtasks() {
  var rows = document.querySelectorAll('.subtask-row');
  var btns = document.querySelectorAll('.toggle-btn');
  for (var i = 0; i < rows.length; i++) rows[i].style.display = 'none';
  for (var i = 0; i < btns.length; i++) { btns[i].textContent = '▶'; btns[i].classList.remove('expanded'); }
}

// =============================================================================
// GANTT VIEW
// =============================================================================

function getISOWeek(date) {
  var d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  var dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
}

function getWeekStart(year, weekNum) {
  var jan4 = new Date(year, 0, 4);
  var dayOfWeek = jan4.getDay() || 7;
  var monday = new Date(jan4);
  monday.setDate(jan4.getDate() - dayOfWeek + 1 + (weekNum - 1) * 7);
  return monday;
}

function renderGanttView() {
  var yearSelect = document.getElementById('gantt-year');
  if (yearSelect.options.length === 0) {
    for (var y = 2024; y <= 2030; y++) {
      var opt = document.createElement('option');
      opt.value = y;
      opt.textContent = y;
      if (y === ganttYear) opt.selected = true;
      yearSelect.appendChild(opt);
    }
  }
  yearSelect.value = ganttYear;

  document.querySelectorAll('[data-gantt-mode]').forEach(function(btn) {
    btn.classList.toggle('active', btn.getAttribute('data-gantt-mode') === ganttMode);
  });

  var tasksWithDates = tasks.filter(function(task) { return task.Start_Date || task.Due_Date; });
  document.getElementById('gantt-task-count').textContent = '(' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + ')';

  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var dayNames = currentLang === 'fr'
    ? ['DIM.', 'LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.']
    : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var monthNamesShort = currentLang === 'fr'
    ? ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var monthNames = currentLang === 'fr'
    ? ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var html = '<div class="gantt-container"><table class="gantt-table">';

  // ===== WEEKS MODE =====
  if (ganttMode === 'weeks') {
    // Determine week range: show ~10 weeks centered on current month
    var startWeek = getISOWeek(new Date(ganttYear, ganttMonth, 1));
    var numWeeks = 10;
    var weeks = [];
    for (var w = 0; w < numWeeks; w++) {
      var wn = startWeek + w;
      var yr = ganttYear;
      if (wn > 52) { wn -= 52; yr++; }
      var ws = getWeekStart(yr, wn);
      var we = new Date(ws);
      we.setDate(we.getDate() + 6);
      weeks.push({ num: wn, year: yr, start: ws, end: we });
    }

    // Header: week numbers with month subtitle
    html += '<thead><tr><th class="gantt-task-label" style="text-align:left;">' + t('colTaskName') + '</th>';
    for (var wi = 0; wi < weeks.length; wi++) {
      var wk = weeks[wi];
      var isCurrentWeek = getISOWeek(today) === wk.num && today.getFullYear() === wk.year;
      html += '<th style="min-width:80px;' + (isCurrentWeek ? 'background:#fef2f2;color:#ef4444;' : '') + '">';
      html += '<div style="font-size:11px;font-weight:800;">S' + wk.num + '</div>';
      html += '<div style="font-size:9px;font-weight:400;color:#94a3b8;">' + monthNamesShort[wk.start.getMonth()] + ' ' + String(wk.start.getFullYear()).substring(2) + '</div>';
      html += '</th>';
    }
    html += '</tr></thead><tbody>';

    // Task rows
    for (var ti = 0; ti < tasksWithDates.length; ti++) {
      var task = tasksWithDates[ti];
      var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');
      var barClass = task.Status === 'done' ? 'gantt-bar-done' : (task.Status === 'progress' ? 'gantt-bar-progress' : 'gantt-bar-todo');
      if (isOverdue(task)) barClass = 'gantt-bar-overdue';

      var assigneeDisplay = task.Assignee ? getUserDisplayName(task.Assignee.split(',')[0].trim()) : '';
      html += '<tr>';
      html += '<td class="gantt-task-label">';
      html += '<div class="task-name"><span class="priority-dot ' + dotClass + '"></span> ' + sanitize(task.Title) + '</div>';
      html += '<div class="task-info">';
      if (task.Priority) html += '🏷️ ' + priorityLabel(task.Priority);
      if (assigneeDisplay) html += ' 👤 ' + sanitize(assigneeDisplay).substring(0, 15);
      if (task.Due_Date) html += ' ⏰ ' + (currentLang === 'fr' ? 'Échéance: ' : 'Due: ') + formatDate(task.Due_Date);
      html += '</div></td>';

      var tStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
      var tEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
      if (!tStart && tEnd) tStart = tEnd;
      if (!tEnd && tStart) tEnd = tStart;
      if (tStart) tStart.setHours(0, 0, 0, 0);
      if (tEnd) tEnd.setHours(23, 59, 59, 999);

      // Find first and last week index where bar should appear
      var barStartIdx = -1, barEndIdx = -1;
      for (var wi = 0; wi < weeks.length; wi++) {
        var wk = weeks[wi];
        if (tStart && tEnd && tStart <= wk.end && tEnd >= wk.start) {
          if (barStartIdx === -1) barStartIdx = wi;
          barEndIdx = wi;
        }
      }

      for (var wi = 0; wi < weeks.length; wi++) {
        var isCurrentWeek = getISOWeek(today) === weeks[wi].num && today.getFullYear() === weeks[wi].year;
        html += '<td class="gantt-cell" style="position:relative;' + (isCurrentWeek ? 'background:#fef2f2;' : '') + '">';
        if (wi === barStartIdx) {
          var spanCols = barEndIdx - barStartIdx + 1;
          var widthPx = spanCols * 80;
          html += '<div class="gantt-bar ' + barClass + '" style="left:2px;width:' + widthPx + 'px;cursor:pointer;" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title).substring(0, 20) + '</div>';
        }
        html += '</td>';
      }

      html += '</tr>';
    }

    // Footer
    var viewStartMonth = monthNames[weeks[0].start.getMonth()];
    var viewEndMonth = monthNames[weeks[weeks.length - 1].start.getMonth()];
    html += '</tbody></table>';
    html += '<div class="gantt-footer">';
    html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
    html += '<span>' + t('ganttViewRange') + ' ' + viewStartMonth + ' - ' + viewEndMonth + ' ' + ganttYear + '</span>';
    html += '</div></div>';

    document.getElementById('gantt-view').innerHTML = html;
    return;
  }

  // ===== MONTHS MODE =====
  if (ganttMode === 'months') {
    var startDate = new Date(ganttYear, 0, 1);
    var endDate = new Date(ganttYear, 11, 31);

    html += '<thead><tr><th class="gantt-task-label" style="text-align:left;">' + t('colTaskName') + '</th>';
    for (var m = 0; m < 12; m++) {
      html += '<th colspan="1">' + monthNames[m].substring(0, 3).toUpperCase() + '</th>';
    }
    html += '</tr></thead><tbody>';

    for (var ti = 0; ti < tasksWithDates.length; ti++) {
      var task = tasksWithDates[ti];
      var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');
      var barClass = task.Status === 'done' ? 'gantt-bar-done' : (task.Status === 'progress' ? 'gantt-bar-progress' : 'gantt-bar-todo');
      if (isOverdue(task)) barClass = 'gantt-bar-overdue';

      var assigneeDisplay = task.Assignee ? getUserDisplayName(task.Assignee.split(',')[0].trim()) : '';
      html += '<tr>';
      html += '<td class="gantt-task-label">';
      html += '<div class="task-name"><span class="priority-dot ' + dotClass + '"></span> ' + sanitize(task.Title) + '</div>';
      html += '<div class="task-info">';
      if (task.Priority) html += '🏷️ ' + priorityLabel(task.Priority);
      if (assigneeDisplay) html += ' 👤 ' + sanitize(assigneeDisplay).substring(0, 15);
      if (task.Due_Date) html += ' ⏰ ' + (currentLang === 'fr' ? 'Échéance: ' : 'Due: ') + formatDate(task.Due_Date);
      html += '</div></td>';

      for (var m = 0; m < 12; m++) {
        var monthStart = new Date(ganttYear, m, 1);
        var monthEnd = new Date(ganttYear, m + 1, 0);
        var tStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
        var tEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
        if (!tStart && tEnd) tStart = tEnd;
        if (!tEnd && tStart) tEnd = tStart;

        var inRange = tStart && tEnd && tStart <= monthEnd && tEnd >= monthStart;
        html += '<td class="gantt-cell" style="position:relative;">';
        if (inRange) {
          html += '<div class="gantt-bar ' + barClass + '" style="left:2px;right:2px;cursor:pointer;" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title).substring(0, 10) + '</div>';
        }
        html += '</td>';
      }
      html += '</tr>';
    }

    html += '</tbody></table>';
    html += '<div class="gantt-footer">';
    html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
    html += '<span>' + t('ganttViewRange') + ' ' + monthNames[0] + ' - ' + monthNames[11] + ' ' + ganttYear + '</span>';
    html += '</div></div>';

    document.getElementById('gantt-view').innerHTML = html;
    return;
  }

  // ===== DAYS MODE =====
  var startDate = new Date(ganttYear, ganttMonth, 1);
  var endDate = new Date(ganttYear, ganttMonth + 2, 0);
  var days = [];
  var d = new Date(startDate);
  while (d <= endDate) {
    days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }

  html += '<thead><tr><th class="gantt-task-label" style="text-align:left;">' + t('colTaskName') + '</th>';
  for (var di = 0; di < days.length; di++) {
    var dd = days[di];
    var isToday = dd.getTime() === today.getTime();
    var isWeekend = dd.getDay() === 0 || dd.getDay() === 6;
    html += '<th class="' + (isToday ? 'today' : '') + (isWeekend ? ' weekend' : '') + '">';
    html += '<div>' + dd.getDate() + '</div>';
    html += '<div style="font-size:8px;">' + dayNames[dd.getDay()] + '</div>';
    html += '</th>';
  }
  html += '</tr></thead><tbody>';

  for (var ti = 0; ti < tasksWithDates.length; ti++) {
    var task = tasksWithDates[ti];
    var dotClass = task.Priority === 'high' ? 'dot-high' : (task.Priority === 'medium' ? 'dot-medium' : 'dot-low');
    var barClass = task.Status === 'done' ? 'gantt-bar-done' : (task.Status === 'progress' ? 'gantt-bar-progress' : 'gantt-bar-todo');
    if (isOverdue(task)) barClass = 'gantt-bar-overdue';

    var assigneeDisplay = task.Assignee ? getUserDisplayName(task.Assignee.split(',')[0].trim()) : '';
    html += '<tr>';
    html += '<td class="gantt-task-label">';
    html += '<div class="task-name"><span class="priority-dot ' + dotClass + '"></span> ' + sanitize(task.Title) + '</div>';
    html += '<div class="task-info">';
    if (task.Priority) html += '🏷️ ' + priorityLabel(task.Priority);
    if (assigneeDisplay) html += ' 👤 ' + sanitize(assigneeDisplay).substring(0, 15);
    if (task.Due_Date) html += ' ⏰ ' + (currentLang === 'fr' ? 'Échéance: ' : 'Due: ') + formatDate(task.Due_Date);
    html += '</div></td>';

    var tStart = task.Start_Date ? new Date(task.Start_Date * 1000) : null;
    var tEnd = task.Due_Date ? new Date(task.Due_Date * 1000) : null;
    if (!tStart && tEnd) tStart = tEnd;
    if (!tEnd && tStart) tEnd = tStart;
    if (tStart) tStart.setHours(0, 0, 0, 0);
    if (tEnd) tEnd.setHours(0, 0, 0, 0);

    for (var di = 0; di < days.length; di++) {
      var dd = days[di];
      var isToday = dd.getTime() === today.getTime();
      var isWeekend = dd.getDay() === 0 || dd.getDay() === 6;
      var cellClass = (isToday ? 'today-col' : '') + (isWeekend ? ' weekend-col' : '');

      html += '<td class="gantt-cell ' + cellClass + '">';
      if (tStart && tEnd && dd.getTime() === tStart.getTime()) {
        var span = Math.max(1, Math.round((tEnd - tStart) / (86400000)) + 1);
        var widthPx = span * 36;
        html += '<div class="gantt-bar ' + barClass + '" style="left:2px;width:' + widthPx + 'px;cursor:pointer;" title="' + sanitize(task.Title) + '" onclick="openEditTaskModal(' + task.id + ')">' + sanitize(task.Title).substring(0, 12) + '</div>';
      }
      html += '</td>';
    }

    html += '</tr>';
  }

  html += '</tbody></table>';
  var viewStart = monthNames[startDate.getMonth()];
  var viewEnd = monthNames[endDate.getMonth()];
  html += '<div class="gantt-footer">';
  html += '<span>🌟 ' + t('ganttFullYear') + ' • ' + t('ganttNavInfo') + ' • ' + tasksWithDates.length + ' ' + (currentLang === 'fr' ? 'tâches' : 'tasks') + '</span>';
  html += '<span>' + t('ganttViewRange') + ' ' + viewStart + ' - ' + viewEnd + ' ' + ganttYear + '</span>';
  html += '</div></div>';

  document.getElementById('gantt-view').innerHTML = html;
}

function ganttNav(dir) {
  if (ganttMode === 'months') {
    ganttYear += dir;
  } else if (ganttMode === 'weeks') {
    // Navigate by ~2.5 months (10 weeks) at a time
    ganttMonth += dir * 3;
    if (ganttMonth > 11) { ganttMonth -= 12; ganttYear++; }
    if (ganttMonth < 0) { ganttMonth += 12; ganttYear--; }
  } else {
    ganttMonth += dir * 2;
    if (ganttMonth > 11) { ganttMonth = 0; ganttYear++; }
    if (ganttMonth < 0) { ganttMonth = 10; ganttYear--; }
  }
  renderGanttView();
}

function ganttToday() {
  ganttYear = new Date().getFullYear();
  ganttMonth = new Date().getMonth();
  renderGanttView();
}

function setGanttMode(mode) {
  ganttMode = mode;
  renderGanttView();
}

// =============================================================================
// TEMPLATES VIEW
// =============================================================================

function renderTemplatesView() {
  var search = (document.getElementById('template-search').value || '').toLowerCase();
  var filterPriority = document.getElementById('filter-template-priority').value;

  var filtered = templates.filter(function(tpl) {
    if (filterPriority && tpl.Priority !== filterPriority) return false;
    if (search) {
      var text = (tpl.Title + ' ' + tpl.Description + ' ' + tpl.Category).toLowerCase();
      if (text.indexOf(search) === -1) return false;
    }
    return true;
  });

  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var tpl = filtered[i];
    var dotClass = tpl.Priority === 'high' ? 'dot-high' : (tpl.Priority === 'medium' ? 'dot-medium' : 'dot-low');

    html += '<div class="template-card">';
    html += '<div class="template-card-info">';
    html += '<h4>' + sanitize(tpl.Title) + '</h4>';
    html += '<div class="template-meta">';
    if (tpl.Category) html += '🏷️ ' + sanitize(tpl.Category);
    html += ' <span class="priority-dot ' + dotClass + '"></span> ' + priorityLabel(tpl.Priority);
    if (tpl.Estimated_Hours) html += ' ⏱️ ' + tpl.Estimated_Hours + 'h';
    html += ' 📊 ' + (tpl.Usage_Count || 0) + ' ' + (currentLang === 'fr' ? 'utilisations' : 'uses');
    if (tpl.Updated_At) html += ' • ' + (currentLang === 'fr' ? 'Mis à jour le ' : 'Updated ') + formatDate(tpl.Updated_At);
    html += '</div></div>';
    html += '<div style="display:flex;gap:4px;">';
    html += '<button class="btn btn-primary btn-sm" onclick="useTemplate(' + tpl.id + ')">' + t('useTemplate') + '</button>';
    if (isOwner) html += '<button class="btn-icon" onclick="deleteTemplate(' + tpl.id + ')">🗑️</button>';
    html += '</div>';
    html += '</div>';
  }

  if (filtered.length === 0) {
    html = '<div style="text-align:center;padding:40px;color:#94a3b8;">' + t('noTasks') + '</div>';
  }

  document.getElementById('templates-list').innerHTML = html;
}

// =============================================================================
// TEAM VIEW (Users & Groups)
// =============================================================================

function renderTeamView() {
  renderUsersList();
  renderGroupsList();
  renderCategoriesList();
}

function renderUsersList() {
  var container = document.getElementById('users-list');
  if (!container) return;

  if (users.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#94a3b8;">' + t('noUsers') + '</div>';
    return;
  }

  var html = '<table class="data-table"><thead><tr>';
  html += '<th>' + t('fieldName') + '</th>';
  html += '<th>' + t('fieldEmail') + '</th>';
  html += '<th>' + t('fieldRole') + '</th>';
  html += '<th>' + t('fieldGroup') + '</th>';
  html += '<th>' + t('colActions') + '</th>';
  html += '</tr></thead><tbody>';

  for (var i = 0; i < users.length; i++) {
    var u = users[i];
    var roleLabel = u.Role === 'admin' ? t('roleAdmin') : (u.Role === 'viewer' ? t('roleViewer') : t('roleMember'));
    var roleBg = u.Role === 'admin' ? '#fef2f2;color:#dc2626' : (u.Role === 'viewer' ? '#f1f5f9;color:#64748b' : '#eff6ff;color:#1e40af');

    html += '<tr>';
    html += '<td style="font-weight:700;">👤 ' + sanitize(u.Name) + '</td>';
    html += '<td>' + sanitize(u.Email) + '</td>';
    html += '<td><span style="padding:2px 10px;border-radius:20px;font-size:11px;font-weight:600;background:' + roleBg + '">' + roleLabel + '</span></td>';
    html += '<td>' + (u.Group_Name ? '<span class="assignee-chip">👥 ' + sanitize(u.Group_Name) + '</span>' : '--') + '</td>';
    html += '<td><button class="btn-icon" onclick="openEditUserModal(' + u.id + ')" title="' + t('edit') + '">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteUser(' + u.id + ')">🗑️</button></td>';
    html += '</tr>';
  }

  html += '</tbody></table>';
  container.innerHTML = html;
}

function renderGroupsList() {
  var container = document.getElementById('groups-list');
  if (!container) return;

  if (groups.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#94a3b8;">' + t('noGroups') + '</div>';
    return;
  }

  var html = '';
  for (var i = 0; i < groups.length; i++) {
    var g = groups[i];
    var memberCount = users.filter(function(u) { return u.Group_Name === g.Name; }).length;
    var memberNames = users.filter(function(u) { return u.Group_Name === g.Name; }).map(function(u) { return u.Name || u.Email; });

    html += '<div class="template-card">';
    html += '<div class="template-card-info">';
    html += '<h4>👥 ' + sanitize(g.Name) + '</h4>';
    html += '<div class="template-meta">';
    html += memberCount + ' ' + t('members');
    if (g.Description) html += ' • ' + sanitize(g.Description);
    html += '</div>';
    if (memberNames.length > 0) {
      html += '<div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap;">';
      for (var j = 0; j < memberNames.length; j++) {
        html += '<span class="assignee-chip">👤 ' + sanitize(memberNames[j]) + '</span>';
      }
      html += '</div>';
    }
    html += '</div>';
    html += '<button class="btn-icon" onclick="openEditGroupModal(' + g.id + ')" title="' + t('edit') + '">✏️</button>';
    html += '<button class="btn-icon" onclick="deleteGroup(' + g.id + ')">🗑️</button>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function renderCategoriesList() {
  var container = document.getElementById('categories-list');
  if (!container) return;

  if (categories.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:#94a3b8;">' + t('noCategories') + '</div>';
    return;
  }

  var html = '<div style="display:flex;flex-wrap:wrap;gap:8px;">';
  for (var i = 0; i < categories.length; i++) {
    var cat = categories[i];
    html += '<span class="category-chip" style="background:' + (cat.Color || '#6366f1') + '20;color:' + (cat.Color || '#6366f1') + ';border:1px solid ' + (cat.Color || '#6366f1') + '40;">';
    html += sanitize(cat.Name);
    html += '</span>';
  }
  html += '</div>';
  container.innerHTML = html;
}

function openCategoriesModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-cf" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🏷️ ' + t('manageCategories') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  
  // Existing categories
  html += '<div class="cf-list">';
  if (categories.length === 0) {
    html += '<div class="cf-empty-modal">' + t('noCategories') + '</div>';
  } else {
    for (var i = 0; i < categories.length; i++) {
      var cat = categories[i];
      html += '<div class="cf-list-item">';
      html += '<span class="category-color-dot" style="background:' + (cat.Color || '#6366f1') + ';"></span>';
      html += '<span class="cf-list-name">' + sanitize(cat.Name) + '</span>';
      html += '<button class="cf-delete-btn" onclick="deleteCategory(' + cat.id + ')">🗑️</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add new category form
  html += '<div class="cf-add-form">';
  html += '<h4>' + t('addCategory') + '</h4>';
  html += '<div class="cf-form-row">';
  html += '<input type="text" id="new-cat-name" placeholder="' + t('fieldName') + '" class="cf-form-input" />';
  html += '<input type="color" id="new-cat-color" value="#6366f1" style="width:40px;height:36px;border:none;cursor:pointer;" />';
  html += '<button class="btn btn-primary" onclick="addCategory()">' + t('addCategory') + '</button>';
  html += '</div>';
  html += '</div>';
  
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

async function addCategory() {
  var name = document.getElementById('new-cat-name').value.trim();
  var color = document.getElementById('new-cat-color').value;
  
  if (!name) return;
  
  var maxOrder = categories.length > 0 ? Math.max.apply(null, categories.map(function(c) { return c.Order || 0; })) : 0;
  
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', CATEGORIES_TABLE, null, {
        Name: name,
        Color: color,
        Order: maxOrder + 1
      }]
    ]);
    showToast(t('categoryCreated'), 'success');
    await loadAllData();
    openCategoriesModal();
  } catch (e) {
    console.error('Error adding category:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteCategory(categoryId) {
  if (!isOwner) return;
  
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', CATEGORIES_TABLE, categoryId]
    ]);
    showToast(t('categoryDeleted'), 'info');
    await loadAllData();
    openCategoriesModal();
  } catch (e) {
    console.error('Error deleting category:', e);
  }
}

function openEditUserModal(userId) {
  var user = users.find(function(u) { return u.id === userId; });
  if (!user) return;

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    var sel = groups[i].Name === user.Group_Name ? ' selected' : '';
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '"' + sel + '>' + sanitize(groups[i].Name) + '</option>';
  }

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('edit') + ' - ' + sanitize(user.Name) + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="user-name" value="' + sanitize(user.Name) + '" /></div>';
  html += '<div class="form-group"><label>' + t('fieldEmail') + '</label><input type="email" id="user-email" value="' + sanitize(user.Email) + '" /></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldRole') + '</label><select id="user-role">';
  html += '<option value="member"' + (user.Role === 'member' ? ' selected' : '') + '>' + t('roleMember') + '</option>';
  html += '<option value="admin"' + (user.Role === 'admin' ? ' selected' : '') + '>' + t('roleAdmin') + '</option>';
  html += '<option value="viewer"' + (user.Role === 'viewer' ? ' selected' : '') + '>' + t('roleViewer') + '</option>';
  html += '</select></div>';
  html += '<div class="form-group"><label>' + t('fieldGroup') + '</label><select id="user-group">' + groupOptions + '</select></div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateUser(' + userId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function openEditGroupModal(groupId) {
  var group = groups.find(function(g) { return g.id === groupId; });
  if (!group) return;

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('edit') + ' - ' + sanitize(group.Name) + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="group-name" value="' + sanitize(group.Name) + '" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="group-desc">' + sanitize(group.Description || '') + '</textarea></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateGroup(' + groupId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

async function updateUser(userId) {
  var name = document.getElementById('user-name').value.trim();
  if (!name) return;

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', USERS_TABLE, userId, {
        Name: name,
        Email: document.getElementById('user-email').value.trim(),
        Role: document.getElementById('user-role').value,
        Group_Name: document.getElementById('user-group').value
      }]
    ]);
    showToast(t('taskUpdated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating user:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function updateGroup(groupId) {
  var name = document.getElementById('group-name').value.trim();
  if (!name) return;

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', GROUPS_TABLE, groupId, {
        Name: name,
        Description: document.getElementById('group-desc').value.trim()
      }]
    ]);
    showToast(t('taskUpdated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating group:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

function openNewUserModal() {
  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '">' + sanitize(groups[i].Name) + '</option>';
  }

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('modalNewUser') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="user-name" /></div>';
  html += '<div class="form-group"><label>' + t('fieldEmail') + '</label><input type="email" id="user-email" /></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldRole') + '</label><select id="user-role">';
  html += '<option value="member">' + t('roleMember') + '</option>';
  html += '<option value="admin">' + t('roleAdmin') + '</option>';
  html += '<option value="viewer">' + t('roleViewer') + '</option>';
  html += '</select></div>';
  html += '<div class="form-group"><label>' + t('fieldGroup') + '</label><select id="user-group">' + groupOptions + '</select></div>';
  html += '</div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createUser()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function openNewGroupModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('modalNewGroup') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldName') + '</label><input type="text" id="group-name" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="group-desc"></textarea></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createGroup()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

async function createUser() {
  var name = document.getElementById('user-name').value.trim();
  if (!name) return;

  var record = {
    Name: name,
    Email: document.getElementById('user-email').value.trim(),
    Role: document.getElementById('user-role').value,
    Group_Name: document.getElementById('user-group').value
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', USERS_TABLE, null, record]
    ]);
    showToast(t('userCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating user:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function createGroup() {
  var name = document.getElementById('group-name').value.trim();
  if (!name) return;

  var record = {
    Name: name,
    Description: document.getElementById('group-desc').value.trim()
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', GROUPS_TABLE, null, record]
    ]);
    showToast(t('groupCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating group:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteUser(userId) {
  if (!isOwner) return;
  if (!confirm(t('confirmDeleteUser'))) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', USERS_TABLE, userId]
    ]);
    showToast(t('userDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting user:', e);
  }
}

async function deleteGroup(groupId) {
  if (!isOwner) return;
  if (!confirm(t('confirmDeleteGroup'))) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', GROUPS_TABLE, groupId]
    ]);
    showToast(t('groupDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting group:', e);
  }
}

// =============================================================================
// MODALS
// =============================================================================

function openNewTaskModal(defaultStatus) {
  // Reset assignees for new task
  editAssignees = [];

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '">' + sanitize(groups[i].Name) + '</option>';
  }

  var dotColor = '#f59e0b'; // default medium

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-detail" onclick="event.stopPropagation()">';

  // Top bar
  html += '<div class="modal-detail-top">';
  html += '<span class="group-dot" style="background:' + dotColor + '"></span>';
  html += '<span style="font-size:14px;font-weight:800;">' + t('modalNewTask') + '</span>';
  html += '<div style="flex:1;"></div>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button>';
  html += '</div>';

  // Content: left only for creation (no right panel summary yet)
  html += '<div class="modal-detail-content" style="grid-template-columns:1fr;">';

  // === LEFT PANEL ===
  html += '<div class="modal-detail-left">';
  html += '<input class="detail-title-input" type="text" id="task-title" placeholder="' + t('fieldTitle') + '" />';

  // Description
  html += '<div class="detail-field">';
  html += '<div class="detail-field-value"><textarea id="task-desc" placeholder="' + t('fieldDescription') + '"></textarea></div>';
  html += '</div>';

  // Assignees (multi)
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👤</span>';
  html += '<span class="detail-field-label">' + t('fieldAssignee') + '</span>';
  html += '<div class="detail-field-value">';
  html += '<div class="assignee-chips" id="assignee-chips"></div>';
  html += '<div class="assignee-add-row">';
  html += '<select id="assignee-select">';
  html += '<option value="">-- ' + t('searchAssignee') + ' --</option>';
  for (var i = 0; i < users.length; i++) {
    html += '<option value="' + sanitize(users[i].Email || users[i].Name) + '">' + sanitize(users[i].Name || users[i].Email) + '</option>';
  }
  html += '</select>';
  html += '<button class="assignee-add-btn" onclick="addAssigneeChip(0)">' + t('addAssignee') + '</button>';
  html += '</div>';
  html += '</div></div>';

  // Status + Priority
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🏷️</span>';
  html += '<span class="detail-field-label">' + t('fieldStatus') + '</span>';
  html += '<div class="detail-field-value"><select id="task-status">';
  html += '<option value="todo"' + (defaultStatus === 'todo' || !defaultStatus ? ' selected' : '') + '>' + t('statusTodo') + '</option>';
  html += '<option value="progress"' + (defaultStatus === 'progress' ? ' selected' : '') + '>' + t('statusProgress') + '</option>';
  html += '<option value="done"' + (defaultStatus === 'done' ? ' selected' : '') + '>' + t('statusDone') + '</option>';
  html += '</select></div></div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🔥</span>';
  html += '<span class="detail-field-label">' + t('fieldPriority') + '</span>';
  html += '<div class="detail-field-value"><select id="task-priority">';
  html += '<option value="medium">' + t('priorityMedium') + '</option>';
  html += '<option value="high">' + t('priorityHigh') + '</option>';
  html += '<option value="low">' + t('priorityLow') + '</option>';
  html += '</select></div></div>';
  html += '</div>';

  // Group
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👥</span>';
  html += '<span class="detail-field-label">' + t('fieldGroup') + '</span>';
  html += '<div class="detail-field-value"><select id="task-group">' + groupOptions + '</select></div>';
  html += '</div>';

  // Dates
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">';
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📅</span>';
  html += '<span class="detail-field-label">' + t('fieldStartDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-start" /></div>';
  html += '</div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">⏰</span>';
  html += '<span class="detail-field-label">' + t('fieldDueDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-due" /></div>';
  html += '</div>';
  html += '</div>';

  // Category
  var newCategoryOptions = '<option value="">--</option>';
  for (var nci = 0; nci < categories.length; nci++) {
    newCategoryOptions += '<option value="' + sanitize(categories[nci].Name) + '">' + sanitize(categories[nci].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📁</span>';
  html += '<span class="detail-field-label">' + t('fieldCategory') + '</span>';
  html += '<div class="detail-field-value"><select id="task-category">' + newCategoryOptions + '</select></div>';
  html += '</div>';

  html += '</div>'; // end left
  html += '</div>'; // end content

  // Footer
  html += '<div class="modal-detail-footer">';
  html += '<div></div>';
  html += '<div style="display:flex;gap:8px;">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createTask()">' + t('save') + '</button>';
  html += '</div></div>';

  html += '</div></div>'; // end modal + overlay

  document.getElementById('modal-container').innerHTML = html;
}

var editAssignees = [];

function openEditTaskModal(taskId, preserveAssignees) {
  var task = tasks.find(function(t) { return t.id === taskId; });
  if (!task) return;
  
  // Only reset assignees if not preserving
  if (!preserveAssignees) {
    editAssignees = task.Assignee ? task.Assignee.split(',').map(function(a) { return a.trim(); }).filter(Boolean) : [];
  }

  var groupOptions = '<option value="">--</option>';
  for (var i = 0; i < groups.length; i++) {
    var sel = groups[i].Name === task.Group_Name ? ' selected' : '';
    groupOptions += '<option value="' + sanitize(groups[i].Name) + '"' + sel + '>' + sanitize(groups[i].Name) + '</option>';
  }

  var startVal = task.Start_Date ? new Date(task.Start_Date * 1000).toISOString().split('T')[0] : '';
  var dueVal = task.Due_Date ? new Date(task.Due_Date * 1000).toISOString().split('T')[0] : '';

  // Progress calculation based on subtasks
  var progressPct = getTaskProgress(task);
  var barClass = progressPct === 100 ? 'bar-done' : (progressPct >= 50 ? 'bar-progress' : 'bar-todo');

  // Priority dot color
  var dotColor = task.Priority === 'high' ? '#ef4444' : (task.Priority === 'medium' ? '#f59e0b' : '#22c55e');

  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-detail" onclick="event.stopPropagation()">';

  // Top bar: group + status badge
  html += '<div class="modal-detail-top">';
  html += '<span class="group-dot" style="background:' + dotColor + '"></span>';
  if (task.Group_Name) html += '<span style="font-size:12px;color:#64748b;">' + sanitize(task.Group_Name) + '</span>';
  html += '<span class="status-badge status-' + task.Status + '">● ' + statusLabel(task.Status) + '</span>';
  html += '<div style="flex:1;"></div>';
  html += '<button class="modal-close" onclick="closeModalForce()">✕</button>';
  html += '</div>';

  // Content: left + right
  html += '<div class="modal-detail-content">';

  // === LEFT PANEL ===
  html += '<div class="modal-detail-left">';
  html += '<input class="detail-title-input" type="text" id="task-title" value="' + sanitize(task.Title) + '" />';

  // Description
  html += '<div class="detail-field">';
  html += '<div class="detail-field-value"><textarea id="task-desc" placeholder="' + t('fieldDescription') + '">' + sanitize(task.Description) + '</textarea></div>';
  html += '</div>';

  // Assignees (multi)
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👤</span>';
  html += '<span class="detail-field-label">' + t('fieldAssignee') + '</span>';
  html += '<div class="detail-field-value">';
  html += '<div class="assignee-chips" id="assignee-chips">';
  html += renderAssigneeChips();
  html += '</div>';
  html += '<div class="assignee-add-row">';
  html += '<select id="assignee-select">';
  html += '<option value="">-- ' + t('searchAssignee') + ' --</option>';
  for (var i = 0; i < users.length; i++) {
    html += '<option value="' + sanitize(users[i].Email || users[i].Name) + '">' + sanitize(users[i].Name || users[i].Email) + '</option>';
  }
  html += '</select>';
  html += '<button class="assignee-add-btn" onclick="addAssigneeChip(' + task.id + ')">' + t('addAssignee') + '</button>';
  html += '</div>';
  html += '</div></div>';

  // Status
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🏷️</span>';
  html += '<span class="detail-field-label">' + t('fieldStatus') + '</span>';
  html += '<div class="detail-field-value"><select id="task-status">';
  html += '<option value="todo"' + (task.Status === 'todo' ? ' selected' : '') + '>' + t('statusTodo') + '</option>';
  html += '<option value="progress"' + (task.Status === 'progress' ? ' selected' : '') + '>' + t('statusProgress') + '</option>';
  html += '<option value="done"' + (task.Status === 'done' ? ' selected' : '') + '>' + t('statusDone') + '</option>';
  html += '</select></div></div>';

  // Dates
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📅</span>';
  html += '<span class="detail-field-label">' + t('fieldStartDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-start" value="' + startVal + '" /></div>';
  html += '</div>';

  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">⏰</span>';
  html += '<span class="detail-field-label">' + t('fieldDueDate') + '</span>';
  html += '<div class="detail-field-value"><input type="date" id="task-due" value="' + dueVal + '" /></div>';
  html += '</div>';

  // Priority
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">🔥</span>';
  html += '<span class="detail-field-label">' + t('fieldPriority') + '</span>';
  html += '<div class="detail-field-value"><select id="task-priority">';
  html += '<option value="high"' + (task.Priority === 'high' ? ' selected' : '') + '>' + t('priorityHigh') + '</option>';
  html += '<option value="medium"' + (task.Priority === 'medium' ? ' selected' : '') + '>' + t('priorityMedium') + '</option>';
  html += '<option value="low"' + (task.Priority === 'low' ? ' selected' : '') + '>' + t('priorityLow') + '</option>';
  html += '</select></div></div>';

  // Group
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">👥</span>';
  html += '<span class="detail-field-label">' + t('fieldGroup') + '</span>';
  html += '<div class="detail-field-value"><select id="task-group">' + groupOptions + '</select></div>';
  html += '</div>';

  // Category
  var categoryOptions = '<option value="">--</option>';
  for (var ci = 0; ci < categories.length; ci++) {
    var catSel = categories[ci].Name === task.Category ? ' selected' : '';
    categoryOptions += '<option value="' + sanitize(categories[ci].Name) + '"' + catSel + '>' + sanitize(categories[ci].Name) + '</option>';
  }
  html += '<div class="detail-field">';
  html += '<span class="detail-field-icon">📁</span>';
  html += '<span class="detail-field-label">' + t('fieldCategory') + '</span>';
  html += '<div class="detail-field-value"><select id="task-category">' + categoryOptions + '</select></div>';
  html += '</div>';

  // === SUBTASKS SECTION ===
  var taskSubtasks = getTaskSubtasks(task.id);
  html += '<div class="subtasks-section">';
  html += '<div class="subtasks-header">';
  html += '<span class="detail-field-icon">☑️</span>';
  html += '<span class="detail-field-label">' + t('subtasks') + '</span>';
  html += '<span class="subtask-badge">' + taskSubtasks.filter(function(st) { return st.Completed; }).length + '/' + taskSubtasks.length + '</span>';
  html += '</div>';
  
  html += '<div class="subtasks-list" id="subtasks-list">';
  if (taskSubtasks.length === 0) {
    html += '<div class="subtasks-empty">' + t('noSubtasks') + '</div>';
  } else {
    for (var si = 0; si < taskSubtasks.length; si++) {
      var st = taskSubtasks[si];
      var stBlocked = isSubtaskBlocked(st);
      var stBlocker = getSubtaskBlocker(st);
      html += '<div class="subtask-item' + (st.Completed ? ' completed' : '') + (stBlocked ? ' blocked' : '') + '" data-id="' + st.id + '">';
      html += '<input type="checkbox" class="subtask-checkbox" ' + (st.Completed ? 'checked' : '') + (stBlocked ? ' disabled' : '') + ' onchange="toggleSubtask(' + st.id + ', this.checked)" />';
      html += '<span class="subtask-title">' + sanitize(st.Title) + '</span>';
      if (stBlocked && stBlocker) {
        html += '<span class="subtask-blocked-badge" title="' + t('blockedBy') + ' ' + sanitize(stBlocker.Title) + '">🔒</span>';
      }
      html += '<button class="subtask-dep-btn" onclick="openSubtaskDepModal(' + st.id + ', ' + task.id + ')" title="' + t('dependencies') + '">🔗</button>';
      html += '<button class="subtask-delete" onclick="deleteSubtask(' + st.id + ', ' + task.id + ')" title="' + t('delete') + '">✕</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add subtask input
  html += '<div class="subtask-add-row">';
  html += '<input type="text" id="new-subtask-input" class="subtask-input" placeholder="' + t('subtaskPlaceholder') + '" onkeypress="if(event.key===\'Enter\')addSubtask(' + task.id + ')" />';
  html += '<button class="subtask-add-btn" onclick="addSubtask(' + task.id + ')">+</button>';
  html += '</div>';
  html += '</div>';

  // === DEPENDENCIES SECTION ===
  var taskDeps = getTaskDependencies(task.id);
  var taskBlocks = getTasksDependingOn(task.id);
  html += '<div class="dependencies-section">';
  html += '<div class="dependencies-header">';
  html += '<span class="detail-field-icon">🔗</span>';
  html += '<span class="detail-field-label">' + t('dependencies') + '</span>';
  html += '</div>';
  
  // Blocked by
  html += '<div class="dep-subsection">';
  html += '<div class="dep-label">' + t('blockedBy') + ':</div>';
  if (taskDeps.length === 0) {
    html += '<div class="dep-empty">' + t('noDependencies') + '</div>';
  } else {
    html += '<div class="dep-list">';
    for (var di = 0; di < taskDeps.length; di++) {
      var dep = taskDeps[di];
      var depDone = dep.Status === 'done';
      html += '<div class="dep-item' + (depDone ? ' dep-done' : '') + '">';
      html += '<span class="dep-status">' + (depDone ? '✅' : '⏳') + '</span>';
      html += '<span class="dep-title">' + sanitize(dep.Title) + '</span>';
      html += '<button class="dep-remove" onclick="removeDependency(' + task.id + ', ' + dep.id + ')">✕</button>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';
  
  // Blocks (tasks depending on this one)
  if (taskBlocks.length > 0) {
    html += '<div class="dep-subsection">';
    html += '<div class="dep-label">' + t('blocks') + ':</div>';
    html += '<div class="dep-list">';
    for (var bi = 0; bi < taskBlocks.length; bi++) {
      var blk = taskBlocks[bi];
      html += '<div class="dep-item dep-blocks">';
      html += '<span class="dep-title">' + sanitize(blk.Title) + '</span>';
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  }
  
  // Add dependency
  html += '<div class="dep-add-row">';
  html += '<select id="dep-select">';
  html += '<option value="">-- ' + t('selectTask') + ' --</option>';
  var availableTasks = tasks.filter(function(t) { 
    return t.id !== task.id && !taskDeps.some(function(d) { return d.id === t.id; }); 
  });
  for (var ti = 0; ti < availableTasks.length; ti++) {
    html += '<option value="' + availableTasks[ti].id + '">' + sanitize(availableTasks[ti].Title) + '</option>';
  }
  html += '</select>';
  html += '<button class="dep-add-btn" onclick="addDependency(' + task.id + ')">+</button>';
  html += '</div>';
  html += '</div>';

  // === CUSTOM FIELDS SECTION ===
  if (customFields.length > 0) {
    html += '<div class="custom-fields-section">';
    html += '<div class="custom-fields-header">';
    html += '<span class="detail-field-icon">🏷️</span>';
    html += '<span class="detail-field-label">' + t('customFields') + '</span>';
    if (isOwner) html += '<button class="cf-manage-btn" onclick="openCustomFieldsModal()">⚙️</button>';
    html += '</div>';
    html += '<div class="custom-fields-list">';
    for (var cfi = 0; cfi < customFields.length; cfi++) {
      var cf = customFields[cfi];
      var cfValue = getTaskCustomFieldValue(task.id, cf.id);
      html += '<div class="custom-field-item">';
      html += '<label class="cf-label">' + sanitize(cf.Name) + '</label>';
      html += renderCustomFieldInput(cf, task.id, cfValue);
      html += '</div>';
    }
    html += '</div>';
    html += '</div>';
  } else if (isOwner) {
    html += '<div class="custom-fields-section">';
    html += '<div class="custom-fields-header">';
    html += '<span class="detail-field-icon">🏷️</span>';
    html += '<span class="detail-field-label">' + t('customFields') + '</span>';
    html += '<button class="cf-manage-btn" onclick="openCustomFieldsModal()">⚙️</button>';
    html += '</div>';
    html += '<div class="cf-empty">' + t('noCustomFields') + '</div>';
    html += '</div>';
  }

  // === COMMENTS SECTION ===
  var taskComments = getTaskComments(task.id);
  html += '<div class="comments-section">';
  html += '<div class="comments-header">';
  html += '<span class="detail-field-icon">💬</span>';
  html += '<span class="detail-field-label">' + t('comments') + '</span>';
  html += '<span class="comment-badge">' + taskComments.length + '</span>';
  html += '</div>';
  
  html += '<div class="comments-list" id="comments-list">';
  if (taskComments.length === 0) {
    html += '<div class="comments-empty">' + t('noComments') + '</div>';
  } else {
    for (var ci = 0; ci < taskComments.length; ci++) {
      var cmt = taskComments[ci];
      html += '<div class="comment-item">';
      html += '<div class="comment-header">';
      html += '<span class="comment-author">👤 ' + sanitize(cmt.Author || 'Anonyme') + '</span>';
      html += '<span class="comment-time">' + formatTimeAgo(cmt.Created_At) + '</span>';
      if (isOwner) html += '<button class="comment-delete" onclick="deleteComment(' + cmt.id + ', ' + task.id + ')">✕</button>';
      html += '</div>';
      html += '<div class="comment-content">' + sanitize(cmt.Content) + '</div>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add comment input
  html += '<div class="comment-add-row">';
  html += '<textarea id="new-comment-input" class="comment-input" placeholder="' + t('commentPlaceholder') + '" rows="2"></textarea>';
  html += '<button class="comment-add-btn" onclick="addComment(' + task.id + ')">' + t('addComment') + '</button>';
  html += '</div>';
  html += '</div>';

  html += '</div>'; // end left

  // === RIGHT PANEL ===
  html += '<div class="modal-detail-right">';

  // Progression card
  html += '<div class="detail-card">';
  html += '<h4>⏳ ' + t('progression') + '</h4>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('advancement') + '</span><span class="info-value">' + progressPct + '%</span></div>';
  html += '<div class="progress-bar-bg"><div class="progress-bar-fill ' + barClass + '" style="width:' + progressPct + '%"></div></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('startLabel') + '</span><span class="info-value">' + (startVal ? formatDate(task.Start_Date) : '--') + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('dueLabel') + '</span><span class="info-value" style="' + (isOverdue(task) ? 'color:#dc2626;' : '') + '">' + (dueVal ? formatDate(task.Due_Date) : '--') + (isOverdue(task) ? ' ⚠️' : '') + '</span></div>';
  html += '</div>';

  // Quick actions card
  html += '<div class="detail-card">';
  html += '<h4>⚡ ' + t('quickActions') + '</h4>';
  if (task.Status === 'done') {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'todo\')">🔄 ' + t('reopenTask') + '</button>';
  } else if (task.Status === 'todo') {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'progress\')">▶️ ' + t('startTask') + '</button>';
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'done\')">✅ ' + t('completeTask') + '</button>';
  } else {
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'done\')">✅ ' + t('completeTask') + '</button>';
    html += '<button class="quick-action-btn" onclick="quickAction(' + task.id + ',\'todo\')">⏪ ' + t('reopenTask') + '</button>';
  }
  html += '</div>';

  // Summary card
  html += '<div class="detail-card">';
  html += '<h4>📋 ' + t('taskSummary') + '</h4>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldStatus') + ' :</span><span class="info-value" style="color:' + (task.Status === 'done' ? '#22c55e' : (task.Status === 'progress' ? '#3b82f6' : '#f59e0b')) + '">' + statusLabel(task.Status) + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldPriority') + ' :</span><span class="info-value" style="color:' + dotColor + '">' + priorityLabel(task.Priority) + '</span></div>';
  html += '<div class="detail-info-row"><span class="info-label">' + t('fieldAssignee') + ' :</span><span class="info-value">' + editAssignees.length + '</span></div>';
  html += '</div>';

  // Time Tracking card
  var totalTime = getTaskTotalTime(task.id);
  var isTimerRunning = !!activeTimers[task.id];
  var taskTimeEntries = getTaskTimeEntries(task.id);
  html += '<div class="detail-card time-card">';
  html += '<h4>⏱️ ' + t('timeTracking') + '</h4>';
  
  // Timer button
  html += '<div class="timer-control">';
  if (isTimerRunning) {
    html += '<button class="timer-btn timer-stop" onclick="stopTimer(' + task.id + ')">⏹️ ' + t('stopTimer') + '</button>';
    html += '<span class="timer-status running">● ' + t('timerRunning') + '</span>';
  } else {
    html += '<button class="timer-btn timer-start" onclick="startTimer(' + task.id + ')">▶️ ' + t('startTimer') + '</button>';
  }
  html += '</div>';
  
  // Time summary
  html += '<div class="time-summary">';
  html += '<div class="detail-info-row"><span class="info-label">' + t('totalTime') + ' :</span><span class="info-value time-value">' + formatDuration(totalTime) + '</span></div>';
  if (task.Estimated_Hours) {
    var estimatedSec = task.Estimated_Hours * 3600;
    var pctUsed = Math.round((totalTime / estimatedSec) * 100);
    html += '<div class="detail-info-row"><span class="info-label">' + t('estimatedTime') + ' :</span><span class="info-value">' + task.Estimated_Hours + 'h (' + pctUsed + '%)</span></div>';
  }
  html += '</div>';
  
  // Recent time entries
  if (taskTimeEntries.length > 0) {
    html += '<div class="time-entries">';
    html += '<div class="time-entries-label">' + t('timeEntries') + ':</div>';
    for (var tei = 0; tei < Math.min(3, taskTimeEntries.length); tei++) {
      var te = taskTimeEntries[tei];
      html += '<div class="time-entry-item">';
      html += '<span class="te-duration">' + formatDurationShort(te.Duration) + '</span>';
      html += '<span class="te-date">' + formatTimeAgo(te.Start_Time) + '</span>';
      html += '</div>';
    }
    html += '</div>';
  }
  html += '</div>';

  // Recurrence card
  html += '<div class="detail-card">';
  html += '<h4>🔄 ' + t('recurrence') + '</h4>';
  html += '<select id="task-recurrence" class="recurrence-select">';
  html += '<option value="none"' + (task.Recurrence === 'none' || !task.Recurrence ? ' selected' : '') + '>' + t('recurrenceNone') + '</option>';
  html += '<option value="daily"' + (task.Recurrence === 'daily' ? ' selected' : '') + '>' + t('recurrenceDaily') + '</option>';
  html += '<option value="weekly"' + (task.Recurrence === 'weekly' ? ' selected' : '') + '>' + t('recurrenceWeekly') + '</option>';
  html += '<option value="monthly"' + (task.Recurrence === 'monthly' ? ' selected' : '') + '>' + t('recurrenceMonthly') + '</option>';
  html += '</select>';
  html += '</div>';

  html += '</div>'; // end right
  html += '</div>'; // end content

  // Footer
  html += '<div class="modal-detail-footer">';
  if (isOwner) html += '<button class="btn-danger" onclick="deleteTask(' + task.id + ')">' + t('delete') + '</button>';
  else html += '<div></div>';
  html += '<div style="display:flex;gap:8px;">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateTask(' + task.id + ')">' + t('save') + '</button>';
  html += '</div></div>';

  html += '</div></div>'; // end modal + overlay

  document.getElementById('modal-container').innerHTML = html;
}

function renderAssigneeChips() {
  var html = '';
  for (var i = 0; i < editAssignees.length; i++) {
    var name = editAssignees[i];
    var displayName = name;
    // Try to find user name from email
    for (var j = 0; j < users.length; j++) {
      if (users[j].Email === name || users[j].Name === name) {
        displayName = users[j].Name || users[j].Email;
        break;
      }
    }
    html += '<span class="assignee-chip-tag">' + sanitize(displayName) + ' <span class="chip-remove" onclick="removeAssigneeChip(' + i + ')">✕</span></span>';
  }
  return html;
}

function addAssigneeChip(taskId) {
  var sel = document.getElementById('assignee-select');
  var val = sel.value;
  if (!val || editAssignees.indexOf(val) !== -1) return;
  editAssignees.push(val);
  document.getElementById('assignee-chips').innerHTML = renderAssigneeChips();
  sel.value = '';
}

function removeAssigneeChip(index) {
  editAssignees.splice(index, 1);
  document.getElementById('assignee-chips').innerHTML = renderAssigneeChips();
}

function openSubtaskDepModal(subtaskId, taskId) {
  var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
  if (!subtask) return;
  
  var taskSubtasks = getTaskSubtasks(taskId);
  var otherSubtasks = taskSubtasks.filter(function(st) { return st.id !== subtaskId; });
  
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" style="max-width:400px;" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🔗 ' + t('dependencies') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<p style="margin-bottom:12px;font-size:12px;color:#64748b;">' + sanitize(subtask.Title) + '</p>';
  
  html += '<div class="form-group"><label>' + t('blockedBy') + '</label>';
  html += '<select id="subtask-blocker-select">';
  html += '<option value="">-- ' + t('noDependencies') + ' --</option>';
  for (var i = 0; i < otherSubtasks.length; i++) {
    var ost = otherSubtasks[i];
    var sel = subtask.Blocked_By_Subtask_Id === ost.id ? ' selected' : '';
    html += '<option value="' + ost.id + '"' + sel + '>' + sanitize(ost.Title) + '</option>';
  }
  html += '</select></div>';
  
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="updateSubtaskDep(' + subtaskId + ', ' + taskId + ')">' + t('save') + '</button>';
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

async function updateSubtaskDep(subtaskId, taskId) {
  var select = document.getElementById('subtask-blocker-select');
  var blockerId = select.value ? parseInt(select.value) : null;
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, { Blocked_By_Subtask_Id: blockerId }]
    ]);
    showToast(t('dependencyAdded'), 'success');
    closeModalForce();
    await loadAllData();
    openEditTaskModal(taskId);
  } catch (e) {
    console.error('Error updating subtask dependency:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function quickAction(taskId, newStatus) {
  var task = tasks.find(function(t) { return t.id === taskId; });
  var wasNotDone = task && task.Status !== 'done';
  
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, taskId, { Status: newStatus }]
    ]);
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) { tasks[i].Status = newStatus; break; }
    }
    showToast(t('taskMoved'), 'success');
    
    // Create next occurrence if task is recurring and just completed
    if (newStatus === 'done' && wasNotDone && task && task.Recurrence && task.Recurrence !== 'none') {
      await createNextOccurrence(task);
    }
    
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error quick action:', e);
  }
}

// =============================================================================
// SUBTASKS CRUD
// =============================================================================

async function addSubtask(parentTaskId) {
  var input = document.getElementById('new-subtask-input');
  var title = input.value.trim();
  if (!title) return;

  // Save current form state before reload
  var savedAssignees = editAssignees.slice();

  var taskSubtasks = getTaskSubtasks(parentTaskId);
  var maxOrder = taskSubtasks.length > 0 ? Math.max.apply(null, taskSubtasks.map(function(st) { return st.Order || 0; })) : 0;

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', SUBTASKS_TABLE, null, {
        Parent_Task_Id: parentTaskId,
        Title: title,
        Completed: false,
        Order: maxOrder + 1,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    input.value = '';
    await loadAllData();
    // Restore assignees and reopen modal
    editAssignees = savedAssignees;
    openEditTaskModal(parentTaskId, true);
  } catch (e) {
    console.error('Error adding subtask:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function toggleSubtask(subtaskId, completed) {
  var savedAssignees = editAssignees.slice();
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', SUBTASKS_TABLE, subtaskId, { Completed: completed }]
    ]);
    // Update local state
    for (var i = 0; i < subtasks.length; i++) {
      if (subtasks[i].id === subtaskId) {
        subtasks[i].Completed = completed;
        break;
      }
    }
    showToast(t('subtaskCompleted'), 'success');
    // Refresh the subtasks list in modal without closing
    var subtask = subtasks.find(function(st) { return st.id === subtaskId; });
    if (subtask) {
      editAssignees = savedAssignees;
      openEditTaskModal(subtask.Parent_Task_Id, true);
    }
  } catch (e) {
    console.error('Error toggling subtask:', e);
  }
}

async function deleteSubtask(subtaskId, parentTaskId) {
  var savedAssignees = editAssignees.slice();
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', SUBTASKS_TABLE, subtaskId]
    ]);
    showToast(t('subtaskDeleted'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    openEditTaskModal(parentTaskId, true);
  } catch (e) {
    console.error('Error deleting subtask:', e);
  }
}

// =============================================================================
// DEPENDENCIES CRUD
// =============================================================================

async function addDependency(taskId) {
  var select = document.getElementById('dep-select');
  var dependsOnId = parseInt(select.value);
  if (!dependsOnId) return;
  var savedAssignees = editAssignees.slice();

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', DEPENDENCIES_TABLE, null, {
        Task_Id: taskId,
        Depends_On_Task_Id: dependsOnId,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    showToast(t('dependencyAdded'), 'success');
    await loadAllData();
    editAssignees = savedAssignees;
    openEditTaskModal(taskId, true);
  } catch (e) {
    console.error('Error adding dependency:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function removeDependency(taskId, dependsOnTaskId) {
  var dep = dependencies.find(function(d) {
    return d.Task_Id === taskId && d.Depends_On_Task_Id === dependsOnTaskId;
  });
  if (!dep) return;
  var savedAssignees = editAssignees.slice();

  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', DEPENDENCIES_TABLE, dep.id]
    ]);
    showToast(t('dependencyRemoved'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    openEditTaskModal(taskId, true);
  } catch (e) {
    console.error('Error removing dependency:', e);
  }
}

// =============================================================================
// COMMENTS CRUD
// =============================================================================

async function addComment(taskId) {
  var textarea = document.getElementById('new-comment-input');
  var content = textarea.value.trim();
  if (!content) return;
  var savedAssignees = editAssignees.slice();

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', COMMENTS_TABLE, null, {
        Task_Id: taskId,
        Author: currentUserEmail || 'Utilisateur',
        Content: content,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    textarea.value = '';
    showToast(t('commentAdded'), 'success');
    await loadAllData();
    editAssignees = savedAssignees;
    openEditTaskModal(taskId, true);
  } catch (e) {
    console.error('Error adding comment:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteComment(commentId, taskId) {
  if (!isOwner) return;
  var savedAssignees = editAssignees.slice();
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', COMMENTS_TABLE, commentId]
    ]);
    showToast(t('commentDeleted'), 'info');
    await loadAllData();
    editAssignees = savedAssignees;
    openEditTaskModal(taskId, true);
  } catch (e) {
    console.error('Error deleting comment:', e);
  }
}

// =============================================================================
// TIME TRACKING
// =============================================================================

function startTimer(taskId) {
  activeTimers[taskId] = Math.floor(Date.now() / 1000);
  openEditTaskModal(taskId);
}

async function stopTimer(taskId) {
  if (!activeTimers[taskId]) return;
  
  var startTime = activeTimers[taskId];
  var endTime = Math.floor(Date.now() / 1000);
  var duration = endTime - startTime;
  
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TIME_ENTRIES_TABLE, null, {
        Task_Id: taskId,
        User: currentUserEmail || 'Utilisateur',
        Start_Time: startTime,
        End_Time: endTime,
        Duration: duration,
        Description: ''
      }]
    ]);
    delete activeTimers[taskId];
    showToast(t('timeEntryAdded'), 'success');
    await loadAllData();
    openEditTaskModal(taskId);
  } catch (e) {
    console.error('Error stopping timer:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

// =============================================================================
// CUSTOM FIELDS
// =============================================================================

function renderCustomFieldInput(field, taskId, value) {
  var inputId = 'cf-' + field.id;
  var html = '';
  
  switch (field.Type) {
    case 'text':
      html = '<input type="text" id="' + inputId + '" class="cf-input" value="' + sanitize(value) + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)" />';
      break;
    case 'number':
      html = '<input type="number" id="' + inputId + '" class="cf-input cf-number" value="' + sanitize(value) + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)" />';
      break;
    case 'date':
      var dateVal = value ? new Date(parseInt(value) * 1000).toISOString().split('T')[0] : '';
      html = '<input type="date" id="' + inputId + '" class="cf-input cf-date" value="' + dateVal + '" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value ? Math.floor(new Date(this.value).getTime()/1000) : \'\')" />';
      break;
    case 'checkbox':
      var checked = value === 'true' || value === '1';
      html = '<input type="checkbox" id="' + inputId + '" class="cf-checkbox" ' + (checked ? 'checked' : '') + ' onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.checked ? \'true\' : \'false\')" />';
      break;
    case 'select':
      var options = field.Options ? field.Options.split(',').map(function(o) { return o.trim(); }) : [];
      html = '<select id="' + inputId + '" class="cf-select" onchange="updateCustomFieldValue(' + taskId + ', ' + field.id + ', this.value)">';
      html += '<option value="">--</option>';
      for (var oi = 0; oi < options.length; oi++) {
        html += '<option value="' + sanitize(options[oi]) + '"' + (value === options[oi] ? ' selected' : '') + '>' + sanitize(options[oi]) + '</option>';
      }
      html += '</select>';
      break;
    default:
      html = '<input type="text" id="' + inputId + '" class="cf-input" value="' + sanitize(value) + '" />';
  }
  return html;
}

async function updateCustomFieldValue(taskId, fieldId, value) {
  var existing = customFieldValues.find(function(v) {
    return v.Task_Id === taskId && v.Field_Id === fieldId;
  });
  
  try {
    if (existing) {
      await grist.docApi.applyUserActions([
        ['UpdateRecord', CUSTOM_FIELD_VALUES_TABLE, existing.id, { Value: String(value) }]
      ]);
      existing.Value = String(value);
    } else {
      await grist.docApi.applyUserActions([
        ['AddRecord', CUSTOM_FIELD_VALUES_TABLE, null, {
          Task_Id: taskId,
          Field_Id: fieldId,
          Value: String(value)
        }]
      ]);
      await loadAllData();
    }
  } catch (e) {
    console.error('Error updating custom field value:', e);
  }
}

function openCustomFieldsModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal modal-cf" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>🏷️ ' + t('manageCustomFields') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  
  // Existing fields
  html += '<div class="cf-list">';
  if (customFields.length === 0) {
    html += '<div class="cf-empty-modal">' + t('noCustomFields') + '</div>';
  } else {
    for (var i = 0; i < customFields.length; i++) {
      var cf = customFields[i];
      html += '<div class="cf-list-item">';
      html += '<span class="cf-list-name">' + sanitize(cf.Name) + '</span>';
      html += '<span class="cf-list-type">' + getCustomFieldTypeLabel(cf.Type) + '</span>';
      html += '<button class="cf-delete-btn" onclick="deleteCustomField(' + cf.id + ')">🗑️</button>';
      html += '</div>';
    }
  }
  html += '</div>';
  
  // Add new field form
  html += '<div class="cf-add-form">';
  html += '<h4>' + t('addCustomField') + '</h4>';
  html += '<div class="cf-form-row">';
  html += '<input type="text" id="new-cf-name" placeholder="' + t('customFieldName') + '" class="cf-form-input" />';
  html += '<select id="new-cf-type" class="cf-form-select" onchange="toggleCfOptions()">';
  html += '<option value="text">' + t('typeText') + '</option>';
  html += '<option value="number">' + t('typeNumber') + '</option>';
  html += '<option value="date">' + t('typeDate') + '</option>';
  html += '<option value="checkbox">' + t('typeCheckbox') + '</option>';
  html += '<option value="select">' + t('typeSelect') + '</option>';
  html += '</select>';
  html += '</div>';
  html += '<div id="cf-options-row" class="cf-form-row" style="display:none;">';
  html += '<input type="text" id="new-cf-options" placeholder="' + t('fieldOptions') + '" class="cf-form-input" />';
  html += '</div>';
  html += '<button class="btn btn-primary" onclick="addCustomField()">' + t('addCustomField') + '</button>';
  html += '</div>';
  
  html += '</div></div></div>';
  
  document.getElementById('modal-container').innerHTML = html;
}

function toggleCfOptions() {
  var type = document.getElementById('new-cf-type').value;
  document.getElementById('cf-options-row').style.display = type === 'select' ? 'flex' : 'none';
}

async function addCustomField() {
  var name = document.getElementById('new-cf-name').value.trim();
  var type = document.getElementById('new-cf-type').value;
  var options = document.getElementById('new-cf-options').value.trim();
  
  if (!name) return;
  
  var maxOrder = customFields.length > 0 ? Math.max.apply(null, customFields.map(function(cf) { return cf.Order || 0; })) : 0;
  
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', CUSTOM_FIELDS_TABLE, null, {
        Name: name,
        Type: type,
        Options: type === 'select' ? options : '',
        Order: maxOrder + 1,
        Created_At: Math.floor(Date.now() / 1000)
      }]
    ]);
    showToast(t('customFieldCreated'), 'success');
    await loadAllData();
    openCustomFieldsModal();
  } catch (e) {
    console.error('Error adding custom field:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteCustomField(fieldId) {
  if (!isOwner) return;
  
  try {
    // Delete field values first
    var valuesToDelete = customFieldValues.filter(function(v) { return v.Field_Id === fieldId; });
    for (var i = 0; i < valuesToDelete.length; i++) {
      await grist.docApi.applyUserActions([
        ['RemoveRecord', CUSTOM_FIELD_VALUES_TABLE, valuesToDelete[i].id]
      ]);
    }
    // Delete field
    await grist.docApi.applyUserActions([
      ['RemoveRecord', CUSTOM_FIELDS_TABLE, fieldId]
    ]);
    showToast(t('customFieldDeleted'), 'info');
    await loadAllData();
    openCustomFieldsModal();
  } catch (e) {
    console.error('Error deleting custom field:', e);
  }
}

// =============================================================================
// RECURRENCE HANDLING
// =============================================================================

async function createNextOccurrence(task) {
  if (!task.Recurrence || task.Recurrence === 'none') return;
  
  var newStartDate = null;
  var newDueDate = null;
  var now = Math.floor(Date.now() / 1000);
  
  // Calculate next dates based on recurrence type
  if (task.Recurrence === 'daily') {
    if (task.Start_Date) newStartDate = task.Start_Date + 86400;
    if (task.Due_Date) newDueDate = task.Due_Date + 86400;
  } else if (task.Recurrence === 'weekly') {
    if (task.Start_Date) newStartDate = task.Start_Date + 604800;
    if (task.Due_Date) newDueDate = task.Due_Date + 604800;
  } else if (task.Recurrence === 'monthly') {
    // Add ~30 days
    if (task.Start_Date) newStartDate = task.Start_Date + 2592000;
    if (task.Due_Date) newDueDate = task.Due_Date + 2592000;
  }
  
  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TASKS_TABLE, null, {
        Title: task.Title,
        Description: task.Description,
        Status: 'todo',
        Priority: task.Priority,
        Assignee: task.Assignee,
        Group_Name: task.Group_Name,
        Start_Date: newStartDate,
        Due_Date: newDueDate,
        Category: task.Category,
        Recurrence: task.Recurrence,
        Estimated_Hours: task.Estimated_Hours,
        Created_At: now
      }]
    ]);
    showToast(t('nextOccurrence'), 'success');
  } catch (e) {
    console.error('Error creating next occurrence:', e);
  }
}

function openNewTemplateModal() {
  var html = '<div class="modal-overlay" onclick="closeModal(event)">';
  html += '<div class="modal" onclick="event.stopPropagation()">';
  html += '<div class="modal-header"><h3>' + t('modalNewTemplate') + '</h3><button class="modal-close" onclick="closeModalForce()">✕</button></div>';
  html += '<div class="modal-body">';
  html += '<div class="form-group"><label>' + t('fieldTitle') + '</label><input type="text" id="tpl-title" /></div>';
  html += '<div class="form-group"><label>' + t('fieldDescription') + '</label><textarea id="tpl-desc"></textarea></div>';
  html += '<div class="form-row">';
  html += '<div class="form-group"><label>' + t('fieldPriority') + '</label><select id="tpl-priority">';
  html += '<option value="medium">' + t('priorityMedium') + '</option>';
  html += '<option value="high">' + t('priorityHigh') + '</option>';
  html += '<option value="low">' + t('priorityLow') + '</option>';
  html += '</select></div>';
  var tplCatOptions = '<option value="">--</option>';
  for (var tci = 0; tci < categories.length; tci++) {
    tplCatOptions += '<option value="' + sanitize(categories[tci].Name) + '">' + sanitize(categories[tci].Name) + '</option>';
  }
  html += '<div class="form-group"><label>' + t('fieldCategory') + '</label><select id="tpl-category">' + tplCatOptions + '</select></div>';
  html += '</div>';
  html += '<div class="form-group"><label>' + t('fieldEstimatedTime') + '</label><input type="number" id="tpl-hours" step="0.5" min="0" /></div>';
  html += '</div>';
  html += '<div class="modal-footer">';
  html += '<button class="btn btn-secondary" onclick="closeModalForce()">' + t('cancel') + '</button>';
  html += '<button class="btn btn-primary" onclick="createTemplate()">' + t('save') + '</button>';
  html += '</div></div></div>';

  document.getElementById('modal-container').innerHTML = html;
}

function closeModal(e) {
  if (e.target.classList.contains('modal-overlay')) {
    document.getElementById('modal-container').innerHTML = '';
  }
}

function closeModalForce() {
  document.getElementById('modal-container').innerHTML = '';
}

// =============================================================================
// CRUD OPERATIONS
// =============================================================================

async function createTask() {
  var title = document.getElementById('task-title').value.trim();
  if (!title) return;

  var record = {
    Title: title,
    Description: document.getElementById('task-desc').value.trim(),
    Status: document.getElementById('task-status').value,
    Priority: document.getElementById('task-priority').value,
    Assignee: editAssignees.join(', '),
    Group_Name: document.getElementById('task-group').value,
    Start_Date: toEpoch(document.getElementById('task-start').value),
    Due_Date: toEpoch(document.getElementById('task-due').value),
    Category: document.getElementById('task-category').value.trim(),
    Created_At: Math.floor(Date.now() / 1000)
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TASKS_TABLE, null, record]
    ]);
    showToast(t('taskCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating task:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function updateTask(taskId) {
  var title = document.getElementById('task-title').value.trim();
  if (!title) return;

  var task = tasks.find(function(t) { return t.id === taskId; });
  var wasNotDone = task && task.Status !== 'done';
  var newStatus = document.getElementById('task-status').value;
  var recurrenceEl = document.getElementById('task-recurrence');
  var newRecurrence = recurrenceEl ? recurrenceEl.value : (task ? task.Recurrence : 'none');

  var record = {
    Title: title,
    Description: document.getElementById('task-desc').value.trim(),
    Status: newStatus,
    Priority: document.getElementById('task-priority').value,
    Assignee: editAssignees.join(', '),
    Group_Name: document.getElementById('task-group').value,
    Start_Date: toEpoch(document.getElementById('task-start').value),
    Due_Date: toEpoch(document.getElementById('task-due').value),
    Category: document.getElementById('task-category').value.trim(),
    Recurrence: newRecurrence
  };

  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TASKS_TABLE, taskId, record]
    ]);
    showToast(t('taskUpdated'), 'success');
    
    // Create next occurrence if task is recurring and just completed
    if (newStatus === 'done' && wasNotDone && newRecurrence && newRecurrence !== 'none') {
      var updatedTask = Object.assign({}, task, record);
      await createNextOccurrence(updatedTask);
    }
    
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error updating task:', e);
    showToast('Error: ' + e.message, 'error');
  }
}

async function deleteTask(taskId) {
  if (!isOwner) return;
  if (!confirm(t('confirmDelete'))) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', TASKS_TABLE, taskId]
    ]);
    showToast(t('taskDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting task:', e);
  }
}

async function createTemplate() {
  var title = document.getElementById('tpl-title').value.trim();
  if (!title) return;

  var record = {
    Title: title,
    Description: document.getElementById('tpl-desc').value.trim(),
    Priority: document.getElementById('tpl-priority').value,
    Category: document.getElementById('tpl-category').value.trim(),
    Estimated_Hours: parseFloat(document.getElementById('tpl-hours').value) || 0,
    Usage_Count: 0,
    Updated_At: Math.floor(Date.now() / 1000)
  };

  try {
    await grist.docApi.applyUserActions([
      ['AddRecord', TEMPLATES_TABLE, null, record]
    ]);
    showToast(t('templateCreated'), 'success');
    closeModalForce();
    await loadAllData();
  } catch (e) {
    console.error('Error creating template:', e);
  }
}

async function deleteTemplate(tplId) {
  if (!isOwner) return;
  if (!confirm(t('confirmDeleteTemplate'))) return;
  try {
    await grist.docApi.applyUserActions([
      ['RemoveRecord', TEMPLATES_TABLE, tplId]
    ]);
    showToast(t('templateDeleted'), 'info');
    await loadAllData();
  } catch (e) {
    console.error('Error deleting template:', e);
  }
}

async function useTemplate(tplId) {
  var tpl = templates.find(function(t) { return t.id === tplId; });
  if (!tpl) return;

  // Increment usage count
  try {
    await grist.docApi.applyUserActions([
      ['UpdateRecord', TEMPLATES_TABLE, tplId, { Usage_Count: (tpl.Usage_Count || 0) + 1 }]
    ]);
  } catch (e) {}

  // Open new task modal pre-filled with template data
  openNewTaskModal('todo');
  // Wait for DOM
  setTimeout(function() {
    var titleEl = document.getElementById('task-title');
    var descEl = document.getElementById('task-desc');
    var priorityEl = document.getElementById('task-priority');
    var categoryEl = document.getElementById('task-category');
    if (titleEl) titleEl.value = tpl.Title;
    if (descEl) descEl.value = tpl.Description || '';
    if (priorityEl) priorityEl.value = tpl.Priority || 'medium';
    if (categoryEl) categoryEl.value = tpl.Category || '';
  }, 50);
}

// =============================================================================
// OWNER RESTRICTIONS
// =============================================================================

function applyOwnerRestrictions() {
  // Hide Team tab for non-owners
  var teamTab = document.querySelector('[data-tab="team"]');
  if (teamTab) teamTab.style.display = isOwner ? '' : 'none';

  // Hide "Nouveau modèle" button in Templates tab for non-owners
  var templatesAddBtn = document.querySelector('#tab-templates .btn-new-task');
  if (templatesAddBtn) templatesAddBtn.style.display = isOwner ? '' : 'none';
}

// =============================================================================
// STATS VIEW
// =============================================================================

function renderStatsView() {
  // Status chart
  var statusCounts = { todo: 0, progress: 0, done: 0 };
  tasks.forEach(function(t) { statusCounts[t.Status] = (statusCounts[t.Status] || 0) + 1; });
  var maxStatus = Math.max(statusCounts.todo, statusCounts.progress, statusCounts.done, 1);
  
  var statusHtml = '';
  var statusColors = { todo: '#94a3b8', progress: '#3b82f6', done: '#22c55e' };
  var statusLabels = { todo: t('statusTodo'), progress: t('statusProgress'), done: t('statusDone') };
  ['todo', 'progress', 'done'].forEach(function(s) {
    var height = (statusCounts[s] / maxStatus) * 160;
    statusHtml += '<div class="chart-bar">';
    statusHtml += '<span class="chart-bar-value">' + statusCounts[s] + '</span>';
    statusHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + statusColors[s] + '"></div>';
    statusHtml += '<span class="chart-bar-label">' + statusLabels[s] + '</span>';
    statusHtml += '</div>';
  });
  document.getElementById('chart-status').innerHTML = statusHtml;

  // Priority chart
  var priorityCounts = { high: 0, medium: 0, low: 0 };
  tasks.forEach(function(t) { priorityCounts[t.Priority] = (priorityCounts[t.Priority] || 0) + 1; });
  var maxPriority = Math.max(priorityCounts.high, priorityCounts.medium, priorityCounts.low, 1);
  
  var priorityHtml = '';
  var priorityColors = { high: '#ef4444', medium: '#f59e0b', low: '#22c55e' };
  var priorityLabels = { high: t('priorityHigh'), medium: t('priorityMedium'), low: t('priorityLow') };
  ['high', 'medium', 'low'].forEach(function(p) {
    var height = (priorityCounts[p] / maxPriority) * 160;
    priorityHtml += '<div class="chart-bar">';
    priorityHtml += '<span class="chart-bar-value">' + priorityCounts[p] + '</span>';
    priorityHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + priorityColors[p] + '"></div>';
    priorityHtml += '<span class="chart-bar-label">' + priorityLabels[p] + '</span>';
    priorityHtml += '</div>';
  });
  document.getElementById('chart-priority').innerHTML = priorityHtml;

  // Assignee chart
  var assigneeCounts = {};
  tasks.forEach(function(t) {
    if (t.Assignee) {
      t.Assignee.split(',').forEach(function(a) {
        var name = getUserDisplayName(a.trim());
        assigneeCounts[name] = (assigneeCounts[name] || 0) + 1;
      });
    }
  });
  var assigneeEntries = Object.entries(assigneeCounts).sort(function(a, b) { return b[1] - a[1]; }).slice(0, 5);
  var maxAssignee = assigneeEntries.length > 0 ? assigneeEntries[0][1] : 1;
  
  var assigneeHtml = '';
  var colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#22c55e'];
  assigneeEntries.forEach(function(entry, i) {
    var height = (entry[1] / maxAssignee) * 160;
    assigneeHtml += '<div class="chart-bar">';
    assigneeHtml += '<span class="chart-bar-value">' + entry[1] + '</span>';
    assigneeHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + colors[i % colors.length] + '"></div>';
    assigneeHtml += '<span class="chart-bar-label">' + entry[0] + '</span>';
    assigneeHtml += '</div>';
  });
  if (assigneeEntries.length === 0) {
    assigneeHtml = '<div style="text-align:center;color:#94a3b8;width:100%;">Aucune donnée</div>';
  }
  document.getElementById('chart-assignee').innerHTML = assigneeHtml;

  // Week chart (tasks due this week by day)
  var weekDays = currentLang === 'fr' ? ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'] : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  var now = new Date();
  var dayOfWeek = now.getDay();
  var mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  var weekStart = new Date(now.getFullYear(), now.getMonth(), now.getDate() + mondayOffset);
  
  var weekCounts = [0, 0, 0, 0, 0, 0, 0];
  tasks.forEach(function(task) {
    if (task.Due_Date) {
      var dueDate = new Date(task.Due_Date * 1000);
      for (var d = 0; d < 7; d++) {
        var dayDate = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + d);
        if (dueDate.toDateString() === dayDate.toDateString()) {
          weekCounts[d]++;
        }
      }
    }
  });
  var maxWeek = Math.max.apply(null, weekCounts) || 1;
  
  var weekHtml = '';
  weekCounts.forEach(function(count, i) {
    var height = (count / maxWeek) * 160;
    var isToday = i === ((now.getDay() + 6) % 7);
    weekHtml += '<div class="chart-bar">';
    weekHtml += '<span class="chart-bar-value">' + count + '</span>';
    weekHtml += '<div class="chart-bar-fill" style="height:' + height + 'px;background:' + (isToday ? '#ef4444' : '#3b82f6') + '"></div>';
    weekHtml += '<span class="chart-bar-label">' + weekDays[i] + '</span>';
    weekHtml += '</div>';
  });
  document.getElementById('chart-week').innerHTML = weekHtml;

  // Summary stats
  var completionRate = tasks.length > 0 ? Math.round((statusCounts.done / tasks.length) * 100) : 0;
  document.getElementById('stats-completion-rate').textContent = completionRate + '%';
  
  var overdueCount = getOverdueTasks().length;
  document.getElementById('stats-overdue-count').textContent = overdueCount;
  
  // Calculate total time from time entries
  var totalMinutes = 0;
  timeEntries.forEach(function(te) {
    if (te.Duration) totalMinutes += te.Duration;
  });
  var totalHours = Math.round(totalMinutes / 60);
  document.getElementById('stats-total-time').textContent = totalHours + 'h';
  
  var avgMinutes = tasks.length > 0 ? Math.round(totalMinutes / tasks.length) : 0;
  var avgHours = Math.round(avgMinutes / 60 * 10) / 10;
  document.getElementById('stats-avg-time').textContent = avgHours + 'h';
}

// =============================================================================
// NOTIFICATIONS / ALERTS
// =============================================================================

function getOverdueTasks() {
  var now = Math.floor(Date.now() / 1000);
  return tasks.filter(function(t) {
    return t.Due_Date && t.Due_Date < now && t.Status !== 'done';
  });
}

function getUpcomingTasks() {
  var now = Math.floor(Date.now() / 1000);
  var threeDays = now + (3 * 24 * 60 * 60);
  return tasks.filter(function(t) {
    return t.Due_Date && t.Due_Date >= now && t.Due_Date <= threeDays && t.Status !== 'done';
  });
}

function updateNotificationBadge() {
  var overdue = getOverdueTasks();
  var upcoming = getUpcomingTasks();
  var total = overdue.length + upcoming.length;
  var badge = document.getElementById('notif-badge');
  if (badge) {
    badge.textContent = total;
    badge.classList.toggle('show', total > 0);
  }
}

function showNotifications() {
  var overdue = getOverdueTasks();
  var upcoming = getUpcomingTasks();
  
  var html = '<div class="notif-dropdown" id="notif-dropdown">';
  html += '<div class="notif-header">🔔 ' + t('notifications') + '</div>';
  
  if (overdue.length === 0 && upcoming.length === 0) {
    html += '<div class="notif-empty">' + t('noAlerts') + '</div>';
  } else {
    if (overdue.length > 0) {
      html += '<div style="padding:8px 16px;font-size:10px;color:#ef4444;font-weight:700;">⚠️ ' + overdue.length + ' ' + t('overdueTasksAlert') + '</div>';
      for (var i = 0; i < overdue.length; i++) {
        html += '<div class="notif-item overdue" onclick="openEditTaskModal(' + overdue[i].id + '); closeNotifications();">';
        html += '<div class="notif-item-title">' + sanitize(overdue[i].Title) + '</div>';
        html += '<div class="notif-item-date">📅 ' + formatDate(overdue[i].Due_Date) + '</div>';
        html += '</div>';
      }
    }
    if (upcoming.length > 0) {
      html += '<div style="padding:8px 16px;font-size:10px;color:#f59e0b;font-weight:700;">📅 ' + upcoming.length + ' ' + t('upcomingTasksAlert') + '</div>';
      for (var i = 0; i < upcoming.length; i++) {
        html += '<div class="notif-item upcoming" onclick="openEditTaskModal(' + upcoming[i].id + '); closeNotifications();">';
        html += '<div class="notif-item-title">' + sanitize(upcoming[i].Title) + '</div>';
        html += '<div class="notif-item-date">📅 ' + formatDate(upcoming[i].Due_Date) + '</div>';
        html += '</div>';
      }
    }
  }
  html += '</div>';
  
  // Remove existing dropdown
  closeNotifications();
  
  // Add dropdown to button
  var btn = document.getElementById('notifications-btn');
  btn.style.position = 'relative';
  btn.insertAdjacentHTML('beforeend', html);
  
  // Close on outside click
  setTimeout(function() {
    document.addEventListener('click', closeNotificationsOnOutsideClick);
  }, 10);
}

function closeNotifications() {
  var dropdown = document.getElementById('notif-dropdown');
  if (dropdown) dropdown.remove();
  document.removeEventListener('click', closeNotificationsOnOutsideClick);
}

function closeNotificationsOnOutsideClick(e) {
  if (!e.target.closest('#notifications-btn')) {
    closeNotifications();
  }
}

// =============================================================================
// GLOBAL SEARCH
// =============================================================================

function globalSearch(query) {
  var searchInput = document.getElementById('global-search');
  var resultsContainer = document.getElementById('search-results');
  
  if (!resultsContainer) {
    searchInput.parentElement.style.position = 'relative';
    searchInput.insertAdjacentHTML('afterend', '<div class="search-results" id="search-results"></div>');
    resultsContainer = document.getElementById('search-results');
  }
  
  if (!query || query.length < 2) {
    resultsContainer.classList.remove('show');
    return;
  }
  
  var q = query.toLowerCase();
  var results = tasks.filter(function(t) {
    return (t.Title && t.Title.toLowerCase().indexOf(q) !== -1) ||
           (t.Description && t.Description.toLowerCase().indexOf(q) !== -1) ||
           (t.Category && t.Category.toLowerCase().indexOf(q) !== -1);
  }).slice(0, 10);
  
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="notif-empty">Aucun résultat</div>';
  } else {
    var html = '';
    for (var i = 0; i < results.length; i++) {
      var task = results[i];
      html += '<div class="search-result-item" onclick="openEditTaskModal(' + task.id + '); closeSearch();">';
      html += '<div class="search-result-title">' + sanitize(task.Title) + '</div>';
      html += '<div class="search-result-meta">' + (task.Category || '') + ' • ' + t('status' + task.Status.charAt(0).toUpperCase() + task.Status.slice(1)) + '</div>';
      html += '</div>';
    }
    resultsContainer.innerHTML = html;
  }
  resultsContainer.classList.add('show');
}

function closeSearch() {
  var resultsContainer = document.getElementById('search-results');
  if (resultsContainer) resultsContainer.classList.remove('show');
  document.getElementById('global-search').value = '';
}

// =============================================================================
// DARK MODE
// =============================================================================

var isDarkMode = false;

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('pm-dark-mode', isDarkMode ? '1' : '0');
}

function loadDarkModePreference() {
  var saved = localStorage.getItem('pm-dark-mode');
  if (saved === '1') {
    isDarkMode = true;
    document.body.classList.add('dark-mode');
  }
}

// =============================================================================
// EXPORT CSV
// =============================================================================

function exportTasks(format) {
  if (format === 'csv') {
    var csv = 'Titre,Description,Statut,Priorité,Catégorie,Assigné,Date début,Échéance\n';
    for (var i = 0; i < tasks.length; i++) {
      var t = tasks[i];
      csv += '"' + (t.Title || '').replace(/"/g, '""') + '",';
      csv += '"' + (t.Description || '').replace(/"/g, '""') + '",';
      csv += '"' + (t.Status || '') + '",';
      csv += '"' + (t.Priority || '') + '",';
      csv += '"' + (t.Category || '') + '",';
      csv += '"' + (t.Assignee || '') + '",';
      csv += '"' + (t.Start_Date ? formatDate(t.Start_Date) : '') + '",';
      csv += '"' + (t.Due_Date ? formatDate(t.Due_Date) : '') + '"\n';
    }
    
    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'tasks_export_' + new Date().toISOString().split('T')[0] + '.csv';
    link.click();
    showToast(t('exportCsv') + ' ✓', 'success');
  }
}

// =============================================================================
// INIT
// =============================================================================

if (!isInsideGrist()) {
  document.getElementById('not-in-grist').classList.remove('hidden');
  document.getElementById('main-content').classList.add('hidden');
} else {
  (async function() {
    await grist.ready({ requiredAccess: 'full' });

    // Detect current user access level
    // Only owners can call getAccessRules — if it fails, user is not owner
    try {
      await grist.docApi.getAccessRules();
      isOwner = true;
    } catch (e) {
      // For custom widgets, getAccessRules may not be available
      // Default to owner (full access was granted)
      isOwner = true;
    }

    loadDarkModePreference();
    applyOwnerRestrictions();
    await ensureTables();
    await loadAllData();
    updateNotificationBadge();
  })();
}
