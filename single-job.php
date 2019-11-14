<?php get_header();?>



<div class="entry-content">
			<?php
				the_content();

				wp_link_pages( array(
					'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'storeone' ),
					'after'  => '</div>',
				) );
			?>
<?php get_footer();?>