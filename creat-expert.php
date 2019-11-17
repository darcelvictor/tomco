<?php
/**
 * Add expert Post type
 */
function expert_post_type() {
 
	// Set UI labels for Custom Post Type
		$labels = array(
			'name'                => _x( 'expert', 'Post Type General Name', 'tomco' ),
			'singular_name'       => _x( 'Expert', 'Post Type Singular Name', 'tomco' ),
			'menu_name'           => __( 'Experts', 'tomco' ),
			'all_items'           => __( 'All experts', 'tomco' ),
			'view_item'           => __( 'View Expert', 'tomco' ),
			'add_new_item'        => __( 'Add New Expert', 'tomco' ),
			'add_new'             => __( 'Add New', 'tomco' ),
			'edit_item'           => __( 'Edit Expert', 'tomco' ),
			'update_item'         => __( 'Update Expert', 'tomco' ),
			'search_items'        => __( 'Search Expert', 'tomco' ),
			'not_found'           => __( 'Not Found', 'tomco' ),
			'not_found_in_trash'  => __( 'Not found in Trash', 'tomco' ),
		);
		 
	// Set other options for Custom Post Type
		 
		$args = array(
			'label'               => __( 'expert', 'tomco' ),
			'menu_icon'	          => 'dashicons-groups',
			'description'         => __( 'ToMCo collaborators', 'tomco' ),
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
		register_post_type( 'expert', $args );
	 
	}

/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
	
add_action( 'init', 'expert_post_type', 0 );