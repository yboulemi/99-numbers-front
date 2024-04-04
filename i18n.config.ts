export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            profile: {
                title: "Profile",
                description: "Personal details and stats.",
                game_played: "Total number of games",
                game_won: "Number of games won",
                most_picked: "Most picked number",
                win_percentage: "Win percentage",
                no_game: "You haven't played any games yet.",
                logout: "Logout",
            },
        },
        fr: {
            profile: {
                title: "Profile",
                description: "Données personnelles et statistiques.",
                game_played: "Nombre total de parties",
                game_won: "Nombre total de parties gagnées",
                most_picked: "Numéro le plus choisi",
                win_percentage: "Pourcentage de victoire",
                no_game: "Vous n'avez encore joué à aucun jeu.",
                logout: "Déconnexion",
            },
        },
    },
}));
