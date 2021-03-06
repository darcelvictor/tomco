<?php get_header();
/*
Template Name: archive-team
*/
?> 
   <section id="contentPage">
	   <?php include 'template-content-archive.php';?>
	   <div id="CATTeam">
            <a class="Bttn grBttn" href="<?php the_field('link_button_1');?>">
                <?php the_field('text_button_1');?>
            </a>
	   </div>
	</section>
    <section id="teamContent">
   <div>
    <h2><?php the_field('advisors_title');?></h2>
       <ul class="gridTeam">
            <?php 
            $args = array( 'post_type' => 'advisor', 'posts_per_page' => -1,'orderby' => 'date', 'order'   => 'ASC' );
            $the_query = new WP_Query( $args ); 
            ?>
            <?php if ( $the_query->have_posts() ) : ?>
                        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <li class="partner">
                            <?php 
                                $image = get_field('image');
                                if( !empty( $image ) ): ?>
                                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                            <?php endif; ?>
                            <p class="first_name"><?php the_field('first_name');?> <span class="family_name"><?php the_field('last_name');?></span></p>
                            <p id="job"><?php the_field('job');?></p>
                            <a class="Bttn lkBttn" href="<?php the_field('linkedin_link');?>">
                            Linkedin <i class="fab fa-linkedin-in FontAwesome"></i>
                            </a>
                        </li>
                        <?php endwhile; ?>
		</ul>
		<?php wp_reset_postdata(); ?>
		<?php else:  ?>
		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>
    <div>
    <h2><?php the_field('expert_title');?></h2>
       <ul class="gridTeam">
            <?php 
            $args = array( 'post_type' => 'expert', 'posts_per_page' => -1,'orderby' => 'date', 'order'   => 'ASC' );
            $the_query = new WP_Query( $args ); 
            ?>
            <?php if ( $the_query->have_posts() ) : ?>
                        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                        <li class="partner">
                            <?php 
                                $image = get_field('image');
                                if( !empty( $image ) ): ?>
                                    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
                            <?php endif; ?>
                            <p class="first_name"><?php the_field('first_name');?> <span class="family_name"><?php the_field('last_name');?></span></p>
                            <p id="job"><?php the_field('job');?></p>
                            <a class="Bttn lkBttn" href="<?php the_field('linkedin_link');?>">
                            Linkedin <i class="fab fa-linkedin-in"></i>
                            </a>
                        </li>
                        <?php endwhile; ?>
		</ul>
		<?php wp_reset_postdata(); ?>
		<?php else:  ?>
		<p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
        <?php endif; ?>
    </div>
    </section>
<?php get_footer();?>
