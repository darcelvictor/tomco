<?php get_header();
/*
Template Name: archive-job
*/
?> 
   <section id="contentPage">
       <?php include 'template-content-archive.php';?>
        <div id="jobContent">
                <?php 
                $args = array( 'post_type' => 'job', 'posts_per_page' => -1 );
                $the_query = new WP_Query( $args ); 
                ?>
                <?php if ( $the_query->have_posts() ) : ?>
                    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                    <div class="entry-content shadow borderRadius">
                        <h2><?php the_title(); ?></h2>
                        <?php the_excerpt(); ?>
                        <a href="<?php the_permalink() ?>"><div><i class="fas fa-chevron-right"></div></i></a>
                    </div>
                    <?php endwhile; ?>
                    <?php wp_reset_postdata(); ?>
                    <?php else:  ?>
                <p><?php ( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>
        </div>
    </section>
<?php get_footer();?>
