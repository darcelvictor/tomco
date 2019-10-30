<?php
/*
* Change log-in logo
*/

function my_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/assets/img/Logo_ToMCo_Top-Manager-Council.png);
		height:65px;
		width:320px;
		background-size: 320px 76px;
		background-repeat: no-repeat;
        	padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

/*
* Change log-in link
*/

add_filter( 'login_headerurl', 'my_custom_login_url' );
function my_custom_login_url($url) {
    return home_url();
}

