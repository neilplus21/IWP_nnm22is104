document.addEventListener("DOMContentLoaded", function() {
    const game = localStorage.getItem('game');

    switch (game) {
        case 'slope_game':
            document.getElementById('game').src = "https://kdata1.com/2020/05/slope/";
            break;
        case 'pizza_tower':
            document.getElementById('game').src = "https://kdata1.com/2021/03/3527391/2.1/";
            break;
        case 'pac_man':
            document.getElementById('game').src = "https://pacman-30thanniversary.com/game/pacman/";
            break;
        case 'snow_rider':
            document.getElementById('game').src = "https://html5.gamedistribution.com/3b79a8537ebc414fb4f9672a9b8c68c8/?gd_sdk_referrer_url=https://slopegame.online/snow-rider-3d";
            break;
        case 'drift_boss':
            document.getElementById('game').src = "https://www.mathplayground.com/drift-boss-v3/index.html";
            break;
        case 'real_drive':
            document.getElementById('game').src = "https://app-155473.games.s3.yandex.net/155473/o121ckna3kx050cipsq8tzkmm89w8m20/index.html?app-id=155473&amp;is-united-page=1&amp;lang=vi#&amp;origin=https%3A%2F%2Fyandex.com&amp;yandexapp=false&amp;expBoxesCrypted=PRyhHFje3qS6KzTpo-9W1t2Z0CMFCtJbqeJdij0DcKKacIJbRlPr5MPGooe6L9FP&amp;experiments=%7B%22invalidate_games_cache_from%22%3A1654846446%2C%22homeland_currency_basket%22%3Atrue%2C%22update_excluded_categories%22%3Atrue%2C%22categories_to_exclude%22%3A%5B205%5D%2C%22adaptive_feed%22%3Atrue%2C%22update_games_turboapps_in_web%22%3Atrue%2C%22adv_sticky_banner%22%3Atrue%2C%22mix_editors_choice%22%3A0%2C%22dj_experiment_param%22%3A%225%22%2C%22google_gdpr%22%3Atrue%2C%22ux_feedback_box_solution_enabled%22%3Atrue%7D&amp;app-id=155473";
            break;
        case 'guess_num':
            document.getElementById('game').src = "game1.html";
            break;
        case 'click':
            document.getElementById('game').src = "game2.html";
            break;
        default:
            break;
    }
});

