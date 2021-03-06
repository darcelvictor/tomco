<?php
/**
 * Enqueue scripts and styles.
 */
function tomco_scripts() {
	wp_enqueue_style( 'tomco-style', get_stylesheet_uri() );
	
	//wp_register_style('font_lora', 'https://fonts.googleapis.com/css?family=Lora:400,700&display=swap', array(), null, 'all');
	wp_register_style('font_muli', 'https://fonts.googleapis.com/css?family=Muli:400,800&display=swap', array(), null, 'all');
	wp_register_style('fontAwesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), null, 'all');
	
    //wp_enqueue_style('font_lora');
	wp_enqueue_style('font_muli');
	wp_enqueue_style('fontAwesome');

	if( is_page( 36 ) ) {
		if ( ! wp_is_mobile() ) {
			wp_enqueue_script( 'particles.js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), '20151215', true );
			wp_enqueue_script( 'three.js', 'https://threejs.org/examples/js/libs/stats.min.js', array(), '20151215', true );
		}
		wp_enqueue_script( 'swiper.js', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js', array(), '20151215', true );
		wp_register_style('swiper', 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css', array(), null, 'all');
		wp_enqueue_style('swiper');
		}

	wp_enqueue_script( 'tomco-custom-scripts', get_template_directory_uri() . '/assets/js/custom.min.js', array('customize-preview'), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'tomco_scripts' );


// function load_js_assets() {
     
// }

// add_action('wp_enqueue_scripts', 'load_js_assets');

