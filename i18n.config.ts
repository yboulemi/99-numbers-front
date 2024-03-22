export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en: {
            play: {
                title: "So what's it gonna be boss ?",
                pick: "Submit Pick",
                players_left: "Players left:",
                come_later: "Come back later !",
                stats: "Results",
                legend: {
                    red: "Number picked by more than one player",
                    green: "Number picked by only one player",
                    white: "Number was not picked by any player",
                },
            },
            profile: {
                title: "Profile",
                description: "Personal details and stats.",
                username: "Username",
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
                sign_up: "Sign up",
            },
            register: {
                email_label: "Email address",
                password_label: "Password",
                username_label: "Username",
                confirm_password: "Confirm password",
                sign_up: "Sign up",
                passwords_not_matching: "Passwords do not match.",
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
            modal: {
                message:
                    "Seems like this is your first game ! Remember: Pick a number between 1 and 99, aiming to choose one that nobody else has picked !",
                goHome: "Read more before playing !",
                play: "Got it, I want to play !",
            },
            hero: {
                title: "Woopsie ! Looks like you're in a pickle !",
                description:
                    "You've been captured by the dangerous Stat Brothers. You have to play their game to escape.",
                rules: "The goal is simple: Pick a number between 1 and 99, aiming to choose one that nobody else has picked !",
                play: "Let's play it then !",
            },
            faq: {
                title: "Any question ?",
                items: {
                    goal: {
                        title: "Wait but... what's the game actually about??",
                        text: "Oh, it's pretty simple ! You just need to pick a number between 1 and 99, aiming to choose one that nobody else has picked in the current round. The twist? There are 100 players each round, and the goal is to be the only one with your specific number.",
                    },
                    frequency: {
                        title: "How often can I get in on the fun?",
                        text: "You can jump into a new round once every day! It’s set up this way to make each choice count and to keep the anticipation high for your next opportunity to play, let’s face it, if you’re anything like me and it were any other way, you’d spam games in the next 2 hours and never come back...",
                    },
                    signup: {
                        title: "Why do I gotta sign up for this",
                        text: "Signing up lets you keep an eye on how you’re doing over time. Plus, it keeps things fair by making sure everyone gets their single shot per day. I only ask an email address, so you could cheat the system and you know what ? I don’t blame you, but if you do, please try to wait for the result of one account to play on the other, let’s keep the competition fair shall we ?",
                    },
                    data_concern: {
                        title: "Wait, all this signing up... You're not collecting a bunch of my data, are you?",
                        text: "Oh, totally get where you’re coming from! The only reason for the sign-up is to keep your game stats in check and ensure everyone gets their fair play once a day. No sneaky business, no data collection for anything other than making your experience as fun and fair as possible. Plus, it gives you a neat way to track how you're doing over time.",
                    },
                    luck: {
                        title: "Is this all just down to luck, or what?",
                        text: "There's definitely a slice of luck, but there's more to it. Don’t you think people might gravitate towards certain numbers ? I do ! But I guess we’ll have to wait and see !",
                    },
                    compete: {
                        title: "Can I see how I stack up against others?",
                        text: "Nope ! Or to be more precise… not yet ! In a game such as this one, it would take a lot of data to truly evaluate your performance. Rest assured though that there are many exciting things in the works: Soon enough, you'll see how good your picks are based on how often they were picked by others. But I wouldn't want to influence you at first !",
                    },
                    fake: {
                        title: "Hold up, those stats nerds in the picture... they're not real, right? Kinda look AI-generated to me.",
                        text: "You've got a sharp eye! Yep, those characters are indeed a playful addition. Remember, it’s all in good fun, and the real challenge lies in the game of numbers, strategy, and daily play. Or is it ???",
                    },
                    play_now: {
                        title: "You sure talk a lot though, can I PLAY NOW ??",
                        text: "Sure you could just click here all along !",
                    },
                },
            },
        },
        fr: {
            play: {
                title: "Alors, vous avez choisi quoi ?",
                pick: "Soumettre le choix",
                players_left: "Joueurs restants:",
                come_later: "Revenez plus tard !",
                stats: "Wéééé les stats",
                legend: {
                    red: "Nombre choisi par plus d'un joueur",
                    green: "Nombre choisi par un seul joueur",
                    white: "Nombre non choisi",
                },
            },
            profile: {
                title: "Profil",
                description: "Données personnelles et statistiques.",
                username: "Nom d'utilisateur",
                game_played: "Nombre total de parties",
                game_won: "Nombre total de parties gagnées",
                most_picked: "Numéro le plus choisi",
                win_percentage: "Pourcentage de victoire",
                no_game: "Vous n'avez encore joué à aucun jeu.",
                logout: "Déconnexion",
            },
            register: {
                email_label: "Adresse e-mail",
                password_label: "Mot de passe",
                username_label: "Nom d'utilisateur",
                confirm_password: "Confirmer le mot de passe",
                sign_up: "S'inscrire",
                passwords_not_matching: "Les mots de passe ne correspondent pas.",
            },
            login: {
                alt_logo: "99 Numbers Logo",
                title: "Connectez-vous à votre compte",
                email_label: "Adresse e-mail",
                password_label: "Mot de passe",
                forgot_password: "Mot de passe oublié?",
                not_member: "Pas déjà membre?",
                sign_in: "Se connecter",
                sign_up: "Créer un compte",
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
            modal: {
                message:
                    "On dirait que c'est votre première partie ! Juste un rappel: Choisissez un nombre entre 1 et 99, en visant à sélectionner un nombre que personne d'autre n'a choisi !",
                goHome: "Voir plus d'infos avant de jouer !",
                play: "Compriiiis, je veux jouer !",
            },
            hero: {
                title: "Oups ! On dirait que vous êtes dans le pétrin !",
                description:
                    "Vous avez été capturé par les dangereux frères Stats. Vous devez jouer à leur jeu pour vous échapper.",
                rules: "Le but est simple: Choisissez un nombre entre 1 et 99, en visant à sélectionner un nombre que personne d'autre n'a choisi !",
                play: "Jouons alors !",
            },
            faq: {
                title: "Des questions ?",
                items: {
                    goal: {
                        title: "Attends mais... c’est quoi le jeu en fait ??",
                        text: "Oh, c'est assez simple ! Vous devez juste choisir un nombre entre 1 et 99, en visant à sélectionner un nombre que personne d'autre n'a choisi dans le tour actuel. Le hic ? Il y a 100 joueurs à chaque tour, et le but est d'être le seul avec votre nombre spécifique.",
                    },
                    frequency: {
                        title: "À quelle fréquence puis-je participer ?",
                        text: "Vous pouvez participer à un nouveau tour une fois par jour ! C'est organisé de cette façon pour que chaque choix compte et pour maintenir l'anticipation élevée pour votre prochaine opportunité de jouer. Soyons honnêtes, si ça se passait autrement et que vous êtes un tant soit peu comme moi, vous enchaîneriez les parties dans les prochaines 2 heures puis vous ne reviendriez jamais...",
                    },
                    signup: {
                        title: "Pourquoi dois-je m'inscrire pour ça ? ",
                        text: "S'inscrire vous permet de garder un œil sur vos performances au fil du temps. De plus, cela assure l'équité en vérifiant que chacun a sa chance une fois par jour. Je demande seulement une adresse email, donc vous pourriez créer un autre compte et franchement, je ne vous en voudrais pas, mais si vous le faites, essayez d'attendre le résultat d'un compte avant de jouer sur l'autre, gardons la compétition équitable, d'accord ?",
                    },
                    data_concern: {
                        title: "Attends, tout cet enregistrement... Vous ne collectez pas un tas de mes données, n'est-ce pas ?",
                        text: "Les seules raisons de l'inscription sont de suivre vos statistiques de jeu et de conserver vos résultats. Pas de magouilles, pas de collecte de données ! De plus, cela vous offre un moyen pratique de suivre vos performances au fil du temps.",
                    },
                    luck: {
                        title: "C'est juste une question de chance, ou quoi ?",
                        text: "Il y a certainement une part de chance, mais il y a plus que ça. Ne pensez-vous pas que les gens pourraient être attirés par certains nombres ? Moi si ! Mais je suppose qu'on verra bien !",
                    },
                    compete: {
                        title: "Puis-je voir comment je me compare aux autres ?",
                        text: "Non ! Ou pour être plus précis… pas encore ! Dans un jeu comme celui-ci, il faudrait beaucoup de données pour vraiment évaluer votre performance. Mais rassurez-vous, de nombreuses choses excitantes sont en préparation : assez tôt, vous verrez à quel point vos choix étaient bons en fonction de la fréquence à laquelle ils ont été choisis par les autres. Mais je ne voudrais pas vous influencer dès le début ! ",
                    },
                    fake: {
                        title: "Attends, ces nerds des stats sur la photo... ils ne sont pas réels, n'est-ce pas ? Ils ont l'air générés par IA.",
                        text: "Vous avez l'œil vif ! Oui, ces personnages sont effectivement un ajout ludique. Rappelez-vous, c'est tout pour le plaisir, et le véritable défi réside dans le jeu de nombres, la stratégie et le jeu quotidien. Ou est-ce le cas ???",
                    },
                    play_now: {
                        title: "Tu parles beaucoup dis donc, je peux JOUER MAINTENANT ??",
                        text: "Bien sûr ! Vous pouviez juste CLIQUER ICI depuis le début !",
                    },
                },
            },
        },
    },
}));
