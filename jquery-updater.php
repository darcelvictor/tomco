<?php
/**
 * Update jQuery
 */
function replace_core_jquery_version() {
    wp_deregister_script( 'jquery' );
    // Change the URL if you want to load a local copy of jQuery from your own server.
    wp_register_script( 'jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", array(), '3.4.1' );
}
add_action( 'wp_enqueue_scripts', 'replace_core_jquery_version' );
//add_action( 'admin_enqueue_scripts', 'replace_core_jquery_version' );
