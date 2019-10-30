<?php
/**
 * Add Testimonial Post type
 */
function job_post_type() {
 
	// Set UI labels for Custom Post Type
		$labels = array(
			'name'                => _x( 'job', 'Post Type General Name', 'tomco' ),
			'singular_name'       => _x( 'Feed back', 'Post Type Singular Name', 'tomco' ),
			'menu_name'           => __( 'Job', 'tomco' ),
			'all_items'           => __( 'All feed back', 'tomco' ),
			'view_item'           => __( 'View feed back', 'tomco' ),
			'add_new_item'        => __( 'Add New Feed back', 'tomco' ),
			'add_new'             => __( 'Add New', 'tomco' ),
			'edit_item'           => __( 'Edit feed back', 'tomco' ),
			'update_item'         => __( 'Update feed back', 'tomco' ),
			'search_items'        => __( 'Search feed back', 'tomco' ),
			'not_found'           => __( 'Not Found', 'tomco' ),
			'not_found_in_trash'  => __( 'Not found in Trash', 'tomco' ),
		);
		 
	// Set other options for Custom Post Type
		 
		$args = array(
			'label'               => __( 'Job', 'tomco' ),
			'menu_icon'	          => 'dashicons-id',
			'description'         => __( 'ToMCo Job', 'tomco' ),
			'labels'              => $labels,
			// Features this CPT supports in Post Editor
			'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'custom-fields', ),
			// You can associate this CPT with a taxonomy or custom taxonomy. 
			'taxonomies'          => array( 'genres' ),
			/* A hierarchical CPT is like Pages and can have
			* Parent and child items. A non-hierarchical CPT
			* is like Posts.
			*/ 
			'hierarchical'        => false,
			'public'              => true,
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 6,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
		);
		 
		// Registering your Custom Post Type
		register_post_type( 'job', $args );
	 
	}
	 
	/* Hook into the 'init' action so that the function
	* Containing our post type registration is not 
	* unnecessarily executed. 
	*/
	 
	add_action( 'init', 'job_post_type', 0 );

