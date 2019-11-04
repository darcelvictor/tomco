<?php
/**
 * Enqueue scripts and styles.
 */
function tomco_scripts() {
	wp_enqueue_style( 'tomco-style', get_stylesheet_uri() );
	
	wp_register_style('font_lora', 'https://fonts.googleapis.com/css?family=Lora:400,700&display=swap', array(), null, 'all');
	wp_register_style('font_muli', 'https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800&display=swap', array(), null, 'all');
	wp_register_style('swiper', 'https://unpkg.com/swiper/css/swiper.min.css', array(), null, 'all');
	wp_register_style('fontAwesome', 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', array(), null, 'all');
	
    wp_enqueue_style('font_lora');
	wp_enqueue_style('font_muli');
	wp_enqueue_style('swiper');
	wp_enqueue_style('fontAwesome');

	//wp_enqueue_script( 'tomco-navigation', get_template_directory_uri() . '/assets/js/custom/navigation.js', array(), '20151215', true );

	//wp_enqueue_script( 'tomco-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/custom/skip-link-focus-fix.js', array(), '20151215', true );
	
	// wp_enqueue_script( 'particles.js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), '20151215', true );
	// wp_enqueue_script( 'three.js', 'https://threejs.org/examples/js/libs/stats.min.js', array(), '20151215', true );
	// //wp_enqueue_script( 'easyPieChart.js', 'https://cdnjs.cloudflare.com/ajax/libs/easy-pie-chart/2.1.6/easypiechart.min.js', array(), '20151215', true );
	// wp_enqueue_script( 'Chart.js', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js', array(), '20151215', true );
	// wp_enqueue_script( 'swiper.js', 'https://unpkg.com/swiper/js/swiper.min.js', array(), '20151215', true );
	wp_enqueue_script( 'jQuery', 'https://code.jquery.com/jquery-3.4.1.slim.min.js', array(), '20151215', true );
	if( is_page( 36 ) ) {
		wp_enqueue_script( 'particles.js', 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', array(), '20151215', true );
		wp_enqueue_script( 'three.js', 'https://threejs.org/examples/js/libs/stats.min.js', array(), '20151215', true );
		wp_enqueue_script( 'Chart.js', 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js', array(), '20151215', true );
		wp_enqueue_script( 'swiper.js', 'https://unpkg.com/swiper/js/swiper.min.js', array(), '20151215', true );
		}

	wp_enqueue_script( 'tomco-custom-scripts', get_template_directory_uri() . '/assets/js/custom.min.js', array('customize-preview'), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'tomco_scripts' );


function load_js_assets() {
     
}

add_action('wp_enqueue_scripts', 'load_js_assets');

