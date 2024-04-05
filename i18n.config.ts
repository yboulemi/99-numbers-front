export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            play: {
                title: "Welcome! Please pick a number between 1 and 99.",
                pick: "Submit Pick",
                stats: "Wéééé the stats",
                legend: {
                    red: "Number picked by more than one player",
                    green: "Number picked was picked by only one player",
                    white: "Number was not picked by any player",
                },
            },
            profile: {
                title: "Profile",
                description: "Personal details and stats.",
                username: "Full name",
                game_played: "Total number of games",
                game_won: "Number of games won",
                most_picked: "Most picked number",
                win_percentage: "Win percentage",
                no_game: "You haven't played any games yet.",
                logout: "Logout",
            },
            login: {
                alt_logo: "99 Numbers Logo",
                title: "Sign in to your account",
                email_label: "Email address",
                password_label: "Password",
                forgot_password: "Forgot password?",
                not_member: "Not a member?",
                sign_in: "Sign in",
            },
            layout: {
                header: {
                    alt_logo: "99 Numbers Logo",
                    play: "Play !",
                    sign_in: "Sign in !",
                    profile: "Profile",
                },
                footer: {
                    privacy_policy: "Privacy policy",
                    cookie_policy: "Cookie policy",
                    terms_of_service: "Terms of service",
                },
            },
        },
        fr: {
            play: {
                title: "Bienvenue ! Veuillez choisir un nombre entre 1 et 99.",
                pick: "Soumettre le choix",
                stats: "Wéééé les stats",
                legend: {
                    red: "Nombre choisi par plus d'un joueur",
                    green: "Nombre choisi par un seul joueur",
                    white: "Nombre non choisi par aucun joueur",
                },
            },
            profile: {
                title: "Profil",
                description: "Données personnelles et statistiques.",
                username: "Nom complet",
                game_played: "Nombre total de parties",
                game_won: "Nombre total de parties gagnées",
                most_picked: "Numéro le plus choisi",
                win_percentage: "Pourcentage de victoire",
                no_game: "Vous n'avez encore joué à aucun jeu.",
                logout: "Déconnexion",
            },
            login: {
                alt_logo: "99 Numbers Logo",
                title: "Connectez-vous à votre compte",
                email_label: "Adresse e-mail",
                password_label: "Mot de passe",
                forgot_password: "Mot de passe oublié?",
                not_member: "Pas déjà membre?",
                sign_in: "Se connecter",
            },
            layout: {
                header: {
                    alt_logo: "99 Numbers Logo",
                    play: "Jouer !",
                    sign_in: "Se connecter !",
                    profile: "Profil",
                },
                footer: {
                    privacy_policy: "Politique de confidentialité",
                    cookie_policy: "Politique en matière de cookies",
                    terms_of_service: "Conditions d'utilisation",
                },
            },
        },
    },
}));
