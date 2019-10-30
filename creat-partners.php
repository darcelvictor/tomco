<?php
/**
 * Add Team Post type
 */
function team_post_type() {
 
	// Set UI labels for Custom Post Type
		$labels = array(
			'name'                => _x( 'team', 'Post Type General Name', 'tomco' ),
			'singular_name'       => _x( 'Collaborateur', 'Post Type Singular Name', 'tomco' ),
			'menu_name'           => __( 'team', 'tomco' ),
			'all_items'           => __( 'All team', 'tomco' ),
			'view_item'           => __( 'View Collaborateur', 'tomco' ),
			'add_new_item'        => __( 'Add New Collaborateur', 'tomco' ),
			'add_new'             => __( 'Add New', 'tomco' ),
			'edit_item'           => __( 'Edit Collaborateur', 'tomco' ),
			'update_item'         => __( 'Update Collaborateur', 'tomco' ),
			'search_items'        => __( 'Search Collaborateur', 'tomco' ),
			'not_found'           => __( 'Not Found', 'tomco' ),
			'not_found_in_trash'  => __( 'Not found in Trash', 'tomco' ),
		);
		 
	// Set other options for Custom Post Type
		 
		$args = array(
			'label'               => __( 'team', 'tomco' ),
			'menu_icon'	          => 'dashicons-businessman',
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
			'menu_position'       => 5,
			'can_export'          => true,
			'has_archive'         => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'capability_type'     => 'page',
		);
		 
		// Registering your Custom Post Type
		register_post_type( 'team', $args );
	 
	}

/* Hook into the 'init' action so that the function
* Containing our post type registration is not 
* unnecessarily executed. 
*/
	
add_action( 'init', 'team_post_type', 0 );